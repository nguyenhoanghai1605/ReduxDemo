
'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    Button,
    TouchableOpacity,
    Image,
    Dimensions,
    StatusBar
} from 'react-native';
import { bgStatusBar, bgDrawerHeader } from '../../../Resource/Styles/global.styles';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import SearchView from '../../../Components/ActionBar/SearchView';
import * as Actions from './HomeAction'; 

class HomeScreen extends Component {
    static navigationOptions = {
        header:null
    };

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this.onClickItem = this.onClickItem.bind(this);
    }

    componentDidMount() {
        this.props.getData();        
    }
    search(searchText){
        this.props.getData(searchText); 
    }
    onScrollHandler = () => {
        if (!this.props.loadMore && Actions.TongSoLuong > this.props.data.length) {
            this.props.getMore();  
        }
    }
    render() {
        if (this.props.loading ) {
            return (
                <View style={styles.Container}>
                    <View style={styles.ActivityIndicatorContainer}>
                        <ActivityIndicator animating={true}/>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.Container}>
                    <StatusBar
                        translucent
                        backgroundColor={bgStatusBar}
                        animated
                    />
                    <SearchView parent={this} navigation={this.props.navigation}/>
                    <FlatList
                        data={this.props.data}
                        keyExtractor={(item) => item.Id} 
                        onEndReached={this.onScrollHandler}
                        onEndReachedThreshold={0.1}         
                        renderItem={this.renderItem}
                        ListFooterComponent={()=> {
                            return this.props.loadMore? <View style={{height:40, justifyContent: 'center',}}><ActivityIndicator animating={true}/></View>: null;
                        }
                            
                        }/>
                </View>
            );
        }
    }

    onClickItem(item) {
        this.props.navigation.navigate('DetailScreen', {item: item});
    }

    renderItem({item, index}) {
        let DuongDanHinh = 'http://nongnghiep.vic.camau.vn' + item.HinhAnh;
        let MangMoTa = item.MoTa.split(' ');
        let ChuoiMoTa='';
        if(MangMoTa.length <=22)
            ChuoiMoTa=MangMoTa.join(" ");
        else{
            for (var i=0; i<=22; i++)
                ChuoiMoTa += MangMoTa[i]  + ' ';
        }

        return (
            (index==0)?            
            <TouchableOpacity onPress={() => this.onClickItem(item)}>
                <View style={styles.TinTucNoibat}>
                    <Image style={styles.HinhAnhNoiBat} source={{ uri: DuongDanHinh }} />
                    <View style={[styles.bc_NoiDung]}>
                        <Text style={styles.TieuDe}>{item.TieuDe}</Text>
                        <Text style={styles.MoTa}>{ChuoiMoTa}</Text>
                        <Text style={styles.NgayDang}>{item.ChuoiNgay}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => this.onClickItem(item)}>
                <View style={styles.TinTuc}>
                    <View style={styles.Row}>
                        <Text style={styles.TieuDe}>{item.TieuDe}</Text>
                    </View>
                    <View style={styles.Row}>
                        <Image style={styles.HinhAnh} source={{ uri: DuongDanHinh }} />
                        <View style={styles.Col}>
                            <View style={[styles.height_35, styles.flex_5]}>
                                <Text style={styles.MoTa}>{ChuoiMoTa}</Text>
                            </View>
                            <View style={[styles.height_15, styles.flex_7]}>
                                <Text style={styles.NgayDang}>{item.ChuoiNgay}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
};


function mapStateToProps(state, props) {
    return {
        loading: state.homeReducer.loading,
        loadMore: state.homeReducer.loadMore,
        data: state.homeReducer.data
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

var width = Dimensions.get('window').width ; 

const styles = StyleSheet.create({
    ActivityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    Container: {
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,  
        marginTop:20      
    },
    TinTucNoibat: {
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginTop:1
    },
    TinTuc: {
        flex: 1,
        flexDirection: 'column',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        padding:10
    },
    Row: {
        flex: 1,
        flexDirection: 'row',
    },
    Col: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft:10,
        paddingRight:10
    },
    HinhAnhNoiBat: {
        width: width,
        height: width*2/3 ,        
        alignItems: 'center',
        justifyContent: 'center'
    },
    HinhAnh: {
        width: 150,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bc_NoiDung: {
        padding:10,
    },
    TieuDe: {
        paddingRight:-20,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: "left",
        color: '#0064a4',
        flex: 1,
        flexWrap: 'wrap',
        width:width,
        marginBottom: 5,
    },
    MoTa: {
        fontSize: 14,
        textAlign: 'justify',
        color: '#555',
        flex: 1,
        flexWrap: 'wrap'
    },
    NgayDang: {
        fontSize: 12,
        textAlign: "left",
        color: '#aaa',
        flex: 1,
        flexWrap: 'wrap'
    }
});
