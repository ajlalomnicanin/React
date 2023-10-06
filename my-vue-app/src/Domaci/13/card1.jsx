import "./card1.css";

const Card1 = ({ image, header2, header1, paragraf, button }) => {
  return (
    <div className="card1">
      {image ? ( // Ako postoji slika, prikaži sliku i elemente teksta pored nje
        <div className="main">
          <img src={image} alt="Slika" width={100} height={100} />
          <div className="main1">
            <h2>{header2}</h2>
            <h1>{header1}</h1>
            <p>{paragraf}</p>
            <button>{button}</button>
          </div>
        </div>
      ) : (
        // Ako nema slike, centriraj tekst
        <div className="centered">
          <h2>{header2}</h2>
          <h1>{header1}</h1>
          <p>{paragraf}</p>
          <button>{button}</button>
        </div>
      )}
    </div>
  );
};

export default Card1;

// ili

// const Card1 = ({ image, header2, header1, paragraf, button }) => {
//   // Inline stil za centriranje teksta
//   const centeredTextStyle = {
//     textAlign: !image ? "center" : "left",
//   };

//   return (
//     <div className="Card1">
//       {image && <img src="" alt="Slika" />}
//       <div style={centeredTextStyle}>
//         <h2>{header2}</h2>
//         <h1>{header1}</h1>
//         <p>{paragraf}</p>
//         <button>{button}</button>
//       </div>
//     </div>
//   );
// };
// export default Card1;
