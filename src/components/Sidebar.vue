<template>
	<div class="sidebar" @mouseleave="onClickOutside">
		<div class="sidebar-container2">
			<transition name="fade">
				<div
					class="sidebarShown"
					:style="{ width: sidebarDisplayState === true ? '150px' : '0px' }"
					:class="{ sideBarDisable: disableState }"
					id="sidebar-div"
					v-click-outside="onClickOutside"
				>
					<div class="links" :style="{ width: sidebarDisplayState === true ? '150px' : '0px' }">
						<h3>Nav</h3>
						<div class="linkItem" @click="toggleSidebar">
							<router-link class="routerLink" to="/">Library</router-link>
						</div>
						<div class="linkItem" @click="toggleSidebar">
							<router-link class="routerLink" to="/newsong">New Song</router-link>
						</div>
						<div class="linkItem" @click="toggleSidebar">
							<router-link to="/loginview" class="routerLink">Login</router-link>
						</div>
						<div class="linkItem" @click="toggleSidebar">
							<router-link to="/About" class="routerLink">About</router-link>
						</div>

						<div class="github-link linkItem">
							<a href="https://github.com/Hamilsauce">github</a>
						</div>
					</div>
				</div>
			</transition>
		</div>
		<div class="sidebar-container" @click="toggleSidebar" title="Click to expand navigation!">
			<!-- toggle arrow icons -->
			<i
				v-show="sidebarDisplayState === false"
				class="fas fa-angle-double-left sidebar-toggle"
				:class="{ toggleClicked: toggleClicked }"
				@click="!sidebarDisplayState"
			></i>
			<i
				v-show="sidebarDisplayState === true"
				:class="{ toggleClicked: toggleClicked }"
				class="fas fa-angle-double-right sidebar-toggle"
				@click="!sidebarDisplayState"
			></i>
		</div>
	</div>
</template>

<script>
import vClickOutside from "v-click-outside";
import EventBus from "./eventBus";
export default {
	components: {},
	directives: {
		clickOutside: vClickOutside.directive
	},
	props: {},
	data() {
		return {
			disableState: false /* not currently used, intended to prevent expanding sidebar when song modal is displayed  */,
			sidebarDisplayState: false,
			toggleClicked: false /* for toggle button active indications  */,
			userAuthData: {
				email: "",
				password: ""
			}
		};
	},

	methods: {
		disableForDimmer() {
			EventBus.$on("dimmerActive", () => {
				this.disableState = true;
			});
		},

		toggleSidebar() {
			this.toggleClicked = true;

			setTimeout(() => {
				this.sidebarDisplayState = !this.sidebarDisplayState;
				this.toggleClicked = false;
			}, 425);
		},
		onClickOutside(e) {
			let event = e.type;
			if (event === "mouseleave") {
				setTimeout(() => {
					if (this.sidebarDisplayState === true && this.toggleClicked === false) {
						this.sidebarDisplayState = false;
					}
				}, 200);
			} else if (event === "click") {
				setTimeout(() => {
					if (this.sidebarDisplayState === true && this.toggleClicked === false) {
						this.sidebarDisplayState = false;
					}
				}, 200);
			}
		},
		peepSidebar() {
			/* flashes sidebar at page load  */
			setTimeout(() => {
				this.toggleSidebar();
				setTimeout(() => {
					this.toggleSidebar();
				}, 700);
			}, 1000);
		}
	},
	computed: {},
	watch: {},

	created() {},
	mounted() {
		this.disableForDimmer();
		this.peepSidebar();
	},
	updated() {},
	destroyed() {}
};
</script>

<style scoped>
.fade-enter {
	opacity: 0;
	width: 0;
}
.fade-enter-active {
	transition: opacity 0.5s, width 0.5s;
}
.fade-leave {
	opacity: 1;
	width: 100%;
}
.fade-leave-active {
	transition: opacity 1s, width 1s;
	opacity: 0;
	width: 0;
}
* {
	--mainRed: #bc484e;
	--mainBlue: #284b78;
	--transparentBlue: #e0e7f771;
	--mainPurple: #9c3a5f;
	--lightPurple: #ac73ac;
	--fadedPurple: #bba4bb;
	--mainWhite: #fffffa;
	touch-action: manipulation;
}
h3 {
	padding: 5px 0px 0px 10px;
	margin: 5px auto 10px 5px;
	border-bottom: 1px solid rgba(185, 136, 136, 0.527);
	color: rgba(255, 255, 255, 0.568);
	font-size: 0.9em;
	text-align: left;
}

.sidebar {
	display: flex;
	flex-direction: row;
	padding-left: 1px;
	justify-content: flex-end;
	z-index: 5;
}
.sidebar-container2 {
	display: flex;
	flex-direction: row;
	padding-left: 1px;
	justify-content: flex-end;
	z-index: 5;
}

.sidebarShown {
	box-sizing: border-box;

	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	/* height: 525px; */
	height: 100%;
	width: 0px;
	padding-top: 5px;
	margin: 0px;
	background: var(--mainRed);
	touch-action: manipulation;
	overflow: hidden;
	transition: 0.5s;
	box-shadow: -6px 3px 5px 1px rgba(78, 26, 31, 0.226);
}
.sidebar-toggle {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0px;
	margin-bottom: 50px;
	margin-left: 3px;
	padding: 20px 0px 20px 3px;
	border-radius: 50% 0px 0px 50%;
	border: 1px solid #d5dae0ad;
	border-left: 1px solid #eef0f363;
	border-right: 0px solid #284b785d;
	background: rgba(255, 255, 255, 0.5);
	box-shadow: 2px 0px 10px 1px rgba(63, 63, 63, 0.5);
	transition: 0.4s ease;
}
.toggleClicked {
	background: rgba(255, 255, 255, 0.7);
	color: #1e3c64a2;
	font-size: 1em;
	margin: 0px 0px 50px 3px;
	padding: 10px 0px 10px 3px;
	border-right: 0px solid #284b7800;
	border-left: 1px solid #eef0f35e;
	border-radius: 65% 0px 0px 65%;
	box-shadow: 1px 0px 9px 1px rgba(53, 36, 36, 0.274);

	-webkit-tap-highlight-color: transparent;
}
.sidebar-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0;

	margin: 0px;
	margin-bottom: 40px;
	text-align: left;
	color: #9c2d3a;
	font-size: 1.1em;
	cursor: pointer;
	border-radius: 75% 0px 0px 75%;
	transition: 0.2s;
	-webkit-tap-highlight-color: transparent;
}
.disableState {
	transition: 0.5s;
	width: 0px;
}

.routerLink {
	color: rgba(255, 255, 255, 0.692);
	text-decoration: none;
}
.links {
	padding: 5px 15px 5px 0px;
	width: 0px;
	height: fit-content;
	text-align: right;
	font-size: 1.1em;
	letter-spacing: 0.1em;
}
.linkItem {
	padding: 2px 5px 10px 5px;
	margin: 5px 0px 5px 5px;
	border-radius: 15px;
	transition: 0.4s;
}
.linkItem:hover {
	color: var(--mainRed);
	background: rgba(255, 255, 255, 0.425);
	border-radius: 15px;
}
.linkItem:active {
	color: var(--mainRed);
}
.routerLink:hover {
	color: var(--mainRed);
	font-weight: bold;
}
.routerLink:active {
	color: var(--mainRed);
	font-weight: bold;
}

.github-link {
	margin-top: 30px;
	color: rgba(255, 255, 255, 0.637);
	text-decoration: none;
}
.github-link > a {
	color: rgba(255, 255, 255, 0.637);
	text-decoration: none;
}
/*
	* media screen-palooza needed for positioning sidebar correctly (absolute positioned...need better way)
	*/
/* @media screen and (min-width: 1025px) {
		.sidebarShown {
			right: 28vw;
		}
	}
	@media screen and (max-width: 1025px) {
		.sidebarShown {
			right: 15vw;
		}
	}
	@media screen and (max-width: 769px) {
		.sidebarShown {
			right: 3vw;
			height: 475px;
		}
	}
	@media screen and (max-width: 400px) {
		.sidebarShown {
			right: 19px;
			height: 470px;
		}
	} */
/* @media screen and (min-height: 730px) {
		.sidebarShown {
			right: 19px;
			height: 545px;
			border-radius: 10px 0px 0px 90%;
		}
	} */
</style>