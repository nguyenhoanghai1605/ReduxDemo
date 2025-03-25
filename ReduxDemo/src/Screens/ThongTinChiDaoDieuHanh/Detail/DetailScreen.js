
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    WebView,
    StatusBar
} from 'react-native';
import { bgStatusBar, bgDrawerHeader } from '../../../Resource/Styles/global.styles';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import HeaderView from '../../../Components/ActionBar/HeaderView';
import * as Actions from './DetailAction';

class DetailScreen extends Component {
    static navigationOptions = {
        header:null
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
                    <StatusBar
                        translucent
                        backgroundColor={bgStatusBar}
                        animated
                    />
                    <HeaderView navigation={this.props.navigation}/>
                    <WebView 
                        source={{ html: this.props.data.NoiDung }} />                    
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
        paddingTop:0
    },   
});
