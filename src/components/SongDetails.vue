<template>
	<div class="details-container" :song="$attrs[parseInt(songId)]">
		<div class="SongDetails" :class="{deleted: isDeleted }">
			<div class="header">Song Details</div>

			<div class="detail1">
				<div class="detail1-group duration-group">
					<div class="caption">Duration</div>
					<div class="cell-body">{{songData.duration }}</div>
				</div>

				<div class="detail1-group plays-group">
					<div class="caption">Plays</div>
					<div class="cell-body">{{songData.plays }}</div>
				</div>
			</div>

			<div class="detail detail2">
				<div class="detail-group id-group">
					<div class="caption">ID</div>
					<div class="cell-body">{{songData.id}}</div>
				</div>

				<div class="detail-group title-group">
					<div class="caption">Title</div>
					<div class="cell-body">{{songData.songTitle }}</div>
				</div>
			</div>

			<div class="detail detail3">
				<div class="detail-group published-group">
					<div class="caption">Published</div>
					<div class="cell-body">{{songData.published}}</div>
				</div>
				<div class="detail-group genre-group">
					<div class="caption">Genre</div>
					<div class="cell-body">{{songData.genre}}</div>
				</div>
				<div class="detail-group artist-group">
					<div class="caption">Artist</div>
					<div class="cell-body">{{songData.artist}}</div>
				</div>
			</div>
			<div class="detail-group description-group">
				<div class="upper caption">Description and URL</div>

				<div class="middle cell-body">{{songData.description || "Not a description to be had."}}</div>

				<div class="detail-group lower">
					<div class="lower caption">
						<label for="urlItem" class="urlLabel lower caption">
							Audio Source for
							<span class="italics">{{songData.songTitle}}</span>
						</label>
						<div class="lower cell-body urlContainer" name="urlContainer">{{songData.audioUrl}}</div>
					</div>
				</div>
			</div>

			<div class="action-list">
				<div class="action-item editButton">Edit</div>
				<div class="action-item newButton">New</div>
				<div class="action-item deleteButton" @click="deleteSong">Delete</div>
			</div>
		</div>
	</div>
</template>

<script>
import EventBus from "@/components/eventBus.js";

export default {
	name: "SongDetails",
	components: {},
	props: {
		song: Object,
		songId: Number
	},
	data() {
		return {
			editing: null,
			isDeleted: false,
			timesEmitted: 0
		};
	},
	methods: {
		deleteSong() {
			console.log(this.song.id);

			EventBus.$emit("deleteSong", this.song);
			this.isDeleted = true;
			this.timesEmitted += 1;
			console.log("in song view ", this.timesEmitted);
		}
	},
	computed: {
		//*Copies incoming song object data, making it available for modification so that users cna edit it
		songData() {
			let targetSong = this.song;
			return targetSong;
		}
	},
	watch: {},

	created() {},
	mounted() {},
	updated() {},
	destroyed() {}
};
</script>

<style scoped>
* {
	--mainRed: rgb(188, 72, 78);
	--mainBlue: #436ca1;
	--transparentBlue: #e0e7f771;
	--mainPurple: #9c3a5f;
	--lightPurple: #ac73ac;
	--fadedPurple: #bba4bb;
	--mainWhite: #fffffa;
	box-sizing: border-box;
	touch-action: manipulation;
	outline: none;
	font-size: 1em;
}

.details-container {
	box-sizing: border-box;
	/* display: grid; */
	/* gap: 0px; */
	/* grid-row-gap: 0px; */
	/* grid-template-columns: 1fr; */
	/* grid-template-rows: auto; */
	/* min-height: 100%; */
	/* max-height: 520px; */
	width: 100%;
	margin: 0px;
	margin-top: 0px;
	padding: 0px;
	border-top: 1px solid var(--mainBlue);
	border-bottom: 1px solid var(--mainBlue);

	box-shadow: 0px 0px 400px 50px inset #6148cec9;
	border-radius: 0px 0px 5px 5px;
}
.SongDetails {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 33px 1fr 2fr 1fr 1fr 38px;
	gap: 1px;
	padding: 1px;
	color: rgb(66, 65, 65);
	background: rgb(240, 233, 222);
	border-radius: 3px;
	border: 1px solid rgb(255, 255, 255);
	font-size: 0.85em;
	max-height: 515px;
	font-weight: 400;
	transition: 200ms box-shadow ease-out, 225ms background ease, 200ms border ease,
		100ms font-weight ease;
	user-select: none;
	overflow: hidden;
	grid-template-areas:
		"head head head head"
		"det2 det2 det2 det2"
		"det3 det3 det3 det3"
		"det1 det1 det1 det1"
		"det4 det4 det4 det4"
		"foot foot foot foot";
}
.SongDetails:first-child {
	grid-column: 1 / -1;
}
/* .SongDetails:hover {
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
} */
.SongDetails:active div {
	text-shadow: none;
}

.header {
	grid-area: head;
	color: white;
	letter-spacing: 2px;

	justify-content: space-between;
	margin: 0;
	font-size: 1.2em;
	font-weight: 500;
	width: 100%;
	padding: 5px;
	background: #3f6699;
	border: 1px solid rgba(255, 255, 255, 0.836);
	border-bottom: 2px solid rgba(255, 255, 255, 0.836);
	transition: 0.3s;
}
.header.active {
	/* color: white; */
	box-shadow: 0px 0px 30px 5px inset hsla(207, 75%, 37%, 0.575);
	background: #e40ad2;
}
.header:hover {
	color: white;
	box-shadow: 0px 0px 30px 5px inset hsla(207, 75%, 37%, 0.575); /* background: #186ad4fd; */
}
.detail {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 5px;
	/* background: #4282d6c9; */
	border: 1px solid rgba(255, 255, 255, 0.836);
	border-bottom: 2px solid rgba(255, 255, 255, 0.836);
	word-wrap: break-word;
	transition: 0.3s;
}
.caption {
	font-weight: 500;
	height: 100%;
	/* padding: 5px; */
}
.detail-group {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: flex-start;
	align-items: flex-start;
	/* padding: 0px 10px 0px 10px; */
}
.detail1 {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 0 10px;
	grid-area: det1;
	/* background: #cf2f37d5; */
}
.detail1-group {
	padding: 0px 0px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.detail2 {
	padding: 5px;
	grid-area: det2;
	/* background: #a53c64d5; */
}
.detail3 {
	grid-area: det3;
	/* background: #a74b20ca; */
}
.description-group {
	grid-area: det4;
	/* background: #18a1a1d7; */
	padding: 0px 5px;
	text-align: left;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 30px 1fr 1fr;
	gap: 2px;
	border: 1px solid rgba(255, 255, 255, 0.644);
	grid-template-areas:
		"u"
		"m"
		"l";
}
.detail-group-upper {
	grid-area: u;
	/* display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 25px 3fr 1fr;
	gap: 2px;
	border: 1px solid rgba(255, 255, 255, 0.644); */

	height: 100%;
	width: 100%;
	margin: auto;
	text-align: center;
}
.urlContainer {
	width: 100%;
	height: auto;
	margin-top: 5px;
	margin: 0;
	padding: 0px;
	text-align: left;
}
.upper {
	/* background: rgba(23, 95, 161, 0.829); */
	/* padding: 15px auto; */
	/* color: rgba(245, 245, 245, 0.966); */
	border-top: 2px solid rgba(250, 250, 250, 0.719);
	text-align: left;
	letter-spacing: 2px;
	padding: 0;
	/* font-size: 1.1em;
	font-weight: 500; */
}
.detail-group-lower {
	grid-area: l;
	text-align: left;
	/* line-height: 5px; */
	/* padding: 0; */
}
.description-middle {
	text-align: left;
	grid-area: m;
}
/* .lower.caption {
	padding: 0;
	text-align: left;
} */
.urlLabel {
	padding: 5px 0px;
}
.editButton {
	border-right: 1px solid rgba(255, 255, 255, 0.404);
}
.newButton {
}

.deleteButton {
	/* padding: 0px 5px; */
	border-left: 1px solid rgba(255, 255, 255, 0.404);
}
.deleted {
	opacity: 0.6;
	transition: 1s;
}
.action-list {
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0px;
	margin: 0;
	justify-content: space-evenly;
}
.action-list {
	grid-area: foot;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	border: 2px solid #cfc8bcd5;
	text-align: center;
	background: #ca922ad5;
	/* background: #ca922ad5; */
}
.action-item {
	margin: 0px 0;
	padding: 5px 30px;
	text-align: center;
	cursor: pointer;
}
.action-item:hover {
	background: rgba(23, 62, 145, 0.733);
	box-shadow: 0px 0px 50px inset #ffcc6ee3;
	transition: 0.3s ease-in-out;
}
.action-item:active {
	background: #fabe50d5;
	box-shadow: 0px 0px 50px inset #c48f2ce3;
	transition: 0.2s ease-in-out;
}
.urlLabel {
	font-style: italic;
	font-weight: 00;
	margin-bottom: 5px;
	line-height: 3px;
	padding: 0;
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