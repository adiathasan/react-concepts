import { Theme } from '../hooks/useTheme';
import { useStore, useStoreDispatch } from '../store/StoreProvider';

export type ThemeActions =
	| { type: 'TOGGLE_THEME_LIGHT'; payload: 'light' }
	| { type: 'TOGGLE_THEME_DARK'; payload: 'dark' };

export const themeReducer = (state: Theme, action: ThemeActions): Theme => {
	switch (action.type) {
		case 'TOGGLE_THEME_LIGHT':
			return action.payload;
		case 'TOGGLE_THEME_DARK':
			return action.payload;
		default:
			return state;
	}
};

export const useThemeDispatch = () => {
	return useStoreDispatch<ThemeActions>();
};

export const useThemeValue = () => {
	return useStore<Theme>();
};
