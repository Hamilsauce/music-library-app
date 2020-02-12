<template>
	<div
		@click="cellActive"
		:class="{ activeCell: activated }"
		class="grid-cell"
	>
		<div class="internal-grid">
			<div
				class="cell-head"
				:class="{ activeCellHead: activated}"
			>
				<div
					class="button-container"
					:class="{ buttonContainerHidden: !activated }"
				>
					<button @click="showSongDetails">Song Details</button>
				</div>
				<div class="checkbox-container">
					<img
						class="checkboxSvg"
						v-if="activated === true"
						src="https://hamilsauce.github.io/music-library-app/src/assets/checked-box.svg"
						width="20px"
						height="20px"
						alt="checkbox"
					/>
					<img
						class="checkboxSvg"
						v-else
						src="https://hamilsauce.github.io/music-library-app/src/assets/unchecked-box.svg"
						width="20px"
						height="20px"
						alt="checkbox"
					/>
				</div>
			</div>
			<div class="cell-body">
				<p>{{ song.songTitle }}</p>
			</div>
			<div class="cell-foot">
				<p>{{ song.genre }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	// import EventBus from '@/components/eventBus.js';

	export default {
		name: "WorkCell",
		components: {},
		props: {
			song: Object,
			selectedSong: String
		},
		data() {
			return {
				checkedSong: "",
				audioUrl: "",
				errorMsg: ""
			};
		},
		methods: {
			cellActive() {
				let songInfo = [];
				let urlOrError = [];

				if (this.song.hasOwnProperty("audioUrl")) {
					urlOrError = ["url", this.cleanedAudioUrl];
					songInfo.push(urlOrError);
				} else {
					urlOrError = ["error", "noUrl"];
					songInfo.push(urlOrError);
				}
				songInfo.push(this.song.songTitle);
				this.$emit("songCellActivated", songInfo);
			},
			showSongDetails() {
				this.$emit("showSongDetails", this.song.songTitle);
			}
		},
		computed: {
			activated: function() {
				return this.selectedSong === this.song.songTitle;
			},
			cleanedAudioUrl() {
				let urlValue = "";
				if (!this.song.audioUrl) {
					urlValue = "No audio for this song!";
					return urlValue;
				} else {
					let urlSplit = this.song.audioUrl.trim().split("");

					let cleanUrl = urlSplit
						.map(char => {
							let cleanChar = char === " " ? "%20" : char;
							return cleanChar;
						})
						.reduce((acc, currChar) => {
							return (acc += currChar);
						}, "");
					console.log(cleanUrl);
					return cleanUrl;
				}
			}
		},
		watch: {},

		created() {},
		mounted() {},
		updated() {},
		destroyed() {}
	};
</script>

<style scoped>
	* {
		--mainRed: #bc484e;
		--mainBlue: #284b78;
		--transparentBlue: #e0e7f771;
		--mainPurple: #9c3a5f;
		--lightPurple: #ac73ac;
		--fadedPurple: #bba4bb;
		--mainWhite: #fffffa;
		touch-action: manipulation;
		outline: none;
	}
	.grid-cell {
		display: grid;
		grid-template-columns: 1fr;
		min-height: 80px;
		min-width: 75px;
		padding: 0vw 0vw 1vw 0vw;
		color: rgb(106, 107, 114);
		background: rgb(240, 233, 222);
		border-radius: 3px;
		border: 2px solid rgb(255, 255, 255);
		font-size: 1em;
		font-weight: 500;
		transition: 200ms box-shadow ease-out, 225ms background ease,
			200ms border ease, 100ms font-weight ease;
		user-select: none;
		overflow: hidden;
	}
	.activeCell {
		background: rgba(255, 255, 255, 0.986);
	}

	.grid-cell:hover {
		box-shadow: 0px 0px 125px 25px inset rgb(255, 255, 255);
		background: rgba(255, 255, 255, 0.849);
		border: 2px solid white;
		cursor: pointer;
		transition: 0.25s;
	}
	.grid-cell:active {
		box-shadow: 0px 0px 100x 25px inset rgba(141, 40, 141, 0.548);
		background: rgba(227, 187, 235, 0.589);
		border: 2px solid white;
		font-weight: 600;
		cursor: pointer;
		color: white;
		transition: 0.45s;
	}
	.internal-grid {
		display: grid;
	}
	.cell-head {
		color: white;
		display: grid;
		grid-template-columns: 1fr 20px;
		justify-content: space-between;
		margin: 0;
		height: fit-content;
		width: 100%;
		padding-bottom: 5px;
		background: #4282d6;
		border: 1px solid rgba(255, 255, 255, 0.836);
		border-bottom: 2px solid rgba(255, 255, 255, 0.836);
		transition: 0.3s;
	}
	.activeCellHead {
		color: white;
		box-shadow: 0px 0px 30px 5px inset hsla(207, 75%, 37%, 0.575);
		background: #e40ad2;
	}
	.cell-head:hover {
		color: white;
		box-shadow: 0px 0px 30px 5px inset hsla(207, 75%, 37%, 0.575);
		/* background: #186ad4fd; */
	}
	.button-container {
		text-align: left;
	}
	.button-container > button {
		font-size: 0.8em;
		background: transparent;
		border: 0px;
		color: var(--mainBlue);
		cursor: pointer;
	}
	.buttonContainerHidden {
		opacity: 0;
	}
	.checkbox-container {
		text-align: right;
		margin: auto;
		height: 15px;
		width: 25px;
		padding-right: 5px;
	}
	.checkboxSvg {
		width: 15px;
		height: 15px;
		opacity: 0.8;
		padding-right: 10px;
	}
	.cell-foot {
		font-size: 0.8em;
	}

	.cell-head button {
		color: white;
	}

	p {
		margin: 0px 5px;
	}
</style>