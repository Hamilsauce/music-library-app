<template>
	<div class="MainGrid">
		<div class="grid-view-header">
			<h3></h3>
		</div>
		<div class="grid-body">
			<!-- <div class="grid-cell cell1">1</div>? -->
			<work-cell v-for="(song) in songs" :key="song.id" :song="song"></work-cell>
		</div>
	</div>
</template>

<script>
	import WorkCell from "./WorkCell.vue";

	import EventBus from "./eventBus.js";

	export default {
		name: "MainGrid",
		components: {
			WorkCell
		},
		data() {
			return {
				songList: this.songs
			}
		},
		props: {
			msg: String,
			songData: Array
		},
		methods: {
			listenForData() {
				EventBus.$on("dataLoad", data => {
					this.songList = data;

				});
			}
		},
		computed: {
			songs: function() {
				return this.songList;
	}
		},
		mounted() {
			this.listenForData();
		}
	};
</script>

<style scoped>


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
		/* max-height: fit-content; */
		height: 115vw;
		width: 100%;
		margin: auto;
		margin-top: 0px;
		padding: 3px;
		background: var(--mainBlue);
		overflow-x: auto;
		border-radius: 0px 0px 5px5px;
		border: 1px solid var(--lightPurple);
	}
	.grid-view-header {
		color: rgba(175, 65, 89, 0.685);
		position: absolute;
		z-index: 10;
	}

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

	a {
		color: hsl(194, 60%, 43%);
	}

@media screen and (max-width: 450px) {
	.grid-body {
		height: 122vw;
		max-height:122vw;
		gap: 5px;
		background: var(--mainBlue);
		grid-template-columns: repeat(2, minmax(175px 1fr));
		touch-action: manipulation;
		overflow-x: auto;
			border-radius: 0px 0px 5px 5px;

		/* border: 1px solid var(--lightPurple); */
		border-top: 0px solid var(--lightPurple);
		max-width: 100vw;
		overflow-y: auto;
	}

	.grid-cell:nth-child(4n + 4) {
		grid-column: span 2;
	}

	.cell2 {
		grid-column: span 1;
	}
}

	@media screen and (max-width: 300px) {
		.grid-body {
			grid-template-columns: 1fr;
		}
	}
</style>
