import styled from "styled-components"

export const container = styled.div`
  position:absolute;
  background-color: rgba(0,0,0,1);
  width:100vw;
  height:7vw;
  top:0;
  left:0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 2vw;

  .logo{
    position:relative;
    /* background-color: red; */
    width: 15vw;
    height: 5vw;
  }

  .controles{
    position: relative;
    width:10vw;
    height:5vw;
    /* background-color: red; */
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .controles .ajudaBtn{
    position:relative;
    border-radius:50%;
    background-color:#7f0249;
    color: #fff;
    display:flex;
    justify-content:center;
    align-items:center;
    height:4vw;
    width:4vw;
    cursor:pointer;
    transition: background 0.5s;

    & svg{
      height: 3vw;
      width: 3vw;
    }

    &:hover{
      background-color:#fff;
    }
    &:hover svg{
      color: #7f0249;
    }
  }



  .controles .fecharBtn{
      position:relative;
      border-radius:50%;
      background-color:#7f0249;
      color: #fff;
      display:flex;
      justify-content:center;
      align-items:center;
      height:4vw;
      width:4vw;
      cursor:pointer;
      transition: background 0.5s;

      & svg{
        height: 3vw;
        width: 3vw;
      }

      &:hover{
        background-color:#fff;
      }

      &:hover svg{
        color: #7f0249;
      }
    }

`