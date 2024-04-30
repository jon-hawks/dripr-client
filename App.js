/*-----------------------------------------------------------------------------\
| Application entry point.                                                     |
\-----------------------------------------------------------------------------*/

// Imports.
import React from 'react';
import Meteor, { Mongo, withTracker } from '@meteorrn/core';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Connect to Meteor backend.
Meteor.connect(process.env.REACT_APP_BACKEND + "/websocket");

// Connect to MongoDB collection.
const Stocks = new Mongo.Collection("stocks");

// TEMPORARY; debugging.
//const Data = Meteor.getData();
//Data.onChange(event => console.log(event));

// Main view.
class App extends React.Component {
  render() {
    let { stocks } = this.props;

    return (
      <View>
        <Text>Test:</Text>
        {stocks.map(stock => (
          <Text>{stock._id}</Text>
        ))}
      </View>
    );
  }
}

// Main stylesheet.
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});

// Main controller.
let AppContainer = withTracker(() => {
  Meteor.subscribe('stocks');
  //let stocks = Stocks.findOne();
  let stocks = Stocks.find().fetch();

  return {
    stocks,
  };
})(App);
export default AppContainer;
