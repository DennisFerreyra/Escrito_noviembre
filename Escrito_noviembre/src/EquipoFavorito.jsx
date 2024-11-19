import { useEffect, useState } from "react";


export const EquipoFavorito = () =>{
   const [teams] = useState(0);
    useEffect(() =>{
        async function fecthUser () {
            const response = await fetch ('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Uruguayan%20Primera%20Division');
            const data = await response.json();
            setUser(data.results[0])
            
        }
        fecthUser();
    }
    )
    
    return (
        <div ClassName ="equipo_contenedor">
            <h1 ClassName="titulo">Equipo de la 1ra división:</h1>
            <img Classname = "imagenEquipo" src={teams.strBadge}/>
            <p>Nombre equipo: {teams.strTeam}</p>
            <p></p>
        </div>
    )
}

