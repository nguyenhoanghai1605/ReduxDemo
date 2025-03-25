import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './UserReducer';
import UserComponent from './UserComponent';

const rootReducer = combineReducers({
    userReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

class UserScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render () {  
    return (
      <Provider store={store}>
        <UserComponent navigation={this.props.navigation}/>
      </Provider>
    );
  }
}

export default UserScreen;