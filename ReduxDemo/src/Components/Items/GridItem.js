import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';


/// Component Menu Trang chủ
/// Prop :
    // backgroundColor: Mã màu
    // image : Đường dẫn url tấm hình icon
    // text : nội dung 

const GridItem = (props) => {
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
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        },
        icon: {
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center'
                },
        content : {
            fontSize: 20,
            alignItems:'center',
            color: '#555555',
            justifyContent: 'center',

        }
  });
  export default GridItem;
  