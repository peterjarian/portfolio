export interface RawApiResponse {
	t: `${string}#${string}`;
	p: 'do not disturb' | 'online' | 'idle' | 'offline';
}
