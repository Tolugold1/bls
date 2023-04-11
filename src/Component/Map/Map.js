/*global google*/
import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { business_data } from '../Business_Cards/data';
import Loading from '../loading';


const  BusinessMap = ({ lat, lng }) => {

  const GOOGLE_MAP_API_KEY = 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY
  })

  console.log("map lat", lat)
  console.log("map lng", lng)
  const center = { lat: lat, lng: lng }
/*   console.log("lat", d_lat, "lng", d_lng)
  const center = { lat: d_lat, lng: d_lng }
  console.log("center", center)
 */
  const markers = [
    {lat: business_data[0].businesses[0].coordinates.latitude, lng: business_data[0].businesses[0].coordinates.longitude},
    { lat: 18.5204, lng: 73.8567 },
    { lat: 18.5314, lng: 73.8446 },
    { lat: 18.5642, lng: 73.7769 }
  ]

  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  }
  return (
    <div className='d_location_map' >
            {!isLoaded ? (
        <Loading />
      ) : (
        <GoogleMap id="map" mapContainerClassName="map-container" mapContainerStyle={{width: "700vw", height: '100%', overflow: "hidden"}} zoom={10} defaultCenter={center} onLoad={onLoad}>
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  )
}

export default BusinessMap;
