import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { AsyncStorage } from 'react-native';

const Sidebar = (props) => {
    return (
        <View style={stylesSidebar.side}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem label={({ color }) =>
                    <Text style={{ color: 'black' }}>
                        Logout
                    </Text>
                }
                    onPress={() => {
                        props.navigation.toggleDrawer();
                        Alert.alert(
                            'Logout',
                            'Are you sure you want to log out?',
                            [{
                                text: 'Cancel',
                                onPress: () => {
                                    return null;
                                },
                            },
                            {
                                text: 'Confirm',
                                onPress: () => {
                                    AsyncStorage.clear();
                                    props.navigation.replace('Homescreen');
                                },
                            },
                            ],
                            { cancelable: false },
                        );
                    }}>
                </DrawerItem>
            </DrawerContentScrollView>
        </View>
    );
};

export default Sidebar;

const stylesSidebar = StyleSheet.create({
    side: {
        width: '100%',
        height: '100%',
        backgroundColor: '#b56464',
        paddingTop: 40,

    },

})