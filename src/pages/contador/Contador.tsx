import { useState } from "react";

function Contador() {
//aqui fica javascript e typescript



//hoohk   atate é para iniciar valor, o que iniciar será o tipo

// userStat é o valor inicial
  const [value, setValor] = useState(0);


  function click(){
    setValor(value + 1)
    
  }

  return (


    //aqui fica "HTML"
    <>
    
    <h1>Componente Contador </h1>
    <p>O valor inicial é {value}</p>
    <button onClick={click}>Adicionar 1</button>
    </>
  )
}

export default Contador
