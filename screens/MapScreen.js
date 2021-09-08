import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Maps from '../components/Maps'
import tw from 'tailwind-react-native-classnames';
import {createStackNavigator} from '@react-navigation/stack'
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';
const MapScreen = () => {
    const Stack = createStackNavigator();
    return (
        <SafeAreaView>
            <View style={tw`h-2/3`}><Maps/></View>
            <View style={tw`h-1/3`}>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen
                    name="NavigateCard"
                    component={NavigateCard}
                    />
                     <Stack.Screen
                    name="RideOptionCard"
                    component={RideOptionCard}
                    />
                </Stack.Navigator>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen
