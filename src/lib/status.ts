import { PUBLIC_DISCORD_USER_ID } from '$env/static/public';
import type { RawApiResponse } from './types';

export async function getRawStatus(): Promise<RawApiResponse> {
	const apiUrl = `https://dcbadge.limesquash.limes.pink/md-shield/json?u=${PUBLIC_DISCORD_USER_ID}`;
	const data: RawApiResponse = await fetch(apiUrl).then((res) => res.json());
	return data;
}

export async function getUserStatus(): Promise<{ status: 'dnd' | 'online' | 'idle' | 'offline' }> {
	const data = await getRawStatus();
	return { status: data.p === 'do not disturb' ? 'dnd' : data.p };
}
