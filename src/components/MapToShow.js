import React from 'react';
import './Map.css';
import * as data from "../data/pet-object-park.json";
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet';

const parkIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='icon-background' style='background-color: green; color:white;'><i class='fa fa-tree'></i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});
const medIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='icon-background' style='background-color: red;color:white;'><i class='fa fa-heartbeat'></i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});
function MapToShow() {
    return (
      <div className="maptoshow-cont">
        
       <MapContainer center={[54.352024, 18.646639]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
         
          {data.parkObjects.map(object => (
            
        <Marker
          key={object.properties.ID}
          position={[
            object.properties.LAT,
            object.properties.LON
          ]}
     
         icon={parkIcon}
       
        />
      ))}
           {data.vetObjects.map(object => (
            
            <Marker
              key={object.properties.ID}
              position={[
                object.properties.LAT,
                object.properties.LON
              ]}
         
             icon={medIcon}
           
            />
          ))}
          
       </MapContainer>
       <div className="map-col2">
         <form>
           <label>Miasto</label>

           <label>Kategoria</label>

         </form>
       </div>
  </div>
    );
  }


  
  export default  MapToShow;
 
  




//AIzaSyB6KZqznd54q6tYFjmwwdhkXVQbz1gPA0U