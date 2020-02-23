import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styles'
import Img from "gatsby-image" 

import { HelpCircle as Help } from "styled-icons/boxicons-solid/HelpCircle"
import { CloseCircle as Close } from "styled-icons/remix-fill/CloseCircle"


const Header = () => {

  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 252) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <S.container>
      <div className="logo">
        <Img fluid={image.childImageSharp.fluid} />
      </div>
      <div className="controles">
        <div className="ajudaBtn"> <Help title="Ajuda" /> </div>
        <div className="fecharBtn"> <Close title="Fechar" /> </div>
      </div>
    </S.container> 
  )
}


export default Header