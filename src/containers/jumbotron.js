import React from "react"
import jumbotronData from "../fixtures/jumbo.json"
import Jumbotron from "../components/jumbotron"
import homeTV from "../images/misc/home-tv.png"
import homeMobile from "../assets/homepage-mobile.jpg"
import homeDevicePile from "../assets/homepage-device-pile.png"
import videoLink from "../videos/homepage-tv-animation.m4v"
import homeBoxshot from "../assets/homepage-boxshot.png"
import downloadIcon from "../assets/download-icon.gif"
import devicePileVideo from "../videos/homepage-monitor-animation.m4v"

const images = [homeTV, homeMobile, homeDevicePile, homeBoxshot]

function JumbotronContainer() {

  return (
    <>
      <Jumbotron.Container>
        <Jumbotron.Row>
          <Jumbotron.TextContainer>
            <Jumbotron.Title>{jumbotronData[0].title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{jumbotronData[0].subTitle}</Jumbotron.Subtitle>
          </Jumbotron.TextContainer>
          <Jumbotron.ImageContainer>
            <Jumbotron.Image src={images[0]} />
            <Jumbotron.VideoContainer maxWidth={"73%"} maxHeight={"54%"} top={"48%"}>
              <Jumbotron.Video autoPlay loop muted>
                <Jumbotron.VideoSource src={videoLink} type={"video/mp4"} />
              </Jumbotron.Video>
            </Jumbotron.VideoContainer>
          </Jumbotron.ImageContainer>
        </Jumbotron.Row>
      </Jumbotron.Container>
      <Jumbotron.Container>
        <Jumbotron.Row direction={"row-reverse"}>
          <Jumbotron.TextContainer>
            <Jumbotron.Title>{jumbotronData[1].title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{jumbotronData[1].subTitle}</Jumbotron.Subtitle>
          </Jumbotron.TextContainer>
          <Jumbotron.ImageContainer width={"48%"}>
            <Jumbotron.Image src={images[1]} />
            <Jumbotron.AnimationCard background={downloadIcon}>
              <Jumbotron.ImageContainer>
                <Jumbotron.AnimatedCardImage src={images[3]} />
              </Jumbotron.ImageContainer>
              <Jumbotron.AnimatedCardTextContainer>
                <Jumbotron.AnimatedCardText>Stranger Things</Jumbotron.AnimatedCardText>
                <Jumbotron.AnimatedCardText color="#0071eb">Downloading...</Jumbotron.AnimatedCardText>
              </Jumbotron.AnimatedCardTextContainer>
            </Jumbotron.AnimationCard>
          </Jumbotron.ImageContainer>
        </Jumbotron.Row>
      </Jumbotron.Container>
      <Jumbotron.Container>
        <Jumbotron.Row>
          <Jumbotron.TextContainer>
            <Jumbotron.Title>{jumbotronData[2].title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{jumbotronData[2].subTitle}</Jumbotron.Subtitle>
          </Jumbotron.TextContainer>
          <Jumbotron.ImageContainer width={"48%"}>
            <Jumbotron.Image src={images[2]} />
            <Jumbotron.VideoContainer maxHeight={"47%"} maxWidth={"63%"} top={"33%"}>
              <Jumbotron.Video autoPlay loop muted>
                <Jumbotron.VideoSource src={devicePileVideo} type={"video/mp4"} />
              </Jumbotron.Video>
            </Jumbotron.VideoContainer>
          </Jumbotron.ImageContainer>
        </Jumbotron.Row>
      </Jumbotron.Container>
    </>
  )
}

export default JumbotronContainer