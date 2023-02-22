import React from 'react'
import { COLORS, FONTS } from '../Theme/Theme'
import ReactStars from "react-rating-stars-component";
export default function ReviewCard({
    Name,
    Review,
    Rating,
    Name2,
    Review2,
    Rating2,
}) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '88%',
                alignSelf: 'center',
                margin: 10,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '44%',
                    backgroundColor: COLORS.white,
                    // height: 200,
                    padding: 10,
                    borderRadius: 10,

                    margin: 10,
                    alignSelf: 'center',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '100%',

                }}>
                    <p
                        style={{
                            ...FONTS.h2,
                            color: COLORS.black,
                            textAlign: "left",
                            margin: 0,
                            padding: 0,
                            fontWeight:"bolder",

                        }}
                    >
                        {Name}
                    </p>
                    <ReactStars
                        count={5}
                        value={Rating}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <p
                    style={{
                        ...FONTS.body2,
                        color: COLORS.black,
                        textAlign: "center",
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {Review}
                </p>

            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '44%',
                    backgroundColor: COLORS.white,
                    padding: 10,
                    borderRadius: 10,
                    // height: 200,
                    margin: 10,
                    alignSelf: 'center',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    width: '100%',

                }}>
                    <p
                        style={{
                            ...FONTS.h2,
                            fontWeight:"bolder",
                            color: COLORS.black,
                            textAlign: "left",
                            margin: 0,
                            padding: 0,
                        }}
                    >
                        {Name2}
                    </p>
                    <ReactStars
                        count={5}
                        value={Rating2}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <p
                    style={{
                        ...FONTS.h2,
                        color: COLORS.black,
                        textAlign: "center",
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {Review2}
                </p>

            </div>

        </div>
    )
}
