import { useState } from "react";

export default function SearchBar({onSearch}){
    const [city, setCity] = useState('');

    let handlerInput = (e) =>{
        setCity(e.target.value);
    }

    let handlerSubmit = (e) =>{
        e.preventDefault();
        onSearch(city)
    }

    return(<form onSubmit={handlerSubmit} className='formulario'>
        <input type="text" placeholder='ingresa la ciudad' className="input" onChange={handlerInput} />
        <button type='submit' className="btn btn__buscar">Buscar</button>
    </form>)
}