import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList, Image,Text,TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'

const data =[
    {
        id:"123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen:"MapScreen"
    },
    {
        id:"456",
        title: "Oder food",
        image: "https://links.papareact.com/28w",
        screen:"FoodScreen"
    }
]

const NavOptions = () => {
    const navigation = useNavigation();

    return (
      <FlatList
      keyExtractor={(item) =>item.id}
      data={data}
      horizontal
      renderItem={({item})=>(
            <TouchableOpacity onPress={()=> navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image
                    style={{width:120, height:120, resizeMode:"contain"}}
                    source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon
                    style={tw`bg-black p-2 rounded-full w-10 mt-4`}
                    name="arrowright"
                    type="antdesign"
                    color="white"
                    />
                </View>
            </TouchableOpacity>
      )}
      />
    )
}

export default NavOptions;

