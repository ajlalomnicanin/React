import SimpleComponents from "./SimpleComponenta";

const Classs10 = () => {
  const list = [
    { text: "Users", number: "2.7K" },
    { text: "Subscribes", number: "2.7K" },
    { text: "Downloads", number: "2.7K" },
    { text: "", number: "2.7K" },
  ];
  return (
    // <div>
    //   {list.map((item, index) => {
    //     return (
    //       <div key={index}>
    //         <p>{item.number}</p>
    //         <p>{item.text}</p>
    //       </div>
    //     );
    //   })}
    // </div>
    <div>
      {list.map((items, index))}
      <SimpleComponents key={index} p1={items.number} p2={items.id} />
    </div>
  );
};

export default Classs10;
// exemel element
