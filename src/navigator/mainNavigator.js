import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1988321Navigator from '../features/BlankScreen1988321/navigator';
import ArticleList85447Navigator from '../features/ArticleList85447/navigator';
import ArticleList85446Navigator from '../features/ArticleList85446/navigator';
import ArticleList85445Navigator from '../features/ArticleList85445/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1988321: { screen: BlankScreen1988321Navigator },
ArticleList85447: { screen: ArticleList85447Navigator },
ArticleList85446: { screen: ArticleList85446Navigator },
ArticleList85445: { screen: ArticleList85445Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
