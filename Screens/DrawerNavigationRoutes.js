import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Settings from '../Screens/Settings';
import Sidebar from './Components/Sidebar';
import Details from '../Screens/Details';


const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DetailsScreenStack = ({ navigation }) => {
    return (
        <stack.Navigator initialRouteName="Details">
            <stack.Screen
                name="Details"
                component={Details}
                options={{
                    title: 'Details',

                }} />
        </stack.Navigator>
    );
};

const settingScreenStack = ({ navigation }) => {
    return (
        <stack.Navigator initialRouteName="Settings">
            <stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: 'Settings',
                }} />

        </stack.Navigator>
    );
};

const DrawerNavigationRoutes = (props) => {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#cee1f2',
                color: '#cee1f2',
                itemStyle: { marginVertical: 5, color: 'white' },
            }}
            screenOptions={{ headerShown: false }}
            drawerContent={Sidebar}>
            <Drawer.Screen
                name="DetailsScreenStack"
                options={{ drawerLabel: 'Products' }}
                component={DetailsScreenStack}
            />
            <Drawer.Screen
                name="settingScreenStack"
                options={{ drawerLabel: 'Settings' }}
                component={settingScreenStack} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigationRoutes;