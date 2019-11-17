
import React, {Component} from 'react';
import Header from './header'
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

const Whatsnew = (props) =>{
    
    
    return(
        <View  style={styles.container}>
        <Header headerText={"What's New!"} /> 
        <ScrollView>
        {
            
            props.whatsnewData.map((element, key)=>{       
                return (
                    <View style={styles.parent} key={key}>
                                        
                    <View>
                    <Image source={{uri: element.imgUrl}}  style={styles.thumbnailStyle} />
                    </View>
                    <View style={{paddingTop:7, marginLeft:10}}>
                    <View>
                    <Text>{element.title}</Text>
                    </View>  
                    <View>
                    <Text>{element.subTitle}</Text>
                    </View>             
                    </View>    
                
                    </View>
                    )
                })
            }     
            </ScrollView>      
            </View> 
            
            );
            
        }
        const styles = StyleSheet.create({
            parent:{
                flexDirection:'row',
                paddingLeft: 15,
                paddingTop: 15
            },
            container: {
                flex: 1,
                backgroundColor: '#F5FCFF',
            },
            welcome: {
                fontSize: 20,
                // textAlign: 'center',      
            },
            instructions: {
                textAlign: 'center',
                color: '#333333',
                marginBottom: 5,
            },
            inputView:{
                borderColor: '#eee',
                borderWidth: 1,
                textAlign: 'center',
                padding: 10,
                width: "95%"  
            },
            thumbnailStyle:{
                height: 50,
                width: 50,
                borderRadius: 25
                
            }
            
        });
        export default Whatsnew;
        