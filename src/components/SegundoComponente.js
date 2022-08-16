import React from 'react'

export const SegundoComponente = () => {

  const vino = [ {nombre: 'Syrah', aroma: 'Frutal', color: 'rubi', textura: 'Sedosa'}, {nombre: 'viognier', aroma: 'citric', color: 'dorado', textura: 'acida'} ]

  function impObjeto (arr) {
    let prueba = [arr[0]]
    console.log(prueba)
    return (
     prueba.map((caract, index) => {
      return <li key={index}>{caract.nombre}</li>}
    ) 
    )
  }

  return (
    <div className='divCard w-25 m-5'>
      <div className='divCardTitle'>
        <h4>Finca El Boleado</h4>
        <h5>Syrah</h5>
      </div>
      <div className='divCardCaracteristicas'>
        <h6>Características</h6>
        <ul className='cardCaracteristicas'>
          {impObjeto(vino)}
        </ul>
        
      </div>
      <button className='rounded bg-primary text-white m-3'>Carrito</button>
    </div>
  )
}
