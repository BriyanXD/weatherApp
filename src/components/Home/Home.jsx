import Card from "../Card/Card";
import style from "./Home.module.css"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Error from "../Error/Error";
function Home() {
    const [input, setInput] = useState('La Paz')
    const [city, setCity] = useState()
    useEffect(() => {getDateForCity()},[])
    function getDateForCity() {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_KEY}`)
            .then(response => response.json())
            .then(response =>setCity(response))
            .catch(error => setCity("La Paz"))
    }
    return (
        <div className={style.homeContainer}>
            <div className={style.searchContainer}>
                <input name="inputCity" type="text" onChange={(e) => setInput(e.target.value)} className={style.search}/>
                <button className={style.button} onClick={getDateForCity}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            {city && city.cod !== '404' ? <Card city={city}/> : city?.cod === '404' ? <Error/>: <h2 className={style.loading}> Cargnado...</h2> }
        </div>
    )
}
export default Home;