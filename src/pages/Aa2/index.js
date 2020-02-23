import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import * as S from '../../styles/aa2'

const Aa2 = () => {

  const { bg  } = useStaticQuery(
    graphql`
      query {
        bg: file(relativePath: { eq: "cenario1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="AA2" />
      <S.container>
        <S.bg fluid={bg.childImageSharp.fluid}> </S.bg>
        <div className="ti1 bold animated fadeInUp delay0_5">
          Curso teste AA2
        </div>

        <div className="desc book animated zoomIn delay1_0">
            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim 
            que vai caçá sua turmis! Em pé sem cair, deitado sem dormir, sentado 
            sem cochilar e fazendo pose. In elementis mé pra quem é amistosis quis 
            leo. Paisis, filhis, espiritis santis.
        </div>


      </S.container> 
    </Layout>
  )
}



export default Aa2