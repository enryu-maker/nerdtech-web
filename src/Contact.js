import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'

export default function Contact() {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        color: COLORS.Primary,
        ...FONTS.h1

    }}>Contact.nerdtech@gmail.com</div>
  )
}
