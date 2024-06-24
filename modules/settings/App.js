/*-----------------------------------------------------------------------------\
| Settings screen.                                                             |
\-----------------------------------------------------------------------------*/

// Imports.
import { Text, ScrollView } from 'react-native';
import Meteor, { Mongo, withTracker } from '@meteorrn/core';
import React from 'react';

// Connect to MongoDB collection.
//const Settings = new Mongo.Collection('settings');

// Component definition.
class SettingsScreen extends React.Component {
    render(){
        return (
            <ScrollView>
                <Text>Settings!</Text>
            </ScrollView>
        );
    }
}

export default SettingsScreen;

//export default withTracker(() => {
//
//    // Subscribe to our collections.
//    Meteor.subscribe('settings');
//
//    // Done!
//    return {
//        stocks: Settings.find().fetch()
//    };
//})(SettingsScreen);
