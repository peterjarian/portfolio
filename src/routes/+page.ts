import type { PageLoad } from './$types';

export const prerender = true; // enable prerendering

export const load: PageLoad = async ({ fetch }) => {
	const { status } = await fetch('/api/status').then((res) => res.json());
	let statusTitle: 'online' | 'offline';
	switch (status) {
		case 'online':
			statusTitle = 'online';
			break;
		case 'dnd':
			statusTitle = 'online';
			break;
		case 'idle':
			statusTitle = 'online';
			break;
		default:
			statusTitle = 'offline';
			break;
	}

	return { status: statusTitle };
};
