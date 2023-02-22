import React from 'react'
import { COLORS, FONTS } from './Theme/Theme'
import { AiOutlineArrowUp } from "react-icons/ai";
export default function Footer({
  divStyle,
}) {
  return (
    <div
      style={{
        position:"fixed",
        left:0,
        bottom:0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        backgroundColor: COLORS.white,
        color: COLORS.Primary,
        textAlign: 'center',
        ...divStyle
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '88%',
        // height: "60px",
        alignItems: 'center',
      }}>
        <p style={{
          ...FONTS.h3,
          fontWeight: "bold",
          // marginBlockEnd: 0,
          color: COLORS.black
        }}>
          Copyright Nerdtech 2023, All rights reserved
        </p>
      </div>
    </div >
  )
}