<template>
	<div class="MainGrid" >
		<!-- <div class="dimmer" v-if="displayDimmer === true" @click="displayDimmer = false"></div> -->
		<div class="grid-view-header">
		</div>
		<div class="grid-body">
			<work-cell
				v-for="song in refinedSongList"
				:key="song.id"
				:song="song"
				:selectedSong="selectedSong"
				@songCellActivated="handleActiveSong"
				@showSongDetails="showSongDetails"
			></work-cell>
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
				sortCriteria: String,
				displayDimmer: false,
				selectedSong: null //* gets its value from workcell click event, used by all workcells as reference
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

				if(this.selectedSong != songName) {
					if (urlOrError[0] === 'url') {
						let songUrl = urlOrError[1];
						let playSong = [songName, songUrl]
						EventBus.$emit('songActivated', playSong);
					} else {
						let noUrl = urlOrError[1];
						let playSong = [songName, noUrl]
						EventBus.$emit('songActivated', playSong);
					}
				}
				this.selectedSong = songName;
			},
			showSongDetails(songTitle) {
				this.displayDimmer = true;
				console.log(songTitle);
				EventBus.$emit('dimmerActive');

			},
			handleSortChange() { //! Not currently used
				let sortedSongs = [];
				EventBus.$on('sortChange', criteria => {
					this.sortCriteria = criteria;
				})
				return sortedSongs;
			},
			getFilter() { //! Not sure if this is even used
				EventBus.$on('userInputSubmit', input => {
					this.userInput = input;
				});
			},
			filterSongs() {
				let newSongs = this.songs.filter(song => {
					return song.songTitle.toUpperCase().indexOf(this.userInput.toUpperCase()) >= 0;
				});
				return newSongs;
			}

			//TODO below commented code useful for sorting reference
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
	work-cell {
		cursor: pointer;
	}
	.audio-container {
		display: none;
	}
/*
	.dimmer {
		box-sizing:  border-box;
		position: absolute;
		width: 718px;
		height: 540px;
		background: #dbdbd567;
		border-radius: 5px;
	}
*/

	.grid-body {
		box-sizing: border-box;
		display: grid;
		gap: 5px;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-template-rows: auto;
		max-height: fit-content;
		min-height: 100%;
		width: 100%;
		margin: auto;
		margin-top: 0px;
		padding: 2px;
		background: var(--mainBlue);
		border-radius: 0px 0px 5px5px;
	}
	.grid-view-header {
		color: rgba(175, 65, 89, 0.685);
		position: absolute;
		z-index: 10;
	}

	.grid-cell:nth-child(2n + 4) {
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
		/* .dimmer {
			box-sizing:  border-box;
			position: absolute;
			width: 90vw;
			height: 433px;
			background: #dbdbd567;
			border-radius: 5px;
		} */
		.grid-body {
			max-width: 110vw;
			height: fit-content;
			min-height: 185vw;
			grid-template-columns: repeat(2, minmax(175px 1fr));
			gap: 5px;
			background: var(--mainBlue);
			border-radius: 0px 0px 5px 5px;
			border: 1px solid var(--lightPurple);
			border-radius: 5px;
			touch-action: manipulation;

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

	.grid-cell:first-child { 	/* Random grid-cell style (necessary) */
		grid-column: span 2;
	}
</style>
