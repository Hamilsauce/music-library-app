<template>
	<div class="MainGrid">
		<div class="grid-body">
			<div class="grid-cell cell1">1</div>
			<div class="grid-cell cell2">2</div>
			<div class="grid-cell cell3">3</div>
			<div class="grid-cell cell4">Cell 4</div>
			<div class="grid-cell cell5">Cell 5</div>
			<div class="grid-cell cell6">Cell 6</div>
			<div class="grid-cell cell7">Cell 7</div>
			<div class="grid-cell cell8">Cell 8</div>
			<div class="grid-cell cell9">Cell 9</div>
			<div class="grid-cell cell10">Cell 10</div>
			<div class="grid-cell cell11">Cell 11</div>
			<div class="grid-cell cell12">Cell 12</div>
			<div class="grid-cell cell13">Cell 13</div>
			<div class="grid-cell cell14">Cell 14</div>
			<div class="grid-cell cell15">Cell 15</div>
			<div class="grid-cell cell16">Cell 16</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MainGrid",
		props: {
            msg: String,
            gridCells: Array
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	html {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		height: 100%;
	}

	:root {
		--mainRed: #a04650;
		--mainBlue: #284b78;
		--transparentBlue: #e0e7f771;
		--mainPurple: #9c3a5f;
		--lightPurple: #ac73ac;
		--fadedPurple: #bba4bb;
		--mainWhite: #fffffa;
	}

	body {
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


	.body-flex {
		box-sizing: border-box;
		display: flex;
		justify-content: space-around;
	}

	.sidebar-toggle {
		color: white;
		display: flex;
		flex-direction: column;
		text-align: right;
		justify-content: space-around;
		margin-right: 0;
		z-index: 3;
		padding: 0px;
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
	}

	.header2 {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		touch-action: manipulation;
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

	.header-form {
		display: flex;
		touch-action: manipulation;
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

	.grid-body {
		box-sizing: border-box;
		display: grid;
		gap: 5px;
		max-height: 625px;
		width: 100%;
		margin: auto;
		padding: 3px;
		background: var(--mainBlue);
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		grid-auto-rows: auto;
		grid-template-rows: auto;
		overflow-x: auto;
		border-radius: 5px;
		border: 1px solid var(--lightPurple);
	}

	.cell1 {
		grid-column: span 2;
		grid-row: span 2;
	}

	.cell2 {
		grid-row: span 2;
	}

	.cell5 {
		grid-column: span 2;
		grid-row: span 2;
	}

	.grid-cell {
		min-height: 90px;
		padding: 1vw 2vw;
		color: rgb(106, 107, 114);
		background: rgb(255, 255, 250);
		border-radius: 3px;
		border: 2px solid rgba(255, 255, 255, 0);
		font-size: 1.2em;
		font-weight: 600;
		transition: 150ms box-shadow ease-in-out, 300ms background ease,
			200ms border ease, 100ms font-weight ease;
		user-select: none;
	}

	.grid-cell:hover {
		box-shadow: 0px 0px 100px 30px inset var(--lightPurple);
		background: rgba(255, 255, 255, 0.815);
		border: 2px solid white;
		font-weight: 600;
		cursor: pointer;
		color: white;
	}

	.grid-cell:active {
		box-shadow: 0px 0px 125px 40px inset rgba(221, 138, 221, 0.753);
		background: rgba(201, 105, 180, 0.856);
		border: 2px solid white;
		font-weight: 600;
		cursor: pointer;
		color: white;
	}

	.grid-cell:nth-child(3n + 5) {
		grid-row: span 2;
	}

	.grid-cell:nth-child(5n + 4) {
		background: rgba(224, 231, 247, 0.445);
		color: var(--mainWhite);
		grid-column: span 2;
	}

	.grid-cell:nth-child(4n + 1):hover {
		color: var(--mainWhite);
		font-weight: 500;
		background: var(--transparentBlue);
		box-shadow: 0px 0px 100px 40px inset rgb(192, 77, 102);
	}

	a {
		color: hsl(194, 60%, 43%);
	}

	@media screen and (max-width: 450px) {
		header {
			padding: 0px 0px 0px 3px;
			justify-content: space-around;
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

		.grid-body {
			height: 125vw;
			gap: 5px;
			background: var(--mainBlue);
			grid-template-columns: 2fr 2fr;
			touch-action: manipulation;
			overflow-x: auto;
			border-radius: 5px;
			border: 1px solid var(--lightPurple);
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

		.header-button {
			box-sizing: border-box;
			height: 20px;
			width: 17px;
			color: var(--mainWhite);
			border-radius: 5px;
			margin-left: 2px;
			outline: none;
			opacity: 0;
			touch-action: manipulation;
		}

		.hiddenMessage {
			left: 75%;
			font-size: 0.9em;
			width: fit-content;
		}
		.grid-cell:nth-child(3n + 2) {
			grid-row: span 2;
		}
		.grid-cell:nth-child(1n + 2) {
			grid-column: span 1;
		}
		.grid-cell:nth-child(3n + 1) {
			background: rgba(224, 231, 247, 0.445);
			color: var(--mainWhite);
		}

		.grid-cell:nth-child(2n + 2) {
			grid-row: span 2;
		}
	}
</style>
