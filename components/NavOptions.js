import React from 'react'
import { FlatList, Image,TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const data =[
    {
        id:"123",
        title: "Get a ride",
        image: "https://links.papareact.com/2pn",
        screen:"MapScreen"
    },
    {
        id:"132",
        title: "Oder food",
        image: "https://links.papareact.com/28w",
        screen:"FoodScreen"
    }
]

const NavOptions = () => {

    return (
      <FlatList
      keyExtractor={(item) =>item.id}
      data={data}
      horizontal
      renderItem={({item})=>{
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image
                    
                    style={{width:120, height:120, resizeMode:"contain"}}
                    source={{uri: item.image}}
                    />
                </View>
            </TouchableOpacity>
      }}
      />
    )
}

export default NavOptions;

