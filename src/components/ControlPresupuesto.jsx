import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

  const formatoMoneda = (cantidad) => {

   cantidad = cantidad.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
   return cantidad;
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      
      <div>
        <p>Grafica aqui</p>
      </div>

      <div className='contenido-presupuesto'>
        <p>
        <span>Presupuesto: </span> {formatoMoneda(presupuesto)}
        </p>

        <p>
        <span>Disponible: </span> {formatoMoneda(0)}
        </p>

        <p>
        <span>Gastado: </span> {formatoMoneda(0)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
