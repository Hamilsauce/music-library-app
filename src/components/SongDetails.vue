<template>
	<div class="details-container">
		<div class="SongDetails">
			<div class="header">Song Title stuff! Maybe put some toolbar stuff up here</div>
			<div class="detail detail1">
				<div class="cell-body">Song Details stuff1</div>
			</div>
			<div class="detail detail2">
				<div class="cell-body">Song Details stuff2</div>
			</div>
			<div class="detail detail3">
				<div class="cell-body">Song Details stuff3</div>
			</div>
			<div class="detail detail4">
				<div class="cell-body">Song Details stuff4</div>
			</div>
			<div class="footer"></div>
		</div>
	</div>
</template>

<script>
// import EventBus from '@/components/eventBus.js';

export default {
	name: "SongDetails",
	components: {},
	props: {
		// song: Object,
		// selectedSong: String
	},
	data() {
		return {
			// checkedSong: "",
			// audioUrl: "",
			// errorMsg: ""
		};
	},
	methods: {
		// cellActive() {
		// 	let songInfo = [];
		// 	let urlOrError = [];
		// 	if (this.song.hasOwnProperty("audioUrl")) {
		// 		urlOrError = ["url", this.cleanedAudioUrl];
		// 		songInfo.push(urlOrError);
		// 	} else {
		// 		urlOrError = ["error", "noUrl"];
		// 		songInfo.push(urlOrError);
		// 	}
		// 	songInfo.push(this.song.songTitle);
		// 	this.$emit("songCellActivated", songInfo);
		// },
		// showSongDetails() {
		// 	this.$emit("showSongDetails", this.song.songTitle);
		// }
	},
	computed: {},
	watch: {},

	created() {},
	mounted() {},
	updated() {},
	destroyed() {}
};
</script>

<style scoped>
* {
	--mainRed: #bc484e;
	--mainBlue: #284b78;
	--transparentBlue: #e0e7f771;
	--mainPurple: #9c3a5f;
	--lightPurple: #ac73ac;
	--fadedPurple: #bba4bb;
	--mainWhite: #fffffa;
	touch-action: manipulation;
	outline: none;
}

.details-container {
	box-sizing: border-box;
	display: grid;
	gap: 4px;
	grid-row-gap: 5px;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	max-height: fit-content;
	min-height: 100%;
	width: 100%;
	margin: auto;
	margin-top: 0px;
	padding: 2px;
	border-top: 2px solid var(--mainBlue);
	border-bottom: 2px solid var(--mainBlue);

	background: rgb(47, 59, 128);
	/* background:	var(--mainBlue) ; */
	box-shadow: 0px 0px 400px 50px inset #6148cec9;
	border-radius: 0px 0px 5px 5px;
}
.SongDetails {
	display: grid;
	/* grid-template-columns: 1fr 1fr; */
	grid-template-rows: 60px repeat(3, 1fr) 40px;
	gap: 5px;
	padding: 1vw;
	color: rgb(106, 107, 114);
	background: rgb(240, 233, 222);
	border-radius: 3px;
	border: 2px solid rgb(255, 255, 255);
	font-size: 1em;
	font-weight: 500;
	transition: 200ms box-shadow ease-out, 225ms background ease, 200ms border ease,
		100ms font-weight ease;
	user-select: none;
	overflow: hidden;
	grid-template-areas:
		"head head head head"
		"det1 det2 det2 det2"
		"det3 det3 det3 det3"
		"det4 det4 det4 det4"
		"foot foot foot foot";
}
.SongDetails:first-child {
	grid-column: 1 / -1;
}
.SongDetails:hover {
	box-shadow: 0px 0px 125px 25px inset rgba(255, 179, 16, 0.726);
	background: rgb(231, 255, 212);
	border: 2px solid white;
	cursor: pointer;
	transition: 0.45s;
}
.SongDetails:active {
	box-shadow: 0px 0px 100x 25px inset rgba(248, 248, 248, 0.548);
	background: rgba(157, 38, 180, 0.589);
	border: 2px solid white;
	font-weight: 600;
	cursor: pointer;
	color: white;
	text-shadow: none;
	transition: 0.6s;
}
.SongDetails:active div {
	text-shadow: none;
}

.header {
	grid-area: head;
	color: white;
	/* display: grid;
	grid-template-columns: 1fr 20px; */
	justify-content: space-between;
	margin: 0;
	/* height: 100%; */
	/* max-height: 75px; */
	width: 100%;
	padding-bottom: 5px;
	background: #4282d6c9;
	border: 1px solid rgba(255, 255, 255, 0.836);
	border-bottom: 2px solid rgba(255, 255, 255, 0.836);
	transition: 0.3s;
}
.header.active {
	color: white;
	box-shadow: 0px 0px 30px 5px inset hsla(207, 75%, 37%, 0.575);
	background: #e40ad2;
}
.header:hover {
	color: white;
	box-shadow: 0px 0px 30px 5px inset hsla(207, 75%, 37%, 0.575); /* background: #186ad4fd; */
}
.detail {
	padding-bottom: 5px;
	background: #4282d6c9;
	border: 1px solid rgba(255, 255, 255, 0.836);
	border-bottom: 2px solid rgba(255, 255, 255, 0.836);
	text-shadow: 0px 0px 2px white;
	transition: 0.3s;
}
.detail1 {
	grid-area: det1;
	background: #cf2f37d5;
}
.detail2 {
	grid-area: det2;
	background: #a53c64d5;
}
.detail3 {
	grid-area: det3;
	background: #a74b20ca;
}
.detail4 {
	grid-area: det4;
	background: #18a1a1d7;
}
.footer {
	grid-area: foot;
	background: #ca922ad5;
}
</style>
<!--


	.activeCell {
		background: rgba(255, 255, 255, 0.986);
	}


	.internal-grid {
		display: grid;
	}
	.cell-head {
		color: white;
		display: grid;
		grid-template-columns: 1fr 20px;
		justify-content: space-between;
		margin: 0;
		height: fit-content;
		width: 100%;
		padding-bottom: 5px;
		background: #4282d6;
		border: 1px solid rgba(255, 255, 255, 0.836);
		border-bottom: 2px solid rgba(255, 255, 255, 0.836);
		transition: 0.3s;
	}
	.activeCellHead {
		color: white;
		box-shadow: 0px 0px 30px 5px inset hsla(207, 75%, 37%, 0.575);
		background: #e40ad2;
	}
	.cell-head:hover {
		color: white;
		box-shadow: 0px 0px 30px 5px inset hsla(207, 75%, 37%, 0.575);
		/* background: #186ad4fd; */
	}
	.button-container {
		text-align: left;
	}
	.button-container > button {
		font-size: 0.8em;
		background: transparent;
		border: 0px;
		color: var(--mainBlue);
		cursor: pointer;
	}
	.buttonContainerHidden {
		opacity: 0;
	}
	.checkbox-container {
		text-align: right;
		margin: auto;
		height: 15px;
		width: 25px;
		padding-right: 5px;
	}
	.checkboxSvg {
		width: 15px;
		height: 15px;
		opacity: 0.8;
		padding-right: 10px;
	}
	.cell-foot {
		font-size: 0.8em;
	}

	.cell-head button {
		color: white;
	}

	p {
		margin: 0px 5px;
	} -->