import { React } from 'react'
import Contador from './components/contador/Contador'
import Listas from './components/listas/Listas'
import Api from './components/api/Api'



function App() {

  return (
    <>
      <Contador />
      <br/>
      <br/>
      <Listas />
      <br/>
      <br/>
      <Api />
    </>
  )
}

export default App
