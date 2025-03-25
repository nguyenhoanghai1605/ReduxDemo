import React, {Component} from 'react';
import {Image, StyleSheet ,Text, View} from 'react-native';


/// Component Menu Chọn chức năng
/// Prop :
    // borderColor: Mã màu viền
    // image : Đường dẫn url tấm hình icon
    // title : tiêu đề
    // content : nội dung mô tả
    
const ItemWithBorder = (props) => {
    return(
        <View style ={{...styles.container, 
                borderColor: props.borderColor}}>
          <Image 
                style={styles.icon}
                source={{uri: props.image}}
            ></Image>
            <Text style = {styles.title}>{props.title}</Text>
            <Text style = {styles.content}>{props.content}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        height: 150,
        borderWidth: 1,
        borderColor: '#FF5722',
        borderRadius: 10 ,
        backgroundColor : "#FFFFFF",
        padding:10,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    icon: {
        flex : 1,
        flexDirection:'row',
        justifyContent: 'center',
        width: 70,
        height: 70,
        alignItems : 'center',
        resizeMode: 'contain' 
     },
    title:{
        marginTop: 8,
        textAlign:'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content:{
        textAlign:'center',
    }
});
export default ItemWithBorder;