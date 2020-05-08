<template>
	<div class="details-container" :song="$attrs[parseInt(songId)]">
		<div class="SongDetails" :class="{deleted: isDeleted }">
			<div class="header">Song Details</div>
			<div class="detail1">
				<div class="detail1-group duration-group">
					<span class="caption">Duration</span>
					<span class="cell-body">{{song.duration }}</span>
				</div>
				<div class="detail1-group plays-group">
					<span class="caption">Plays</span>
					<span class="cell-body">{{song.plays }}</span>
				</div>
			</div>
			<div class="detail detail2">
				<div class="detail-group id-group">
					<span class="caption">ID</span>
					<span class="cell-body">{{song.id}}</span>
				</div>
				<div class="detail-group title-group">
					<span class="caption">Title</span>
					<span class="cell-body">{{song.songTitle }}</span>
				</div>
			</div>

			<div class="detail detail3">
				<div class="detail-group published-group">
					<span class="caption">Published</span>
					<span class="cell-body">{{song.published}}</span>
				</div>
				<div class="detail-group genre-group">
					<span class="caption">Genre</span>
					<span class="cell-body">{{song.genre}}</span>
				</div>
				<div class="detail-group artist-group">
					<span class="caption">Artist</span>
					<span class="cell-body">{{song.artist}}</span>
				</div>
			</div>
			<div class="detail detail4">
				<div class="cell-body">Song Details stuff4</div>
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
		// songs: Array,
		songId: Number
	},
	data() {
		return {
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
		//! song object ended up coming through router (i think), dont need this now
		// thissong() {
		// 	let targetSong = this.songs.find(song => {
		// 		return parseInt(song.id) == parseInt(this.songId);
		// 	});
		// 	return targetSong;
		// }
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
	--mainRed: #bc484e;
	--mainBlue: #436ca1;
	--transparentBlue: #e0e7f771;
	--mainPurple: #9c3a5f;
	--lightPurple: #ac73ac;
	--fadedPurple: #bba4bb;
	--mainWhite: #fffffa;
	box-sizing: border-box;
	touch-action: manipulation;
	outline: none;
	font-size: 1.01em;
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
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 45px 1fr 2fr 3fr 38px;
	gap: 5px;
	padding: 1vw;
	color: rgb(255, 255, 255);
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
		"det1 det3 det3 det3"
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
	/* display: grid;
	grid-template-columns: 1fr 20px; */
	justify-content: space-between;
	margin: 0;
	font-size: 1.4em;
	width: 100%;
	padding: 5px;
	background: #3f6699;
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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 5px;
	background: #4282d6c9;
	border: 1px solid rgba(255, 255, 255, 0.836);
	border-bottom: 2px solid rgba(255, 255, 255, 0.836);
	/* text-shadow: 0px 0px 2px white; */
	word-wrap: break-word;
	transition: 0.3s;
}
.detail-group {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	/* align-content: flex-start; */
	/* align-items: flex-start; */
	padding: 0px 10px 0px 10px;
}
.detail1 {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 0 10px;
	grid-area: det1;
	background: #cf2f37d5;
	/* max-width: fit-content; */
}
.detail1-group {
	padding: 0px 0px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.detail2 {
	padding: 5px;
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
	border: 2px solid #d8a13bd5;
	text-align: center;
	background: #ca922ad5;
}
.action-item {
	margin: 0px 0;
	padding: 5px 30px;
	text-align: center;
	cursor: pointer;
}
.action-item:hover {
	background: #a3741dd5;
	box-shadow: 0px 0px 50px inset #ffcc6ee3;
	transition: 0.3s ease-in-out;
}
.action-item:active {
	background: #fabe50d5;
	box-shadow: 0px 0px 50px inset #c48f2ce3;
	transition: 0.2s ease-in-out;
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