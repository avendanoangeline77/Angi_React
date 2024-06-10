import {MiPrimerComponente} from './component/miPrimerComponente/MiPrimerComponente'

import {Estado} from './component/estado/Estado'
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
   </>
  );
}

export default App