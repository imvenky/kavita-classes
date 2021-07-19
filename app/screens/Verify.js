import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Icon, Button } from 'react-native-elements';
// import OTPInputView from '@twotalltotems/react-native-otp-input'

// import OtpInputs from 'react-native-otp-inputs';

import { gStyles, Variable } from '../config/global';

const styles = StyleSheet.create({
    Body: {
        alignItems: 'center',
        textAlign: 'center'
    },
    Image: {
        width: '60%',
        height: 300,
    },
    H1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Variable.Color.Prime
    },
    Paragraph: {
        color: Variable.Color.Text,
        fontSize: 16
    },
    Button: {
        width: '100%',
        marginTop: 15,
        textAlign: 'center'
    },
    EditBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 30,
    },
    EditText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Variable.Color.Text
    },
    EditIcon: {
        position: 'relative',
        marginLeft: 20
    }
});

export default class Verify extends React.Component {
    render() {
        return (
            <View style={gStyles.Container}>
                <View style={gStyles.Header}>
                    <TouchableHighlight style={gStyles.HeaderIcon} onPress={()=> this.props.navigation.navigate('Login')}>
                        <Icon name="chevron-left" size={15} color={Variable.Color.Second} type='font-awesome' />
                    </TouchableHighlight>
                    <Text style={gStyles.HeaderText}>Verification</Text>
                </View>
                <View style={styles.Body}>
                    <Image style={styles.Image} resizeMode="contain" source={require('../assets/images/verification.png')} />
                    <Text style={styles.H1}>Verification Code</Text>
                    <Text style={styles.Paragraph}>We have sent the code to you phone no.</Text>
                    
                    {/* <OTPInputView
                        pinCount={4}
                        autoFocusOnLoad
                        onCodeFilled = {(code => {
                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    /> */}

                    {/* <OtpInputs
                    handleChange={(code) => console.log(code)}
                        numberOfInputs={6}
                    /> */}
                    <View style={styles.EditBox}>
                        <Text style={styles.EditText}>9821175302</Text>
                        <TouchableHighlight style={[styles.HeaderIcon, styles.EditIcon]} onPress={()=> this.props.navigation.navigate('Login')}>
                            <Icon name="edit" size={15} color={Variable.Color.Second} type='font-awesome' />
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Button titleStyle={{ color: Variable.Color.Prime }} buttonStyle={[gStyles.SecondButton, styles.Button]} title="Send Again" onPress={()=> this.props.navigation.navigate('Verify')} />
                        <Button buttonStyle={[gStyles.PrimeButton, styles.Button]} title="Submit" onPress={()=> this.props.navigation.navigate('Profile')} />
                    </View>
                </View>
            </View>
        )
    }
}
