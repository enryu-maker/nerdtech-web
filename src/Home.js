import React from 'react'
import { COLORS } from './Theme/Theme'
import Footer from './Footer'
import {Helmet} from "react-helmet";
export default function Home() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    // justifyContent: 'center',
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: COLORS.layout,
                    overflowY: "scroll",
                    paddingBottom: "80px",

                }}
            >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>NerdTech :: Home</title>
                    <description>In website development service we offers customized website design, development, and maintenance, catering to clients' specific needs, goals, and budget. We aims to create a professional, user-friendly, and high-performing online presence.</description>
                </Helmet>
                <p style={{
                    // marginTop: "78px",
                    color: COLORS.black,
                    fontFamily: "Mono",
                    fontSize: "34px",
                    textAlign: 'center',
                    letterSpacing: "0.5px",
                    fontWeight: 'bold',

                }}>We carry more than just good Coding Skills.<br />Our experience makes us stand out from other Software Companies.</p>
                {/* <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.Primary,
                    marginTop: "35px",
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
                    }}>CONTACT US</p>
                </button> */}
                <img src={require("./assets/Background.png")}
                    style={{
                        height: 500,
                        width: 800,
                    }}
                />

                <Footer />
            </div>
        </>
    )
}
