
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TextField,
    ActivityIndicator,
    Button,
    TextInput
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from './UserAction';

import Language from '../../Common/Language';

class UserScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.onClickLogin = this.onClickLogin.bind(this);
    }

    onClickLogin() {
        this.props.navigation.navigate('MainScreens');
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.container}>
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator animating={true}/>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            placeholder={Language.keys.username}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            returnKeyType={'none'}
                            placeholderTextColor={"#555555"}
                            underlineColorAndroid={"transparent"}
                            // onChangeText={(password) => this.setState({password})}
                            // value={this.state.password}
                        />
                        <TextInput
                            style={{...styles.textInput, marginBottom: 12}}
                            placeholder={Language.keys.password}
                            autoCorrect={false}
                            autoCapitalize={'none'}
                            returnKeyType={'none'}
                            placeholderTextColor={"#555555"}
                            underlineColorAndroid={"transparent"}
                            // onChangeText={(password) => this.setState({password})}
                            // value={this.state.password}
                        />
                        <Button
                            onPress={this.onClickLogin}
                            title={Language.keys.login}
                            color="#841584"
                            />
                    </View>
                </View>
            );
        }
    }
};

function mapStateToProps(state, props) {
    return {
        loading: state.userReducer.loading,
        data: state.userReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);

const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F5F5', 
        paddingTop:20
    },

    textInput: {
        backgroundColor: '#FFFFFF', height: 37, marginHorizontal: 20, marginTop: 12, borderRadius: 5, borderWidth: 1, borderColor: '#aaaaaa', color: '#000'
    }
});
