import { useNavigate } from "react-router-dom";
import css from './ButtonGoBack.module.css'

function ButtonGoBack() {
    const navigate = useNavigate();

    const clickButtonGoBack = () => {
        navigate("/");
    }
    return <button className={css.buttonGoBack} onClick={clickButtonGoBack}>Go Back</button>
}

export default ButtonGoBack;