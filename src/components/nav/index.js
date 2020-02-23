import React from "react"
import { connect } from 'react-redux';

import * as S from './styles'
import PropTypes from "prop-types"

import { navMode } from '../../state/reducers/nav'

const Nav = ({ indiceNav , dispatch , setaPrev , setaNext }) => {


  const Prev = () => {
    dispatch( navMode( "prev")  );
  }

  const Next = () => {
    dispatch( navMode( "next")  ); 
  }

  return (
    <>
      <S.btnPrev onClick={ Prev } isVisible={setaPrev}> </S.btnPrev>
      <S.btnNext onClick={ Next } isVisible={setaNext}> </S.btnNext>
    </>
  )
}

Nav.propTypes = {
  setaPrev: PropTypes.bool,
  setaNext: PropTypes.bool, 
}


export default connect( state => ({indiceNav: state.nav.indiceNav }) , null )( Nav )

