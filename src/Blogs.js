import React from 'react'
import Footer from './Footer'
import { COLORS } from './Theme/Theme'
import { Helmet } from "react-helmet";
export default function Blogs() {
    return (
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
                <title>NerdTech :: Blogs</title>
                <description>In website development service we offers customized website design, development, and maintenance, catering to clients' specific needs, goals, and budget. We aims to create a professional, user-friendly, and high-performing online presence.</description>
            </Helmet>
            <Footer />
        </div>
    )
}
