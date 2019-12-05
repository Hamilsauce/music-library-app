<template>
        <div class="content">
            <h1> {{ message }} </h1>
        </div>
</template>

<script>
    export default {
        name: 'app-about',
        components: {},
        props: [],
        data() {
            return {
                message: 'poop'
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
	:root {
		--mainRed: #a04650;
		--mainBlue: #284b78;
		--transparentBlue: #c8d6f8b6;
		--mainPurple: #9c3a5f;
		--lightPurple: #ac89ac;
		--fadedPurple: #bba4bb;
		--mainWhite: #fffffa;
	}
    .content {
        width: 100%;
        height: 125vw;
        background: var(--mainBlue);
        border: 1px solid var(--lightPurple);
        border-radius: 5px;
    }
</style>