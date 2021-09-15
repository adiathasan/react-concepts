export const joinRepo = (repo: string, file: string) => `${repo}/${file}`;

export const getUrlParam = (location: any, name: string) =>
	new URLSearchParams(location.search).get(name);
