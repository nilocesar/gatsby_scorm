
import styled from "styled-components"
import BackgroundImage from 'gatsby-background-image-es5'


export const container = styled.div`
  position:absolute;
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;

    .ti1{
      position: absolute;
      width: 50vw;
      top: 15vw;
      left: 20vw;
      color: #002559;
      font-size: 3vw;
    }

    .desc{
      position: absolute;
      width: 60vw;
      top: 20vw;
      left: 20vw;
      color: #fff;
      font-size: 2vw;
      background: #002559;
      padding:3vw;
    }

    .btnNext{
      position: absolute;
      width: 20vw;
      text-align:center;
      background: #002559;
      color: #fff;
      padding:1vw;
      border-radius: 1vw;
      top: 40vw;
      left: 60vw;
      font-size: 2.5vw;
      cursor: pointer;
       
      &:hover{
        background: #405B82;
      }
    }

`

export const bg = styled(BackgroundImage)`
  width: 100vw;
  height:100vh;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`