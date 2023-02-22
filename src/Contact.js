import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
import Footer from './Footer';
export default function Contact() {
  const [inputValue, setInputValue] = React.useState('');
  return (

    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '100vh',
      width: '100vw',
      backgroundColor: COLORS.layout,
    }}>
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
        paddingBottom: "80px",

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
        }}>
          <p style={{
            color: COLORS.white,
            textAlign: 'center',
            fontSize: "20px",
            fontWeight: 'bold',
            fontFamily: "Mono",
            letterSpacing: "2px",
          }}>Submit</p>
        </button>


      </div>

      <Footer 
      divStyle={{
        position:"fixed",
        left:0,
        bottom:0,
      }}
      />
    </div>
  )
}
