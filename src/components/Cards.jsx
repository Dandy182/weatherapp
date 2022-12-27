import Card from './Card';


export default function Cards({cities, onClose}){
    if(cities){
        return(<div className='cards'>
            {cities.map(c => <Card
                name={c.name}
                max={c.max}
                min={c.min}
                clima={c.weather}
                img={c.img}
                onClose={()=> onClose(c.id)}
                id={c.id}
                key={c.id}
            />)}
        </div>)
    } else {
        alert(`Sin Ciudades`)
    }
}