<template>
	<transition name="fade">
		<div
			:style="{width: sidebarDisplayState === true ? '200px' : '0px' }"
			:class="{ sideBarDisable: disableState   }"
			id="sidebar-div"
			vue disable element
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
					<router-link to="/newsong" class="routerLink">New Song</router-link>
				</div>
				<div class="linkItem">
					<router-link to="/About" class="routerLink">About</router-link>
				</div>
			<div class="profile-link linkItem">
				<a href="https://github.com/Hamilsauce">github</a>
			</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import EventBus from './eventBus';
	export default {
		components: {},
		props: {
			sidebarDisplayState: Boolean
		},
		data() {
			return {
				disableState: false
			};
		},

		methods: {
			disableForDimmer() {
				EventBus.$on('dimmerActive',() => {
					this.disableState = true;
				})
			}
		},
		computed: {},
		watch: {},

		created() {},
		mounted() {
			this.disableForDimmer();
		},
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
		z-index: 3;
	}
	.disableState {
		width: 0px;
	}

	.routerLink {
		color: rgba(255, 255, 255, 0.692);
		text-decoration: none;
	}

	.links {
		padding: 5px 15px 5px 0px;
		font-size: 1em;
		letter-spacing: 0.1em;
		width: 0px;
		height: fit-content;
		text-align: right;
	}
	h3 {
		color: rgba(255, 255, 255, 0.568);
		padding: 5px 0px 0px 5px;
		margin: 5px auto 10px auto;
		border-bottom: 1px solid rgba(185, 136, 136, 0.527);
		font-size: 0.9em;
		text-align: left;

	}
	.linkItem {
		padding: 2px 5px 5px 5px;
		width: 100%;
		margin: 5px 0px;
		border-radius: 15px;
		transition: 0.4s;
	}

	.linkItem:hover {
		color: var(--mainRed);
		background: rgba(255, 255, 255, 0.425);
		border-radius: 15px;
	}
	.profile-link {
		margin-top: 30px;
			color: rgba(255, 255, 255, 0.637);
		text-decoration: none;
	}
	.profile-link>a {
		color: rgba(255, 255, 255, 0.637);
		text-decoration: none;
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