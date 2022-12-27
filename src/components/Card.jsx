

export default function Card(props){

    const {name, max, min, weather, img, onClose } = props;
    
    return(<div className="card">
        <button className="closeButton" onClick={onClose}>X</button>
        <h1>{name}</h1>
        <div className="contenedor card__info">
            <p><span>Temp. min:</span>{min}°</p>
            <p><span>Temp. max:</span>{max}°</p>
            <p><span>Clima:</span>{weather}</p>
            <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt={name} />
        </div>
        </div>)
}