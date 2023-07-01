import React from "react";
import { COLORS, FONTS } from "./Theme/Theme";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Loading from "react-loading";
import axios from "axios";
import Mediaquery from "./Component/MediaQuery";
export default function Contact() {
  const [Message, setMessage] = React.useState("");
  const [Name, setName] = React.useState("");
  const [Phone, setPhone] = React.useState("");
  const [Email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [Sucess, setSucess] = React.useState(false);

  const tablet = Mediaquery("(max-width:820px)");
  const mobile = Mediaquery("(min-width:460px)");
  async function sendEmail() {
    setLoading(true);
    const data = {
      fullname: Name,
      phone: Phone,
      email: Email,
      message: Message,
    };
    await fetch(
      "https://formspree.io/f/xbjvrwqp",
      {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((data) => {
        console.log(data);
        setSucess(true);
        setMsg("Thanks, We will contact you soon");
        setLoading(false);
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
      })
      .catch((err) => {
        console.log(err);

        setSucess(false);
        setMsg("Something went wrong");
        setLoading(false);
      });
  }
  // console.log(mobile ? (tablet ? "tab" : "desktop") : "mobile");

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NerdTech :: Contact</title>
      </Helmet>
      <div
        style={{
          display: mobile ? (tablet ? "flow" : "flex") : null,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: mobile
            ? tablet
              ? "space-evenly"
              : "space-evenly"
            : "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: COLORS.layout,
          paddingBottom: "200px",
          marginTop: mobile ? null : 20,
        }}
      >
        {mobile ? (
          tablet ? (
            <>
              <img
                src={require("./assets/Contact.png")}
                style={{
                  height: "50%",
                  width: "100%",
                  margin: 20,
                }}
              />
            </>
          ) : (
            <>
              <img
                src={require("./assets/Contact.png")}
                style={{
                  height: 500,
                  width: "50%",
                  margin: 20,
                }}
              />
            </>
          )
        ) : null}
        {/* <img
          src={require("./assets/Contact.png")}
          style={{
            height: 500,
            width: 500,
            margin: 20,
          }}
        /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.layout,
            overflowY: "scroll",
            paddingBottom: mobile ? (tablet ? 100 : 0) : 0,
          }}
        >
          <p
            style={{
              color: COLORS.Primary,
              textAlign: "center",
              fontSize: "35px",
              fontWeight: "bold",
              fontFamily: "Mono",
              letterSpacing: "2px",
              marginBlockEnd: 0,
              marginBottom: mobile ? null : 30,
            }}
          >
            Contact Now
          </p>
          <p
            style={{
              color: Sucess ? COLORS.green : COLORS.red,
              textAlign: "center",
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "Mono",
              letterSpacing: "2px",
              marginBlock: 0,
              width: 400,
            }}
          >
            {msg}
          </p>
          <p
            style={{
              color: COLORS.black,
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Mono",
              letterSpacing: "2px",
              marginBlock: 0,
              width: mobile ? 400 : "80%",
            }}
          >
            Full Name*
          </p>
          <input
            style={{
              height: 50,
              width: mobile ? 400 : "80%",
              borderRadius: 10,
              border: "none",
              ...FONTS.body3,
              paddingLeft: 20,
            }}
            placeholder="John Doe"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="name"
          />
          <p
            style={{
              color: COLORS.black,
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Mono",
              letterSpacing: "2px",
              marginBlock: 0,
              marginTop: 20,
              width: mobile ? 400 : "80%",
            }}
          >
            Email*
          </p>
          <input
            style={{
              height: 50,
              width: mobile ? 400 : "80%",
              borderRadius: 10,
              border: "none",
              ...FONTS.body3,
              paddingLeft: 20,
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="example@gmail.com"
            type="email"
            name="Email"
          />
          <p
            style={{
              color: COLORS.black,
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Mono",
              letterSpacing: "2px",
              marginBlock: 0,
              marginTop: 20,
              width: mobile ? 400 : "80%",
            }}
          >
            Phone*
          </p>
          <input
            style={{
              height: 50,
              width: mobile ? 400 : "80%",
              borderRadius: 10,
              border: "none",
              ...FONTS.body3,
              paddingLeft: 20,
            }}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeholder="+91 1234567890"
            type="text"
            name="Phone"
          />
          <p
            style={{
              color: COLORS.black,
              textAlign: "left",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "Mono",
              letterSpacing: "2px",
              marginBlock: 0,
              marginTop: 20,
              width: mobile ? 400 : "80%",
            }}
          >
            Message*
          </p>
          <textarea
            style={{
              height: 120,
              width: mobile ? 400 : "80%",
              borderRadius: 10,
              border: "none",
              ...FONTS.body3,
              paddingLeft: 20,
            }}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Your Message"
            type="text"
            name="Message"
          />
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.Primary,
              marginTop: "15px",
              fontWeight: "bold",
              borderRadius: "10px",
              width: "200px",
              height: "50px",
              border: "none",
            }}
            onClick={() => {
              sendEmail();
            }}
          >
            {loading ? (
              <Loading
                type="spin"
                color={COLORS.white}
                height={25}
                width={25}
              />
            ) : (
              <p
                style={{
                  color: COLORS.white,
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Mono",
                  letterSpacing: "2px",
                }}
              >
                Submit
              </p>
            )}
          </button>
        </div>

        <Footer
          divStyle={{
            position: "fixed",
            left: 0,
            bottom: 0,
          }}
        />
      </div>
    </>
  );
}
