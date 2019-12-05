<template>
	<div class="MainGrid">
		<div class="grid-body">
			<!-- <div class="grid-cell cell1">1</div>? -->
			<work-cell
				v-for="(song, id) in songs"
				:key="id"
				:song="song"
			></work-cell>

		</div>
	</div>
</template>

<script>
import WorkCell from './WorkCell.vue';

import EventBus from './eventBus.js';

	export default {
		name: "MainGrid",
		components: {
			WorkCell
		},
		props: {
            msg: String,
           songs: Array
		},
		methods: {
			listenForData() {
			EventBus.$on('dataLoad', songData => {
					this.songs = songData;
				})
			}
		},
		created() {
			this.listenForData();
		},
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
		--transparentBlue: #c8d6f8b6;
		--mainPurple: #9c3a5f;
		--lightPurple: #ac89ac;
		--fadedPurple: #bba4bb;
		--mainWhite: #fffffa;
	}

	.grid-body {
		box-sizing: border-box;
		display: grid;
		gap: 5px;
		grid-template-columns: repeat(auto-fill, minmax(175px, 2fr));
		/* grid-auto-rows: auto; */
		grid-template-rows: auto;
		max-height: fit-content;
		height: 100%;
		width: 100%;
		margin: auto;
		padding: 3px;
		background: var(--mainBlue);
		overflow-x: auto;
		border-radius: 5px;
		border: 1px solid var(--lightPurple);
	}

/*!
//! taking .grid-cell styles to WorkCell

*/
	/*!
//! not taking nth-child styles
	*/



	.grid-cell:nth-child(2n + 2) {
		grid-row: span 2;
	}

	.grid-cell:nth-child(6n + 2) {
		background: rgba(224, 231, 247, 0.445);
		color: var(--mainWhite);
		border: 2px solid rgba(255, 255, 255, 0.705);
		grid-column: span 1;
	}

	.grid-cell:nth-child(6n + 2):hover {
		color: var(--mainWhite);
		font-weight: 500;
		background: var(--transparentBlue);
		box-shadow: 0px 0px 120px 50px inset rgba(175, 65, 89, 0.685);
		border-color: #3d6797c4;
	}


/* .cell2 {
		grid-column: span 2;

	} */
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
			grid-template-columns: repeat(2, minmax(175px 1fr));
			touch-action: manipulation;
			overflow-x: auto;
			border-radius: 5px;
			border: 1px solid var(--lightPurple);
			max-width: 100vw;
			overflow-y: auto;
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
		.grid-cell:nth-child(4n + 4) {
			grid-column: span 2;
		}

.cell2 {
		grid-column: span 1;

	}
	}

	@media screen and (max-width: 300px) {
        .grid-body{
            grid-template-columns: 1fr;
        }
    }
</style>
