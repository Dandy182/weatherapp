import SearchBar from "./SearchBar";


export default function Header(props){

    const {onSearch} = props;

    return (<header className="site__header">
            <div className="contenedor encabezado">
                <h1 className="site__header__title">WeatherAPP</h1>
                <SearchBar onSearch={onSearch} />
            </div>
        </header>)
}