import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getUserStatus } from '$lib/status';

export const GET: RequestHandler = async () => {
	const data = await getUserStatus();
	return json(data);
};
