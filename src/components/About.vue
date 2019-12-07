<template>
        <div class="content">
            <!-- <h1> {{ message }} </h1> -->
            <iframe
                class="soundcloud"
                width="100%"
                height="450px"

                scrolling="no"
                frameborder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/808675707&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
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
        max-height: 100%;
        background: var(--mainBlue);
        border: 1px solid var(--lightPurple);
        border-radius: 0px 0px 5px 5px;
        margin: 2px;
        margin-bottom: 0;
    }
    .check-image {
        background: white;
        color: blue;
        fill: #9c3a5f;
    }


    .soundcloud {
        max-height:"600px";
    }
</style>