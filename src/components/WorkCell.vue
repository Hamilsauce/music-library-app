<template>
        <div  @click="cellActive" :class="{ activeCell: activated   }"   class="grid-cell">
            <div class="internal-grid">
            <div class="cell-head">
                <div class="button-container" :class="{ buttonContainerHidden: !activated   }" >
                    <button @click="showSongDetails">Song Details</button>
                </div>
                <div class="checkbox-container">
                    <img class="checkboxSvg" v-if="activated === true"  src="https://hamilsauce.github.io/music-library-app/src/assets/checked-box.svg" width="20px" height="20px" alt="checkbox">
                    <img class="checkboxSvg" v-else src="https://hamilsauce.github.io/music-library-app/src/assets/unchecked-box.svg" width="20px" height="20px" alt="checkbox">
                </div>
            </div>
            <div class="cell-body">
                <p> {{ song.songTitle }} </p>
            </div>
            <div class="cell-foot">
                <p> {{ song.genre }} </p>
                </div>
            </div>
        </div>
</template>

<script>

// import EventBus from '@/components/eventBus.js';

    export default {
        name: 'WorkCell',
        components: {},
        props: {
            song: Object,
            selectedSong: String
        },
        data() {
            return {
                checkedSong: '',
                audioUrl: '',
                errorMsg: ''
            }
        },

        methods: {
            cellActive() {
                let songInfo = [];
                let urlOrError = [];

                if (this.song.hasOwnProperty('audioUrl')) {
                    urlOrError = ['url', this.song.audioUrl];
                    songInfo.push(urlOrError);
                } else {
                    urlOrError = ['error', 'noUrl'];
                    songInfo.push(urlOrError);
                }
                songInfo.push(this.song.songTitle);
                this.$emit('songCellActivated',songInfo);

            },
            showSongDetails() {
                this.$emit('showSongDetails', this.song.songTitle);
            }
        },
        computed: {
            activated: function() {
                return this.selectedSong === this.song.songTitle;
            }
        },
        watch: {},

        /* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
        created() {},
        mounted() {},
        updated() {},
        destroyed() {}
    }
</script>

<style scoped>

	* {
		--mainRed: #a04650;
		--mainBlue: #284b78;
		--transparentBlue: #e0e7f771;
		--mainPurple: #9c3a5f;
		--lightPurple: #ac73ac;
		--fadedPurple: #bba4bb;
		--mainWhite: #fffffa;
		touch-action: manipulation;
	}
	.grid-cell {
        display: grid;
        /* display: flex; */
        justify-content: flex-start;
        flex-direction: column;
        grid-template-columns: 1fr;
        min-height: 80px;
        min-width: 75px;
		padding: 0vw 0vw 1vw 0vw;
		color: rgb(106, 107, 114);
		background: rgb(255, 255, 250);
		border-radius: 3px;
		border: 2px solid rgba(255, 255, 255, 0);
		font-size: 1em;
		font-weight: 500;
		transition: 150ms box-shadow ease-out, 200ms background ease,
			200ms border ease, 100ms font-weight ease;
        user-select: none;
        overflow: hidden;
	}
        .activeCell {
        /* transform: scale(1.3);
        z-index: 3; */
    }

	.grid-cell:hover {
		box-shadow: 0px 0px 125px 50px inset rgba(173, 69, 173, 0.753);
		background: rgba(176, 192, 197, 0.801);
		border: 2px solid white;
		font-weight: 600;
		cursor: pointer;
		color: white;
	}

	.grid-cell:active {
		box-shadow: 0px 0px 125px 50px inset rgba(216, 183, 216, 0.753);
		background: rgba(153, 116, 145, 0.541);
		border: 2px solid white;
		font-weight: 600;
		cursor: pointer;
		color: white;
    }
    .internal-grid {
        display: grid;
    }
    .cell-head {
        display: grid;
        grid-template-columns: 90% 10%;
        justify-content: space-between;
        margin: 0;
        height: fit-content;
        width: 100%;
        padding-bottom: 5px;
        background: rgb(241, 241, 241);
    }
    .button-container {
        text-align: left;
    }
    .button-container>button {
        font-size: 0.8em;
        background: transparent;
        border: 0px;
        color:var(--mainBlue);
        cursor: pointer;
    }
    .buttonContainerHidden {
       opacity: 0;
    }
    .checkbox-container {
        text-align: right;
        margin: auto;
        height: 20px;
        width: 25px;
        padding-right: 5px;
    }
    .checkboxSvg {
        width: 15px;
        height: 15px;
        opacity: 0.9;
        padding-right: 10px
    }
    .cell-foot {
        font-size: 0.8em
    }

p {
    margin:  0px 5px;
}
    </style>