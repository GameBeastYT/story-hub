import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import Write from './screen/writestory';
import Read from './screen/readstory';

export default class App extends React.Component { 
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    Writestory: { screen: Write },
    ReadStory: { screen: Read },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Writestory') {
          return (
            <Image
              source={require('./screen/read.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'ReadStory') {
          return (
            <Image
              source={require('./screen/write.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);
const AppContainer = createAppContainer(TabNavigator);
