import { useState } from "react";
import Card from "../card/Card"
import Login from "../login/Login";
function Home() {
  const [isLogged, setIsLogged] = useState(true);

  const handleLogout = () => {
    setIsLogged(false)

  };
  return (
    <>
      {
        !isLogged ?
          (<Login />)
          : (
            <div>
              <h1>Componente Home</h1>

              <Card
                title="Próximo pico a visitar"
                content="Pico baepi ilha Bela"
                img="https://www.ilhabela.com.br/wp-content/uploads/2020/07/vista-pico-do-baepi-ilhabela-elas-mundo-afora-e1598880171318.jpg" />

              <button onClick={handleLogout}>Deslogar</button>

            </div>
          )
      }

    </>
  )
}

export default Home
