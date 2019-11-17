/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component } from 'react';
import Header from './header'
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

import Whatsnew from './whatsnew';



export default class App extends Component {
  newData;
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      whatNewdata: [
        {
          author: "nissan",
          content: "<div>Staying safe on the roads this Raya with our &lt;SAFE &amp; SAVE&gt; Brake Service Package to SAVE up to 15% for your duit Raya! Just schedule your appointment today at any nearest TCEAS workshop. Wishing all of you Selamat Hari Raya, have a safe journey!</div><div><br></div><div>*T&amp;C apply.</div><div></div>",
          imgUrl: "https://firebasestorage.googleapis.com/v0/b/tcitech-carmech.appspot.com/o/mhcda5s23fc?alt=media&token=679181bc-ca1a-48b8-b7e6-b5e95e45c6ef",
          order: 0,
          publishTimestamp: { Timestamp: { seconds: 1561508692, nanoseconds: 249000000 } },
          published: true,
          subTitle: "May 2019",
          title: "Safe & Save Hari Raya Campaign",
          uid: "mhcda5s23fc"
        }
      ]
    };

  }

  componentDidMount() { }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Header headerText={"What's New!"} />
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Loading...</Text>
          </View>
        </View>
      )
    } else {
      return (
        <Whatsnew whatsnewData={this.state.whatNewdata} />
      );
    }

  }
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
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
  inputView: {
    borderColor: '#eee',
    borderWidth: 1,
    textAlign: 'center',
    padding: 10,
    width: "95%"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 25

  }
});
