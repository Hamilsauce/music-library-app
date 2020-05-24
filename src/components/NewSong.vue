<template>
	<div class="newSongPage">
		<header class="songDetailsHeader">
			<h2 class="newSongHeaderText">New Song</h2>
		</header>

		<section class="formContainer">
			<p class="form-header">Enter some detes about said song</p>
			<form class="newSongForm" @submit.prevent="submitNewSong">
				<label for="titleField" class="form-label">
					Title
					<input type="text" class="textField" name="titleField" v-model="newSong.songTitle" />
				</label>

				<label for="genreField" class="form-label">
					Genre
					<input type="text" class="textField" name="genreField" v-model="newSong.genre" />
				</label>

				<label for="artistField" class="form-label">
					Artist
					<input type="text" class="textField" name="artistField" v-model="newSong.artist" />
				</label>

				<label for="durationField" class="form-label">
					Duration
					<input type="text" class="textField" name="durationField" v-model="newSong.duration" />
				</label>

				<label for="audioField" class="form-label">
					Audio Url
					<input type="text" class="textField" name="audioField" v-model="newSong.audioUrl" />
				</label>
				<div class="descriptionContainer">
					<label for="descriptonField" class="form-label">Descripton</label>
					<textarea
						rows="4"
						cols="20"
						class="textField descriptonField"
						name="descriptonField"
						v-model="newSong.description"
					></textarea>
				</div>

				<section class="form-buttons">
					<div class="button-container">
						<input type="button" class="dummy button" value="Push" />
						<input type="submit" class="submitSong button" value="Submit" />
					</div>
				</section>
			</form>
		</section>
		<section class="footer"></section>
	</div>
</template>

<script>
import EventBus from "./eventBus.js";

export default {
	name: "NewSong",
	components: {},
	props: [],
	data() {
		return {
			message: "",
			newSong: {
				id: "",
				plays: 0,
				songTitle: "",
				genre: "",
				artist: "",
				duration: "",
				audioUrl: "",
				description: "",
				published: new Date().toLocaleDateString()
			}
		};
	},

	methods: {
		submitNewSong() {
			EventBus.$emit("newSongSubmitted", this.newSong);
			this.newSong = {
				id: "",
				plays: 0,
				songTitle: "",
				genre: "",
				artist: "",
				duration: "",
				audioUrl: "",
				description: "",
				published: new Date().toLocaleDateString()
			};
		}
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
.newSongPage {
	display: grid;
	grid-gap: 10px;
	width: 100%;
	margin: 0;
	/* height: 130vw; */
	/* border-radius: 5px; */
	border: 2px solid var(--mainBlue);
	background: var(--mainBlue);
	overflow: auto;
}

* {
	box-sizing: border-box;

	touch-action: manipulation;
}

.songDetailsHeader {
	/* height: 100%; */
	width: 100%;
	padding: 0;
	margin: auto;
	background: var(--mainPurple);
	border-radius: 7px 0px 0px 0px;
}

.header {
	/* display: grid; */
	padding: 0px;
	margin: 0;
	/* background: rgba(156, 100, 146, 1); */
}
.newSongHeaderText {
	font-weight: 400;
	letter-spacing: 8px;
	color: rgba(250, 250, 250, 1);
	padding: 5px;
	margin: 0;
}

.formContainer {
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	grid-gap: 10px;

	/* background: rgba(242, 245, 208, 0.5); */
	width: 100%;
	height: 100%;
	padding: 5px 0px;
	margin: 0;
	font-size: 1em;
}

.form-header {
	font-weight: 300;
	/* letter-spacing: 1px; */
	color: rgb(255, 255, 255);
	padding: 2px 5px 0px 5px;
	margin: 0px;
	font-size: 1em;
}
.newSongForm {
	display: grid;
	justify-content: center;
	width: 100%;
	max-width: 330px;
	padding: 5px;
	margin: auto;
	grid-gap: 10px;
}
.form-label {
	padding: 2px 5px 0px 5px;
	margin-top: 10px;
	margin-bottom: 0px;
	letter-spacing: 7px;
	font-size: 1.1em;
	font-weight: 300;
	color: rgba(236, 236, 236, 1);
}
.descriptionContainer {
	padding: 2px 5px 0px 5px;
	margin-top: 10px;
	margin-bottom: 0px;
	letter-spacing: 7px;
	font-size: 1.1em;
	font-weight: 300;
	color: rgba(236, 236, 236, 1);
}

.textField {
	box-sizing: border-box;
	border: 1px solid rgba(80, 80, 80, 0.2);
	/* border-radius: 3px; */
	font-size: 1.3em;
	font-weight: 300;
	color: rgba(80, 80, 80, 0.75);
	width: 80vw;
	max-width: 350px;
	margin: auto;

	padding: 7px;
}

.descriptionField {
	resize: none;
}
.form-buttons {
	box-sizing: border-box;
	display: block;
	font-size: 1.1em;
	width: 100%;
	margin: 0;
	color: white;
	padding: 2px 15px;
	border-top: 2px solid rgba(200, 190, 200, 0);
	/* border-radius: 2px 2px 8px 8px; */
}

.button-container {
	display: grid;
	justify-content: flex-end;
	grid-template-columns: 1fr 1fr;
	width: 100%;
	margin: 10px auto 0px auto;
	padding: 15px 5px;
}

.button {
	margin: 0px 20px;
	padding: 8px 12px;
	font-size: 1.3em;
	font-weight: 400;
	color: rgba(230, 231, 230, 0.9);
	background: rgba(190, 91, 91, 1);
	/* border-radius: 3px; */
	border: 1px solid rgba(230, 231, 230, 0);
}
.submitSong {
	background: rgba(91, 181, 91, 1);
}

/* .audioField {
					box-sizing: border-box;
					border: 1px solid rgba(80, 80, 80, 0.2);
					border-radius: 3px;
					font-size: 1.3em;
					font-weight: 300;
					color: rgba(80, 80, 80, 0.75);
					width: 325px;
					padding: 7px;
					margin: auto;
				} */
</style>