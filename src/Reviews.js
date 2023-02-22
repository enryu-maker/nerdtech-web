import React from 'react'
import ReviewCard from './Component/ReviewCard'
import Footer from './Footer'
import { COLORS, FONTS } from './Theme/Theme'
import { Helmet } from 'react-helmet'
export default function Reviews() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      // justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor:COLORS.layout,
      overflowY: "scroll",
      paddingBottom: "80px",

    }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>NerdTech :: Reviews</title>
        <description>In website development service we offers customized website design, development, and maintenance, catering to clients' specific needs, goals, and budget. We aims to create a professional, user-friendly, and high-performing online presence.</description>
      </Helmet>
      <p style={{
        color: COLORS.Primary,
        textAlign: 'center',
        fontSize: "25px",
        fontWeight: 'bold',
        fontFamily: "Mono",
        letterSpacing: "2px",
        marginBlockEnd: "0px",
      }}>What our</p>
      <p style={{
        color: COLORS.Primary,
        textAlign: 'center',
        fontSize: "35px",
        fontWeight: 'bold',
        fontFamily: "Mono",
        letterSpacing: "2px",
        marginBlockStart: "1px",
        // marginBlockStart: "0px",


      }}>Clients Say</p>
      <ReviewCard 
      Name={"Charles Robbins"}
      Rating={5}
      Review={"These guys are very knowledgeable. They are easy to work with and respond really fast. Highly recommend them!"}
      Name2={"Rahshaud Ware"}
      Rating2={5}
      Review2={"Nerdtech provided me with great service. They helped me solve a coding problem I had been struggling with for months. I had tried several programmers, none of which were able to solve my problem. They fixed it in 30min. I highly recommend!"}
      />
      <ReviewCard 
      Name={"Sean Alexander"}
      Rating={5}
      Review={"NerdTech has been instrumental in helping to not only achieve my programming goals, but also in helping educate me along the way so that I feel more confident as I pursue bigger projects in the future. They’ve been able to write high-quality and reliable code that works exactly as it’s intended, and I would not hesitate to refer them to anyone I encounter with programming needs."}
      Name2={"Tareq Ziyad"}
      Rating2={5}
      Review2={"Great job I recommend working with them especially Akif he is good and professional"}
      />
      <ReviewCard 
      Name={"Hafeez ali"}
      Rating={5}
      Review={"I had an amazing experience while working with them. Thank you so much."}
      Name2={"Hrushikesh"}
      Rating2={5}
      Review2={"I had excellent support and service from the team, everything is well sorted and planned properly to execute the tasks. Overall very satisfied with the service and the team."}
      />
      <ReviewCard 
      Name={"imran here"}
      Rating={5}
      Review={"Really great team. It was great experience to work with nerdtech."}
      Name2={"Awais Khan"}
      Rating2={5}
      Review2={"Great experience with nerdtech. Happy business"}
      />
      <Footer/>
    </div>
  )
}
