import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	console.log('fetching status');
	const { status } = await fetch('/api/status').then((res) => res.json());
	console.log('status: %s', status);
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
