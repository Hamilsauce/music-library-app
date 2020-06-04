<template>
	<section class="toolbar">
		<div class="top-bar">
			<div class="expand-button" @click="toggleBottomBar" title="Click here to show more options!">
				<i class="fas fa-caret-square-down"></i>
			</div>
			<div class="top-bar-div title-container">
				<transition name="fade">
					<span
						class="song-title"
						v-show="safeReveal === true"
						:class="{ fadeTitle: displayPlayingMessage }"
					>{{ songTitle }}</span>
				</transition>
				<!-- <span
					class="now-playing-message"
					v-show="displayPlayingMessage === true"
				>Now Playing</span>-->
			</div>
			<div>
				<input
					class="pause-button tool-button"
					v-if="audioPaused === false"
					@click="pauseAudio"
					:disabled="songName === ''"
					type="button"
					name="pause-button"
					value="Pause"
				/>

				<input
					class="play-button tool-button"
					v-if="audioPaused === true"
					@click="resumeAudio"
					type="button"
					name="play-button"
					value="Resume"
				/>
			</div>
		</div>
		<transition name="fade">
			<div class="bottom-bar" :style="{height: expandBottomBar === true ? '30px' : '0px' }">
				<div class="grid-cell">
					<div class="tooltip">
						<button
							class="share-button"
							@click="shareActiveSong"
							type="button"
							name="share-button"
							value="Share"
						>
							<!-- <?xml version="1.0" encoding="utf-8"?> -->
							<svg
								version="1.1"
								id="Icons"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								x="0px"
								y="0px"
								height="17px"
								width="18px"
								viewBox="0 0 35 25"
								style="enable-background:new 0 0 32 32;"
								fill="#fff"
								xml:space="preserve"
							>
								<path
									d="M29.3,2.6c-0.3-0.2-0.7-0.3-1-0.2L3,11.7c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l10.2,3.8l10-10
	c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.8,9.8l6.6,10.6c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.7l6.2-25.2
	C29.7,3.3,29.6,2.9,29.3,2.6z"
								/>
							</svg>
						</button>
					</div>
					<input class="download-button" type="button" name="download-button" value="download" />
				</div>

				<div class="grid-cell">
					<input type="text" v-model="audioSrc" value="no active song" class="songUrlText" />
				</div>
			</div>
		</transition>
		<div class="audio-container">
			<audio id="audio-player">
				<source class="source" :src="audioSrc" type="audio/mpeg" />
			</audio>
		</div>
	</section>
</template>
<script>
import EventBus from "./eventBus";
export default {
	name: "ToolBar",
	components: {},
	props: {
		inputData: String,
		songUrl: String
	},
	data() {
		return {
			displayPlayingMessage: false,
			safeReveal: false,
			expandBottomBar: false,
			audioPaused: false,
			songName: "",
			songId: null,
			audioSrc: "",
			notification2: "Details...",
			eventInput: this.filterInput
		};
	},
	methods: {
		toggleNowPlaying() {
			this.displayPlayingMessage = true;
			setTimeout(() => {
				console.log("now playin");
				this.displayPlayingMessage = false;
			}, 1500);
		},
		toggleBottomBar() {
			this.expandBottomBar = !this.expandBottomBar;
		},
		receivefilterInput() {
			EventBus.$on("filterInputSubmit", data => {
				this.inputData = data;
				this.inputData[0];
			});
		},
		playAudio() {
			this.safeReveal = false;
			EventBus.$on("songActivated", playSong => {
				let [selectedSongId, selectedSongUrl, selectedSongName] = playSong;
				const audioPlayer = document.getElementById("audio-player");

				if (this.songId == selectedSongId) {
					//! checks newly selected song is already selected, ends execution if so
					return;
				} else if (selectedSongUrl === "noUrl") {
					this.songName = `No audio for ${selectedSongName}`;
					return;
				} else {
					this.toggleNowPlaying();
					this.songName = selectedSongName;
					this.songId = selectedSongId;
					this.audioSrc = selectedSongUrl;
					this.audioPaused = false;
					audioPlayer.pause();
					audioPlayer.load();
					audioPlayer.play();
				}
				this.safeReveal = true; //!use this put some time between the now playing and song title
			});
		},
		resumeAudio() {
			const audioPlayer = document.getElementById("audio-player");
			audioPlayer.play();
			this.audioPaused = false;
		},
		pauseAudio() {
			const audioPlayer = document.getElementById("audio-player");
			audioPlayer.pause();
			this.audioPaused = true;
		},
		shareActiveSong() {
			//! in order to copy song url to clipboard at button click, use a hidden textbox that has the url. when button clicked, the text is selected and copied
			const urlTextContainer = document.querySelector(".songUrlText");
			urlTextContainer.select();
			urlTextContainer.setSelectionRange(0, 99999);
			document.execCommand("copy");

			let shareMsg = "";
			if (!this.songTitle) {
				shareMsg = "Select a song to share it!";
			} else {
				shareMsg = `The link for '${this.songTitle}' has been copied to your clipboard!`;
			}
			alert(shareMsg);
		}
	},

	computed: {
		filterInput: function() {
			return this.inputData;
		},
		songTitle: function() {
			return this.songName;
		}
	},

	created() {
		this.playAudio();
	},
	mounted() {},
	updated() {},
	destroyed() {}
};
</script>

<style scoped>
i {
	opacity: 0.8;
}
.fade-enter {
	opacity: 0;
	width: 0;
}
.fade-enter-active {
	transition: opacity 0.5s, width 0.5s;
}
.fade-leave {
	opacity: 1;
	width: 100%;
}
.fade-leave-active {
	transition: opacity 0.5s, width 1s;
	opacity: 0;
	width: 0;
}
.toolbar {
	box-sizing: border-box;
	display: grid;
	grid-template-rows: 2;
	width: 95%;
	background: var(--mainRed);
	color: white;
	font-size: 0.9em;
	overflow: hidden;
	border: 1px solid rgba(190, 138, 138, 0.021);
	border-radius: 5px 5px 0px 0px;
}

.top-bar {
	box-sizing: border-box;
	display: grid;
	grid-template-columns: 30px 1fr 1fr 80px;
	grid-template-rows: 1;
	/* padding: 2px 5px 0px 0px; */
	font-size: 1em;
	height: 30px;
	margin-top: 4px;
	border-radius: 5px 5px 0px 0px;
}
.expand-button {
	padding-left: 3px;
	font-size: 1.5em;
}
.sort-cell > label {
	font-size: 1em;
	font-weight: 400;
	padding: 2px 0px 0px 0px;
}

.title-container {
	box-sizing: border-box;
	max-height: 35px;
	grid-column: span 2;
	font-size: 1em;
	text-align: left;
	box-sizing: border-box;
	padding: 8px 0px 0px 10px;
	justify-content: center;
	text-align: center;
	overflow: hidden;
}
.now-playing-message {
	opacity: 0.1;
	/* transition: 0.1s ease-out; */
	z-index: 3;
}
.song-title {
	z-index: 2;
	opacity: 0.8;
	transition: 0.5s ease-out;
}
.fadeTitle {
	opacity: 0;
	transition: 0.01s ease-out;
}

select > option {
	text-align: center;
}
.bottom-bar {
	box-sizing: border-box;
	width: 100%;
	min-width: fit-content;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1;
	padding: 2px 5px 0px 0px;
	justify-content: left;
	margin: auto;
	/* border-top: 1px solid rgba(29, 6, 6, 0.096); */
	transition: 0.5s;
}
.share-button {
	color: rgba(236, 229, 250, 0.87);
	font-size: 0.9em;
	font-weight: bold;
	background: rgba(23, 62, 145, 0.733);
	border: 2px solid rgba(255, 255, 255, 0.349);
	border-radius: 3px;
	padding: 1px 2px 0px 2px;
	margin: 1px 0px 0px 0px;
	box-shadow: 0px 0px 8px 2px inset rgba(85, 32, 128, 0.144);
	transition: 0.5s;
	outline: none;
}
.share-button:active {
	box-shadow: 0px 0px 3px 1px rgba(145, 131, 190, 0.445);
	border: 2px solid rgba(255, 255, 255, 0.61);
	color: rgb(236, 229, 250);
	outline: none;
}
.download-button {
	color: rgba(236, 229, 250, 0.87);
	font-size: 0.7em;
	font-weight: 500;
	letter-spacing: 2px;
	background: rgba(23, 62, 145, 0.733);
	border: 2px solid rgba(255, 255, 255, 0.349);
	border-radius: 3px;
	padding: 0px 2px;
	margin: 1px 0px 1px 0px;
	box-shadow: 0px 0px 8px 2px inset rgba(63, 97, 209, 0.144);
	margin-left: 4px;
	transition: 0.2s;
	outline: none;
}
.download-button:active {
	box-shadow: 0px 0px 3px 1px rgba(145, 131, 190, 0.445);
	border: 2px solid rgba(255, 255, 255, 0.61);
	color: rgb(236, 229, 250);
	outline: none;
}
/* .download-button {
					text-align: left;
					color: rgba(255, 255, 255, 0.726);
					font-size: 1em;
					font-weight: 500;
					background: rgba(44, 76, 144, 0.0);
					border: 2px solid rgba(255, 255, 255, 0.335);
					border-radius: 3px;
					padding: 2px 4px;
					margin-top: 2px;
					margin-left: 8px;
					box-shadow: 0px 0px 8px 1px inset rgba(170, 141, 207, 0.384);
				} */
.grid-cell {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.grid-cell:nth-child(1) {
	grid-column: span 2;
	display: flex;
	justify-content: flex-end;
	/* margin-left: 10px; */
}
.songUrlText {
	opacity: 0;
	height: 20px;
	width: 20px;
}
.misc-cell {
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 0px;
	padding-right: 10px;
	font-size: 1em;
}
.tool-button {
	background: rgba(44, 76, 144, 0.705);
	font-size: 1em;
	border: 1px solid rgba(112, 124, 148, 0.548);
	color: rgb(240, 240, 240);
	padding: 3px 5px;
	border-radius: 3px;
	margin: 3px 3px 0px 3px;
}
.pause-button:disabled {
	background: rgba(37, 89, 131, 0);
	border: 1px solid rgba(189, 189, 189, 0);
	color: rgb(184, 146, 146);
}
/* .tool-button {
					background: rgb(47, 83, 149);
					font-size: 1em;
					border: 1px solid rgb(67, 87, 126);
					border: 1px solid rgb(112, 124, 148);
					color: rgb(240, 240, 240);
					padding: 5px 5px;
					border-radius: 3px;
					margin: 3px;
				} */
.details-button {
	padding: 3px;
	font-size: 0.9em;
}
.play-button:disabled {
	background: rgba(37, 89, 131, 0);
	border: 1px solid rgba(189, 189, 189, 0);
	color: rgb(184, 146, 146);
}
.sort-cell {
	grid-column: span 1;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 0px;
	padding-right: 10px;
	background: solid rgba(139, 39, 39, 0.856);
}
</style>