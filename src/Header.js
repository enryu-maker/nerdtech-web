import React from "react";
import { COLORS, FONTS } from "./Theme/Theme";
import Mediaquery from "./Component/MediaQuery";
export default function Header({ setComp, Name, setName }) {
  const tablet = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  return (
    <div
      style={{
        height: "10vh",
        width: "100vw",
        display: mobile ? "flex" : "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: COLORS.white,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            color: Name === "Service" ? COLORS.Primary : COLORS.black,
            ...FONTS.h2,
            fontWeight: "bold",
            paddingBlockEnd: "0px",
            fontFamily: "Mono",
            letterSpacing: "2px",
            marginRight: "20px",
            backgroundColor: COLORS.white,
            border: "none",
          }}
          onClick={() => {
            setComp(React.lazy(() => import("./Service")));
            setName("Service");
          }}
        >
          Services
        </button>
        <button
          style={{
            color: Name === "Products" ? COLORS.Primary : COLORS.black,
            ...FONTS.h2,
            fontWeight: "bold",
            paddingBlockEnd: "0px",
            fontFamily: "Mono",
            letterSpacing: "2px",
            marginRight: "20px",
            backgroundColor: COLORS.white,
            border: "none",
          }}
          onClick={() => {
            setComp(React.lazy(() => import("./Products")));
            setName("Products");
          }}
        >
          Clients
        </button>
        <button
          style={{
            color: Name === "Reviews" ? COLORS.Primary : COLORS.black,
            ...FONTS.h2,
            fontWeight: "bold",
            paddingBlockEnd: "0px",
            fontFamily: "Mono",
            letterSpacing: "2px",
            backgroundColor: COLORS.white,
            border: "none",
          }}
          onClick={() => {
            setComp(React.lazy(() => import("./Reviews")));
            setName("Reviews");
          }}
        >
          Reviews
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingInlineStart: "50px",
        }}
      >
        <button
          style={{
            color: COLORS.black,
            ...FONTS.h1,
            fontWeight: "bold",
            paddingBlockEnd: "0px",
            fontFamily: "Mono",
            letterSpacing: "2px",
            backgroundColor: COLORS.white,
            border: "none",
          }}
          onClick={() => {
            setComp(React.lazy(() => import("./Home")));
            setName("Home");
          }}
        >
          NerdTech
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            color: Name === "Blog" ? COLORS.Primary : COLORS.black,
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Mono",
            letterSpacing: "2px",
            backgroundColor: COLORS.white,
            border: "none",
            marginLeft: "20px",
          }}
          onClick={() => {
            setComp(React.lazy(() => import("./Blogs")));
            setName("Blog");
          }}
        >
          Blogs
        </button>
        <button
          style={{
            color: Name === "About" ? COLORS.Primary : COLORS.black,
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Mono",
            letterSpacing: "2px",
            backgroundColor: COLORS.white,
            border: "none",
            marginLeft: "20px",
          }}
          onClick={() => {
            setComp(React.lazy(() => import("./About")));
            setName("About");
          }}
        >
          About Us
        </button>
        <button
          style={{
            color: Name === "Contact" ? COLORS.Primary : COLORS.black,
            fontSize: "22px",
            fontWeight: "bold",
            fontFamily: "Mono",
            letterSpacing: "2px",
            backgroundColor: COLORS.white,
            border: "none",
            marginLeft: "20px",
          }}
          onClick={() => {
            setComp(React.lazy(() => import("./Contact")));
            setName("Contact");
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
