import CerrarModalBtn from '../img/cerrar.svg'
import { useState } from 'react'
const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState('');
    const handleCerrarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
          }, 500);
    }


  return (
    <div className="modal">
        <div className='cerrar-modal'>
        <img  src={CerrarModalBtn} alt="Cerrar modal" onClick={handleCerrarModal}/>
        </div>
        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
            <legend>Gasto</legend>
            <div className="campo">
              <label htmlFor="nombre">Nombre gasto</label>
              <input type="text" id='nombre' placeholder='Ingrese nombrer del gasto' 
              value={nombre} onChange={e => setNombre(e.target.value)}/>
            </div>

            <div className="campo">
              <label htmlFor="cantidad">Cantidad</label>
              <input type="text" id='cantidad' placeholder='Ingrese cantidad: Ej. 300'
              value={cantidad} onChange={e => setCantidad(e.target.value)}/>
            </div>

            <div className="campo">
              <label htmlFor="categoria">Categoria</label>
              <select name="" id="categoria" 
              value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="">-- Seleccione categoria</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="gastos">Gastos varios</option>
                <option value="ocio">Ocio</option>
                <option value="salud">Salud</option>
                <option value="Subscripciones">Subscripciones</option>

              </select>
            </div>

            <input type="submit" value="Agregar gasto" />
        </form>
     </div>
  )
}

export default Modal
