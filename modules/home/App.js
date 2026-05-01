/*-----------------------------------------------------------------------------\
| Home screen.                                                                 |
\-----------------------------------------------------------------------------*/

// Imports.
import { Text, ScrollView } from 'react-native';
import Meteor, { Mongo, withTracker } from '@meteorrn/core';
import React from 'react';

// Connect to MongoDB collection.
const Stocks = new Mongo.Collection('stocks');

// Component definition.
class HomeScreen extends React.Component {
    render(){
        return (
            <ScrollView>
                {this.props.stocks.map(stock => (
                    <Text key={stock._id}>{stock._id}</Text>
                ))}
            </ScrollView>
        );
    }
}

// HOC function.
// https://guide.meteor.com/react-native.html#usage
// https://github.com/meteor/react-packages/tree/master/packages/react-meteor-data#withtrackerreactivefn-higher-order-component
export default withTracker(() => {

    // Subscribe to our collections.
    Meteor.subscribe('stocks');

    // Done!
    return {
        stocks: Stocks.find().fetch()
    };

})(HomeScreen);
