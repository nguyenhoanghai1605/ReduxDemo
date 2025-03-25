import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


/// Component Menu Trang chủ
/// Prop :
    // backgroundColor: Mã màu
    // image : Đường dẫn url tấm hình icon
    // text : nội dung 

const ListItem = (props) => {
      return (
        <View style={[...styles.container,
            { backgroundColor : props.backgroundColor}]}>
          <Image 
                style={styles.icon}
                // source={{uri: props.image}}
            ></Image>
          <Text style = {styles.content}>{props.text}</Text>
        </View>
      );    
  }
  const styles = StyleSheet.create({
      container: {
          flexDirection : 'column',
          width : 350,
          height : 350, 
          paddingHorizontal: 10,
          marginTop:10,
          paddingVertical :10,
          alignItems:'stretch',
        },
        icon: {
            width: 100,
            height: 100,
            marginTop : 20,
            justifyContent: 'center',
            alignItems: 'center'
                },
        content : {
            marginTop : 20, 
            fontSize: 20,
            alignItems:'center',
            color: '#ffffff',
            justifyContent: 'center',

        }
  });
  export default ListItem;
  