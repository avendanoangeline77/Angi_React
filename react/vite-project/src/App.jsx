import {MiPrimerComponente} from './component/miPrimerComponente/MiPrimerComponente'

const Myfunction = () => {
 return <>hola</>;

}


//props
function App() {

  return (
   <> 
    <Myfunction/>
    <MiPrimerComponente name={'primero'} lastName={'segund'} />
   </>
  );
}

export default App