import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers';


function App() {

  //Definir state  para presupuesto
  const [presupuesto, setPresupuesto] = useState(0);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = (e) => {
    setModal(true)

    setTimeout(() => {
 
      setAnimarModal(true)
    }, 500);
  }
//Guardar gasto
  const guardarGasto = gasto => {
    gasto.id = generarId();
  console.table(gasto)
  // Crea una copia y le agrega el objeto con los datos del modal
  setGastos([...gastos, gasto])

  //Cerrar Modal
  setAnimarModal(false)
  setTimeout(() => {
      setModal(false)
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
     
     {modal && <Modal 
     setModal ={setModal} 
     animarModal ={animarModal} 
     setAnimarModal ={setAnimarModal}
     guardarGasto={guardarGasto}/>}
    </div>
  )
}

export default App
