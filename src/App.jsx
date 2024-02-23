import Titulo from './Titulo.jsx'

function App() { //nome do componente = nome do arquivo, sempre em letra maiuscula
  return (
    <div>
      <Titulo nome="maria" paragrafo= {true} cor='red' /> 
      <Titulo nome="luisa" />
      <Titulo/>
    </div>
  )

}

export default App