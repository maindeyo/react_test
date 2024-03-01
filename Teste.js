import { useState } from "react";
import { Profile } from "./Profile";

const user = {
    name: 'Hedy Lamarr'
  };

function Teste() {
    const [texto, amor] = useState("Bem vindo") //cria um state e ele meio que condiciona duas coisas

return (
    <div> 
        <h1>{texto}</h1>
        <h1>{user.name}</h1>
        <button onClick={()=> amor("App")}> Mudar </button>
        <button onClick={()=> amor("Bem vindo " + user.name)}> Voltar </button>
        <Profile />
    </div>
    
)
}

export default Teste;