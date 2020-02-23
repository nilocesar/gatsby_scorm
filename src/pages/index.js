import React from "react"
import { connect } from 'react-redux';
import {  navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import { navMode } from '../state/reducers/nav'

const IndexPage = ({ indiceNav , dispatch }) => {
  
  navigate('/Aa'+ indiceNav + "/");
  
  
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default connect( state => ({indiceNav: state.nav.indiceNav }) , null )( IndexPage )
