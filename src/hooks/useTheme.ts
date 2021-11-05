import { useCallback } from 'react';
import { useThemeDispatch, useThemeValue } from '../Theme/ThemeReducer';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
	const theme = useThemeValue();

	const themeDispatch = useThemeDispatch();

	const toggleTheme = useCallback(() => {
		if (theme === 'light') {
			themeDispatch({ type: 'TOGGLE_THEME_DARK', payload: 'dark' });
			return;
		}

		themeDispatch({
			type: 'TOGGLE_THEME_LIGHT',
			payload: 'light',
		});
	}, [theme, themeDispatch]);

	return { themeDispatch, theme, toggleTheme };
};
