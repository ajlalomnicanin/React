const Events = () => {
  return (
    <div
      onClick={(e) => console.log(e.target)}
      style={{ width: 50, height: 50, background: "black" }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          console.log("inner text");
        }}
        style={{ width: 30, height: 30, background: "white" }}
      ></div>
    </div>
  );
};
export default Events;
