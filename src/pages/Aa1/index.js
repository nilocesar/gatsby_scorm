import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { connect } from 'react-redux';


import Layout from "../../components/layout"
import SEO from "../../components/seo"

import * as S from '../../styles/aa1'

import { navMode } from '../../state/reducers/nav'
// import { scormMode } from '../../state/reducers/scorm'

const Aa1 = ({ indiceNav , dispatch }) => {

  const { bg  } = useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "cenario2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const iniciar = () =>{
    dispatch( navMode( "go", 2)  );
  }

  return (
    <Layout setaPrev={false} setaNext={false} >
      <SEO title="AA1" />
      <S.container>
        <S.bg fluid={bg.childImageSharp.fluid}> </S.bg>
        <div className="ti1 bold animated fadeInUp delay0_5">
          Curso teste AA1
        </div>

        <div className="desc book animated zoomIn delay1_0">
            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim 
            que vai caçá sua turmis! Em pé sem cair, deitado sem dormir, sentado 
            sem cochilar e fazendo pose. In elementis mé pra quem é amistosis quis 
            leo. Paisis, filhis, espiritis santis.
        </div>

        <div className="btnNext bold animated zoomIn delay1_5" onClick={ iniciar } >
          Iniciar
        </div>

      </S.container> 
    </Layout>
  )
}

export default connect( state => ({ indiceNav: state.nav.indiceNav }) , null )( Aa1 )
