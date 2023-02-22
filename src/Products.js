import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
import Footer from './Footer'
export default function Products() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      // backgroundColor: "#ffe9ec",
      backgroundColor:COLORS.layout,
      paddingBottom: "80px",

    }}>
      <p style={{
        color: COLORS.Primary,
        textAlign: 'center',
        fontSize: "35px",
        fontWeight: 'bold',
        fontFamily: "Mono",
        letterSpacing: "2px",
      }}>Our Clients</p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img 
        src={require("./assets/Gamma.png")}
        style={{
          height: 150,
          width: 150,
          borderRadius:150,
          margin: 20
        }}
        onClick={() => {
          window.open("https://www.epfnow.com/")
        }}
        />
        <img 
        src={require("./assets/Asa.png")}
        style={{
          height: 150,
          width: 150,
          borderRadius:150,
          margin: 20
        }}
        onClick={() => {
          window.open("https://www.asatradelink.com/")
        }}
        />
        <img 
        src={require("./assets/Herdhelp.png")}
        style={{
          height: 150,
          width: 150,
          borderRadius:150,
          margin: 20
        }}
        onClick={() => {
          window.open("https://www.herdhelp.com/")
        }}
        />
        <img 
        src={require("./assets/East.png")}
        style={{
          height: 150,
          width: 150,
          borderRadius:150,
          margin: 20
        }}
        onClick={() => {
          window.open("https://www.epfnow.com/")
        }}
        />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img 
        src={require("./assets/Fbbt.png")}
        style={{
          height: 150,
          width: 150,
          borderRadius:150,
          margin: 20
        }}
        onClick={() => {
          window.open("https://www.fbttstore.com/online-store")
        }}
        />
        <img 
        src={require("./assets/Apnimandi.png")}
        style={{
          height: 150,
          width: 150,
          borderRadius:150,
          margin: 20
        }}
        onClick={() => {
          window.open("https://www.apnimandi.pk")
        }}
        />
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
