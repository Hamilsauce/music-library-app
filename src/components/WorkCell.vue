<template>
        <div class="grid-cell">
            <p> {{ song.songTitle }} </p>
            <p> {{ message }} </p>
            <p> {{ message }} </p>
        </div>
</template>

<script>
    export default {
        name: 'WorkCell',
        components: {},
        props: {
            song: Object
        },
        data() {
            return {
                message: 'sup cunts'
            }
        },

        methods: {},
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        min-height: 100px;
    min-width: 100px;
		padding: 1vw 2vw;
		color: rgb(106, 107, 114);
		background: rgb(255, 255, 250);
		border-radius: 3px;
		border: 2px solid rgba(255, 255, 255, 0);
		font-size: 1.2em;
		font-weight: 600;
		transition: 150ms box-shadow ease-in-out, 300ms background ease,
			200ms border ease, 100ms font-weight ease;
        user-select: none;
        overflow: auto;
	}

	.grid-cell:hover {
		box-shadow: 0px 0px 100px 30px inset var(--lightPurple);
		background: rgba(255, 255, 255, 0.815);
		border: 2px solid white;
		font-weight: 600;
		cursor: pointer;
		color: white;
	}

	.grid-cell:active {
		box-shadow: 0px 0px 125px 40px inset rgba(216, 183, 216, 0.753);
		background: rgba(201, 105, 180, 0.712);
		border: 2px solid white;
		font-weight: 600;
		cursor: pointer;
		color: white;
    }


    </style>