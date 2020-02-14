<template>
	<div class="login-view">
		<h1> {{ message }} </h1>
		<div class="userform-container">
			<form
				@submit.prevent=""
				class="userform"
			>
				<input
					type="text"
					class="email"
					v-model="authInput.email"
				>
				<input
					type="text"
					class="password"
					v-model="authInput.password"
				>
				<div class="button-container">
					<button
						class="login-button"
						@click="login"
					>Login</button>
					<button
						class="googleLogin-button"
						@click="googleLogin"
					>Login with Google</button>
					<button
						class="logout-button"
						@click="logout"
					>Log Out</button>
					<button
						class="signup-button"
						@click="signup"
					>Sign up</button>
				</div>
			</form>
		</div>

	</div>
</template>

<script>
	import EventBus from "./eventBus.js";
	import * as firebase from "firebase";

	export default {
		name: "LoginView",
		components: {},
		props: [],
		data() {
			return {
				message: "Login Page",
				googleDisplayName: "",
				authInput: {
					email: "",
					password: ""
				}
			};
		},

		methods: {
			login() {
				const auth = firebase.auth();
				const emailInput = document.querySelector(".email").value;
				const passwordInput = document.querySelector(".password").value;

				auth
					.signInWithEmailAndPassword(emailInput, passwordInput)
					.catch(err => console.log(err));
			},

			googleLogin() {
				const auth = firebase.auth();
				const googleProvider = new firebase.auth.GoogleAuthProvider();
				googleProvider.addScope("profile");
				googleProvider.addScope("email");

				return auth.signInWithPopup(googleProvider).catch(err => {
					console.log("google sign in error", err);
				});
			},
			logout() {
				const auth = firebase.auth();
				auth.signOut();
			},
			signup() {
				const auth = firebase.auth();
				const emailInput = document.querySelector(".email").value;
				const passwordInput = document.querySelector(".password").value;

				auth
					.createUserWithEmailAndPassword(emailInput, passwordInput)
					.catch(err => console.log(err));

				//!Use the below instead of .then, since promise fires once, where authStatusChange is realtime
			},
			listenForAuthChange() {
				const auth = firebase.auth();
				// const firebaseUser = auth.currentUser;
				auth.onAuthStateChanged(firebaseUser => {
					if (firebaseUser) {
						firebaseUser.providerData.forEach(profile => {
							this.googleDisplayName = profile.displayName;
							// console.log("Sign-in provider: " + profile.providerId);
							// console.log("  Provider-specific UID: " + profile.uid);
							// console.log("  Name: " + profile.displayName);
							// console.log("  Email: " + profile.email);
							// console.log("  Photo URL: " + profile.photoURL);
						});
						console.log(firebaseUser);
					} else {
							this.googleDisplayName = '';
                        console.log("not logged in");
					// EventBus.$emit("googleLogin", this.googleDisplayName);

					}
					EventBus.$emit("googleLogin", this.googleDisplayName);
				});
			}
		},
		computed: {},
		watch: {},

		created() {},
		mounted() {
			this.listenForAuthChange();
		},
		updated() {},
		destroyed() {}
	};
</script>

<style scoped>
	:root {
		--mainRed: #a04650;
		--mainBlue: #284b78;
		--transparentBlue: #c8d6f8b6;
		--mainPurple: #9c3a5f;
		--lightPurple: #ac89ac;
		--fadedPurple: #bba4bb;
		--mainWhite: #fffffa;
	}
	.login-view {
		box-sizing: border-box;
		display: grid;
		grid-template-rows: 1fr 4fr;
		background: var(--mainBlue);
		border: 1px solid rgba(255, 255, 255, 0);
		border-radius: 0px 0px 5px 5px;
		width: 100%;
	}
	.userform-container {
		box-sizing: border-box;
		padding: 15px;
		margin: 0px auto;
	}
	.userform {
		box-sizing: border-box;
		display: grid;
		gap: 15px;
	}
	.button-container {
		display: flex;
	}
	.button-container > button {
		margin: 0px 2px;
	}
</style>