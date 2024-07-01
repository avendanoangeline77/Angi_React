import {MiPrimerComponente} from './component/miPrimerComponente/MiPrimerComponente'

import {Estado} from './component/estado/Estado'

import {GetPost} from './component/getPost/GetPost'

import {Personajes} from './component/personajes/Personajes'

import {ConvertidorMonedas} from './component/convertirMonedas/ConvertidorDMonedas' 

const Myfunction = () => {
 return <>hola,</>;

}


//props
function App() {

  return (
   <> 
    <Myfunction/>
    <MiPrimerComponente name={'angeline'} lastName={'avendaño'} />
    <Estado />
    <GetPost/>
    <ConvertidorMonedas/>
   </>
  );
}


export default App