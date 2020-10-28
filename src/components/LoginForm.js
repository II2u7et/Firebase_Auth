import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = { email:'', password: ''}

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
                        
                    <CardSection>
                        <Button>
                            Login
                        </Button>
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
       
    }
})

export default LoginForm;