import { getUserStatus } from '$lib/status';
import type { PageServerLoad } from './$types';

export const prerender = true; // enable prerendering

export const load: PageServerLoad = async () => {
	const { status } = await getUserStatus();
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
