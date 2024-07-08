import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export function EpisodiosPersonajes() {
    const [personajes, setPersonajes] = useState([]);
    const navigate = useNavigate()



    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(personaje => setPersonajes(personaje.results));
     },[]);
    

     const handleClick = () =>{
        navigate("/miPrimerComponente")
     }
 return (
   <>
    
    {!personajes ?( 
      <>Loading...</> 
    ) :(
      <>
      <div class="grilla_3x3">
        {personajes.map((personaje, index) => (
          <div className="cartaEpiPersonajes" onClick={handleClick}>
            <h2>
              {personaje.name}
              imagen: <img src={personaje.image}/>
            </h2>
            <p>id: {personaje.id}</p>
            <p>genero: {personaje.gender}</p>
            <p>specie: {personaje.species}</p>
           
            
          </div>
        ))}
      </div>
      </>
       
      )}
    </>
   );

}


