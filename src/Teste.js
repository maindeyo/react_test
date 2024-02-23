import { useState } from "react";


function Teste() {
    const [texto, setTexto] = useState('Bem vindo Maria') //cria um state e ele meio que condiciona duas coisas

return (
    <div> 
        <h1>{texto}</h1>
        <button onClick={()=> setTexto("App")}> Mudar </button>
        <button onClick={()=> setTexto("Bem vindo Maria")}> Voltar </button>
    </div>
    
)
}

export default Teste;