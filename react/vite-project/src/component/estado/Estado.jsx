//Hooks 
import { useState, useEffect } from "react";

//camelcase es la manera de escribir en la cual en cada palabra nueva arranca conmayuscula  


export  const Estado = () => {
 const [contador, setContador ] = useState(0);   
 
 const handleClick = () => {
  setContador(contador + 1);

 };

//el useEfect se va a ejecutar la cantidad de veces que las dependencias se actualicen 
//si no te pasan dependencias se ejecutara solo el principio de la app
//en el primer render
// si no se pasa el array de dependencia siempre se va ejecutar 

useEffect(() => {
    console.log("el contador se ha actualizado");
},[contador] );

const arrayPersonajes = [
   {
     name:"Rick",
     lastName: "Sanchez",
     planet:"Earth",
     image:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"


   },
   {
    name: "Morty",
    lastName:"Smith",
    planet: "earth",
    image:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    }
  ];

 return  (
    <>
        <div className="grilla_3x3">
             {
                //cuando despues de la funcion flecha hay parentesis significa que el return es el implicito
                arrayPersonajes.map((personaje, i) => (
                    <div key={i}>
                    <h2> {personaje.name} {personaje.lastName} </h2>
                    <p>Planet: {personaje.planet}</p>
                    <img src={personaje.image} alt="descripcion" />                   
                 
                 </div>
                ))
             }
        </div>


    <button onClick={handleClick}>Aumentar</button>
    <p>{contador}</p>
    </>
 
 );

};