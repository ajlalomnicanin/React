import Icon from "./Icon";
import Icon1 from "./Icon1";
import Text from "./Text";
import BtnHeard from "./btnHeard";
import Button from "./button";
import FbIcon from "./fbIcon";
import MessIcon from "./messIcon";
import TwIcon from "./twIcon";

const ProductCard = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://assets.atdw-online.com.au/images/a11021df8ac18bcfc096922562e5b24f.jpeg?rect=222"
        alt=""
        style={{ width: 500, marginRight: "30px", borderRadius: "10px" }}
      />
      <div style={{ width: "500px" }}>
        <Text />
        <Text h3="BRAND NAME" />

        <Text h1="The Catcher in the Rye" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {" "}
          <Icon />
          <Icon />
          <Icon />
          <Icon />
          <Icon1 />
          <Text text1="4 Review" />
          <FbIcon />
          <TwIcon />
          <MessIcon />{" "}
        </div>
        <Text p=" Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan." />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {" "}
          <Text color="Color" />
          <Button />
          <Button />
          <Button />
          <Text size="Size" />{" "}
          <select
            name=""
            id=""
            style={{ marginLeft: "10px", width: "60px", height: "40px" }}
          >
            <option value="SM">SM</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div>
          <Text broj="$58.00" />
          <Button btn="Button" />
          <BtnHeard />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
