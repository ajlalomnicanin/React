import { useState } from "react";
import Button from "./Button";
import RoundButton from "./RoundButton";
import Select from "./Select";

import Text from "./Text";
import Rating from "./rating";

const ProductCard = (props) => {
  const [photo, getPhoto] = useState(props.date.imgs.white);

  console.log(props);
  return (
    <div>
      <div>
        <img src={photo} alt="" width={400} height={400} />
      </div>
      <div>
        <Text type="t1" text="BRAND NAME" />
        <Text type="t2" text={props.data.brandTitle} />
        <div>
          <Rating value={props.data.reviews} />
          <Text type="t3" text={props.data.reviewsCount + " Reviews"} />

          {/* <SocialIcon type="fb" />
          <SocialIcon type="twitter" />
          <SocialIcon type="intagram" /> */}
        </div>
        <Text type="t3" text={props.data.description} />

        <div>
          <Text type="t3" text="Color" />
          <RoundButton color="blue" />
          <RoundButton color="black" />
          <RoundButton color="white" />
          <Text type="t3" text="Size" />
          <Select list={props.data.sizes} />
        </div>
        {/* <Divider /> */}

        <div>
          <Text type="t4" text={props.data.price + " $"} />
          <Button title="Button" />
          <Button />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
