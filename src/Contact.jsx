import style from "./Contact.module.css";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { Menu } from './components/menu'

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';





function Contact() {
  const position = [51.505, -0.09];

  return ( 
    <>
    <Menu option01='Voltar para pagina incial'/>
      <h2 className={style.tt}>contato</h2>
      <br />
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "auto", minHeight: "800px"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Contact;
