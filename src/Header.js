import React, { useState } from "react";
import { COLORS, FONTS } from "./Theme/Theme";
import Mediaquery from "./Component/MediaQuery";
export default function Header({ setComp, Name, setName }) {
  const tablet = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  function openMenu() {
    setMobileMenuOpen(false);
  }
  function closeMenu() {
    setMobileMenuOpen(true);
  }
  return (
    <>
      <div
        style={{
          height: "10vh",
          width: "100vw",
          display: mobile ? "flex" : "none",
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
      {
        <>
          <div
            style={{
              position: "absolute",
              display: mobile ? "none" : "block",
              top: 15,
              right: 15,
              zIndex: 999,
            }}
          >
            {mobileMenuOpen ? (
              <>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    // backgroundColor: "black",
                    color: "black",
                  }}
                  onClick={() => openMenu()}
                >
                  <img
                    style={{ width: 30, height: 30, cursor: "pointer" }}
                    src={require("./assets/menu.png")}
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    // backgroundColor: "black",
                    color: "black",
                  }}
                  onClick={() => closeMenu()}
                >
                  <img
                    style={{ width: 30, height: 30, cursor: "pointer" }}
                    src={require("./assets/close.png")}
                  />
                </div>
              </>
            )}
          </div>
        </>
      }
      <div
        style={{
          position: "absolute",
          top: 0,
          left: mobileMenuOpen ? "-100%" : 0,
          zIndex: 299,
          backgroundColor: "#ffff",
          height: "100%",
          width: "100%",
          // paddingInline: 20,
          display: mobile ? "none " : "block",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // paddingInlineStart: "50px",
            marginTop: 50,
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
          <>
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

            <button
              style={{
                color: Name === "Blog" ? COLORS.Primary : COLORS.black,
                fontSize: "22px",
                fontWeight: "bold",
                fontFamily: "Mono",
                letterSpacing: "2px",
                backgroundColor: COLORS.white,
                border: "none",
                // marginLeft: "20px",
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
                // marginLeft: "20px",
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
                // marginLeft: "20px",
              }}
              onClick={() => {
                setComp(React.lazy(() => import("./Contact")));
                setName("Contact");
              }}
            >
              Contact Us
            </button>
          </>
        </div>
      </div>
    </>
  );
}
