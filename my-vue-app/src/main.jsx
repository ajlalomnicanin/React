import React from "react";
import ReactDOM from "react-dom/client";
// import Avatar from "./6/Avatar";
import BlogPost from "./5/BlogPost";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BlogPost />
    <BlogPost />
    {/* <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px ",
      }}
    >
      <Avatar name="Holden Caulfield" id="UI Designer" />
      <Avatar name="Henry Letham" id="CTO" />
      <Avatar name="Oskar Blinde" id="Founder" />
      <Avatar name="John Doe" id="DevOps" />
      <Avatar name="Martin Eden" id="Software Engineer" />
      <Avatar name="Martin Eden" id="Software Engineer" />
      <Avatar name="Martin Eden" id="Software Engineer" />
      <Avatar name="Martin Eden" id="Software Engineer" />
      <Avatar name="Martin Eden" id="Software Engineer" />
      <Avatar name="Martin Eden" id="Software Engineer" />
    </div> */}
  </React.StrictMode>
);