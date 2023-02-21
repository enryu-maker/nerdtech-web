import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
export default function Header({
    setComp,
    Name,
    setName
}) {
    return (
        <div
            style={{
                height: '10vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor: COLORS.white,
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <button style={{
                    color: Name === "Service" ? COLORS.Primary : COLORS.black,
                    ...FONTS.h2,
                    fontWeight: 'bold',
                    paddingBlockEnd: "0px",
                    fontFamily: "Mono",
                    letterSpacing: "2px",
                    marginRight: "20px",
                    backgroundColor: COLORS.white,
                    border: "none",
                }}
                    onClick={() => {
                        setComp(React.lazy(() => import("./Service")))
                        setName("Service")
                    }}
                >Services</button>
                <button style={{
                    color: Name === "Products" ? COLORS.Primary : COLORS.black,
                    ...FONTS.h2,
                    fontWeight: 'bold',
                    paddingBlockEnd: "0px",
                    fontFamily: "Mono",
                    letterSpacing: "2px",
                    marginRight: "20px",
                    backgroundColor: COLORS.white,
                    border: "none",

                }}
                    onClick={() => {
                        setComp(React.lazy(() => import("./Products")))
                        setName("Products")
                    }}
                >Products</button>
                <button style={{
                    color: Name === "Reviews" ? COLORS.Primary : COLORS.black,
                    ...FONTS.h2,
                    fontWeight: 'bold',
                    paddingBlockEnd: "0px",
                    fontFamily: "Mono",
                    letterSpacing: "2px",
                    backgroundColor: COLORS.white,
                    border: "none",
                }}
                    onClick={() => {
                        setComp(React.lazy(() => import("./Reviews")))
                        setName("Reviews")
                    }}
                >Reviews</button>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingInlineStart: "50px",
            }}>
                <button style={{
                    color: COLORS.black,
                    ...FONTS.h1,
                    fontWeight: 'bold',
                    paddingBlockEnd: "0px",
                    fontFamily: "Mono",
                    letterSpacing: "2px",
                    backgroundColor: COLORS.white,
                    border: "none",
                }}
                    onClick={() => {
                        setComp(React.lazy(() => import("./Home")))
                        setName("Home")
                    }}
                >NerdTech</button>
            </div>
            {
                Name != "Home" ? <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingInlineStart: "45px",
                    marginRight: "251px",

                }}>
                    <button style={{
                        color: Name === "Contact" ? COLORS.Primary : COLORS.black,
                        fontSize: "22px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        backgroundColor: COLORS.white,
                        border: "none",
                    }}
                        onClick={() => {
                            setComp(React.lazy(() => import("./Contact")))
                            setName("Contact")
                        }}
                    >Contact Us</button>
                </div>
                    :
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingInlineStart: "50px",
                    }}>
                        <p style={{
                            color: COLORS.Primary,
                            fontSize: "22px",
                            fontWeight: 'bold',
                            fontFamily: "Mono",
                            letterSpacing: "2px",
                            border: "none",
                        }}
                            href="mailto:contact.nerdtech@gmail.com"
                        >Your Partner For Innovation</p>
                    </div>
            }

        </div>
    )
}
