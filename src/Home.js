import React from 'react'
import image from './assets/Background.png'
import Header from './Header'
import { COLORS, FONTS } from './Theme/Theme'
export default function Home() {
    return (
        <div
            style={{
                height: '100%',
                width:'100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundImage: `url(${image})`,
                backgroundSize: 'contain',
            }}
        >
            <p style={{
                // marginTop: "78px",
                color: COLORS.black,
                fontFamily: "Mono",
                fontSize: "34px",
                textAlign: 'center',
                letterSpacing: "0.5px",
                fontWeight: 'bold',

            }}>We carry more than just good Coding Skills.<br />Our experience makes us stand out from other Software Companies.</p>
            <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.Primary,
                marginTop: "45px",
                fontWeight: 'bold',
                borderRadius: "10px",
                width: "200px",
                height: "50px",
                border: "none",
            }}>
                <p style={{
                    color: "#ffe9ec",
                    textAlign: 'center',
                    fontSize: "20px",
                    fontWeight: 'bold',
                    fontFamily: "Mono",
                    letterSpacing: "2px",
                }}>CONTACT US</p>
            </button>
        </div>
    )
}
