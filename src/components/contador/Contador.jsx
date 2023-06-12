import { React, useState } from 'react'


export default function Contador() {

  const [contador, setContador] = useState(0)

  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }


  return (
    <>
      <h1>Meu Contador {contador}</h1>
        {contador > 9 ? <h2>Valor Muito Grande</h2> : <h2>Valor muito pequeno</h2>}
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </>
  )

}

