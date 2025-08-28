import Card from "../card/Card";

interface HomeProps {
  userName: string;
  onLogout: () => void;
}

function Home({ userName, onLogout }: HomeProps) {
  return (
    <div>
      <h1>Olá, {userName}. Bem vindes!</h1>

      <button onClick={onLogout}>Deslogar</button>
      <Card
        title="Próximo pico a visitar"
        content="Pico baepi ilha Bela"
        img="https://www.ilhabela.com.br/wp-content/uploads/2020/07/vista-pico-do-baepi-ilhabela-elas-mundo-afora-e1598880171318.jpg"
      />

    </div>
  );
}

export default Home;
