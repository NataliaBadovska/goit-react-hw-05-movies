import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CastApi from 'services/cast_api';
import css from './Cast.module.css';

function Cast() {
    const [cast, setCast] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        CastApi(movieId).then(cast => setCast(cast));

    }, [movieId])

    if (cast !== null) {

        return (
            <div>
                 <ul >
                 {cast.cast.map(({id, name, profile_path, character}) => {
                     return <li key={id} >
                         <div className={css.photoBox}>
                             <img src='' alt={name} className={css.photo}></img>
                         </div>
                         <p>{name}</p>
                         <p>Character: {character}</p>
                     </li>
                 }
                     
                 )}
             </ul>

             </div>
            
         )
    }
}

export default Cast;



