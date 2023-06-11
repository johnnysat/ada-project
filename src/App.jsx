import { React, useState } from 'react'
import Botao from './components/botao/botao'


function App() {

  const [contador, setContador] = useState(0)


  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  return (
    <>
      <h1>Botão Teste \/</h1>
      <Botao buttonmsg="teste123"/>
      <h1>Meu Contador</h1>
      <h2>{contador}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>

    </>
  )
}

export default App
