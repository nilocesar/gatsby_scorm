import React from "react"
// import React, { useState, useEffect } from "react"
import {  navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {

  navigate('/Aa1/');
  
  
  return (
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
