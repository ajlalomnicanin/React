import "./cards.css";

const Cards1 = (props) => {
  console.log(props);
  return (
    <div className="cards">
      <img src={props.img} style={{ width: "40px", height: "40px" }} />
      <p className="number">{props.number} </p>
      <p className="p">{props.p}</p>
    </div>
  );
};
export default Cards1;
