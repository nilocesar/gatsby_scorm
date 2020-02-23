import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"

import Header from "../header";
import Nav from "../nav";

import * as S from './styles'


const layout = ({ children , setaPrev = true , setaNext = true }) => {

  return (
    <S.container>

        <GlobalStyles></GlobalStyles>
        
        <main>{children}</main>
        
        <Header></Header>
        <Nav setaPrev={setaPrev} setaNext={setaNext} ></Nav> 

    </S.container>
  )
}

layout.propTypes = {
  children: PropTypes.node.isRequired,
  setaPrev: PropTypes.bool,
  setaNext: PropTypes.bool
}

export default layout