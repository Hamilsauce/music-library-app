<template>
	<section class="toolbar" >
		<div class="top-bar"

        >
        <div class="expand-button" @click="toggleBottomBar" title="Click here to show more options!"><i class="fas fa-caret-square-down"></i></div>
			<div class="top-bar-div title-container">{{ songTitle }}</div>
			<div>
                <input
                    v-if="audioPaused === false"
                    class="pause-button tool-button"
                    @click="pauseAudio"
                    :disabled="songName === ''"
                    type="button"
                    name="pause-button"
                    value="Pause"
                >
                <input
                    class="play-button tool-button"
                    v-if="audioPaused === true"
                    @click="resumeAudio"
                    type="button"
                    name="play-button"
                    value="Resume"
                >
            </div>
		</div>
        <transition name="fade">
		<div class="bottom-bar" :style="{height: expandBottomBar === true ? '35px' : '0px' }">
			<div class="misc-cell" v-if="expandBottomBar === true">
                   <input
                    class="tool-button details-button"
                    type="button"
                    name="details-button"
                    value="Song Details"
                >
            </div>

			<div class="sort-cell" v-if="expandBottomBar === true">
                <label for="select-sort">Sort By: </label>
                <select v-model="sortCriteria" class="select-sort">
                    <option value="songTitle">songTitle</option>
                    <option value="Genre">Genre</option>
                    <option value="Likes">Likes</option>
                    <option value="Plays">Plays</option>
                </select>
            </div>
		</div>
        </transition>
        <div class="audio-container">
            <audio id="audio-player">
                <source  class="source" :src="audioSrc" type="audio/mpeg" />
            </audio>
		</div>
	</section>
</template>

<script>
import EventBus from './eventBus';
	export default {
		name: "ToolBar",
		components: {},
		props: {
            inputData: String,
            songUrl: String
        },

		data() {
			return {
                expandBottomBar: false,
                audioPaused: false,
                songName: '',
                audioSrc: '',
                sortCriteria: '',
                notification2: "Details...",
                eventInput: this.userInput
			};
		},

		methods: {
            toggleBottomBar() {
                this.expandBottomBar = !this.expandBottomBar;
            },
            receiveUserInput() {
                EventBus.$on('userInputSubmit', data => {
                    this.inputData = data;
                    this.inputData[0];
                })
            },
            playAudio() {
                EventBus.$on('songActivated', playSong => {
                const audioPlayer = document.getElementById('audio-player');
                if (this.songTitle == playSong[0]) {
                    console.log('read you');

                    return;
                } else if (playSong[1] === 'noUrl') {
                    this.songName = playSong[0];
                    return;
                } else {
                    console.log( playSong)
                    this.songName = playSong[0];
                    this.audioSrc = playSong[1];
                    this.audioPaused = false;

                    audioPlayer.pause();
                    audioPlayer.load();
                    audioPlayer.play();
                }
                })
            },
            resumeAudio() {
                const audioPlayer = document.getElementById('audio-player');
                audioPlayer.play();
                this.audioPaused = false;
            },
            pauseAudio() {
                const audioPlayer = document.getElementById('audio-player');
                audioPlayer.pause();
                this.audioPaused = true;
            }
        },

		computed: {
            userInput: function() {
                return this.inputData;
            },
            songTitle: function() {
                return this.songName;
            }
        },

		watch: {
            sortCriteria: function() {
                EventBus.$emit('sortChange', this.sortCriteria);
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
	.fade-enter{
        opacity: 0;
		width: 0;
    }
    .fade-enter-active{
        transition: opacity 0.5s, width 0.5s;

    }
    .fade-leave{
        opacity: 1;
		width: 100%;
    }
    .fade-leave-active{
        transition: opacity 1s, width 1s;
        opacity: 0;
		width: 0;
	}
.toolbar {
    display: grid;
    grid-template-rows: 2;
    width: 97%;
    background: var(--mainRed);
    color: white;
    font-size: 0.9em;
    padding: 2px 0px 0px 0px;
    margin: 0px 5px 0px 0px;
    border: 1px solid rgba(190, 138, 138, 0.021);
    border-right: 2px solid  rgba(141, 60, 60, 0.219);
    border-left: 2px solid  rgba(141, 60, 60, 0.219);
    border-radius: 5px 5px 0px 0px;
    box-shadow:0px 0px 20px 5px inset rgba(136, 61, 61, 0.267);
}


.top-bar {
    display: grid;
    grid-template-columns: 30px 1fr 1fr 80px;
    grid-template-rows: 1;
    padding: 2px 5px 0px 0px;
    font-size: 1em;
    border-radius: 5px 5px 0px 0px;
}
.expand-button {
    padding-left: 3px;
    font-size: 1.5em;
}
.sort-cell>label {
    font-size: 1em;
    font-weight: 400;
    padding:2px 0px 0px 0px;
}
.select-sort {
    min-width: 80px;
    max-width: fit-content;
    /* text-align: center; */
    height: 100%;
    color: rgb(250, 236, 238);
    padding: 2px 0px 2px 0px;
    margin: 0px 0px 0px 6px;
    box-sizing: border-box;
    background: var(--mainRed);
    background:solid rgba(170, 78, 78, 0.856);
    font-size: 1.1em;
    border: 1px solid rgba(139, 39, 39, 0);
    /* border-bottom: 1px solid rgba(139, 39, 39, 0.856); */
}
.title-container {
    grid-column: span 2;
    font-size: 1.1em;
    text-align: left;
        box-sizing: border-box;
    padding: 4px 0px 4px 10px;
    justify-content: center;
    text-align: center;
    overflow: hidden;

}

select>option {
    text-align: center;
}
.bottom-bar {
    box-sizing: border-box;
    width: 100%;
    min-width: fit-content;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1;
    padding: 2px 0px 0px 0px;
    margin: 0;
    /* border-top: 1px solid rgba(29, 6, 6, 0.096); */
    transition: 0.5s;

}
.misc-cell {
      display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0px;
    padding-right: 10px;
    font-size: 1.1em;
}
.tool-button {
    background: rgb(47, 83, 149);
    font-size: 1em;
    border: 1px solid rgb(112, 124, 148);
    color: rgb(240, 240, 240);
    padding: 5px 10px;
    border-radius: 3px;
    margin: 3px;
}
.pause-button:disabled {
    background: rgba(37, 89, 131, 0);
    border: 1px solid rgba(189, 189, 189, 0);
    color: rgb(184, 146, 146);
}
.tool-button {
    background: rgb(47, 83, 149);
    font-size: 1em;
    border: 1px solid rgb(67, 87, 126);
    border: 1px solid rgb(112, 124, 148);
    color: rgb(240, 240, 240);
    padding: 5px 5px;
    border-radius: 3px;
    margin: 3px;
}
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
    grid-column: span 2;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 0px;
    padding-right: 10px;
    background:solid rgba(139, 39, 39, 0.856);


}

</style>