import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const height = Dimensions.get('window').height

const Variable = {
    Color: {
        Prime: "#383952",
        Second: "#33357D",
        Text: "#8E90A4",
        White: "#fff"
    }
}

const gStyles = StyleSheet.create({
    Container: {
        padding: 17,
        height: height,
        backgroundColor: '#FDFDFD',
    },
    Header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    HeaderText: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        textAlign: 'center'
    },
    HeaderIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 10,
        top: 0,
        left: 0,
        zIndex: 1,
        position: 'absolute',

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    SecondButton : {
        borderRadius: 30,
        padding: 17,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Variable.Color.Prime,
        backgroundColor: '#fff',
        borderColor: Variable.Color.Text,
        borderWidth: 1,
    },
    PrimeButton : {
        borderRadius: 30,
        padding: 17,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Variable.Color.White,
        backgroundColor: Variable.Color.Second
    }
})

export { Variable, gStyles};