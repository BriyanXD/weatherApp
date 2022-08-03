import style from "./Card.module.css"
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faCloudSun, faCloud, faTemperatureArrowDown, faTemperatureArrowUp, faDroplet, faTemperatureEmpty} from '@fortawesome/free-solid-svg-icons';
import Map from "../Map/Map";
function Card({city}){
    const [typeClass, setClass] = useState(`${style.cardCity}`)
    const [typeIcon, setIcon] = useState(faCloudSun)
    const [typeAnimation, setAnimation] = useState()
    useEffect(() => {
            if(city.weather[0].description === "overcast clouds"){
                setClass(`${style.cardCity} ${style.nublado}`)
                setIcon(faCloud)
                setAnimation(`${style.iconContainer} ${style.animationNublado}`)
                return
            }
            if(city.weather[0].description === "clear sky"){
                setClass(`${style.cardCity} ${style.soleado}`)
                setIcon(faSun)
                setAnimation(`${style.iconContainer} ${style.animationSoleado}`)
                return
            }
            //scattered clouds
            if(city.weather[0].description === "broken clouds" ||
               city.weather[0].description === "few clouds" ||
               city.weather[0].description === "scattered clouds"){
                setClass(`${style.cardCity} ${style.parcial}`)
                setIcon(faCloudSun)
                setAnimation(`${style.iconContainer} ${style.animationParcial}`)
            }else{
                setClass(`${style.cardCity} ${style.parcial}`)
                setIcon(faCloudSun)
                setAnimation(`${style.iconContainer} ${style.animationParcial}`)
            }
    },[city])
    return(
        <div className={typeClass}>
            <div className={typeAnimation}>
                <FontAwesomeIcon className={style.image} icon={typeIcon} />
                <div className={style.mapContainer}>
                    <Map coord={city.coord} />
                </div>
            </div>
            <div className={style.containerData}>
                <p className={style.title}>{city.name}</p>
                <div className={style.containermixmax}>
                        <div className={style.icon} >
                            <FontAwesomeIcon className={style.iconminmax} icon={faTemperatureEmpty} />
                        </div>
                        <div>
                            <p>Current</p>
                            <p>{(city.main.temp - 273.15).toFixed(1)} °C</p>
                        </div>
                    </div>
                <div className={style.minmax}>
                    <div className={style.containermixmax}>
                        <div className={style.icon} >
                            <FontAwesomeIcon className={style.iconminmax} icon={faTemperatureArrowDown} />
                        </div>
                        <div>
                            <p>Min</p>
                            <p>{(city.main.temp_min - 273.15).toFixed(1)} °C</p>
                        </div>
                    </div>
                    <div className={style.containermixmax}>
                        <div className={style.icon}>
                            <FontAwesomeIcon className={style.iconminmax} icon={faTemperatureArrowUp} />
                        </div>
                        <div>
                            <p>Max</p>
                            <p>{(city.main.temp_max - 273.15).toFixed(1)} °C</p>
                        </div>
                    </div>
                </div>
                <div className={style.containermixmax}>
                        <div className={style.icon} >
                            <FontAwesomeIcon className={style.iconminmax} icon={faDroplet} />
                        </div>
                        <div>
                            <p>Humidity</p>
                            <p>{city.main.humidity} %</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Card;