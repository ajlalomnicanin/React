import "./button.css";

const BorderRadiusMap = {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
};

const sizeToPaddingMap = {
  small: "8px 16px",
  large: "12px 24px",
  default: "10px 20px",
};

const Button = ({ variant, background, color, size, radius }) => {
  let buttn = {
    backgroundColor: background,
    color: color,
    size: sizeToPaddingMap[size] || sizeToPaddingMap.default,
    borderRadius: BorderRadiusMap[radius] || "8px",
    border: "none",
  };
  
  let buttonStyle = () => {
    switch (variant) {
      case "filled":
        buttn = {
          ...buttn,
          background: background,
          color: "white",
        };
        // switch (size) {
        //   case "small":
        //     buttonStyle.padding = "8px 16px";
        //     break;
        //   case "large":
        //     buttonStyle.padding = "12px 24px";
        //     break;
        //   default:
        //     buttonStyle.padding = "10px 20px";
        //     break;
        // }
        break;
      default:
        break;
    }
  };
  return <button style={buttonStyle()}>button</button>;
};
export default Button;
