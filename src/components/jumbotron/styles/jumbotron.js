import styled from "styled-components"

export const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 950px) {
    flex-direction: ${({direction}) => direction}
  }
`

export const Item = styled.div`
  border-bottom: 8px solid #222;
  padding: 50px 5%;
`

export const Container = styled.section`
  background-color: #000;
  border-bottom: 8px solid #222;
  color: #fff;
  padding: 50px 25px;

  @media (min-width: 950px) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

export const Row = styled.div`
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 950px) {
    display: flex;
    flex-direction: ${({direction}) => direction};
  }
`

export const TextContainer = styled.div`
  text-align: center;

  @media (min-width: 950px) {
    text-align: left;
    width: 52%;
  }
`

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;

  @media (min-width: 950px) {
    font-size: 50px;
  }
`

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 300;
  margin-top: 13.5px;
  margin-bottom: 4.5px;

  @media (min-width: 950px) {
    font-size: 26px;
  }
`

export const ImageContainer = styled.div`
  width: auto;
  position: relative;

  @media (min-width: 950px) {
    width: ${({width}) => width ? width : "auto"};
  }
`

export const Image = styled.img`
  display: block;
  height: ${({height}) => height ? height : "auto"};
  margin: 0 auto;
  max-width: 100%;
  position: relative;
  z-index: 2;
`

export const VideoContainer = styled.div`
  position: absolute;
  top: ${({top}) => top};
  left: 49%;
  height: 100%;
  max-height: ${({maxHeight}) => maxHeight};
  max-width: ${({maxWidth}) => maxWidth};
  width: 100%;
  transform: translate(-50%,-50%);;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
`

export const VideoSource = styled.source``


export const AnimationCard = styled.div`
  align-items: center;
  background-color: #000;
  border: 2px solid rgb(255, 255, 255, 0.25);
  border-radius: 12px;
  box-shadow: 0 0 2em 0 #000;
  display: flex;
  padding: 5.6px 12px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 8%;
  min-width: 15em;
  width: 60%;
  z-index: 2;

  &::after {
    content: "";
    background: url(${({background}) => background}) center center no-repeat;
    background-size: contain;
    display: block;
    height: 48px;
    min-width: 48px;
    width: 48px;
    margin-left: auto;
  }
`

export const AnimatedCardTextContainer = styled.div``

export const AnimatedCardText = styled.div`
  color: ${({color}) => color};
  font-size: 14px;
`

export const AnimatedCardImage = styled.img`
  height: 3em;
  margin-right: 16px;

  @media (min-width: 550px) {
    height: 4em;
  }

  @media (min-width: 950px) {
    height: 4.5em
  }

  @media (min-width: 1450px) {
    height: 5em;
  }
`