import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    state = { email:'', password: '', error: '', loading : false}

    onButtonPress(){

        const {email, password} = this.state;
        console.log(email + ' - ' + password);

        this.setState({error: '', loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            })
    }

    onLoginSuccess(){
        this.setState({ email:'', password: '', error: '', loading : false})
    }
    onLoginFail(){
        this.setState({error: 'Either your email or password is wrong.', loading : false})
    }

    renderButton(){
        if (this.state.loading) {
            return  <Spinner size="small"/>
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )

    }

    render(){
        return (
            <View style= {style.container}>
                <Card>
                    <CardSection>
                        <Input  
                            label="Email:"
                            placeholder="user@email.com"
                            value={this.state.email}
                            onChangeText={email => this.setState({email})} 
                            secureTextEntry={false}/>
                        
                    </CardSection>
                
                    <CardSection>
                    <Input  
                            label="Password:"
                            placeholder="password"
                            value={this.state.password}
                            onChangeText={password => this.setState({password})} 
                            secureTextEntry={true}/>
                    </CardSection>

                    <Text style={style.error}>{this.state.error}</Text>
                        
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
           
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        height:450,
        width: null,
       
    },
    error: {
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 2,
        
    }
})

export default LoginForm;