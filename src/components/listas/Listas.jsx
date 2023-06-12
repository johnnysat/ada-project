import { React, useEffect, useState } from 'react'

const minhaLista = [
  { id: 1, value: 'Fogo' },
  { id: 2, value: 'Água' },
  { id: 3, value: 'Terra' },
  { id: 4, value: 'Ar' },
  { id: 5, value: 'Gelo' },

]

export default function Listas() {

  const [elementos, setElementos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(
    () => {
      if(pesquisa){
        const novaLista = minhaLista.filter((item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setElementos(novaLista)
      } else {
        setElementos(minhaLista)
      }
    }
    , [pesquisa])

  return (
    <div>
      <h2>Filtrando Elementos</h2>
      <input
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
        placeholder='pesquise aqui'
      />

      {elementos.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.value}</p>
          </div>
        )
      })}
    </div>
  )
}