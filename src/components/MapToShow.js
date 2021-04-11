import React from 'react';
import './Map.css';
import * as data from "../data/pet-object-park.json";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import L from 'leaflet';

const parkIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='icon-background' style='background-color: green; color:white;'><i class='fa fa-tree'></i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42]
});
const spaIcon = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='icon-background' style='background-color: blue; color:white;'><i class='fa fa-bath'></i></div>",
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
        <div className="map-col2">
         <h1>Find pet-friendly place in Trojmiasto</h1>
         <ul >
           <li><i class='fa fa-bath'></i> Spa</li>
           <li><i class='fa fa-heartbeat'></i> Vet</li>
           <li><i class='fa fa-tree'></i> Playground</li>
           <li><i class='fa fa-shopping-basket'></i> Shop</li>
         </ul>
<h2>All places in one map </h2>

       </div>
        
       <MapContainer center={[54.352024, 18.646639]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
         
          {data.parkObjects.map(object => (
            
        <Marker id="park"
          key={object.properties.ID}
          position={[
            object.properties.LAT,
            object.properties.LON
          ]}
     
         icon={parkIcon}>
         <Popup>
        <h1>{object.properties.NAME}</h1>
        <p>{object.properties.ADDRESS}</p>
       </Popup>
        </Marker>
      ))}
           {data.vetObjects.map(object => (
            
            <Marker id="vet"
              key={object.properties.ID}
              position={[
                object.properties.LAT,
                object.properties.LON
              ]}
         
             icon={medIcon}
           
            >
              <Popup>
        <h1>{object.properties.NAME}</h1>
        <p>{object.properties.ADDRESS}</p>
       </Popup>
        </Marker>
          ))}
 {data.spaObjects.map(object => (
            
<Marker id="spa"
              key={object.properties.ID}
              position={[
                object.properties.LAT,
                object.properties.LON
              ]}
         
             icon={spaIcon}
           
            >
              <Popup>
        <h1>{object.properties.NAME}</h1>
        <p>{object.properties.ADDRESS}</p>
       </Popup>
        </Marker>
          ))}
          
       </MapContainer>
       
  </div>
    );
  }


  
  export default  MapToShow;
 
  




