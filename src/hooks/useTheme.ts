import { useState } from 'react';

export type Theme = 'light' | 'dark';

export const useTheme = (initTheme: Theme = 'dark') => {
	const [theme, setTheme] = useState(() => initTheme);

	const toggleTheme = () =>
		setTheme((old) => (old === 'dark' ? 'light' : 'dark'));

	return { toggleTheme, theme };
};
