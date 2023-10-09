const Cards1 = ({ image, p1 }) => {
  return (
    <div>
      {image ? (
        <div>
          <img src={image} width={420} height={140} />
          <p1>{p1}</p1>
        </div>
      ) : (
        <p1>{p1}</p1>
      )}
    </div>
  );
};
export default Cards1;
