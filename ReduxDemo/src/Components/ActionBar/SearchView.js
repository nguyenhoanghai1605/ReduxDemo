import React,{Component} from 'react';
import {View, Text,Image, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class SearchView extends Component{   
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            showSearchView: false
        };
    }
    search(){
        this.props.parent.search(this.state.searchText);
    }
    render(){    
        if (this.state.showSearchView) {    
            return (            
                <View style={styles.inputContainer}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {this.props.navigation.goBack()}}>
                        <Image style={styles.inputIcon} source={require('../../Resource/Images/Common/back.png')}/>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Nhập giá trị tìm"
                        value={this.state.searchText}
                        onChangeText={value => this.setState({searchText: value})}
                        onSubmitEditing={this.search.bind(this)}
                        //placeholderTextColor="#000000"
                    />
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {this.setState({showSearchView: false})}}>
                        <Image style={styles.inputIcon} source={require('../../Resource/Images/Common/close.png')}/>
                    </TouchableOpacity>
                </View>            
            );
        }
        else{
            return (            
                <View style={styles.inputContainer}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {this.props.navigation.goBack()}}>
                        <Image style={styles.inputIcon} source={require('../../Resource/Images/Common/back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.itemText}>
                        Thông tin chỉ đạo điều hành
                    </Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {this.setState({showSearchView: true})}}>
                        <Image style={styles.inputIcon} source={require('../../Resource/Images/Common/search.png')}/>
                    </TouchableOpacity>
                </View>            
            );
        }
    }
}

const styles= StyleSheet.create({
    itemText:{
        color:"#ffffff",
        padding:5,
        fontSize:16,
        flex:1,
        justifyContent: 'center',
        alignItems:'center', 
    },
    inputContainer: {
        borderColor: '#0064a4',
        backgroundColor: '#0064a4',
        borderBottomWidth: 1,
        height:50,
        width:'100%',
        flexDirection: 'row',
        alignItems:'center',               
    },
    inputs:{
        flex:1,
        color:'#000000',
        fontSize:14,        
        backgroundColor:'#b9e4fc',
        height:36,
        paddingTop:10,
        borderRadius:5   

    },
    inputIcon:{
        width:26,
        height:26,
        tintColor:'#ffffff',
        marginRight:5,
        marginLeft:5,
        justifyContent: 'center',
        
    }
})


