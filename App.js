/*-----------------------------------------------------------------------------\
| Application entry point.                                                     |
\-----------------------------------------------------------------------------*/

// Imports.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { Dimensions, Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Meteor from '@meteorrn/core';
import React from 'react';

// Local imports.
import HomeScreen from './modules/home/App';
import SettingsScreen from './modules/settings/App';

// Connect to Meteor backend.
Meteor.connect('https://' + process.env.EXPO_PUBLIC_BACKEND + '/websocket', {suppressUrlErrors: true});

// Main view.
export default App = () => {

    // Configure view.
    const Tab = createBottomTabNavigator();

    // Send view to the screen.
    return (
//        <NavigationContainer theme={DarkTheme}>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let name = route.name.toLowerCase();
                        switch(route.name){
                            case 'Settings':
                                name = 'cog';
                                size += 4;
                                break;
                        }
                        if(!focused) name += '-outline';
                        return <Icon name={name} size={size} color={color} />;
                    },
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        borderTopColor: 'transparent'
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// Main stylesheet.
//const styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        backgroundColor: '#fff',
//        alignItems: 'center',
//        justifyContent: 'center',
//    },
//});
