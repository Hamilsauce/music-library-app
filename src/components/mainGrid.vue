<template>
	<div class="MainGrid" >
		<div class="grid-view-header">

		</div>
		<div class="grid-body">
			<!-- <div class="grid-cell cell1">1</div>? -->
			<work-cell v-for="song in refinedSongList" :key="song.id" :song="song" @songCellActivated="handleActiveSong"></work-cell>
		</div>
	</div>
</template>

<script>
	import WorkCell from "./WorkCell.vue";
	import EventBus from "./eventBus.js";

	export default {
		name: "MainGrid",
		components: {
			WorkCell,
		},
		data() {
			return {
				songList: this.songs,
				songsFiltered:'',
				sortCriteria: String
			}
		},
		props: {
			msg: String,
			songs: Array,
			userInput: String,

		},
		methods: {
			listenForData() {
				EventBus.$on("dataLoad", data => {
					this.songList = data;
				});
			},
			handleActiveSong(songInfo) {
				let [urlOrError, songName] = songInfo;

				if (urlOrError[0] === 'url') {
					let songUrl = urlOrError[1];
					let playSong = [songName, songUrl]
					EventBus.$emit('songActivated', playSong);
				} else {
					let noUrl = urlOrError[1];
					let playSong = [songName, noUrl]
					EventBus.$emit('songActivated', playSong);
				}
			},
			handleSortChange() {
				let sortedSongs = [];
				EventBus.$on('sortChange', criteria => {
					this.sortCriteria = criteria;
				})

				console.log(sortedSongs);

				return sortedSongs;

			},
				getFilter() {
				EventBus.$on('userInputSubmit', input => {
					this.userInput = input;
				});
			},
			filterSongs() {
				let newSongs = this.songs.filter(song => {
					return song.songTitle.toUpperCase().indexOf(this.userInput.toUpperCase()) >= 0;
				});
				console.log(newSongs);
				return  newSongs;
			}

				// filtered.sort((a, b) => {
				// 	let first = a[criteria].toUpperCase();
				// 	let second = b[criteria].toUpperCase();
				// 	let compare = 0;
				// 	if (first > second) {
				// 		compare = 1;

				// 	} else if (first < second) {
				// 		compare = -1;
				// 	}
				// 	return compare;
				// });
				// console.log('after sort');

				// filtered.forEach(song => console.log(song[criteria]))
				// return filtered;
		},
		computed: {

			refinedSongList: function() {
				let filtered = this.filterSongs();
				return filtered;


				// return this.handleSortChange(filtered, this.sortCriteria)
			}
		},
		mounted() {
			this.listenForData();
			this.handleSortChange();
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

	.audio-container {
		display: none;
	}
	.grid-body {
		box-sizing: border-box;
		display: grid;
		gap: 5px;
		grid-template-columns: repeat(auto-fill, minmax(175px, 2fr));
		grid-template-rows: auto;
		max-height: fit-content;
		width: 100%;
		margin: auto;
		margin-top: 0px;
		padding: 3px;
		background: var(--mainBlue);
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
		background: rgba(224, 231, 247, 0.376);
		color: var(--mainWhite);
		border: 2px solid rgba(255, 255, 255, 0.897);
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
			height: fit-content;
			gap: 5px;
			background: var(--mainBlue);
			grid-template-columns: repeat(2, minmax(175px 1fr));
			touch-action: manipulation;
			border-radius: 0px 0px 5px 5px;
			border-top: 0px solid var(--lightPurple);
			border-radius: 5px;
			max-width: 110vw;
			min-height: 540px;
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
