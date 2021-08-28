import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Maps from '../components/Maps'

const MapScreen = () => {
    return (
        <SafeAreaView>
            <View><Maps/></View>
            <View></View>
        </SafeAreaView>
    )
}

export default MapScreen
