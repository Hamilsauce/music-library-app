<template>
	<div id="app">
		<header v-if="headerDisplayState === true">
			<h4 class="seahag">SEAHAG enterprises</h4>
		</header>
		<div class="app-shell">
			<div class="shell-head">
				<div class="header header1">
					<h1>music GUY</h1>
				</div>
				<div class="header header2">
					<label class="header2-label">inputs in here like a boss</label>
					<div class="header-button-container">
						<form class="header-form">
							<input
								type="text"
								v-model="userInput"
								@change="handleClick()"
								@focus="handleClick('focus')"
								@blur="handleClick('blur')"
								name="filter-input"
								class="filter-input"
							/>
							<i class="fas fa-check" v-show="submitDisplayState === true" @click="handleSubmit"></i>
						</form>
					</div>
				</div>
				<div class="sidebar-toggle">
					<span>
						<i @click="toggleSidebar" class="fas fa-angle-double-left sidebar-toggle"></i>
					</span>
				</div>
			</div>
	<transition name="fade">
			<ToolBar></ToolBar>
			</transition>
			<div class="body-row">
			<div class="body-flex">
				<!-- <MainGrid v-bind:songData="songs" msg="Welcome to Your Vue.js App" /> -->

				<router-view :userInput="userInput" ></router-view>
			</div>
			<transition name="fade">
			<div v-show="sidebarDisplayState === true" id="sidebar-div" class="sidebarShown">
			<!-- <div :class="{ sidebarShown: sidebarDisplayState} " id="sidebar-div" class="sidebarHidden"> -->
				<h4>Nav</h4>
				<div class="links" @click="initializeData">
					<div class="linkItem">
						<router-link class="routerLink" to="/">Library</router-link>
						<!-- <router-link to="/" class="routerLink" params { :userInput="userInput" }   >Library</router-link> -->
					</div>
					<div class="linkItem">
						<router-link to="/About" class="routerLink">About</router-link>
					</div>
				</div>
			</div>
			</transition>
				</div>
		</div>
		<div
			class="hiddenMessage"
			v-if="headerDisplayState === false"
			@click="toggleHeader"
			style="text-align: center; position: relative;"
		>Show Header</div>
	</div>
</template>

<script>
	import ToolBar from "./components/ToolBar";
	import EventBus from "./components/eventBus.js";
	import songList from "../data/SongData.js";

	export default {
		name: "app",
		components: {
			ToolBar
		},
		props: {},
		data() {
			return {
				gridCell: {
					id: null,
					name: "",
					content: "",
					markup: ""
				},
				headerDisplayState: true,
				submitDisplayState: false,
				sidebarDisplayState: false,
				userInput: "",
				savedInput: "",
				CellData: [
					{
						elementId: "",
						title: "",
						subject: "",
						date: ""
					}
				],
				songs: songList
			};
		},
		methods: {
			initializeData() {
				EventBus.$emit("dataLoad", this.songs);
			},
			toggleHeader() {
				this.headerDisplayState = !this.headerDisplayState;
			},
			toggleSidebar() {
				this.sidebarDisplayState = !this.sidebarDisplayState;
			},
			toggleSubmit() {
				this.submitDisplayState = !this.submitDisplayState;
			},
			handleClick(event) {
				console.log(event);

				if (event === "focus") {
					this.submitDisplayState = true;
					this.userInput = "";
					return;
				}
				if (event === "blur") {
					this.submitDisplayState = false;
					return;
				}
				console.log(this.userInput.length);

				if (this.userInput.length === 0) {
					this.submitDisplayState = false;
				} else {
					this.submitDisplayState = true;
				}
			},

			handleSubmit() {
				// this.savedInput = this.userInput;
				EventBus.$emit("userInputSubmit", this.userInput);

				this.userInput = "";
				this.toggleSubmit();
			}
		},

		mounted() {
			this.initializeData();
		}
	};
</script>

<style>
	@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";




	.fade-enter{
        opacity: 0;
		width: 0%;
    }
    .fade-enter-active{
        transition: opacity 0.5s, width 0.5s;

    }
    .fade-leave{
        /* opacity: 1; */
		width: 0%;
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
	}
	.img {
		background: black;
		width: 100px;
		height: 100px;
	}
	* {
		--mainRed: #a04650;
		--mainBlue: #284b78;
		--transparentBlue: #e0e7f771;
		--mainPurple: #9c3a5f;
		--lightPurple: #ac73ac;
		--fadedPurple: #bba4bb;
		--mainWhite: #fffffa;
		touch-action: manipulation;
	}

	html {
		box-sizing: border-box;
		margin: 0;
		padding:25px;
		height: 100%;
		background: rgba(54, 46, 121, 0.849);
		box-shadow: 0px 0px 50px 100px inset #2A4F7F;

	}
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	.routerLink {
		color: rgba(255, 255, 255, 0.842);
		text-decoration: none;
	}

	#app {
		box-sizing: content-box;
		/* display: grid; */
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0px;
		background: rgba(54, 46, 121, 0.705);
		color: rgb(255, 255, 255);
		font-family: "Montserrat", sans-serif;
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.6;
		max-height: 100%;
		height: 100%;
		box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.664);
		padding: 0px 0px 5px 0px;
		margin: 0;
		z-index: 0;
	}
	.app-shell {
		box-sizing: border-box;
		max-width: 750px;
		width: 100% z-index 0;
		height:  fit-content;
		max-height: 100vw;
		margin: auto;
		padding: 0px 5px 15px 10px;
		margin-top: 0px;
		border: 2px solid var(--transparentBlue);
		border-radius: 7px;
		background: var(--mainRed);
		box-shadow: 0px 0px 30px 10px rgba(23, 23, 78, 0.322);
	}

	header {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0px 20px;
		border-radius: 8px;
	}
	header > h1 {
		font-weight: 800;
		font-size: 2.3em;
		line-height: 1;
		letter-spacing: 0.05em;
		width: 100%;
		text-align: center;
	}

	h2,
	h3 {
		padding: 0px 0px 0px 0px;
	}

	h3 {
		padding-top: 5px;
	}
	.seahag {
		margin: 10px auto 5px auto;
		padding: 0;
	}
	.toggleButton {
		position: absolute;
		display: block;
		margin-top: 0;
		font-size:5em;
		height: fit-content;
		width: fit-content;
		color: rgb(255, 255, 255);
		border-radius: 50%;
		text-align: center;
		padding-left: 0px;
		box-shadow: 0px 0px 1px 1px var(--mainRed);
		transition: 200ms box-shadow ease-in-out, 100ms background ease-in-out,
			200ms border ease, 150ms color ease;
	}

	i:active {
		box-shadow: 0px 0px 3px 2px rgba(76, 76, 77, 0.164);
		background: rgba(255, 255, 255, 0.466);
		color: var(--mainRed);
	}

	.fa-check {
		padding: 3px 5px;
		font-size: 1.5em;
		position: RELATIVE;
		color: #284b78c4;
	}
	.sidebar-toggle {
		color: white;

		display: flex;
		flex-direction: row;
		/* text-align: left; */
		justify-content: flex-end;
		margin-right: 0;
		z-index: 3;
		padding: 5px;
		font-size: 1.3em;
		margin-bottom: 6px;
		margin-right: 3px;
	}
	.MainGrid {
		box-sizing: border-box;
		max-height: 582px;
		width: 100%;
		margin: 0;
		padding: 0px;
		padding-top: 0px;
		background: var(--mainRed);
		overflow: auto;
		z-index: 0;
		touch-action: manipulation;
	}
	.body-row {
		display: flex;
		/* background: var(--mainRed); */
	}
	.body-flex {
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		padding-top: 0px;
		padding: 2px;
		margin: 2px;
		touch-action: manipulation;
		background: var(--mainRed);
		overflow: auto;
		width: 100%;
	}
	.sidebarHidden {
		width: 0px;
		overflow: hidden;
		touch-action: manipulation;
	}

	.sidebarShown {
		box-sizing: border-box;
		display: sticky;
		z-index: 1;
		width: 200px;
		padding: 10px;
		padding-top: 5px;
		margin: 3px;
		margin-right: 3px;
		background: var(--mainRed);
		border-radius: 0px 0px 5px;

		border-right: 1px solid rgba(190, 138, 138, 0.315);

		touch-action: manipulation;
	}

	.shell-head {
		max-height: 200px;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 6fr 9fr 1fr;
		background: var(--mainRed);
		grid-column: content-start / span 4;
		min-height: 110px;
		border-radius: 5px;
		padding-right: 0px;
		z-index: 0;
		touch-action: manipulation;
	}
	.header {
		margin: 0;
		box-sizing: border-box;
		background: var(--mainRed);
		padding: 1vw 2.5vw;
		border-radius: 3px;
		touch-action: manipulation;
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
	}
	.header1 > h1 {
		margin: 0px;
	}

	.header-button-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: fit-content;
		width: 100%;
		margin: 0px auto;
	}

	.filter-input {
		box-sizing: border-box;
		width: 100%;
		height: 25px;
		border-radius: 5px;
		border: 0px;
		touch-action: manipulation;
		outline: none;
		padding: 3px;
		padding-left: 6px;
		margin: auto;
		margin-right: 5px;
		grid-area: input;
		max-width: 150px;
		font-size: 1em;
	}

	.header2-label {
		box-sizing: border-box;
		margin-bottom: 3px;
		margin: 10px auto 0px auto;
		text-align: center;
		grid-area: hText;
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
		flex-direction: row;
		touch-action: manipulation;
		padding: 0px 0px 10px 0px;
	}

	a {
		color: hsl(194, 60%, 43%);
	}

	@media screen and (max-width: 450px) {
		html{
			padding: 0px;
		}
		header {
			padding: 0px 0px 10px 0px;
			justify-content: space-around;
		}

		header > h1 {
			font-size: 1.4em;
			line-height: 00.5;
		}

		header > h3 {
			display: none;
		}

		.MainGrid {
			box-sizing: border-box;
			/* height: 100vw; */
			margin: auto;
			background: var(--mainRed);
			overflow: auto;
		}
		.app {
			padding: 0px;
			margin: 0;
			box-sizing: border-box;
			height: 100%;
		}


		.app-shell {
			box-sizing: border-box;
			max-width: 100vw;
			min-height: 120vw;
			max-height: fit-content;
			margin: auto;
			margin-top: 0px;
			padding: 0px 3px 30px 3px;
			border: 2px solid var(--transparentBlue);
			border-radius: 7px;
			/* background: var(--mainRed); */
			box-shadow: 0px 0px 30px 10px rgba(23, 23, 78, 0.322);
		}

		.body-flex {
			display: flex;
			justify-content: space-around;
			padding: 0px;
			padding: 2px;
			padding-top: 0px;
			margin: 2px;
			margin-top: 0px;
			touch-action: manipulation;
			max-height: 119vw;
			background: var(--mainRed);
			overflow: auto;
		}
		.sidebar-toggle {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			touch-action: manipulation;
			padding-left: 0px;
			margin-left: -5px;
			margin-bottom: 0;
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
			margin-top: 7px;
			padding: 0px 0px;
		}

		.header1 {
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding: 0px;
			padding-left: 10px;
		}

		.header1 > h1 {
			font-weight: 800;
			font-size: 2em;
			line-height: 1;
			margin: auto;
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
