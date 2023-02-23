import React from "react";
import { COLORS, FONTS } from "./Theme/Theme";
import { AiOutlineArrowUp } from "react-icons/ai";
import Mediaquery from "./Component/MediaQuery";
export default function Footer({ divStyle }) {
  const tablet = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        display: mobile ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        backgroundColor: COLORS.white,
        color: COLORS.Primary,
        textAlign: "center",
        ...divStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "88%",
          // height: "60px",
          alignItems: "center",
        }}
      >
        <p
          style={{
            ...FONTS.h3,
            fontWeight: "bold",
            // marginBlockEnd: 0,
            color: COLORS.black,
          }}
        >
          Copyright Nerdtech 2023, All rights reserved.
        </p>
        <p
          style={{
            ...FONTS.h3,
            fontWeight: "bolder",
            color: COLORS.Primary,
          }}
        >
          <img
            src={require("./assets/Logo.png")}
            style={{
              width: 30,
              marginRight: 10,
            }}
          />
          Your Partner For Innovation.
        </p>
      </div>
    </div>
  );
}
