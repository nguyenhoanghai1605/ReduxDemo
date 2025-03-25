
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Button
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from './DetailAction';

class DetailScreen extends Component {
    static navigationOptions = {
        title: 'Detail',
        headerStyle: {
            backgroundColor: '#0064a4',
        },
        headerTintColor: '#ffffff'
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getData(this.props.navigation.getParam('item', null)); 
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
                    <Text>{this.props.data.title}</Text>
                </View>
            );
        }
    }
};

function mapStateToProps(state, props) {
    return {
        loading: state.detailReducer.loading,
        data: state.detailReducer.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    container: {
        flex:1, 
        backgroundColor: '#F5F5F5', 
        paddingTop:20
    },
});
