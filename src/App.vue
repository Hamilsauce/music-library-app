<template>
	<div id="app">
		<header class="assistantContainer" v-if="headerDisplayState === true">
			<h6 class="assistant">{{ assistantMessage }}</h6>
		</header>
		<div class="app-shell">
			<div class="shell-head">
				<div class="header header1">
					<h1>
						<div class="logo1">ham</div>
						<div class="logo2">RADIO</div>
					</h1>
				</div>
				<div class="header header2">
					<label class="header2-label">Search for a tune</label>
					<div class="header-button-container">
						<form class="header-form" @submit.prevent="handleSubmit">
							<input
								type="text"
								v-model="filterInput"
								@click="selectTextOnClick"
								name="filter-input"
								class="filter-input"
							/>
							<!-- TODO Hiding sort option until ready to do something with it
							<div class="sort-cell">
								<label for="select-sort">Sort By:</label>
								<select
									v-model="sortCriteria"
									class="select-sort"
								>
									<option value="songTitle">songTitle</option>
									<option value="Genre">Genre</option>
									<option value="Likes">Likes</option>
									<option value="Plays">Plays</option>
								</select>
							</div>-->
						</form>
					</div>
				</div>
			</div>
			<div class="shell-body">
				<transition name="fade">
					<ToolBar class="toolbar"></ToolBar>
				</transition>
				<div class="body-row">
					<router-view :filterInput="filterInput" :songs="songs"></router-view>
					<transition name="fade">
						<Sidebar :sidebarDisplayState="sidebarDisplayState"></Sidebar>
					</transition>
				</div>
			</div>
		</div>
		<!-- <div
			class="hiddenMessage"
			v-if="headerDisplayState === false"
			@click="toggleHeader"
			style="text-align: center; position: relative;"
		>Show Header</div>-->
	</div>
</template>
<script>
import ToolBar from "./components/ToolBar";
import Sidebar from "./components/Sidebar";
import EventBus from "./components/eventBus.js";
import * as firebase from "firebase";

export default {
	name: "app",
	components: {
		ToolBar,
		Sidebar
	},
	props: {},
	data() {
		return {
			ebRun: 0,
			headerDisplayState: true,
			filterClickCount: 0,
			sidebarDisplayState: false,
			assistantMessage: "Select a tile to listen.",
			sortCriteria: "",
			filterInput: "",
			googleDisplayName: "",
			userAuthData: {
				email: "",
				password: ""
			},
			CellData: [
				{
					elementId: "",
					title: "",
					subject: "",
					date: ""
				}
			],
			gridCell: {
				id: null,
				name: "",
				content: "",
				markup: ""
			},
			songs: []
		};
	},
	methods: {
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
					this.googleDisplayName = "";
					console.log("not logged in");
					// EventBus.$emit("googleLogin", this.googleDisplayName);
				}
				EventBus.$emit("googleLogin", this.googleDisplayName);
			});
		},
		initializeData() {
			const dbRef = firebase.database().ref("songs");
			dbRef.on("value", snap => {
				this.songs = Object.values(snap.val()).sort((a, b) => {
					if (a.id > b.id) {
						return -1;
					} else if (a.id < b.id) {
						return 1;
					} else {
						return 0;
					}
				});
			});
			EventBus.$emit("dataLoad", this.songs);
		},
		toggleHeader() {
			this.headerDisplayState = !this.headerDisplayState;
		},
		handleFilterInput() {
			this.filterClickCount < 2
				? (this.filterClickCount = this.filterClickCount + 1)
				: (this.filterClickCount = this.filterClickCount);

			if (this.filterClickCount > 1) {
				this.filterInput = "";
				this.filterClickCount = 0;
				return;
			}
		},
		listenForActiveSong() {
			EventBus.$on("songActivated", songData => {
				let activeSongName = songData[0];

				let songObj = this.songs.find(song => {
					return song.songTitle === activeSongName;
				});
				songObj.plays++;
				this.saveToFirebase(songObj);
			});
		},
		saveToFirebase(song) {
			firebase
				.database()
				.ref("songs/" + song.id)
				.update(song);
		},
		addNewSong() {
			EventBus.$on("newSongSubmitted", newSong => {
				const newSongId = this.songs[0].id + 1;
				// console.log(this.songs);

				newSong.id = newSongId;

				this.songs.push(newSong);
				this.saveToFirebase(newSong);
			});
		},
		appDeleteSong() {
			EventBus.$on("deleteSong", targetSong => {
				const songIndex = this.songs.findIndex(song => {
					return song.id == targetSong.id;
				});
				console.log(songIndex);
				let deleteRef = firebase.database().ref("songs/" + targetSong.id);
				console.log(deleteRef);

				deleteRef
					.remove()
					.then(() => {
						console.log("Remove succeeded.");
					})
					.catch(error => {
						console.log("Remove failed: " + error.message);
					});
				// this.songs.splice(songIndex, 1);
				// firebase
				// 	.database()
				// 	.ref("songs/" + song.id)
				// 	.update(song);
				// this.saveToFirebase(this.songs);
			});
		},
		loginSubmitted() {
			EventBus.$on("submittedLogin", loginData => {
				this.userAuthData = loginData;
			});
			EventBus.$on("googleLogin", loginData => {
				this.googleDisplayName = loginData;
				this.makeAssistantTalk();
			});
		},
		makeAssistantTalk() {
			setTimeout(() => {
				if (this.googleDisplayName) {
					this.assistantMessage = `Signed in as ${this.googleDisplayName}`;
				} else {
					this.assistantMessage = `Not signed in.`;
				}
			}, 3000);
		},
		selectTextOnClick(e) {
			const elem = e.target;
			elem.focus();
			elem.setSelectionRange(0, elem.value.length);

			// elem.selectText();
		}
	},
	created() {
		this.listenForAuthChange();
	},
	mounted() {
		this.initializeData();
		this.listenForActiveSong();
		this.addNewSong();
		this.loginSubmitted();
		this.appDeleteSong();
	}
};
</script>
<style>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.sort-cell {
	grid-column: span 1;
	display: flex;
	flex-direction: row;
	justify-content: end;
	font-size: 0.9em;
	width: fit-content;
	margin-top: 4px;
	padding-right: 5px;
	padding-left: 5px;
	padding-top: 1px;
	padding-bottom: 2px;
	background: solid rgb(158, 51, 51);
	background: solid #bc484e;
	color: rgba(250, 236, 238, 0.85);
	border-bottom: 1px solid rgba(199, 176, 176, 0.356);
	box-shadow: 0px 0px 5px 1px inset rgba(144, 70, 73, 0.548);
}
.select-sort {
	min-width: 80px;
	max-width: fit-content;
	text-align: center;
	padding-bottom: 1px;
	padding: left 5px;
	margin: 0px 0px 0px 6px;
	box-sizing: border-box;
	color: rgba(250, 236, 238, 1);
	font-size: 1em;
	border: 1px solid rgba(139, 39, 39, 0);
	opacity: 0.85;
	border-radius: 3px;
}

.fade-enter {
	opacity: 0;
	width: 0;
	height: 0;
}
.fade-enter-active {
	transition: opacity 0.5s, width 0.5s, hieght 0.5s;
}
.fade-leave {
	opacity: 1;
	width: 100%;
	height: 100%;
}
.fade-leave-active {
	transition: opacity 1s, width 1s;
	opacity: 0;
	width: 0;
	height: 0;
}
.img {
	background: black;
	width: 100px;
	height: 100px;
}
* {
	--mainRed: #bc484e;
	--mainBlue: rgb(48, 71, 122);
	--transparentBlue: #e0e7f771;
	--mainPurple: #af3076;
	--lightPurple: #ac73ac;
	--fadedPurple: #bba4bb;
	--mainWhite: #fffffa;
	touch-action: manipulation;
}

html {
	box-sizing: border-box;
	margin: 0;
	padding-top: 0px;
	height: 100%;
	background: rgba(54, 46, 121, 0.705);
	background: rgba(46, 60, 121, 0.603);
	box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.664);
}
body {
	box-sizing: border-box;
	margin: 0;
	height: 100%;
	height: 100vh;
	padding: 0;
	background: rgba(54, 46, 121, 0.705);
	box-shadow: 0px 0px 1000px 40px inset rgba(22, 21, 95, 0.664);
}

#app {
	box-sizing: content-box;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	height: fit-content;
	padding: 0px 0px 10px 0px;
	height: 100%;
	margin: 0;
	line-height: 1.6;
	text-align: center;
	font-family: "Montserrat", sans-serif;
	font-size: 1rem;
	font-weight: 500;
	color: rgb(255, 255, 255);
	overflow: hidden;
}
.app-shell {
	box-sizing: border-box;
	max-width: 750px;
	width: 100%;
	margin: auto;
	margin-top: 0px;
	padding: 0px 0px 20px 10px;
	border: 2px solid var(--transparentBlue);
	border-radius: 15px;
	background: var(--mainRed);
	box-shadow: 0px 0px 100px 1px rgba(25, 25, 39, 0.767);
	overflow: hidden;
}

.header1 {
	margin: 0px;
}
h1 {
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin: auto;
	line-height: 0.85;
}
.logo1 {
	text-align: right;
	padding-left: 30px;
	color: rgba(37, 37, 37, 0.829);
	font-size: 0.9em;
	letter-spacing: 1px;
	font-weight: 600;
}
.logo2 {
	color: rgba(240, 240, 240, 0.945);
	margin-top: 0px;
	padding-left: 5px;
	font-weight: 700;
	letter-spacing: 1px;
}
.shell-body {
	box-sizing: border-box;
	height: 100%;
	border-radius: 15px 15px;
}

header {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0px 20px;
	border-radius: 8px;
}

.assistant {
	/* margin: 5px auto 0px auto; */
	padding: 0;
	color: rgba(255, 255, 255, 0.822);
	margin: 0;
}

i:active {
	box-shadow: 3px 0px 3px 2px rgba(76, 76, 77, 0.164);
	background: rgba(255, 255, 255, 0.466);
	color: var(--mainRed);
}

.MainGrid {
	box-sizing: border-box;
	max-height: 560px;
	width: 100%;
	border: 1px solid var(--transparentBlue);
	overflow: auto;
	touch-action: manipulation;
}
.newSongPage {
	overflow: auto;
}

.body-row {
	display: flex;
	border-radius: 10px 10px;
	height: 515px;
}

.shell-head {
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 6fr 9fr 1fr;
	justify-content: center;
	background: var(--mainRed);
	grid-column: content-start / span 4;
	/* min-height: 100px; */
	padding: 10px 5px 0px 5px;
	border-radius: 5px;
	padding-right: 0px;
	touch-action: manipulation;
}
.header {
	margin: 0;
	box-sizing: border-box;
	background: var(--mainRed);
	padding: 0px;
	border-radius: 3px;
	touch-action: manipulation;
	height: fit-contentt;
}

.header1 {
	margin: 0;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	text-align: left;
	font-size: 1.2em;
	margin-right: 10px;
	font-weight: 800;
	user-select: none;
	width: fit-content;
	/* height: max-content; */
}

.header-button-container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: fit-content;
	width: fit-content;
	margin: 0px auto;
	text-align: center;
}

.filter-input {
	margin-bottom: 5px;
	box-sizing: border-box;
	width: 100%;
	height: 25px;
	border-radius: 5px;
	border: 1px solid var(--transparentBlue);
	padding: 3px;
	padding-left: 6px;
	margin: auto;
	margin-right: 5px;
	grid-area: input;
	max-width: 170px;
	font-size: 1em;
	touch-action: manipulation;
	outline: none;
	opacity: 0.85;
}

.header2-label {
	box-sizing: border-box;
	grid-area: hText;
	margin-bottom: 3px;
	padding-bottom: 5px;
	margin: 0px auto 0px auto;
	opacity: 0.85;
	text-align: center;
}

.header2 {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	touch-action: manipulation;
}
.messageOut {
	margin: 0px;
}
.header-form {
	display: flex;
	justify-content: center;
	flex-direction: column;
	touch-action: manipulation;
	padding: 0px 0px 0px 0px;
}

a {
	color: hsl(194, 60%, 43%);
}

@media screen and (max-width: 450px) {
	html {
		padding: 0px;
	}
	header {
		padding: 0px 0px 5px 0px;
		margin: 0;
		justify-content: space-around;
	}

	#app {
		padding: 0px 0px 0px 0px;
	}
	.MainGrid {
		box-sizing: border-box;
		overflow: auto;
		border-radius: 5px;
		height: 140vw;
		border-radius: 5px 5px;
	}

	.logo1 {
		text-align: right;
		padding-left: 30px;
		color: rgba(37, 37, 37, 0.829);
		letter-spacing: 8px;
	}
	.logo2 {
		color: rgb(216, 216, 216);
		margin-top: 0px;
		padding-left: 0px;
	}
	.app-shell {
		max-width: 100vw;
		/* height: 175vw; */
		height: fit-content;
		padding: 0px 0px 15px 8px;
		border-radius: 5px 5px 15px 15px;
	}
	.filter-input {
		margin-bottom: 5px;
		max-width: 160px;
	}
	.shell-body {
		overflow: hidden;
		/* height: 145vw; */
	}
	.body-row {
		overflow: hidden;
	}

	.shell-head {
		display: grid;
		grid-template-columns: 4fr 8fr 10px;
		font-size: 0.9em;
	}

	.header {
		padding: 2vw 1.5vw;
		border-radius: 3px;
		touch-action: manipulation;
	}

	.header2 {
		padding: 0;
		flex-direction: column;
	}

	.header2-label {
		margin: auto;
		margin-bottom: 4px;
		margin-top: 2px;
		padding: 0px 0px;
	}

	.header1 {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 0px;
		padding-left: 10px;
	}

	.filter-input {
		margin: auto;
		touch-action: manipulation;
	}

	.hiddenMessage {
		left: 75%;
		font-size: 0.9em;
		width: fit-content;
	}
}
</style>
