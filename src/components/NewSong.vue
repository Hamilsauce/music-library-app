<template>
	<div class="main">
		<header class="songDetailsHeader">
			<h2 class="headerText">New Song</h2>
		</header>

		<section class="formContainer">
			<p class="form-header">Enter some detes about said song</p>
			<form class="newSongForm">
				<label
					for="titleField"
					class="form-label"
				>Title</label>
				<input
					type="text"
					class="textField"
					name="titleField"
				>

				<label
					for="genreField"
					class="form-label"
				>Genre</label>
				<input
					type="text"
					class="textField"
					name="genreField"
				>

				<label
					for="artistField"
					class="form-label"
				>Artist</label>
				<input
					type="text"
					class="textField"
					name="artistField"
				>

				<label
					for="durationField"
					class="form-label"
				>Duration</label>
				<input
					type="text"
					class="textField"
					name="durationField"
				>

				<label
					for="audioField"
					class="form-label"
				>Audio Url</label>
				<input
					type="text"
					class="textField"
					name="audioField"
				>

				<label
					for="descriptonField"
					class="form-label"
				>Descripton</label>
				<textarea
					rows="4"
					cols="20"
					class="textField descriptonField"
					name="descriptonField"
				>
        </textarea>

				<section class="form-buttons">
					<div class="button-container">
						<input
							type="button"
							class="dummy button"
							value="Push"
						>
						<input
							type="submit"
							class="submitSong button"
							value="Submit"
						>
					</div>
				</section>
			</form>
		</section>
		<section class="footer">

		</section>
	</div>
</template>

<script>
	export default {
		name: "NewSong",
		components: {},
		props: [],
		data() {
			return {
				message: ""
			};
		},

		methods: {},
		computed: {},
		watch: {},

		/* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
		created() {},
		mounted() {},
		updated() {},
		destroyed() {}
	};
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
		display: grid;
		/* grid-gap: 10px; */
		width: 100%;
		margin: 0;
		height: 130vw;
		border-radius: 5px;
		border: 2px solid var(--mainBlue);
		background: var(--mainBlue);
		overflow: auto;
	}

	* {
		box-sizing: border-box;

		touch-action: manipulation;
	}

	.songDetailsHeader {
		height: 100%;
		padding: 0;
		margin: 0px auto;
	}

	.header {
		/* display: grid; */
		padding: 0px;
		margin: 0;
		background: rgba(156, 100, 146, 1);
	}
	.headerText {
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

		background: rgba(242, 245, 208, 0.5);
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
		font-size: 1em;
	}
	.newSongForm {
		display: grid;
		justify-content: center;
		width: 100%;
		max-width: 330px;
		padding: 5px;
		margin: auto;
		grid-gap: 5px;
	}
	.form-label {
		padding: 2px 5px 0px 5px;
		margin-top: 10px;
		margin-bottom: 0px;
		letter-spacing: 7px;
		font-size: 1.1em;
		font-weight: 300;
		color: rgba(236, 236, 236,1);
	}

	.textField {
		box-sizing: border-box;
		border: 1px solid rgba(80, 80, 80, 0.2);
		border-radius: 3px;
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
		border-radius: 2px 2px 8px 8px;
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
		border-radius: 3px;
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