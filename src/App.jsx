import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  //Definir state  para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

      //validad si es valido el presupuesto
      const [isvalidPresupuesto, setIsvalidPresupuesto] = useState(false);

  return (
    <div>
    <Header
    presupuesto = {presupuesto}
    setPresupuesto = {setPresupuesto}
    isvalidPresupuesto={isvalidPresupuesto}
    setIsvalidPresupuesto={setIsvalidPresupuesto}/>

    {isvalidPresupuesto &&
    (
      <div className='nuevo-gasto'>
      <img src={IconoNuevoGasto} alt='Icono nuevo gasto'/>
    </div>
    ) }

    </div>
  )
}

export default App
