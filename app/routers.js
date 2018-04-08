const AppNavigator = new StackNavigator({
    home: {
      screen: HomeScreen,
      navigationOptions: {
        title: '#ChuyenCuaDev'
      }
    },
    post: {
      screen: PostScreen,
      navigationOptions: {
        title: '#ChuyenCuaDev'
      }
    },
    postComments: {
      screen: PostCommentsScreen,
      navigationOptions: {
        title: '#ChuyenCuaDev'
      }
    }
  });
  
  export default AppNavigator;