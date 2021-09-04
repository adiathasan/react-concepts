import { ERoutes } from '../static/enums';

/**
 * Screens
 */
import FormExampleScreen from '../screens/FormScreen/FormExampleScreen';
import ClickOutside from '../screens/ClickOutside/ClickOutside';
import HomeScreen from '../screens/Home/HomeScreen';
import TreeFile from '../screens/TreeFile/TreeViewScreen';

export const routes = [
	{
		component: HomeScreen,
		path: '/',
		exact: true,
	},
	{
		component: FormExampleScreen,
		path: ERoutes.Form,
		exact: true,
	},
	{
		component: ClickOutside,
		path: ERoutes.ClickOutside,
		exact: true,
	},
	{
		component: TreeFile,
		path: ERoutes.TreeFile,
		exact: true,
	},
];
