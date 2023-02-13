import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      
      <div>
        <p>Grafica aqui</p>
      </div>

      <div className='contenido-presupuesto'>
        <span>Presupuesto: </span> ${presupuesto}
      </div>
    </div>
  )
}

export default ControlPresupuesto
