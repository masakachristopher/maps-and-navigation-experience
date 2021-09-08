import React from 'react'
import { View, Text , SafeAreaView, Image} from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { setDestination, setOrigin } from '../slices/navSlice';

const HomeScreen  = ()=> {
    const dispatch = useDispatch()
    return (
        <SafeAreaView style={tw `bg-white h-full`}>
            <View style={tw `p-5`}>
                <Image
                style={{
                    width:100,
                    height: 100,
                    resizeMode: "contain"
                }}
                source={{
                    uri: "https://links.papareact.com/gzs"
                }}
                />
                <GooglePlacesAutocomplete
                styles={{
                    container:{
                        flex:0
                    },
                    textInput:{
                        fontSize:18
                    },
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                onPress={(data,details = null)=>{
                    console.log(data);
                    dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    }))

                    dispatch(setDestination(null))
                }}
                query={{
                    key:"AIzaSyD8Ao0upDUMMx5WdjyHugrddvXR6OgXk5Q",
                    language: "en",
                    components: "country:tza"
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                placeholder="Where from?"
                
                
                />
                <NavOptions/>
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen;