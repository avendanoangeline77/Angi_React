import { useEffect, useState } from "react"

export function Personajes() {
    const [personajes, setPersonajes] = useState([]);


    useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(personaje => setPersonajes(personaje.results));
     },[]);
    
 return (
   <>
    
    {!personajes ?( 
      <>Loading...</> 
    ) :(
      <>
      <div class="grilla_3x3">
        {personajes.map((personaje, index) => (
          <div className="cartasPersonajes">
            <h2>
              imagen: <img src={personaje.image}/>
              Nombre : {personaje.name}
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