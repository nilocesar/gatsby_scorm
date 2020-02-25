import styled from "styled-components"
import preloaderImg from '../../images/preloader.gif'

export const container = styled.div`
 position: relative;
 display:flex;
 justify-content:center;
 align-items:center;
 background-color: rgba(0,0,0,0.7);
 width:100vw;
 height:100vh;
`

export const preloader = styled.div`
  position: absolute;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  z-index:99999999999999999999;
  align-items:center;
  justify-content:center;

  display:  ${props => props.isVisible ? "flex" : "none" };

`

export const preloaderInt = styled.div`
  position: relative;
  background-image: url(${preloaderImg});
  height: 300px;
  width: 400px;
`