<template>
	<div class="main">
		<header class="header">
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
					class="audioField"
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

				<section class="footer">
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
		background: blue;
		/* background: var(--mainBlue); */
		width: 100%;
		margin: 0px auto;
		height: 130vw;
		border-radius: 5px;
		border: 1px solid var(--lightPurple);
	}

	* {
		box-sizing: border-box;

		touch-action: manipulation;
	}

	html,
	body {
		font-family: "Helvetica", sans-serif;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		width: 100%;
		/*height: 100%;*/
	}
	.main {
		display: grid;
		/*background: rgba(87, 121, 165, 0.986);*/
		grid-gap: 2px;
		/*justify-content: space-around;*/
		padding: 0px;
		margin: 0;
		width: 100%;
		align-content: center;
	}
	.header {
		display: grid;
		padding: 5px;
		margin: 0;
		background: rgba(156, 100, 146, 1);
	}
	.headerText {
		padding: 0px 15px;
		font-weight: 400;
		letter-spacing: 8px;
		color: rgba(250, 250, 250, 1);
	}
	.formContainer {
		display: grid;
		background: rgba(223, 225, 199, 0.5);
		width: 100%;
		padding: 5px 0px;
		margin: 0;
	}

	.form-header {
		/*width:100%;*/
		font-size: 1.1em;
		font-weight: 300;
		letter-spacing: 2px;
		color: r0ba(90, 90, 90, 1);
		padding: 2px 15px 0px 12px;
	}

	.footer {
		box-sizing: border-box;
		display: block;
		font-size: 1.1em;
		width: 100%;
		margin: 0;
		color: white;
		padding: 2px 15px;
		/*background: rgba(190, 190, 180, 0.9);*/
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
	.audioField {
		box-sizing: border-box;
		border: 1px solid rgba(80, 80, 80, 0.2);
		border-radius: 3px;
		font-size: 1.3em;
		font-weight: 300;
		color: rgba(80, 80, 80, 0.75);
		width: 325px;
		padding: 7px;
		margin: auto;
	}
	.newSongForm {
		display: grid;
		/*align-content: center;*/
		width: 100%;
		padding: 15px;
		margin: 0;
		grid-gap: 10px;
	}

	.form-label {
		padding: 2px 5px 0px 5px;
		margin-top: 4px;
		margin-bottom: 0px;
		letter-spacing: 7px;

		font-size: 1.2em;
		font-weight: 300;
		color: rgba(80, 80, 80, 0.9);
	}

	.textField {
		box-sizing: border-box;
		border: 1px solid rgba(80, 80, 80, 0.2);
		border-radius: 3px;
		font-size: 1.3em;
		font-weight: 300;
		color: rgba(80, 80, 80, 0.75);
		width: 325px;
		padding: 7px;
		margin: auto;
	}
</style>