import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, isvalidPresupuesto, setIsvalidPresupuesto}) => {

    const [mensaje, setMensaje] = useState('');


    const handlePresupuesto = (e) => {
        e.preventDefault();
        if(!presupuesto || Number(presupuesto) < 0) {
            setMensaje('No es un presupuesto valido')
            return
        }
        
        setMensaje('')
        setIsvalidPresupuesto(true)
        
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        
        <form onSubmit={handlePresupuesto} className='formulario'>

            <div className="campo">
                <label htmlFor="">Definir presupuesto</label>

                <input type="number" value={presupuesto}
                className='nuevo-presupuesto' placeholder='Agrega tu presupuesto'
                onChange={(e) => setPresupuesto(Number(e.target.value))}
                />
            </div>

            <input type="submit" value="Agregar"/>

            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto