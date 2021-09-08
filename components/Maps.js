import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectDesination, selectOrigin } from '../slices/navSlice'
import MapView, {Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'



const Maps = () => {
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectDesination)
    const mapRef = useRef(null)
    useEffect(() => {
        // effect
        if(!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(
            ["origin", "destination"], 
            {edgePadding: {top:50,right:50,bottom:50,left:50}}
        )
    }, [origin,destination])

    return (
    <MapView
    ref={mapRef}
    style={tw`flex-1`}
    mapType="mutedStandard"
    initialRegion={{
    latitude: origin.location.lat,
    longitude: origin.location.lng,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
    }}
    >
        {   origin && destination && (
            <MapViewDirections
            lineDashPattern={[3]}
            apikey="AIzaSyD8Ao0upDUMMx5WdjyHugrddvXR6OgXk5Q"
            origin= {origin.description}
            destination= {destination.description}
            strokeWidth={3}
            strokeColor="black"
            />
            
        )}

        {origin?.location && (
        <Marker
        coordinate={{
            latitude:origin.location.lat,
            longitude:origin.location.lng
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
        />
        )}

        {destination?.location && (
        <Marker
        coordinate={{
            latitude:destination.location.lat,
            longitude:destination.location.lng
        }}
        title="Destination"
        description={destination.description}
        identifier="destination"
        />
        )}
    </MapView>
    )
}

export default Maps

const styles = StyleSheet.create({})
