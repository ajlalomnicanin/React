import MiniCard from "./miniCard";

const Class111 = () => {
  const objectsList = [
    { title: "Widget A", value: 1500 },
    { title: "Gizmo X", value: 8000 },
    { title: "Thingamajig B", value: 500 },
    { title: "Doodad Q", value: 12000 },
    { title: "Contraption Y", value: 3000 },
    { title: "Widget Z", value: 18000 },
    { title: "Dinglehopper M", value: 700 },
    { title: "Whatchamacallit J", value: 16000 },
    { title: "Doohickey L", value: 2500 },
    { title: "Thingummy G", value: 10000 },
  ];
  const JSXlist = objectsList.map((items, index) => {
    return <MiniCard key={index} title={items.title} value={items.value} />;
  });
  return <div>{JSXlist}</div>;
};
export default Class111;
