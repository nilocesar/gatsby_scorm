import React from "react"
import { connect } from 'react-redux';
import { navigate } from "gatsby";

const Init = ( { indiceNav , dispatch } ) => {
  
  navigate('/Aa'+ indiceNav + "/" );
  
  return (<></>)
}

export default connect( state => ({ indiceNav: state.nav.indiceNav }) , null )( Init )