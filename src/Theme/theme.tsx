export enum EThemes {
	BG_PRIMARY = 'bg-primary',
	BG_SECONDARY = 'bg-secondary',
	TEXT_PRIMARY = 'text-primary',
	BTN_PRIMARY = 'btn-primary',
	LINK_PRIMARY = 'link-primary',
}

export const common = {};

export const themes = {
	light: {
		...common,
		[EThemes.LINK_PRIMARY]: 'green',
		[EThemes.BTN_PRIMARY]: 'hsl(0, 0%, 10%)',
		[EThemes.BG_PRIMARY]: 'hsl(0, 0%,91%)',
		[EThemes.BG_SECONDARY]: 'hsl(0, 0%, 95%)',
		[EThemes.TEXT_PRIMARY]: 'hsl(0, 0%, 33%)',
	},
	dark: {
		...common,
		[EThemes.LINK_PRIMARY]: 'limegreen',
		[EThemes.BTN_PRIMARY]: 'hsl(0, 0%, 90%)',
		[EThemes.BG_PRIMARY]: 'hsl(0, 0%, 13%)',
		[EThemes.BG_SECONDARY]: 'hsl(0, 0%, 18%)',
		[EThemes.TEXT_PRIMARY]: 'hsl(0, 0%, 80%)',
	},
};

export interface IThemes {
	theme: typeof themes.light;
}
