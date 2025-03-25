import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import homeReducer from './Home/HomeReducer';
import detailReducer from './Detail/DetailReducer';
import HomeScreen from './Home/HomeScreen';
import DetailScreen from './Detail/DetailScreen';

const rootReducer = combineReducers({
    homeReducer,
    detailReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

/** React Navigation */
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
const RootStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    DetailScreen: {
      screen: DetailScreen,
    }
  },
  {
    headerMode:'none',
    navigationOptions:{
      headerVisible:false
    },
    initialRouteName: 'HomeScreen',
  }
);
const AppContainer = createAppContainer(RootStack);


class ThongTinChiDaoDieuHanhScreens extends Component {
  static navigationOptions = {
    header: null
  };
  render () {  
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

export default ThongTinChiDaoDieuHanhScreens;