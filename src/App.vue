<template>
	<div id="app">
		<header v-if="headerDisplayState === true" @click="toggleHeader">
			<h1>Jake's Sweet Grid Interface</h1>
			<h3>Such cool, very wow!</h3>
		</header>
		<div class="content-container">
			<div class="grid-head">
				<div class="header header1">
					<h1>grid STUFF</h1>
				</div>
				<div class="header header2">
					<div class="header-button-container">
						<label for="header-text-input" class="header2-label">inputs in here like a boss</label>
						<span class="header-form">
							<div>
								<input type="text" name="header-text-input" class="header-text-input" />
							</div>
							<span>
								<input type="image" src="../src/assets/check-solid.svg" class="header-button" value />
							</span>
						</span>
					</div>
				</div>
			</div>
			<div class="sidebar-toggle">
				<span>
					<i class="fas fa-angle-double-left"></i>
				</span>
			</div>
			<div class="body-flex">
				<MainGrid msg="Welcome to Your Vue.js App" />
				<div id="sidebar-div" class="sidebar-hidden">fuck</div>
			</div>
		</div>

		<div
			class="hiddenMessage"
			style="display: none; text-align: center; position: relative;"
		>Show Header</div>
	</div>
</template>

<script>
	import MainGrid from "./components/mainGrid.vue";

	export default {
		name: "app",
		components: {
			MainGrid
		},
		props: {},
		data() {
			return {
				headerDisplayState: true,
				gridCell: {
					id: null,
					name: "",
					content: "",
					markup: ""
				}
			};
		},
		methods: {
			toggleHeader() {
				this.headerDisplayState = !this.headerDisplayState;
			}
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
	}
	body {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0px;
		background: rgba(69, 46, 121, 0.835);
		color: rgb(255, 255, 255);
		font-family: "Montserrat", sans-serif;
		font-size: 1rem;
		font-weight: 500;
		line-height: 1.6;
		height: 100%;
		box-shadow: 0px 0px 1000px 40px inset rgba(32, 104, 133, 0.637);
		margin: 0;
	}
	.content-container {
		box-sizing: border-box;
		max-width: 750px;
		max-height: 100%;
		margin-top: 0px;
		padding: 2px 10px 25px 10px;
		border: 2px solid var(--transparentBlue);
		border-radius: 7px;
		background: var(--mainRed);
		box-shadow: 0px 0px 30px 10px rgba(23, 23, 78, 0.322);
		margin: auto;
	}

	header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 5px 20px;
		border-radius: 8px;
	}

	i {
		position: relative;
		display: block;
		margin-top: 75px;
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
		font-size: 3em;
		line-height: 1.1;
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

	.sidebar-toggle {
		color: white;
		display: flex;
		flex-direction: column;
		text-align: right;
		justify-content: space-around;
		/* width: 30px; */
		margin-right: 0;
		z-index: 3;
		padding: 0px;
	}
	.MainGrid {
		box-sizing: border-box;
		max-height: 625px;
		width: 100%;
		margin: 0;
		padding: 3px;
	}
	.body-flex {
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
	}
	.sidebar-hidden {
		display: none;
	}

	.sidebar-shown {
		box-sizing: border-box;
		display: block;
		z-index: 500;
		width: 300px;
		padding: 15px;
		margin: 0;
		background: var(--mainRed);
	}

	/* Start of Head Grid Styles*/
	.grid-head {
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 6fr 9fr 1fr;
		background: var(--mainRed);
		grid-column: content-start / span 4;
		min-height: 110px;
		border-radius: 5px;
		padding-right: 0px;
		z-index: 0;
		/* width: 750px; */
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
		flex-direction: column;
		justify-content: flex-start;
		font-weight: 800;
		user-select: none;
		/* width: 250px; */
	}

	.header-button-container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
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
		margin: 10px auto 0px 0px;
		grid-area: hText;
	}

	.header-button {
		grid-area: button;
		grid-column: span 2;
		box-sizing: border-box;
		height: 25px;
		width: 20px;
		color: var(--mainWhite);
		border-radius: 5px;
		margin-left: 10px;
		outline: none;
		opacity: 0;
		touch-action: manipulation;
	}

	.header2 {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

		touch-action: manipulation;
	}

	.header-form {
		display: flex;
		touch-action: manipulation;
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

		MainGrid {
			height: 100%;
			margin: auto;
			margin-top: 10px;
			padding: 2px 3px 15px 3px;
		}

		.sidebar-toggle {
			color: white;
			display: flex;
			flex-direction: row;
			text-align: left;
			justify-content: left;
			margin: 0;
			touch-action: manipulation;
		}

		.grid-head {
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
