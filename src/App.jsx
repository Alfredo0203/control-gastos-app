import { useState } from 'react'
import Header from './components/Header'


function App() {

  //Definir state  para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

      //validad si es valido el presupuesto
      const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);

  return (
    <Header
    presupuesto = {presupuesto}
    setPresupuesto = {setPresupuesto}
    isvalidPresupuesto={isvalidPresupuesto}
    setIsvalidPresupuesto={setIsvalidPresupuesto}/>
  )
}

export default App
