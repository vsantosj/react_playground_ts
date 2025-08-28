interface cardProps{
    title: string;
    content: string;
    img:string;
    op?: number;
}



function Card(props: cardProps) {
  return (
    <>
    <h1>Meus Cards</h1>
    <h2>{props.title}</h2>
    <p>{props.content}</p>
    <img src={props.img} alt={props.title} />
    </>
  )
}

export default Card
