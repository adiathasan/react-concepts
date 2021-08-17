import { ERoutes } from './enums';

export const GITHUB = 'https://github.com/adiathasan';

export const Form =
	'https://github.com/adiathasan/react-concepts/blob/master/src/components/Form/hook/useForm.tsx';

export const ClickOutside =
	'https://github.com/adiathasan/react-concepts/blob/master/src/components/ClickOutsideWrapper';

export const patternLinks = [
	{
		title: 'form-hook-pattern',
		code: Form,
		link: ERoutes.Form,
		isExternal: false,
	},
	{
		title: 'click-outside',
		code: ClickOutside,
		link: ERoutes.ClickOutside,
		isExternal: false,
	},
	{
		title: 'more-pattern (coming...)',
		code: GITHUB,
		link: '',
		isExternal: true,
	},
];
