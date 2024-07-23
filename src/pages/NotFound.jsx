import { Link } from "react-router-dom";

function NotFound() {
    return (
        
            <h2>За даним URL нічого не знайдено. Головна сторінка {<Link to="/">Home</Link>}</h2>
        
    )
}

export default NotFound;