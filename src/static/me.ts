import { joinRepo } from '../utils/misc';
import { ECodeLinks, EComponentNames, ERoutes } from './enums';

export const GITHUB = 'https://github.com/adiathasan';

export const REPO =
	'https://github.com/adiathasan/react-concepts/blob/master/src';

export const patternLinks = [
	{
		title: EComponentNames.Form,
		code: joinRepo(REPO, ECodeLinks.Form),
		link: ERoutes.Form,
		isExternal: false,
		enabled: true,
	},
	{
		title: EComponentNames.ClickOutside,
		code: joinRepo(REPO, ECodeLinks.ClickOutside),
		link: ERoutes.ClickOutside,
		isExternal: false,
		enabled: true,
	},
	{
		title: EComponentNames.TreeView,
		code: joinRepo(REPO, ECodeLinks.TreeView),
		link: ERoutes.TreeFile,
		isExternal: false,
		enabled: false,
	},
	{
		title: 'more-pattern (coming...)',
		code: GITHUB,
		link: '',
		isExternal: true,

		enabled: true,
	},
];
