import { useState } from "react";

export default function GetMap(){
    const [city, setCity] = useState("Дефолт")
    const [long, setLong] = useState()
    const [lat, setLat] = useState()
    var url = "http://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";
    var token = "3894d7af0685287c62f8aab23768e8404cf27739"
    var query = { lat: lat, lon: long };
    
    var options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify(query)
    }
    
    navigator.geolocation.getCurrentPosition((position)=>{
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    })
    
    fetch(url, options)
    .then(response => response.text())
    .then(result => {
    setCity(JSON.parse(result).suggestions[0].data.city)})
    .catch(error => console.log("error", error));
    return (
        <>
          <h3>{city}</h3>
        </>
      )
    }