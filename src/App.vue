<template>
	<div id="app">
		<header v-if="headerDisplayState === true">
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
						<form
							class="header-form"
							@submit.prevent="handleSubmit"
						>
							<input
								type="text"
								v-model="filterInput"
								@click="handleClick"
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
							</div> -->

						</form>
					</div>
				</div>
			</div>

			<div class="shell-body">
				<transition name="fade">
					<ToolBar class="toolbar"></ToolBar>
				</transition>
				<div class="body-row">
					<router-view
						:filterInput="filterInput"
						:songs="songs"
					></router-view>
					<transition name="fade">
						<Sidebar :sidebarDisplayState="sidebarDisplayState"></Sidebar>
					</transition>
				</div>
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
	import Sidebar from "./components/Sidebar";
	import EventBus from "./components/eventBus.js";

	export default {
		name: "app",
		components: {
			ToolBar,
			Sidebar
		},
		props: {},
		data() {
			return {
				headerDisplayState: true,
				filterClickCount: 0,
				sidebarDisplayState: false,
				assistantMessage: "Select a tile to listen.",
				sortCriteria: "",
				filterInput: "",
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
			initializeData() {
				fetch("https://hamilsauce.github.io/audio/SongData.json")
					.then(response => response.json())
					.then(data => {
						this.songs = data.songs;
					});
				EventBus.$emit("dataLoad", this.songs);
			},
			toggleHeader() {
				this.headerDisplayState = !this.headerDisplayState;
			},

			toggleSubmit() {
				this.submitDisplayState = !this.submitDisplayState;
			},
			handleClick() {
				this.filterClickCount < 2
					? (this.filterClickCount = this.filterClickCount + 1)
					: (this.filterClickCount = this.filterClickCount);

				if (this.filterClickCount > 1) {
					this.filterInput = "";
					this.filterClickCount = 0;
					return;
				}
			},
			handleSubmit() {
				EventBus.$emit("userInputSubmit", this.filterInput);
				this.filterInput = "";
				this.toggleSubmit();
			},
			listenForActiveSong() {
				EventBus.$on("songActivated", songData => {
					let activeSongName = songData[0];

					let songObj = this.songs.find(
						song => song.songTitle === activeSongName
					);
					songObj.plays++;
				});
			},
			makeAssistantTalk() {
				setTimeout(() => {
					this.assistantMessage = "Press again to open song page";
				}, 1000);

				setTimeout(() => {
					this.assistantMessage = "Select a tile to listen.";
				}, 7000);
			}
		},
		mounted() {
			this.initializeData();
			this.listenForActiveSong();
		}
	};
</script>

<style>
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

	@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
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
		padding-top: 0px;
		height: 100%;
		background: rgba(54, 46, 121, 0.849);
		background: rgba(54, 46, 121, 0.705);
		box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.664);
	}
	body {
		box-sizing: border-box;
		margin: 0;
		height: 100%;
		height: 100%;
		padding: 0;
		background: rgba(54, 46, 121, 0.705);
		box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.664);
	}

	#app {
		box-sizing: content-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: fit-content;
		padding: 0px 0px 30px 0px;
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
		height: 100%;
		margin: auto;
		margin-top: 0px;
		padding: 0px 0px 30px 10px;
		border: 2px solid var(--transparentBlue);
		border-radius: 15px;
		background: var(--mainRed);
		box-shadow: 0px 0px 30px 10px rgba(23, 23, 78, 0.322);
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
		margin: 5px auto 0px auto;
		padding: 0;
		color: rgba(255, 255, 255, 0.822);
	}

	i:active {
		box-shadow: 0px 0px 3px 2px rgba(76, 76, 77, 0.164);
		background: rgba(255, 255, 255, 0.466);
		color: var(--mainRed);
	}

	.MainGrid {
		box-sizing: border-box;
		max-height: 560px;
		width: 100%;

		overflow: auto;
		touch-action: manipulation;
	}

	.body-row {
		display: flex;
		border-radius: 10px 10px;
		height: 460px;
	}

	.shell-head {
		max-height: 175px;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 6fr 9fr 1fr;
		background: var(--mainRed);
		grid-column: content-start / span 4;
		min-height: 100px;
		border-radius: 5px;
		padding-right: 0px;
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
		max-width: 200px;
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
		margin: 10px auto 0px auto;
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
			padding: 0px 0px 10px 0px;
			justify-content: space-around;
		}

		#app {
			padding: 0px 0px 0px 0px;
		}
		.MainGrid {
			box-sizing: border-box;
			overflow: auto;
			border-radius: 5px;
			height: 128vw;
			border-radius: 5px 5px;
		}

		.logo1 {
			text-align: right;
			padding-left: 40px;
			color: rgba(37, 37, 37, 0.829);
			letter-spacing: 5px;
		}
		.logo2 {
			color: rgb(216, 216, 216);
			margin-top: 0px;
			padding-left: 0px;
		}
		.app-shell {
			max-width: 100vw;
			height: 175vw;
			padding: 0px 0px 25px 8px;
			border-radius: 5px 5px 15px 15px;
		}
		.filter-input {
			max-width: 150px;
		}
		.shell-body {
			overflow: hidden;
			height: 145vw;
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
