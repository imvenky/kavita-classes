import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';

import { Variable, gStyles } from '../config/global';
const styles = StyleSheet.create({
    Container: {
        padding: 20,
    },
    Header: {
        marginBottom: 20,
    },
    H1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Variable.Color.Prime
    },
    SubHeader: {
        color: Variable.Color.Text
    },
    PhoneContainer: {
        marginTop: 30,
    },
    PhoneBox: {
        marginTop: 10,
        marginBottom: 30,
    },
    PhoneText: {
        fontWeight: '600',
        color: Variable.Color.Prime
    },
    PhoneInput: {
        color: Variable.Color.Prime,
        borderRadius: 30,
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: Variable.Color.Text
    },
    Separator: {
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Line: {
        width: '100%',
        height: 1,
        top: '50%',
        left: 0,
        position: 'absolute',
        backgroundColor: Variable.Color.Text
    },
    OtherSign: {
        color: Variable.Color.Text,
        backgroundColor: '#f1f1f1',
        padding: 10,
    }
});

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ''
        }
    }

    onChangePhone = (e) => {
        this.setState({phone: e});
    }
    
    render() {

        return (
            <View style={styles.Container}>
                <View style={styles.Header}>
                    <Text style={styles.H1}>Login Account</Text>
                    <Text style={styles.SubHeader}>Hello, welcome back to account!!</Text>
                </View>
                <View style={styles.PhoneContainer}>
                    <Text style={styles.PhoneText}>Phone number</Text>
                    <View style={styles.PhoneBox}>
                        <TextInput maxLength={10} keyboardType="numeric" value={this.state.phone} onChangeText={this.onChangePhone} style={styles.PhoneInput}></TextInput>
                    </View>
                    <Button buttonStyle={gStyles.PrimeButton} title="Send Code" onPress={()=> this.props.navigation.navigate('Verify')} />
                </View>
                <View style={styles.Separator}>
                    <View style={styles.Line}></View>
                    <Text style={styles.OtherSign}>Sign in with Google or Facebook</Text>
                </View>
                <View>
                    <SocialIcon
                        title='Google'
                        button
                        light
                        type='google'
                    />
                    <SocialIcon
                        title='Facebook'
                        button
                        light
                        type='facebook'
                    />
                </View>
            </View>
        )
    }
}
