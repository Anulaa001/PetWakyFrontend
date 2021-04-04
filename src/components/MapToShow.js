import React from 'react';
import './Map.css';
import { MapContainer, TileLayer} from 'react-leaflet'
function MapToShow() {
    return (
       <MapContainer center={[54.352024, 18.646639]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
       </MapContainer>
  
    );
  }


  
  export default  MapToShow;
 
  




//AIzaSyB6KZqznd54q6tYFjmwwdhkXVQbz1gPA0U