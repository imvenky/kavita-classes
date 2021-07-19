import React from 'react'
import { TouchableHighlight, StyleSheet, View, Text } from 'react-native';
import { Icon, Button, Avatar, Chip } from 'react-native-elements';

import { gStyles, Variable } from '../config/global';
const styles = StyleSheet.create({
    ProfileCard: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ProfileInner: {
        flex: 1,
        marginLeft: 20,
    },
    Name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Variable.Color.Prime
    },
    Section: {
        color: Variable.Color.Text
    }
})

export default class Profile extends React.Component {
    render() {
        return (
            <View style={gStyles.Container}>
                <View style={gStyles.Header}>
                    <TouchableHighlight style={gStyles.HeaderIcon} onPress={()=> this.props.navigation.navigate('Login')}>
                        <Icon name="chevron-left" size={15} color={Variable.Color.Second} type='font-awesome' />
                    </TouchableHighlight>
                    <Text style={gStyles.HeaderText}>Profile</Text>
                </View>
                <View style={styles.ProfileCard}>
                    <Avatar
                        rounded
                        size="large"
                        source={{
                            uri:
                            'https://picsum.photos/200',
                        }}
                    />
                    <View style={styles.ProfileInner}>
                        <Text style={styles.Name}>Venkatesh Anand</Text>
                        <Text style={styles.Section}>Commerce Student</Text>
                    </View>
                    <Chip
                        title="Edit"
                        type="outline"
                    />
                </View>
            </View>
        )
    }
}
