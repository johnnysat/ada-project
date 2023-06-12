import { React } from 'react'

const minhaLista = [
  { id: 1, value: 'Fogo' },
  { id: 2, value: 'Água' },
  { id: 3, value: 'Terra' },
  { id: 4, value: 'Ar' },

]

export default function Listas() {
  return minhaLista.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.value}</p>
      </div>
    )
  })

}