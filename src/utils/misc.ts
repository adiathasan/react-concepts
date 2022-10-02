export const joinRepo = (repo: string, file: string) => `${repo}/${file}`;

export const getUrlParam = (location: any, name: string) =>
	new URLSearchParams(location.search).get(name);

export const callAll = (...fns: Function[]) => (...values: any) => fns.map(fn => fn?.(...values))