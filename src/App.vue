<template>
	<div id="app">
		<header v-if="headerDisplayState === true" @click="toggleHeader">
			<h1>Jake's Sweet Grid Interface</h1>
			<h3>Such cool, very wow!</h3>
		</header>
		<div class="app-shell">
			<div class="shell-head">
				<div class="header header1">
					<h1>music GUY </h1>
				</div>
				<div class="header header2">
						<label class="header2-label">inputs in here like a boss</label>
					<div class="header-button-container">
						<form class="header-form">
								<input type="text"
									v-model="userInput"
									@input="toggleSubmit"
									@click="userInput = ''"
									name="header-text-input"
									class="header-text-input" />
								<i class="fas fa-check" v-show="submitDisplayState === true" @click="handleSubmit"></i>
						</form>
					</div>
				</div>
			<div class="sidebar-toggle">
				<span>
					<i @click="toggleSidebar"  class="fas fa-angle-double-left sidebar-toggle"></i>


				</span>
			</div>
			</div>

				<ToolBar :userInput="userInput"></ToolBar>
			<div class="body-flex">
				<!-- <MainGrid v-bind:songData="songs" msg="Welcome to Your Vue.js App" /> -->

				<router-view></router-view>
				<div :class="{ sidebarShown: sidebarDisplayState} " id="sidebar-div" class="sidebarHidden">
					<h4>Nav</h4>
					<div class="links"
					@click="initializeData" >
						<div class="linkItem">
						<router-link to="/" class="routerLink">Library</router-link>
						</div>
						<router-link to="/About" class="routerLink">About</router-link>
					</div>
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
	import ToolBar from './components/ToolBar';
	import EventBus from './components/eventBus.js';
	import songList from '../data/SongData.js';



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
				userInput: 'Message stuff',
				CellData: [{
					elementId: '',
					title: '',
					subject: '',
					date: ''
				}],
				songs: songList
			};
		},
		methods: {
			initializeData() {
				EventBus.$emit('dataLoad', this.songs);
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

			handleSubmit() {
				EventBus.$emit('userInputSubmit', this.userInput);
				this.userInput = '';
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
		padding: 0;
		height: 100%;
	}
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		height: 100%;

	}

	.routerLink {
		color:rgba(255, 255, 255, 0.842);
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
		background: rgba(54, 46, 121, 0.849);
		color: rgb(255, 255, 255);
		font-family: "Montserrat", sans-serif;
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.6;
	max-height: 120vw;
		box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.637);
		padding: 0px 0px 0px 0px;
		margin: 0;
		z-index: 0;
	}
	.app-shell {
		box-sizing: border-box;
		max-width: 750px;
	/* height: 125vw; */
		margin-top: 0px;
		padding: 0px 5px 10px 10px;
		border: 2px solid var(--transparentBlue);
		border-radius: 7px;
		background: var(--mainRed);
		box-shadow: 0px 0px 30px 10px rgba(23, 23, 78, 0.322);
		margin: auto;
		width: 100%
		z-index	0;
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
		margin: 5px 0px;
		width: 100%;
		text-align: center;
	}

	h2,
	h3 {
		padding: 0px 0px 0px 0px;
		margin-top: 5px;
		margin-bottom: 5px;
	}

	h3 {
		padding-top: 5px;
	}

.toggleButton {
		position: absolute;
		display: block;
		margin-top: 0;
		font-size: 1.4em;
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
	position: absolute;
	color: #284b78c4;
	right: 35px;
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
		font-size: 1.1em;
		margin-bottom: 6px;
		margin-right: 3px;
	}
	.MainGrid {
		box-sizing: border-box;
		max-height: 560px;
		width: 100%;
		margin: 0;
		padding: 3px;
		padding-top: 0px;

		overflow: hidden;
		z-index: 0;
		touch-action: manipulation;

	}

	.body-flex {
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
		padding-top: 0px;
		touch-action: manipulation;

	}
	.sidebarHidden {
		width: 0px;
		overflow: hidden;
		touch-action: manipulation;

	}

	.sidebarShown {
		box-sizing: border-box;
		/* display: block; */
		z-index: 1;
		width: 200px;
		padding: 10px;
		padding-top: 5px;
		margin: 3px;
		margin-right: 3px;

  background: rgba(143, 69, 77, 0.109);		/* box-shadow: 0px 0px 100px 25px inset #171c2a71; */
		border-radius: 0px 0px 5px;
		border: 2px solid rgba(119, 64, 76, 0.616);
		border-top: 0px solid rgb(136, 56, 65);
		border-bottom: 0px solid rgb(136, 56, 65);
		border-right: 1px solid rgba(190, 138, 138, 0.479);
		touch-action: manipulation;

}

	.shell-head {
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
		box-sizing: border-box;
		background: var(--mainRed);
		padding: 1vw 2.5vw;
		border-radius: 3px;
		touch-action: manipulation;

	}

	.header1 {
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
	.header1>h1 {
		margin: 5px;

	}

	.header-button-container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: fit-content;

	}

	.header-text-input {
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
		margin-right:5px;
		grid-area: input;
		max-width: 150px
	}

	.header2-label {
		box-sizing: border-box;
		margin-bottom: 3px;
		margin: 10px auto ;
		margin: 10auto;
		text-align: center;
		grid-area: hText;

	}


	.header2 {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content:center;
		touch-action: manipulation;
	}
	.messageOut {
		margin: 0px;
	}
	.header-form {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		touch-action: manipulation;
		padding:0px 0px 10px 10px
	}

	a {
		color: hsl(194, 60%, 43%);
	}

	@media screen and (max-width: 450px) {
		header {
			padding: 10px 0px 10px 0px;
			justify-content: space-around;
		}

		header>h1 {
			font-size: 1.4em;
			line-height: 00.5;
		}

		header > h3 {
			display: none;
		}

		.MainGrid {
			height: 100%;
			margin: auto;

		}



.app-shell {
		box-sizing: border-box;
		max-width: 100vw;
		max-height: 100%;
		margin-top: 0px;
		padding: 0px 3px 10px 3px;
		border: 2px solid var(--transparentBlue);
		border-radius: 7px;
		background: var(--mainRed);
		box-shadow: 0px 0px 30px 10px rgba(23, 23, 78, 0.322);
		margin: auto;
}
		.sidebar-toggle {
			display: flex;
			flex-direction: column;
			justify-content:  flex-end;
			touch-action: manipulation;
			padding-left: 0px;
			margin-left: -2px;
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

		.header-button-container {
			display: grid;

			justify-content: space-around;
			touch-action: manipulation;
		}

		.header-text-input {
			width: 90%;
			margin-left: 15px;
			touch-action: manipulation;
		}

		.hiddenMessage {
			left: 75%;
			font-size: 0.9em;
			width: fit-content;
		}
	}
</style>
