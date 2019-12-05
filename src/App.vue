<template>
	<div id="app">
		<header v-if="headerDisplayState === true" @click="toggleHeader">
			<h1>Jake's Sweet Grid Interface</h1>
			<h3>Such cool, very wow!</h3>
		</header>
		<div class="app-shell">
			<div class="shell-head">
				<div class="header header1">
					<h1>grid STUFF</h1>
				</div>
				<div class="header header2">
						<label for="header-text-input" class="header2-label">inputs in here like a boss</label>
					<div class="header-button-container">
						<span class="header-form">
							<div>
								<input type="text" v-model="userMessage"  name="header-text-input" class="header-text-input" />
							</div>
							<span>
								<input type="submit"  class="header-button"  />
							</span>
						</span>
						<p class="messageOut">{{userMessage}}</p>
					</div>
				</div>
			<div class="sidebar-toggle">
				<span>
					<i @click="toggleSidebar"  class="fas fa-angle-double-left"></i>
				</span>
			</div>
			</div>
			<div class="body-flex">
				<!-- <MainGrid v-bind:songs="songs" msg="Welcome to Your Vue.js App" /> -->
				<router-view></router-view>
				<div :class="{ sidebarShown: sidebarDisplayState} " id="sidebar-div" class="sidebarHidden">
					<h4>Nav</h4>
					<div class="links"
					@click="initializeData" >
						<div class="linkItem">
						<router-link to="/">Main Grid</router-link>
						</div>
						<router-link to="/About">About</router-link>
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
	import EventBus from './components/eventBus.js'

	import songList from '../data/SongData.js'



	export default {
		name: "app",
		components: {
			// MainGrid
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
				submitDisplayState: true,
				sidebarDisplayState: false,
				userMessage: '',
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
				this.initializeData();
			},

			},


		mounted() {
			this.initializeData();
		}
	};
</script>

<style>
	@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

	* {
		--mainRed: #a04650;
		--mainBlue: #284b78;
		--transparentBlue: #e0e7f771;
		--mainPurple: #9c3a5f;
		--lightPurple: #ac73ac;
		--fadedPurple: #bba4bb;
		--mainWhite: #fffffa;
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
	#app {
		box-sizing: content-box;
		display: grid;
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
		height: 100%;
		box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.637);
		padding: 0px 0px 0px 0px;
		margin: 0;
		z-index: 0;
	}
	.app-shell {
		box-sizing: border-box;
		max-width: 750px;
		max-height: 100%;
		margin-top: 0px;
		padding: 0px 10px 10px 10px;
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

	i {
		position: relative;
		display: block;
		margin-top: 0;
		font-size: 1.1em;
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
		font-size: 1.2em;
	}

	header > h1 {
		font-weight: 800;
		font-size: 2.5em;
		line-height: 1;
		letter-spacing: 0.05em;
		margin: 5px 0px;
		width: 100%;
		text-align: left;
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

	.sidebar-toggle {
		color: white;
		display: flex;
		flex-direction: column;
		text-align: right;
		justify-content: flex-end;
		margin-right: 0;
		z-index: 3;
		padding: 5px;
	}
	.MainGrid {
		box-sizing: border-box;
		max-height: 585px;
		width: 100%;
		margin: 0;
		padding: 3px;
		overflow: hidden;
		z-index: 0;
	}
	.body-flex {
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
	}
	.sidebarHidden {
		width: 0px;
		overflow: hidden;
	}

	.sidebarShown {
		box-sizing: border-box;
		/* display: block; */
		z-index: 1;
		width: 175px;
		padding: 5px;
		margin: 0;
		background: var(--mainRed);
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
	}
	.header {
		box-sizing: border-box;
		background: var(--mainRed);
		padding: 1vw 2.5vw;
		border-radius: 3px;
	}

	.header1 {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		text-align: left;
		font-size: 1.2em;
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
		border-radius: 5px;
		border: 0px;
		padding: 5px;
		touch-action: manipulation;
		outline: none;
		grid-area: input;
	}

	.header2-label {
		box-sizing: border-box;
		margin-bottom: 3px;
		margin: 10px auto ;
		margin: 10auto;
		text-align: center;
		grid-area: hText;

	}

	.header-button {
		box-sizing: border-box;
		grid-area: button;
		grid-column: span 2;
		/* height: 25px; */
		/* width: 20px; */
		padding: 5px;
		font-size: 0.9em;
		font-weight: 500;
		margin-left: 10px;
		background: #31588bbb;
		outline: none;
		border: 1px solid rgba(255, 255, 255, 0.24);
		border-radius:3px;
		color: white;
		touch-action: manipulation;
	}

	.header2 {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content:center;

		touch-action: manipulation;
	}

	.header-form {
		display: flex;
		justify-content: center;
		touch-action: manipulation;
		padding: 5px;
	}

	a {
		color: hsl(194, 60%, 43%);
	}

	@media screen and (max-width: 450px) {
		header {
			padding: 10px 0px 10px 0px;
			justify-content: space-around;
		}

		header > h1 {
			font-size: 1.4em;
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
		overflow: auto;
}
		.sidebar-toggle {
			display: flex;
			flex-direction: column;
			touch-action: manipulation;
			padding: 0;
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
			padding: 5px;
			flex-direction: column;
		}

		.header2-label {
			margin: auto;
			margin-bottom: 4px;
			margin-top: 7px;
			padding: 3px 0px;
		}

		.header1 {
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding-left: 10px;
		}

		.header1 > h1 {
			font-weight: 800;
			font-size: 2em;
			margin: auto;
		}

		.header-button-container {
			display: grid;
			grid-template-areas:
				"hText "
				"input";
			grid-template-rows: 2;
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
