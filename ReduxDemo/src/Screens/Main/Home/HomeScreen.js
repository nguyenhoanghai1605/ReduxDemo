
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Button,
    TouchableOpacity
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from './HomeAction'; 

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#0064a4',
        },
        headerTintColor: '#ffffff'
    };

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.onClickItem = this.onClickItem.bind(this);
    }

    componentDidMount() {
        this.props.getData();
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.container}>
                    <Button title={'insert'} onPress={() => {}}></Button>
                    <View style={styles.activityIndicatorContainer}>
                        <ActivityIndicator animating={true}/>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Button title={'insert'} onPress={() => {
                        this.props.insertData(this.props.data);
                    }}></Button>
                    <FlatList
                        data={this.props.data}
                        renderItem={this.renderItem}/>
                </View>
            );
        }
    }

    onClickItem(item) {
        this.props.navigation.navigate('DetailScreen', {item: item});
    }

    renderItem({item, index}) {
        return (
            <TouchableOpacity onPress={() => this.onClickItem(item)}>
                <View style={styles.row}>
                    <Text style={styles.title}>
                        {(parseInt(index) + 1)}{". "}{item.title}
                    </Text>
                    <Text style={styles.description}>
                        {item.description}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
};


function mapStateToProps(state, props) {
    return {
        loading: state.homeReducer.loading,
        data: state.homeReducer.data
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
        paddingTop:2
    },
    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});
