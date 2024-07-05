/*-----------------------------------------------------------------------------\
| Application entry point.                                                     |
\-----------------------------------------------------------------------------*/

// Imports.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Meteor from '@meteorrn/core';
import React from 'react';
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
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// // Main stylesheet.
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
