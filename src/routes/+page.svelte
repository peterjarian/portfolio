<script lang="ts">
	import { PUBLIC_DISCORD_USER_ID } from '$env/static/public';
	import type { PageData } from './$types';
	export let data: PageData; // get data from load function
</script>

<head>
	<meta name="description" content="Software engineer and student at THUAS" />
	<meta name="author" content="Peter van der Heijden" />
	<title>Hey, I'm Peter</title>
</head>

<div class="container">
	<h1>Hey, I'm <span class="highlight">Peter</span>!</h1>
	<h2>Software engineer and student at THUAS</h2>
	<div class="status">
		<span class={data.status}></span>
		{data.status}
	</div>

	<div class="socials">
		<a href="mailto:contact@peterjarian.dev" target="_blank"><i class="fa-solid fa-envelope"></i></a>
		<a href="https://github.com/peter33130" target="_blank"><i class="fa-brands fa-github"></i></a>
		<a href="https://discord.com/users/{PUBLIC_DISCORD_USER_ID}" target="_blank">
			<i class="fa-brands fa-discord"></i>
		</a>
		<a href="https://www.linkedin.com/in/peter-van-der-heijden-bb1262302/"><i class="fa-brands fa-linkedin"></i></a>
	</div>
</div>

<style>
	.container {
		margin: 0 12px 0 12px;
	}

	.highlight {
		color: rgb(239 68 68);
	}

	.status {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 12px 5px 12px 5px;
		font-size: 15px;
		background-color: var(--offline-button);
		border: 2px;
		width: 110px;
		border-radius: 100px;
		margin: 30px 0 30px 0;
	}

	.online {
		width: 15px;
		height: 15px;
		margin-right: 6px;
		background-color: rgb(34 197 94);
		border-radius: 50px;
	}

	.offline {
		width: 15px;
		height: 15px;
		margin-right: 4px;
		background-color: rgb(150, 150, 150);
		border-radius: 50px;
	}

	.socials i {
		margin: 0 5px 0 5px;
		font-size: 30px;
		color: var(--primary);
	}
</style>
