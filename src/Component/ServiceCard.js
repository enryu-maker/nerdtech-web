import React from 'react'
import { COLORS } from '../Theme/Theme'

export default function ServiceCard({
    title,
    description,
    image,
    index
}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
            height: 200,
            width: '88vw',
            padding:80
        }}>
            {
                index % 2 === 0 ?
                    <><img src={image} style={{
                        height: 400,
                        width: 400,
                    }} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <p style={{
                                color: COLORS.Primary,
                                fontSize: 28,
                                fontWeight: 'bold',
                                fontFamily: 'Mono',
                                letterSpacing: 2,
                            }}>{title}</p>
                            <p style={{
                                color: COLORS.black,
                                fontSize: 20,
                                fontWeight: 'bold',
                                fontFamily: 'Mono',
                                letterSpacing: 2,
                                inlineSize: 650,
                                textAlign: 'center',
                            }}>{description}</p>
                        </div>
                    </> :
                    <>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <p style={{
                                color: COLORS.Primary,
                                fontSize: 28,
                                fontWeight: 'bold',
                                fontFamily: 'Mono',
                                letterSpacing: 2,
                            }}>{title}</p>
                            <p style={{
                                color: COLORS.black,
                                fontSize: 20,
                                fontWeight: 'bold',
                                fontFamily: 'Mono',
                                letterSpacing: 2,
                                inlineSize: 650,
                                textAlign: 'center',
                            }}>{description}</p>
                        </div>
                        <img src={image} style={{
                            height: 400,
                            width: 400,
                        }} />
                    </>
            }
        </div>
    )
}
