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
		element: <HomeScreen />,
		path: ERoutes.Home,
	},
	{
		element: <FormExampleScreen />,
		path: ERoutes.Form,
	},
	{
		element: <ClickOutside />,
		path: ERoutes.ClickOutside,
	},
	{
		element: <TreeFile />,
		path: ERoutes.TreeView,
	},
];
