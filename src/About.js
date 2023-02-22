import React from 'react'
import Footer from './Footer'
import { COLORS } from './Theme/Theme'
export default function About() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: COLORS.layout,
                overflowY: "scroll",
                paddingBottom: "80px",
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-evenly',
                marginTop: 20,

            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <p style={{
                        color: COLORS.Primary,
                        textAlign: 'center',
                        fontSize: "35px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                    }}>About Us</p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        fontSize: "18px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                        width: 700,
                    }}>
                        NERDTECH Technologies is a premier digital organization specializing in plenty of IT and advanced
                        promoting solutions. Our primary point is to empower businesses over a wide range, ensuring entrepreneurs
                        and little businesses have the same resources to scale themselves as huge corporations at a quarter of the
                        cost.

                        It’s all almost energy: energy for promoting, for innovation, for development and idealization, for
                        explore and experiences, energy for next and new. This energy is the primary base of STRATAGEM Wanders. We
                        are differing, advanced, and up for a challenge. Together, we reflect a decade’s ability in key promoting
                        and management. Digital promoting, development hacking, venture development, management, procedure, and
                        consulting: we’ve got it.</p>
                </div>
                <img
                    src={require("./assets/About.png")}
                    style={{
                        height: 400,
                        width: 400,
                        margin: 20
                    }}
                />
            </div>
            <p style={{
                color: COLORS.Primary,
                textAlign: 'center',
                fontSize: "35px",
                fontWeight: 'bold',
                fontFamily: "Mono",
                letterSpacing: "2px",
            }}>Our Team</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-evenly',
                width: "100%",
                flexWrap: "wrap"
            }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img
                        src={require("./assets/akshay.jpg")}
                        style={{
                            height: 150,
                            width: 150,
                            margin: 20,
                            borderRadius: 100
                        }}
                    />
                    <p style={{
                        color: COLORS.Primary,
                        textAlign: 'center',
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>Akshay</p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        fontSize: "14px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>D.M Manager</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img
                        src={require("./assets/akif.jpeg")}
                        style={{
                            height: 150,
                            width: 150,
                            margin: 20,
                            borderRadius: 100
                        }}
                    />
                    <p style={{
                        color: COLORS.Primary,
                        textAlign: 'center',
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>Akif</p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        fontSize: "14px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>C.E.O</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img
                        src={require("./assets/ved.jpg")}
                        style={{
                            height: 150,
                            width: 150,
                            margin: 20,
                            borderRadius: 100
                        }}
                    />
                    <p style={{
                        color: COLORS.Primary,
                        textAlign: 'center',
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>Ved</p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        fontSize: "14px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>C.T.O</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img
                        src={require("./assets/Sayali.jpg")}
                        style={{
                            height: 150,
                            width: 150,
                            margin: 20,
                            borderRadius: 100
                        }}
                    />
                    <p style={{
                        color: COLORS.Primary,
                        textAlign: 'center',
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>Sayali</p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        fontSize: "14px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>Backend Developer</p>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-evenly',
                width: "100%",
                flexWrap: "wrap"
            }}>

            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-evenly',
                width: "100%",
                flexWrap: "wrap"
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img
                        src={require("./assets/Abhishek.jpg")}
                        style={{
                            height: 150,
                            width: 150,
                            margin: 20,
                            borderRadius: 100
                        }}
                    />
                    <p style={{
                        color: COLORS.Primary,
                        textAlign: 'center',
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>Abhishek</p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        fontSize: "14px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>FrontEnd Developer</p>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <img
                        src={require("./assets/Sanyukta.jpg")}
                        style={{
                            height: 150,
                            width: 150,
                            margin: 20,
                            borderRadius: 100
                        }}
                    />
                    <p style={{
                        color: COLORS.Primary,
                        textAlign: 'center',
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>Sanyukta</p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'center',
                        fontSize: "14px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                    }}>FrontEnd Developer</p>
                </div>
            </div>
            <p style={{
                color: COLORS.Primary,
                textAlign: 'center',
                fontSize: "35px",
                fontWeight: 'bold',
                fontFamily: "Mono",
                letterSpacing: "2px",
            }}>Where To Find Us?</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-evenly',
                width: "100%",
                flexWrap: "wrap"
            }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8625228787237!2d73.72477151491609!3d19.972283028376985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded4582aea6f1%3A0x11619722b3c8ffee!2sNerdtech%20%7C%20Web%20Development%20and%20Mobile%20Applications%20Development%20Agency!5e0!3m2!1sen!2sin!4v1677089458014!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0095466952807!2d73.74591351491651!3d20.00811402720998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebfd2ce976af%3A0x8219ab713c3ffc46!2sNerdTech-Digital!5e0!3m2!1sen!2sin!4v1677089784803!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: 'space-evenly',
                width: "100%",
                // flexWrap: "wrap"
            }}>
                <img
                    src={require("./assets/Contactus.png")}
                    style={{
                        height: 400,
                        width: 400,
                        margin: 20,
                    }}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 500
                }}>
                    <p style={{
                        color: COLORS.Primary,
                        textAlign: 'center',
                        fontSize: "35px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                        width: 500

                    }}>Contact Now</p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'Left',
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                        width: 500

                    }}>Email:
                        <a href="mailto:contact.nerdtech@gmail.com" style={{
                            color: COLORS.black,
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}>
                            contact.nerdtech@gmail.com
                        </a>
                    </p>
                    <p style={{
                        color: COLORS.black,
                        textAlign: 'Left',
                        fontSize: "20px",
                        fontWeight: 'bold',
                        fontFamily: "Mono",
                        letterSpacing: "2px",
                        marginBlock: 0,
                        width: 500

                    }}>Phone: +91 9405649047 / +91 9518556670</p>
                </div>
            </div>

            <Footer />
        </div>
    )
}
