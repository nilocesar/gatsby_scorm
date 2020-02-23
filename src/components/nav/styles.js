import styled from "styled-components"
import btnPrevImg from '../../images/btnPrev.png'
import btnNextImg from '../../images/btnNext.png'


export const btnPrev = styled.div`
  position: absolute;
  height: 5vw;
  width: 5vw;
  background-color: red;
  overflow:hidden;
  cursor: pointer;
  top: 50vh;
  margin-top: -2.5vw;
  left:1vw;
  background: url(${btnPrevImg}) -10px -10px;
  width: 55px;
  height: 79px;

  &:hover{
    background-position-x: -85px;
  }

  display:  ${props => props.isVisible ? "block" : "none" };
`


export const btnNext = styled.div`
  position: absolute;
  height: 5vw;
  width: 5vw;
  background-color: red;
  overflow:hidden;
  cursor: pointer;
  top: 50vh;
  margin-top: -2.5vw;
  right:1vw;
  background: url(${btnNextImg}) -10px -10px;
  width: 55px;
  height: 79px;

  &:hover{
    background-position-x: -85px;
  }

  display:  ${props => props.isVisible ? "block" : "none" };
`