import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
import Footer from './Footer';
import {Helmet} from "react-helmet";
import Loading from 'react-loading';
import axios from 'axios';
export default function Contact() {
  const [Message, setMessage] = React.useState('');
  const [Name, setName] = React.useState('');
  const [Phone, setPhone] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  async function sendEmail() {
    setLoading(true)
    const data = {
      "fullname": Name,
      "phone": Phone,
      "email": Email,
      "message": Message
    }
    await axios.post("https://k3z9pg3dyf.execute-api.us-east-1.amazonaws.com/Nerdtech-Contact-Endpoint", data,{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    })
      .then((res) => {
        setLoading(false)
        alert("Message Sent")
      }
      )
      .catch((err) => {
        console.log(err)
        setLoading(false)
        alert("Error Occured")
      }
      )
  }

  return (

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '100vh',
      width: '100vw',
      backgroundColor: COLORS.layout,
      paddingBottom: "80px",

    }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NerdTech :: Contact</title>
      </Helmet>
      <img
        src={require("./assets/Contact.png")}
        style={{
          height: 500,
          width: 500,
          margin: 20
        }}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.layout,
        overflowY: "scroll",
      }}>
        <p style={{
          color: COLORS.Primary,
          textAlign: 'center',
          fontSize: "35px",
          fontWeight: 'bold',
          fontFamily: "Mono",
          letterSpacing: "2px",
        }}>Contact Now</p>
        <p style={{
          color: COLORS.black,
          textAlign: 'left',
          fontSize: "18px",
          fontWeight: 'bold',
          fontFamily: "Mono",
          letterSpacing: "2px",
          marginBlock: 0,
          width: 400,
        }}>Full Name*</p>
        <input
          style={{
            height: 50,
            width: 400,
            borderRadius: 10,
            border: "none",
            ...FONTS.body3,
            paddingLeft: 20
          }}
          placeholder="John Doe"
          onChange={(e) => {
            setName(e.target.value)
          }}
          type="text" name="name" />
        <p style={{
          color: COLORS.black,
          textAlign: 'left',
          fontSize: "18px",
          fontWeight: 'bold',
          fontFamily: "Mono",
          letterSpacing: "2px",
          marginBlock: 0,
          marginTop: 20,
          width: 400,
        }}>Email*</p>
        <input
          style={{
            height: 50,
            width: 400,
            borderRadius: 10,
            border: "none",
            ...FONTS.body3,
            paddingLeft: 20
          }}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          placeholder="example@gmail.com"
          type="email" name="Email" />
        <p style={{
          color: COLORS.black,
          textAlign: 'left',
          fontSize: "18px",
          fontWeight: 'bold',
          fontFamily: "Mono",
          letterSpacing: "2px",
          marginBlock: 0,
          marginTop: 20,
          width: 400,
        }}>Phone*</p>
        <input
          style={{
            height: 50,
            width: 400,
            borderRadius: 10,
            border: "none",
            ...FONTS.body3,
            paddingLeft: 20
          }}
          onChange={(e) => {
            setPhone(e.target.value)
          }}
          placeholder="+91 1234567890"
          type="text" name="Phone" />
        <p style={{
          color: COLORS.black,
          textAlign: 'left',
          fontSize: "18px",
          fontWeight: 'bold',
          fontFamily: "Mono",
          letterSpacing: "2px",
          marginBlock: 0,
          marginTop: 20,
          width: 400,
        }}>Message*</p>
        <textarea
          style={{
            height: 120,
            width: 400,
            borderRadius: 10,
            border: "none",
            ...FONTS.body3,
            paddingLeft: 20

          }}
          placeholder="Your Message"
          type="text" name="Message" />
        <button style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.Primary,
          marginTop: "15px",
          fontWeight: 'bold',
          borderRadius: "10px",
          width: "200px",
          height: "50px",
          border: "none",
        }}
        onClick={() => {
          sendEmail()
        }}
        >
          {
            loading ? <Loading type="spin" color={COLORS.white} height={25} width={25} /> :
          
          <p style={{
            color: COLORS.white,
            textAlign: 'center',
            fontSize: "20px",
            fontWeight: 'bold',
            fontFamily: "Mono",
            letterSpacing: "2px",
          }}>Submit</p>
          }
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
  )
}
