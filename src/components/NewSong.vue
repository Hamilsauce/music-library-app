<template>
        <div class="main">
            <h2> {{ message }} </h2>
        </div>
</template>

<script>
    export default {
        name: 'NewSong',
        components: {},
        props: [],
        data() {
            return {
                message: ''
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

    .main {
        background: var(--mainBlue);
        width: 100%;
        margin: 0px auto;
        height: 130vw;
        border-radius: 5px;
        border: 1px solid var(--lightPurple);
    }
    </style>