import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Main from "./pages/inicial";
import Login from "./pages/login";
import Pets from "./pages/pets";

export default createAppContainer(
    createStackNavigator(
        {
            Home: Main,
            Login: Login,
            Pets: Pets,
        },
        {
            initialRouteName: 'Home',
        }
    ),
);