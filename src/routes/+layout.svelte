<script lang="ts">
	import '@fontsource/inter';
	import '@fontsource/inter/700.css';
	import '@fontsource/inter/300.css';
	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<body><slot /></body>

<style>
	:global(:root) {
		--background: rgb(248, 248, 248);
		--primary: #000000;
		--offline-button: rgb(229 229 229);
	}

	:global(body) {
		max-width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		font-size: 17px;
		font-weight: 500;
		font-family: 'Inter';
		letter-spacing: 0.3px;
		user-select: none;
		-webkit-user-select: none;
		display: flex;
		color: var(--primary);
		background-color: var(--background);
		justify-content: center;
		align-items: center;
	}

	:global(h1) {
		margin: 0 0 5px;
		font-size: 60px;
	}

	:global(h2) {
		margin: 0;
		font-size: 30px;
		font-weight: 500;
		font-weight: 300;
	}

	:global(p) {
		margin-bottom: 0;
	}

	:global(a) {
		text-decoration: none;
		color: var(--primary);
	}

	@media (prefers-color-scheme: dark) {
		:root {
			--background: rgb(26, 26, 26);
			--primary: #ffffff;
			--highlight: rgb(239 68 68);
			--offline-button: rgb(46, 46, 46);
		}
	}
</style>
