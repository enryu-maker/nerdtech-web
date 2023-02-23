import React from "react";
import { COLORS } from "../Theme/Theme";
import Mediaquery from "./MediaQuery";

export default function ServiceCard({ title, description, image, index }) {
  const tablet = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  return (
    <div
      style={{
        display: mobile ? "flex" : "flex",
        flexDirection: mobile ? "row" : "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: mobile
          ? tablet
            ? "space-around"
            : "space-evenly"
          : "space-evenly",
        height: mobile ? 200 : "100%",
        width: mobile ? "100%" : "92%",
        padding: mobile ? 80 : 0,
      }}
    >
      {mobile ? (
        <>
          {index % 2 === 0 ? (
            <>
              <img
                src={image}
                style={{
                  height: tablet ? 300 : 400,
                  width: tablet ? 250 : 400,
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  //   width: "105%",
                }}
              >
                <p
                  style={{
                    color: COLORS.Primary,
                    fontSize: 28,
                    fontWeight: "bold",
                    fontFamily: "Mono",
                    letterSpacing: 2,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: COLORS.black,
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "Mono",
                    letterSpacing: 2,
                    inlineSize: tablet ? "85%" : 650,
                    textAlign: "center",
                  }}
                >
                  {description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    color: COLORS.Primary,
                    fontSize: 28,
                    fontWeight: "bold",
                    fontFamily: "Mono",
                    letterSpacing: 2,
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    color: COLORS.black,
                    fontSize: 20,
                    fontWeight: "bold",
                    fontFamily: "Mono",
                    letterSpacing: 2,
                    inlineSize: tablet ? "85%" : 650,
                    textAlign: "center",
                  }}
                >
                  {description}
                </p>
              </div>
              <img
                src={image}
                style={{
                  height: tablet ? 300 : 400,
                  width: tablet ? 250 : 400,
                }}
              />
            </>
          )}
        </>
      ) : (
        <>
          <img
            src={image}
            style={{
              height: 270,
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              paddingInline: mobile ? 0 : 10,
            }}
          >
            <p
              style={{
                color: COLORS.Primary,
                fontSize: 22,
                fontWeight: "bold",
                fontFamily: "Mono",
                letterSpacing: 2,
              }}
            >
              {title}
            </p>
            <p
              style={{
                color: COLORS.black,
                fontSize: 15,
                fontWeight: "bold",
                fontFamily: "Mono",
                letterSpacing: 2,
                textAlign: "justify",
              }}
            >
              {description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
