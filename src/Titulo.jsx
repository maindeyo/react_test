import { useState } from "react";
function Titulo({nome, paragrafo, cor}) {
    //let nome = 'maria'; //injetar javascript com {}
    //var imagem = 'https://i.pinimg.com/564x/3e/c8/8e/3ec88e6608f3b2120cebe3d4657b2008.jpg'; //imagem da web
    //tags sem fechamento precisam ser "fechadas"

    const [texto, setTexto] = useState('Não sei') //cria um state e ele meio que condiciona duas coisas
    const [inputText, setInputText] = useState("")

    function clicou() {
        setTexto(inputText)

    }
    return (
        <div>
            <h1 style={{color:cor}}> {texto} {nome ? nome : 'yugyeom' /*basicamente um if*/}</h1> 
            <input type="text" value={inputText} onChange={(e) =>{setInputText(e.target.value)}}/>
            <button /*onClick={()=> setTexto("Mudei")}*/ onClick={clicou}> Mudar </button>
            {/* <img  width={150} src={imagem} />  */}
            {/* {paragrafo ? 
             <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis a magnam possimus error aut, quod qui placeat accusamus obcaecati tempora ratione sint facilis est incidunt. Non libero velit vero! </p>
              : 
              "nada"}; */}

        </div>
    
        
    )
    
}

export default Titulo