import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  //Definir state  para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = (e) => {
    setModal(true)

    setTimeout(() => {
 
      setAnimarModal(true)
    }, 500);
  }

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
      <img src={IconoNuevoGasto} alt='Icono nuevo gasto' onClick={handleNuevoGasto}/>
    </div>
    ) }
     
     {modal && <Modal setModal ={setModal} animarModal ={animarModal} setAnimarModal ={setAnimarModal}/>}
    </div>
  )
}

export default App
