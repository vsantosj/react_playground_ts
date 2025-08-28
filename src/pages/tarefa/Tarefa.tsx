import { useEffect, useState } from "react"

function Tarefa() {

  //use effect dispara quando estado mudar é como um sensor de presença de uma lampada

  // use state declara o estado inicial 

  const [tarefa, setTarefa] = useState(' ');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (completed)
      setTarefa('Parabéns! você concluiu a tarefa.');
    else
      setTarefa('');
  }, [completed]);

  return (
    <>
      <h1>Componente Tarefa</h1>
      <h3>{tarefa}</h3>
      <button onClick={() => setCompleted(!completed)} >{completed ? 'Desfazer' : 'Concluir'} </button>
    </>
  )
}

export default Tarefa
