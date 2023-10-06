import Card1 from "./card1";

const Classs9 = () => {
  return (
    <div
      style={{
        display: "flex",
        // justifyContent: "space-around",
        // alignItems: "center",
      }}
    >
      <Card1
        image="https://images4.alphacoders.com/115/thumb-1920-115716.jpg"
        header2={"CATEGORY"}
        header1={"The Catalyzer"}
        paragraf={
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        }
        button={"Learn More"}
      />
      <Card1
        image
        header2={"CATEGORY"}
        header1={"The 400 Blows"}
        paragraf={
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        }
        button={"Learn More"}
      />
      <Card1
        image
        header2={"CATEGORY"}
        header1={"Shooting Stars"}
        paragraf={
          "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
        }
        button={"Learn More"}
      />
    </div>
  );
};
export default Classs9;
