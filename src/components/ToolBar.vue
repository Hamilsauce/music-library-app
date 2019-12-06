<template>
	<section class="toolbar" >
		<div class="top-bar"
            @click="toggleBottomBar()"

        >
			<div class="top-bar-div">{{ notification1 }}</div>
			<div class="top-bar-div">{{ userInput }}</div>
			<div>
                <select name="" id="" class="select-top">
                    <option value="">Open</option>
                    <option value="">Share</option>
                    <option value="">Save</option>
                    <option value="">Delete</option>
                </select>
            </div>
		</div>
		<div class="bottom-bar" v-show="expandBottomBar > 0">
			<div>More stuff</div>
			<div> more stuff</div>
			<div><input type="button" name="bottom-bar-button" class="bottom-bar-button" value="Upload"></div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "ToolBar",
		components: {},
		props: {
            userInput: String
    }    ,
		data() {
			return {
                expandBottomBar: 0,
				notification1: "Song title",
				notification2: "Details..."
			};
		},

		methods: {
            toggleBottomBar() {
                this.expandBottomBar++;
                if (this.expandBottomBar === 3) {

                    this.expandBottomBar = 0;
                }
            }
        },
		computed: {},
		watch: {},

		/* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
		created() {},
		mounted() {},
		updated() {},
		destroyed() {}
	};
</script>

<style scoped>
.toolbar {
    display: grid;
    grid-template-rows: 2;
    background: rgba(119, 52, 60, 0.561);
    color: white;
    font-size: 0.8em;
    padding: 0px;
    /* padding-bottom: 0px; */
    margin: 0px 3px;
    border: 1px solid rgba(190, 138, 138, 0.479);
    border-bottom: 2px solid #93414A;
    border-radius: 5px 5px 0px 0px;

}


.top-bar {
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1;
    padding: 2px 5px;
}
.top-bar-div{
    box-sizing: border-box;
    padding: 4px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: left;
}
.select-top {
    width: 100%;
    max-width: 125px;
    text-align: center;
    font-size: 1em;
    color: white;
    padding: 3px 0px 3px 0px;
    margin: 0;
    box-sizing: border-box;
    background: #893C45;
        border: 1px solid#893C45;
    /* border-top: 2px solid rgba(216, 212, 212, 0.349); */
    border-bottom: 2px solid rgba(70, 29, 29, 0.287);

}

select>option {
    text-align: center;
}
.bottom-bar {
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
    grid-template-rows: 1;
    background: rgba(100, 51, 57, 0.815);
    padding: 3px;
}
.bottom-bar-button {
    background: rgb(47, 83, 149);
    font-size: 1em;
    border: 1px solid rgb(67, 87, 126);
    color: white;

    padding: 3px 5px;
}

</style>