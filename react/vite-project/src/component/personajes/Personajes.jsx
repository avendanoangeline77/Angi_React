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
      {personajes.map((personaje, index) => (
        <div>
          <h2>
          nombre : {personaje.name}
          id: {personaje.id}
          gender: {personaje.gender}
          </h2>
         <p>specie: {personaje.species}</p>
        </div>
      ))}
      </>
       
      )}
    </>
   );

}