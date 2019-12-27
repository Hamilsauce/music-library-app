<template>
	<transition name="fade">
		<div
			:style="{width: sidebarDisplayState === true ? '200px' : '0px' }"
			id="sidebar-div"
			class="sidebarShown"
		>
			<div
				:style="{width: sidebarDisplayState === true ? '200px' : '0px' }"
				v-show="sidebarDisplayState === true"
				class="links"
			>
				<h3>Nav</h3>
				<div class="linkItem">
					<router-link class="routerLink" to="/">Library</router-link>
				</div>
				<div class="linkItem">
					<router-link to="/About" class="routerLink">About</router-link>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: "Sidebar",
		components: {},
		props: {
			sidebarDisplayState: Boolean
		},
		data() {
			return {};
		},

		methods: {},
		computed: {},
		watch: {},

		created() {},
		mounted() {},
		updated() {},
		destroyed() {}
	};
</script>

<style scoped>
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
		transition: opacity 1s, width 1s;
		opacity: 0;
		width: 0;
	}
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

	.sidebarShown {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 0px;
		padding-top: 5px;
		margin: 0px auto;
		background: var(--mainRed);
		border-radius: 0px 0px 5px;
		/* border-right: 1px solid rgba(190, 138, 138, 0.315); */
		overflow: hidden;
		transition: 0.5s;
		touch-action: manipulation;
	}
	h3 {
		color: rgba(255, 255, 255, 0.712);
		padding: 5px 0px 3px 0px;
		margin: 5px auto 10px auto;
		border-bottom: 1px solid rgba(185, 136, 136, 0.527);
	}

	.routerLink {
		color: rgba(255, 255, 255, 0.637);
		text-decoration: none;
	}

	.links {
		padding: 3px 15px 3px 0px;
		font-size: 1.2em;
		letter-spacing: 0.1em;
		width: 0px;
		text-align: center;
	}

	.linkItem {
		padding: 0px 5px;
		width: 100%;
		margin: 5px 0px;
		border-radius: 15px;
		transition: 0.4s;
	}

	.linkItem:hover {
		color: var(--mainRed);
		background: rgba(255, 255, 255, 0.657);
		border-radius: 15px;
	}

	.linkItem:active {
		color: var(--mainRed);
	}

	.routerLink:hover {
		color: var(--mainRed);
		font-weight: bold;
	}

	.routerLink:active {
		color: var(--mainRed);
		font-weight: bold;
	}
</style>