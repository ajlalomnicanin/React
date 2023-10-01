import "./card.css";
const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <p className="name">{props.name}</p>
      <p className="surname">{props.surname}</p>
    </div>
  );
};

export default Card;
