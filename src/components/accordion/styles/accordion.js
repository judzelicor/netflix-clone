import styled from "styled-components"

export const Container = styled.section`
  background-color: #000;
  border-bottom: 8px solid #222;
  color: #fff;
  padding: 50px 0;

  @media (min-width: 550px) {
    padding: 70px 45px;
  }
`

export const Inner = styled.div``

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 600;
  text-align: center;

  @media (min-width: 550px) {
    font-size: 40px;
  }

  @media (min-width: 950px) {
    font-size: 50px;
  }

`

export const FaqList = styled.ul`
  margin: 32px auto;
  max-width: 815px;
  width: 100%;

  @media (min-width: 550px) {
    width: 90%;
  }

  @media (min-with: 950px) {
    width: 75%;
  }
`

export const Item = styled.li`
  display: inline-block;
  margin-bottom: 8px;
  width: 100%;
`

export const FaqListButton = styled.button`
  align-items: center;
  background-color: #303030;
  box-sizing: border-box;
  border: unset;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 400;
  outline: none;
  margin-bottom: 1px;
  padding: 0.8em 1.2em;
  text-align: left;
  width: 100%;

  @media (min-width: 550px) {
    font-size: 20px;
  }

  @media (min-width: 950px) {
    font-size: 26px;
  }
`
export const Body = styled.div`
  transition: max-height 250ms cubic-bezier(.5,0,.1,1);
  overflow: hidden;
  max-height: ${({accordionIsVisible}) => accordionIsVisible ? "500px" : "0px"};
`

export const BodyInner = styled.span`
  background-color: #303030;
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  padding: 1.2em;
  width: 100%;

  @media (min-width: 550px) {
    font-size: 20px;
  }

  @media (min-width: 950px) {
    font-size: 26px;
  }
`

export const AccordionIcon = styled.img`
  transform: ${({accordionIsVisible}) => accordionIsVisible ? null : "rotate(-45deg)"};
  transition: 300ms ease;
  margin-left: auto;
  width: 15px;

  @media (min-width: 950px) {
    width: 21px;
  }
`
export const CallToActionForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 860px;
  padding-top: 14px;
`

export const CallToActionFormTitle = styled.h3`
  box-sizing: content-box;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin: 0 auto;
  max-width: 450px;
  padding: 0 45px;
  
  @media (min-width: 550px) {
    font-size: 23px;
  }

  @media (min-width: 950px) {
    font-size: 18px;
    max-width: none;
  }
`

export const FormGroup = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: space-around;
  padding: 0 25px;

  @media (min-width: 950px) {
    flex-direction: row;
  }
`

export const Input = styled.input`
  border: unset;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 300;
  height: 48px;
  padding: 10px;
  max-width: 500px;
  outline: none;
  width: 100%;

  &::placeholder {
    font-size: 14px;
  }

  @media (min-width: 550px) {
    height: 60px;
  }

  @media (min-width: 950px) {
    flex: 1;
    height: 70px;
    max-width: none;

    &::placeholder {
      font-size: 16px;
    } 
  }
`

export const FormButton = styled.button`
  align-items: center;
  background-color: #e50914;
  border: unset;
  display: flex;
  min-height: 40px;
  padding: 0 16px;

  span {
    color: #fff;
    font-family: "Open-Sans", sans-serif;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
    text-transform: uppercase;

    @media (min-width: 950px) {
      font-size: 26px;
    }
  }

  img {
    display: inline-block;
    margin-left: 7px;

    @media (min-width: 950px) {
      width: 9px;
    }
  }

  @media (min-width: 950px) {
    height: 70px;
    padding: 0 30px;
  }
`