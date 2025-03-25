import React,{Component} from 'react';
import {View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class HeaderView extends Component{   
    constructor(props){
        super(props);        
    }
    
    render(){    
        return (            
            <View style={styles.inputContainer}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {this.props.navigation.goBack()}}>
                    <Image style={styles.inputIcon} source={require('../../Resource/Images/Common/back.png')}/>
                </TouchableOpacity>
                <Text style={styles.itemText}>
                    Nội dung
                </Text>
            </View>            
        );
        
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
        marginTop:20,            
    },
    inputs:{
        height:40,
        marginRight:5,
        borderBottomColor: '#FFFFFF',
        flex:1,
        color:'#ffffff',
        fontSize:16        
    },
    inputIcon:{
        width:26,
        height:26,
        tintColor:'#ffffff',
        marginRight:5,
        marginLeft:5,
        justifyContent: 'center'
    }
})


