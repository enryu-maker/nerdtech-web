import React from 'react'
import ServiceCard from './Component/ServiceCard'
import Footer from './Footer'
import { COLORS } from './Theme/Theme'

export default function Service() {
    const data = [
        {
            id:1,
            title:"Web Design",
            description:"In website development service we offers customized website design, development, and maintenance, catering to clients' specific needs, goals, and budget. We aims to create a professional, user-friendly, and high-performing online presence.",
            image:require("./assets/Website.png")
        },
        {
            id:2,
            title:"App Development",
            description:"A mobile app development service we designs, develops, and maintains customized mobile applications for various platforms, such as iOS and Android, with the aim of providing an intuitive and engaging user experience.",
            image:require("./assets/App.png")
        },
        {
            id:3,
            title:"API Development",
            description:"API development services include designing, developing, documenting, testing, and deploying APIs for different use cases, such as web and mobile applications, IoT devices, and enterprise systems, with a focus on functionality, scalability, security, and performance.",
            image:require("./assets/Backend.png")
        },
        {
            id:4,
            title:"Wordpress Website",
            description:"In WordPress website development service we specializes in designing, developing, and maintaining websites using the WordPress platform, providing customization, functionality, and scalability while ensuring security, performance, and ease of use.",
            image:require("./assets/Wordpress.png")
        },
        {
            id:5,
            title:"Digital Marketing",
            description:"In digital marketing services we offers a range of services, such as SEO, SMM, PPC, and content marketing, to help clients reach their target audience, increase brand awareness, and generate leads and sales.",
            image:require("./assets/Digital.png")
        },
        {
            id:6,
            title:"Airtificial Intelligence",
            description:"In artificial intelligence services we offers a range of services, such as AI consulting, AI strategy, AI development, and AI training, to help clients leverage AI to improve their business processes, increase efficiency, and reduce costs.",
            image:require("./assets/Ai.png")
        },

        ]       


  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor:COLORS.layout,
        overflowY:"scroll",
      paddingBottom: "80px",

    }}>
        {
            data.map((item,index) => {
                return <ServiceCard index={index} title={item.title} description={item.description} image={item.image}/>
            }
            )
        }
      <Footer/>
    </div>
  )
}
