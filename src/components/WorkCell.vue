<template>
        <div  @click="cellActive"    class="grid-cell">
            <p> {{ song.songTitle }} </p>
            <p> {{ song.genre }} </p>

        </div>
</template>

<script>

// import EventBus from '@/components/eventBus.js';

    export default {
        name: 'WorkCell',
        components: {},
        props: {
            song: Object,
        },
        data() {
            return {
                activated: false,
                audioUrl: '',
                errorMsg: ''
            }
        },

        methods: {
            cellActive() {
                let songInfo = [];
                let urlOrError = [];

                this.activated = true;
                if (this.song.hasOwnProperty('audioUrl')) {
                    urlOrError = ['url', this.song.audioUrl];
                    songInfo.push(urlOrError);
                } else {
                    urlOrError = ['error', 'No url for playback.'];
                    songInfo.push(urlOrError);
                }
                songInfo.push(this.song.songTitle);
                this.$emit('songCellActivated',songInfo);

            }
        },
        computed: {},
        watch: {},

        /* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
        created() {},
        mounted() {},
        updated() {},
        destroyed() {}
    }
</script>

<style scoped>

	.grid-cell {
        /* display: grid; */
        display: flex;
        justify-content: center;
        flex-direction: column;
        grid-template-columns: 1fr 1fr;
        min-height: 100px;
    min-width: 100px;
		padding: 1vw 2vw;
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

	.grid-cell:hover {
		box-shadow: 0px 0px 125px 50px inset rgba(216, 183, 216, 0.753);
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


    </style>