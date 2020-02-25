import React from "react"
import PropTypes from "prop-types"
import GlobalStyles from "../../styles/global"

import Header from "../header";
import Nav from "../nav";
import { connect } from 'react-redux';

import * as S from './styles'


const layout = ({ children , preStatus , dispatch , setaPrev = true , setaNext = true }) => {

  
  return (
    <S.container>

        <GlobalStyles></GlobalStyles>
        
        <main>{children}</main>
        
        <Header></Header>
        <Nav setaPrev={setaPrev} setaNext={setaNext} ></Nav> 

        <S.preloader isVisible={preStatus}>
          <S.preloaderInt/>
        </S.preloader>

    </S.container>
  )
}

layout.propTypes = {
  children: PropTypes.node.isRequired,
  setaPrev: PropTypes.bool,
  setaNext: PropTypes.bool
}

export default connect( state => ({ preStatus: state.preloader.preloaderStatus  }) 
                                  , null )( layout )
