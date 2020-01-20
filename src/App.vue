<template>
	<div id="app">
		<header v-if="headerDisplayState === true">
			<h6 class="assistant">{{ assistantMessage }}</h6>
		</header>
		<div class="app-shell">
			<div class="shell-head">
				<div class="header header1">
					<h1>music GUY</h1>
				</div>
				<div class="header header2">
					<label class="header2-label">Search for a tune</label>
					<div class="header-button-container">
						<form class="header-form" @submit.prevent="handleSubmit">
							<input
								type="text"
								v-model="userInput"
								@click="handleClick"
								name="filter-input"
								class="filter-input"
							/>
						</form>
					</div>
				</div>
				<!-- <div class="sidebar-toggle">
						<i @click="toggleSidebar" class="fas fa-angle-double-left sidebar-toggle"></i>
				</div>-->
			</div>

			<div class="shell-body">
				<transition name="fade">
					<ToolBar class="toolbar"></ToolBar>
				</transition>
				<div class="body-row">
						<router-view :userInput="userInput" :songs="songs"></router-view>
						<!-- <div @click="toggleSidebar" class="sidebar-container" title="Click to expand navigation!">
							<i v-show="sidebarDisplayState === false" class="fas fa-angle-double-left sidebar-toggle2"></i>
							<i v-show="sidebarDisplayState === true" class="fas fa-angle-double-right sidebar-toggle3"></i>
						</div> -->
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
				assistantMessage: 'Select a tile to listen.',
				userInput: "",
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
				songs: [],
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
			// toggleSidebar() {
			// 	this.sidebarDisplayState = !this.sidebarDisplayState;
			// },
			toggleSubmit() {
				this.submitDisplayState = !this.submitDisplayState;
			},
			handleClick() {
				this.filterClickCount < 2
					? (this.filterClickCount = this.filterClickCount + 1)
					: (this.filterClickCount = this.filterClickCount);

				if (this.filterClickCount > 1) {
					this.userInput = "";
					this.filterClickCount = 0;
					return;
				}
			},
			handleSubmit() {
				EventBus.$emit("userInputSubmit", this.userInput);
				this.userInput = "";
				this.toggleSubmit();
			},

			listenForActiveSong() {
				EventBus.$on('songActivated', () => {
					setTimeout(() => {
						this.assistantMessage = 'Press again to open song page';
					}, 1000);

					setTimeout(() => {
						this.assistantMessage = 'Select a tile to listen.';
					}, 7000);
				});
			}
		},
		mounted() {
			this.initializeData();
			this.listenForActiveSong();
		}
	};
</script>

<style>
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
		/* padding: 25px; */
		padding-top: 0px;
		/* height: fit-content; */
		height: 100%;
		background: rgba(54, 46, 121, 0.849);
		/* box-shadow: 0px 0px 50px 100px inset #2a4f7f; */
		background: rgba(54, 46, 121, 0.705);
		box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.664);
	}
	body {
		box-sizing: border-box;
		margin: 0;
		height: 100%;
		/* height: fit-content; */
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
		/* background: rgba(54, 46, 121, 0.705);
		box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.664); */
	}
	.app-shell {
		box-sizing: border-box;
		max-width: 750px;
		width: 100%;
		/* height: fit-content; */
		height: 100%;
		margin: auto;
		margin-top: 0px;
		padding: 0px 0px 30px 10px;
		border: 2px solid var(--transparentBlue);
		border-radius: 15px ;
		background: var(--mainRed);
		box-shadow: 0px 0px 30px 10px rgba(23, 23, 78, 0.322);
		overflow: hidden;
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
	header > h1 {
		font-weight: 800;
		font-size: 2.3em;
		line-height: 1;
		letter-spacing: 0.05em;
		width: 100%;
		text-align: center;
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
		border-radius: 15px 15px;
		overflow: auto;
		touch-action: manipulation;
	}

	.body-row { /*wrangles sidebar and toolbar together to keeep them on screen */
		display: flex;
		border-radius: 15px 15px;
		height:	460px;
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
		color: rgba(255, 255, 255, 0.863);
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
	}

	.header2-label {
		box-sizing: border-box;
		grid-area: hText;
		margin-bottom: 3px;
		padding-bottom: 5px;
		margin: 10px auto 0px auto;
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
		flex-direction: row;
		touch-action: manipulation;
		padding: 0px 0px 10px 0px;
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

		header > h1 {
			font-size: 1.4em;
			line-height: 0.5;
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
