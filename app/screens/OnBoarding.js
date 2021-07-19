import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';

  export default class Welcome extends React.Component {
   
    render() {
        return (
            <Onboarding
                onDone={()=> this.props.navigation.navigate('Login') }
                onSkip={()=> this.props.navigation.navigate('Login') }
                pages={[
                    {
                    key: 'one',
                    title: 'Homework Easly',
                    subtitle: 'It is recommended that you complete this assign to improve your all skills for beginner languages',
                    image: <Image source={require('../assets/images/onboarding/1.jpg')} />,
                    backgroundColor: '#FAFAFE',
                    },
                    {
                    key: 'two',
                    title: 'Fun Events',
                    subtitle: 'Thanks to fun events, you will follow your progress better and you will be able to socialize',
                    image: <Image source={require('../assets/images/onboarding/2.jpg')} />,
                    backgroundColor: '#FAFAFE',
                    },
                    {
                    key: 'three',
                    title: 'Timely Notification',
                    subtitle: 'With timely notifications you wont miss your lessons and homework and you wont have to worry',
                    image: <Image source={require('../assets/images/onboarding/3.jpg')} />,
                    backgroundColor: '#FAFAFE',
                    }
                ]}
            />
        )
    }
  }