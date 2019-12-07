<template>
	<section class="toolbar" >
		<div class="top-bar"
            @click="toggleBottomBar"

        >
			<div class="top-bar-div title-container">{{ songTitle }}</div>
			<div>
                <select name="" id="" class="select-top">
                    <option value="">Open</option>
                    <option value="">Share</option>
                    <option value="">Save</option>
                    <option value="">Delete</option>
                </select>
            </div>
		</div>
		<div class="bottom-bar" v-show="expandBottomBar < 2">
			<div>More stuff</div>
			<div> more stuff</div>
			<div><input type="button" name="bottom-bar-button" class="bottom-bar-button" value="Upload"></div>
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

    }    ,
		data() {
			return {
                expandBottomBar: 2,
				songName: '',
                notification2: "Details...",
                eventInput: this.userInput
			};
		},

		methods: {
            toggleBottomBar() {
                    //this is a hacky dblClick workaround since dblclick isnt working...uses a counter to show or hide toolbar at 2 click
                    //intervals, starting at 2 and resetting at 4.
                this.expandBottomBar++;
                if (this.expandBottomBar == 4) {
                    this.expandBottomBar = 0;
                }
            },
            receiveUserInput() {
                EventBus.$on('userInputSubmit', data => {
                    console.log(data[0]);

                    this.inputData = data;
                    console.log(this.inputData[0]);

                })
            },
            updateSongTitle() {
                EventBus.$on('songActivated', songName => {
                    this.songName = songName;

                })
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
		watch: {},

		/* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
		created() {
            this.updateSongTitle();
        },
		mounted() {},
		updated() {},
		destroyed() {}
	};
</script>

<style scoped>
.toolbar {
    display: grid;
    grid-template-rows: 2;
    width: 97%;
    /* background: rgba(119, 52, 60, 0.561); */
    color: white;
    font-size: 0.8em;
    padding: 2px 0px;
    /* padding-bottom: 0px; */
    margin: 0px 5px;
    border: 1px solid rgba(190, 138, 138, 0.226);
    border-right: 1px solid  rgba(141, 60, 60, 0.219);
    border-left: 1px solid  rgba(141, 60, 60, 0.219);
		border-bottom: 1px solid var(--mainRed);
    /* border-bottom: 2px solid #93414A; */
    border-radius: 5px 5px 0px 0px;
       box-shadow:0px 0px 20px 10px inset rgba(136, 61, 61, 0.219);

}


.top-bar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1;
    padding: 2px 8px 0px 0px;
     font-size: 1em;
     border-radius: 5px 5px 0px 0px;
}
.top-bar-div{
    box-sizing: border-box;
    padding: 4px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-around;
    /* border-top: 1px solid rgba(121, 54, 54, 0.287); */
}

.title-container {
    grid-column: span 2;
}
.select-top {
   min-width: 80px;
    max-width: fit-content;
    text-align: center;
height: 100%;
    color: rgb(250, 236, 238);
    padding: 3px 0px 3px 0px;
    margin: 0;
    box-sizing: border-box;
    background: var(--mainRed);
    background: rgba(184, 52, 52, 0);
        border: 1px solid var(--mainRed);
    /* border-top: 1px solid rgba(70, 29, 29, 0.287); */
    /* border-bottom: 1px solid rgba(70, 29, 29, 0.287); */

}

select>option {
    text-align: center;
}
.bottom-bar {
    width: 100%;
    min-width: fit-content;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 1;
    /* background: rgba(172, 85, 93, 0.712); */
        /* border-top: 1px solid rgba(70, 29, 29, 0.287); */
    padding: 2px 0px 2px 0px;
    margin: 0;
}
.bottom-bar-button {
    background: rgb(47, 83, 149);
    font-size: 1em;
    border: 1px solid rgb(67, 87, 126);
    color: white;

    padding: 3px 5px;
}

</style>