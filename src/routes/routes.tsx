import {ERoutes} from '../static/enums';

/**
 * Screens
 */
import FormExampleScreen from '../screens/FormScreen/FormExampleScreen';
import ClickOutside from '../screens/ClickOutside/ClickOutside';
import HomeScreen from '../screens/Home/HomeScreen';
import TreeFile from '../screens/TreeFile/TreeViewScreen';
import StepExample from '../screens/StepMachine/StepExample';
import Me from "../screens/Me/Me";

export const routes = [
    {
        element: <HomeScreen/>,
        path: ERoutes.Home,
    },
    {
        element: <Me/>,
        path: ERoutes.Me,
    },
    {
        element: <FormExampleScreen/>,
        path: ERoutes.Form,
    },
    {
        element: <ClickOutside/>,
        path: ERoutes.ClickOutside,
    },
    {
        element: <StepExample/>,
        path: ERoutes.ReactStepMachine,
    },
    {
        element: <TreeFile/>,
        path: ERoutes.TreeView,
    },
];
