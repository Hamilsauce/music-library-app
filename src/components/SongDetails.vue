<template>
	<div class="details-container" :song="$attrs[parseInt(songId)]">
		<div class="deletePrompt" v-if="showDeletePrompt">
			<!-- :class="{deleted: showDeletePrompt === true }" -->
			<div class="prompt-text">Delete Song?</div>
			<div class="prompt-buttons">
				<input type="button" value="Ok" class="prompt-button confirm-button" @click="deleteSong" />
				<input type="button" value="No" class="prompt-button cancel-button" @click="toggleDeletePrompt" />
			</div>
		</div>
		<div class="dimmer" v-if="showDeletePrompt"></div>

		<div class="SongDetails" :class="{deleted: isDeleted }">
			<div class="header">Song Details</div>

			<div class="detail detail1">
				<div class="detail1-group duration-group">
					<div class="caption">Duration</div>
					<div class="cell-body" v-if="editing === false">{{songData.duration }}</div>
					<input
						v-if="editing === true"
						v-model="songData.duration"
						type="text"
						name="duration-input"
						id="duration-input"
						class="duration-input"
					/>
				</div>

				<div class="detail1-group plays-group">
					<div class="caption">Plays</div>
					<div class="cell-body" v-if="editing === false">{{songData.plays }}</div>
					<input
						v-model="songData.plays"
						v-if="editing === true"
						type="text"
						name="plays-input"
						id="plays-input"
						class="plays-input"
					/>
				</div>
			</div>

			<div class="detail detail2">
				<div class="detail-group id-group">
					<div class="caption">ID</div>
					<div class="cell-body" v-if="editing === false">{{songData.id}}</div>
					<input
						v-model="songData.id"
						v-if="editing === true"
						type="text"
						name="id-input"
						id="id-input"
						class="id-input"
					/>
				</div>

				<div class="detail-group title-group">
					<div class="caption">Title</div>
					<div class="cell-body" v-if="editing === false">{{songData.songTitle }}</div>
					<input
						v-model="songData.songTitle"
						v-if="editing === true"
						type="text"
						name="songTitle-input"
						id="songTitle-input"
						class="songTitle-input"
					/>
				</div>
			</div>

			<div class="detail detail3">
				<div class="detail-group published-group">
					<div class="caption">Published</div>
					<div class="cell-body" v-if="editing === false">{{songData.published}}</div>
					<input
						v-model="songData.published"
						v-if="editing === true"
						type="text"
						name="published-input"
						id="published-input"
						class="published-input"
					/>
				</div>
				<div class="detail-group genre-group">
					<div class="caption">Genre</div>
					<div class="cell-body" v-if="editing === false">{{songData.genre}}</div>
					<input
						v-model="songData.genre"
						v-if="editing === true"
						type="text"
						name="genre-input"
						id="genre-input"
						class="genre-input"
					/>
				</div>
				<div class="detail-group artist-group">
					<div class="caption">Artist</div>
					<div class="cell-body" v-if="editing === false">{{songData.artist}}</div>
					<input
						v-model="songData.artist"
						v-if="editing === true"
						type="text"
						name="artist-input"
						id="artist-input"
						class="artist-input"
					/>
				</div>
			</div>
			<div class="detail detail4">
				<div class="detail-group description-group">
					<div class="upper caption">Description</div>
					<div
						class="description-content cell-body"
						v-if="editing === false"
					>{{songData.description || "Not a description to be had."}}</div>
					<input
						v-else-if="editing === true"
						type="text"
						v-model="songData.description"
						name="description-input"
						id="description-input"
						class="description-input"
					/>
				</div>

				<div class="detail-group url-group">
					<div class="urlLabel lower caption">Audio Source</div>
					<!-- <div class="middle cell-body">{{songData.description || "Not a description to be had."}}</div> -->
					<div
						v-if="editing === false"
						class="lower cell-body urlContainer"
						name="urlContainer"
					>{{songData.audioUrl}}</div>
					<input
						v-else-if="editing === true"
						v-model="songData.audioUrl"
						type="text"
						name="audioUrl-input"
						id="audioUrl-input"
						class="audioUrl-input"
					/>
				</div>
			</div>

			<div class="action-list">
				<div class="action-item editButton" @click="toggleEditMode">{{editButtonText}}</div>
				<div class="action-item newButton" @click="handleNewSongClick">New</div>
				<div class="action-item deleteButton" @click="toggleDeletePrompt">Delete</div>
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
			editing: false,
			editButtonText: "Edit",
			showDeletePrompt: false,
			isDeleted: false,
			timesEmitted: 0
		};
	},
	methods: {
		deleteSong() {
			EventBus.$emit("deleteSong", this.song);
			this.isDeleted = true;
			this.timesEmitted += 1;
			// console.log("in song view ", this.timesEmitted);
		},
		toggleDeletePrompt() {
			this.showDeletePrompt = !this.showDeletePrompt;
		},
		toggleEditMode() {
			this.editing = !this.editing;
			if (this.editing) {
				this.editButtonText = "Save";
			} else {
				EventBus.$emit("updateSongDetails", this.songData);
				this.editButtonText = "Edit";
			}
		},
		handleNewSongClick() {
			this.showDeletePrompt = !this.showDeletePrompt;
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
	position: relative;
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
	grid-template-columns: 1fr;
	grid-template-rows: 33px 1fr 2fr 1fr 1fr 34px;
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
.dimmer {
	position: absolute;
	width: 100%;
	height: 100%;
	background: rgba(241, 239, 239, 0.377);
	z-index: 1;
}
.deletePrompt {
	position: absolute;
	top: 40%;
	left: 20%;
	width: 200px;
	height: 80px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 5px 15px;
	border: 2px double rgba(255, 255, 255, 0.698);
	border-radius: 5px;
	/* border-bottom: 2px solid rgba(255, 255, 255, 0.836); */
	box-shadow: 0px 3px 15px 2px rgb(97, 97, 97);
	background: var(--mainRed);
	transition: 0.3s;
	z-index: 2;
}
.prompt-buttons {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding: 5px;
}
.prompt-button {
	padding: 3px 15px;
	background: var(--mainBlue);
	color: white;
	box-shadow: 0px 0px 2px 0px inset rgba(241, 239, 239, 0.377);
	border: 2px solid rgba(240, 240, 240, 0.699);
	border-radius: 4px;
	transition: 0.2s;
	cursor: pointer;
}
.prompt-button:hover {
	background: var(--mainBlue);
	color: white;
	box-shadow: 0px 0px 2px 0px inset rgba(241, 239, 239, 0.377);
	border: 2px solid rgba(240, 240, 240, 0.699);
	transform: scale(1.02);
}
.prompt-button:active {
	background: var(--mainBlue);
	color: white;
	box-shadow: 0px 0px 5px 0px inset rgba(241, 239, 239, 0.699);
	border: 2px solid rgba(240, 240, 240, 0.699);
	transform: scale(0.98);
}

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
	padding: 5px 15px;
	border: 1px solid rgba(255, 255, 255, 0.836);
	border-bottom: 2px solid rgba(255, 255, 255, 0.836);
	word-wrap: break-word;
	transition: 0.3s;
	user-select: text;
}
.caption {
	font-weight: 500;
	height: 100%;
}
.detail-group {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.detail1 {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	grid-area: det1;
}
.detail1-group {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.detail2 {
	grid-area: det2;
}
.detail3 {
	grid-area: det3;
}
.detail4 {
	grid-area: det4;
	text-align: left;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 7px;
	border: 1px solid rgba(255, 255, 255, 0.644);
	grid-template-areas:
		"u"
		"l";
}

.description-group {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: fit-content;
}
.description-content {
	font-size: 0.9em;
}
.upper.caption {
	text-align: left;
	letter-spacing: 2px;
	height: fit-content;
	padding: 0;
	margin-bottom: 3px;
}

.url-group {
	grid-area: l;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	text-align: left;
	height: 100%;
	width: 100%;
	margin: 5px auto 5px auto;
	height: fit-content;
}
.urlLabel {
	letter-spacing: 2px;
	margin-bottom: 3px;
}
.urlContainer {
	width: 100%;
	height: fit-content;
	font-size: 0.9em;
}

.editButton {
	border-right: 1px solid rgba(255, 255, 255, 0.404);
}
.newButton {
}

.deleteButton {
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
	background: #4282d6;
	color: white;
	/* background: #ca922ad5; */
}
.action-item {
	margin: 0px 0;
	padding: 5px 25px;
	text-align: center;
	cursor: pointer;
	font-weight: bold;
}
.action-item:hover {
	background: rgba(224, 228, 236, 0.733);
	box-shadow: 0px 0px 15px inset #a390bb;
	transition: 0.3s ease-in;
}
.action-item:active {
	background: #f0e9de;
	box-shadow: 0px 0px 15px 1px inset rgba(185, 185, 185, 0.733);
	transition: 0.2s ease-out;
}
</style>
