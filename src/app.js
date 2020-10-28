import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentDidUpdate(){
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        firebase.initializeApp ({
            apiKey: "AIzaSyDOXb-_nc5r7H5Tu9qHsV2Y9eCMA0HHRWE",
            authDomain: "authentication-dfcca.firebaseapp.com",
            databaseURL: "https://authentication-dfcca.firebaseio.com",
            projectId: "authentication-dfcca",
            storageBucket: "authentication-dfcca.appspot.com",
            messagingSenderId: "69636713432",
            appId: "1:69636713432:web:fb5dad02cf1fbc20bf20ad",
            measurementId: "G-XT0LLEFF06"
        });
    }

  render() {
    return (
      <View>
        <Header title="Firebase Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
