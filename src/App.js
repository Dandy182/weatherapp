import React, {useState} from "react";
import Header from "./components/header";
import Cards from "./components/Cards";
import './styles.css';

const apikey = process.env.REACT_APP_APIKEY;

export default  function App(){

    // eslint-disable-next-line no-unused-vars
    const [cities, setCities] = useState([]);

    function onSearch(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
            .then(res => res.json())
            .then(c =>{

                if(c.main !== undefined ){
                    let ciudad = {
                        name:c.name,
                        max:Math.round(c.main.temp_max),
                        min:Math.round(c.main.temp_min),
                        img:c.weather[0].icon,
                        wind:c.wind.speed,
                        temp:c.main.temp,
                        weather:c.weather[0].main,
                        clouds:c.clouds.all,
                        lat:c.coord.lat,
                        lon:c.coord.lon,
                        id:c.id,
                        key:c.id,
                    }

                    setCities(oldCities => [...oldCities, ciudad]);
                }else(
                    alert(`Ciudad no encontrada!!!`)
                )
            });


    }

    function onClose(id){
        setCities(oldCities => oldCities.filter(c => c.id !== id))
    }
    return(<div>
        <Header onSearch={onSearch} />
        <div className="contenedor">
            <Cards cities={cities} onClose={onClose} />

        </div>
    </div>)
}