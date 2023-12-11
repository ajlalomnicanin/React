import React from "react";

// jednostavna komponenta koja preko propsa dobija title, selected, handleClick funkciju
// prikazete title kao text, selected vam je vrednost da li je ovaj element selected
// handleClick vam menja da li je item selectovan ili ne.

function ListItem() {
  return (
    <div>
      <p title={data.title}></p>
      <p selected={data.selected}></p>
      <p handleClick={handleClick}></p>
    </div>
  );
}

export default ListItem;
