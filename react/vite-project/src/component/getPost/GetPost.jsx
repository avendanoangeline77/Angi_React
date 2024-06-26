import { useEffect, useState } from "react"

export function GetPost() {
    const [data, setData] = useState({});


    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
       .then((Response) => Response.json())
       .then((ResponseDats) => setData(ResponseDats));
    },[]);
    
 return (
   <>
    
    {!data ?( 
      <>Loading...</> 
    ) :(
      <>
       <h2>
        Objeto title: {data.title}
        id: {data.id}
        </h2>
       <p>body: {data.body}</p>
      </>
      )}
    </>
   );

}