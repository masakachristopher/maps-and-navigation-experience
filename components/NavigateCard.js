import React from 'react'
import { StyleSheet,View , Text, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { setDestination } from '../slices/navSlice'
const NavigateCard = ({navigation}) => {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw `text-center py-5 text-xl`}>Good Morning, Chris</Text>
            <View style={tw`border-t  border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete
                styles={toInputBoxStyles}
                placeholder="where to?"
                debounce={400}
                onPress={(data, details =null)=>{
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description
                    }))
                    navigation.navigate("RideOptionCard")
                }}
                query={{
                    key:"AIzaSyD8Ao0upDUMMx5WdjyHugrddvXR6OgXk5Q",
                    language: "en",
                    components: "country:tza"
                }}
                enablePoweredByContainer={true}
                fetchDetails={true}
                nearbyPlacesAPI="GooglePlacesSearch"
                />
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        paddingTop: 20,
        flex:0
    },
    textInput:{
        backgroundColor:"gray",
        borderRadius:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingTop:0
    }

})
