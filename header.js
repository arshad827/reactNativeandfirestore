import React, {Component} from 'react';

import {Text, View, StyleSheet} from 'react-native';
// Make a component
const Header = (props) =>{
    return (
        <View>
        <View  style={styles.arshad}><Text>{props.headerText}</Text></View>        
        </View>
        );
    }
    const styles = StyleSheet.create({
        arshad:{
            backgroundColor: '#eee',
            justifyContent: "flex-start", 
            alignItems: 'center',
            marginTop:30,
            padding:15,
            shadowColor:'#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            elevation: 2,
            position:'relative'
          }
    });
    export default Header;