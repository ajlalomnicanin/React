import React from "react";

class SimpleClassCompontent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ajla",
      count: 0,
    };
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentDidUpdate() {
    
  }
  handleClick = () => {};
  render() {
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => {
            this.state({ name: "changed" });
          }}
        ></button>
      </div>
    );
  }
}
export default SimpleClassCompontent;
