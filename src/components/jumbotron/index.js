import React from "react"

import {Item, Inner, Container, TextContainer,  Title, Subtitle, Image, ImageContainer, VideoContainer, Video, VideoSource, Row, AnimationCard, AnimatedCardImage, AnimatedCardTextContainer, AnimatedCardText} from "./styles/jumbotron"

// Jumbotron receives children and direction props wherein direction has a default value of row
// then spread the rest of the props if there are more than two props passed
function Jumbotron({children, direction = "row", ...restProps}) {
  return (
      <Item {...restProps}>
        <Inner direction={direction}>{children}</Inner>
      </Item>
  )
}

// adds a method called Container that returns JSX essentially making this method a react component
Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Row = function JumbotronRow({children, ...restProps}) {
  return <Row {...restProps}>{children}</Row>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({...restProps}) {
  return <Image {...restProps} />
}

Jumbotron.TextContainer = function ({children, ...restProps}) {
  return <TextContainer>{children}</TextContainer>
}

Jumbotron.ImageContainer = function({children, ...restProps}) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>
}

Jumbotron.VideoContainer = function ({children, ...restProps}) {
  return <VideoContainer {...restProps}>{children}</VideoContainer>
}

Jumbotron.Video = function ({children, ...restProps}) {
  return <Video {...restProps}>{children}</Video>
}

Jumbotron.VideoSource = function ({...restProps}) {
  return <VideoSource {...restProps} />
}

Jumbotron.AnimationCard = function ({children, ...restProps}) {
  return <AnimationCard {...restProps}>{children}</AnimationCard>
}

Jumbotron.AnimatedCardTextContainer = function ({children, ...restProps}) {
  return <AnimatedCardTextContainer {...restProps}>{children}</AnimatedCardTextContainer>
}

Jumbotron.AnimatedCardText = function ({children, ...restProps}) {
  return <AnimatedCardText {...restProps}>{children}</AnimatedCardText>
}

Jumbotron.AnimatedCardImage = function ({...restProps}) {
  return <AnimatedCardImage {...restProps} />
}

export default Jumbotron