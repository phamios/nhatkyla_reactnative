
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
 
import HomeScreen from './app/screens/HomeScreen';
import PostScreen from './app/screens/PostScreen';
import CommentListScreen from './app/screens/CommentListScreen';

const options = {
  title: 'Nhật Ký Lạ',
  headerTintColor: '#FFF',
  headerStyle: {
    backgroundColor: '#005ea0'
  }
};

 
const AppNavigator = new StackNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: options
    },
    post: {
      screen: PostScreen,
      navigationOptions: options
    },
    commentList: {
      screen: CommentListScreen,
      navigationOptions: options
    }
  }
  // {
  //   cardStyle: {
  //     paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  //   }
  // }
);


export default AppNavigator;
