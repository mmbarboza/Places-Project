import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import SearchBox from './SearchBox';

export class Map extends Component {
  apiHasLoaded(map, googlemaps){
    if(map && googlemaps){
      this.setState({
        apiReady: true,
        map: map,
        googlemaps: googlemaps
      })
    }
  }

  render({apiReady, googlemaps, map} = this.state) {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB5WV_RxjHNHAitgCdBTjYgqGycxrvkGZ8', libraries: ['places'] }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({map, maps}) => this.apiHasLoaded(map, maps)}
          defaultCenter={{lat: -34.397, lng: 150.644}}
          defaultZoom={8}
        >
        {apiReady && (
          <SearchBox map={map} googlemaps={googlemaps}/>
        )}
        </GoogleMapReact>
      </div>

    )
  }
}

export default Map;
