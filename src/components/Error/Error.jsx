import error404 from "../../assets/svg/404.svg"
import style from "./Error.module.css"

export default function Error(){
    return(
        <div className={style.containerError}>
            <img className={style.image} src={error404} alt="Error 404" />
        </div>
    )
}