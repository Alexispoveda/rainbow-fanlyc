import React from 'react';

import Stripes from './Stripes'
import Sparkle from 'react-sparkle'

import './App.css';

const App = () =>{

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ]

  return(
    <div className="App">
      <Sparkle/>
    <h1>#ProyectoPanamáArcoíris</h1>
    {colors.map(color=>{
      return(
      <Stripes color={color}/>
      )
    })}
    <p>Es un movimiento para alegrar a la comunidad y conectarte con quienes están en cuarentena en Panamá y más allá!</p>
    <p>¡Súmate a #ProyectoPanamáArcoíris!
Aporta desde casa con tan sólo pintar el arcoíris! Por cada dibujo de arcoíris, @ofertasimplepty donará 5 balboas, destinando estos fondos para contribuir con los tratamientos de los niños con cáncer.</p>
<p>Esta una gran oportunidad para apoyar a los niños con leucemia y cáncer divirtiendonos desde casa!</p>
    </div>
  )
}

export default App;
