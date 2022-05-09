import React from "react"

import {Container, Inner, Forefront, LinksList, Item, Link} from "./styles/footer"

function Footer({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Footer.Forefront = function FooterForefront({children, ...restProps}) {
  return <Forefront {...restProps}>{children}</Forefront>
}

Footer.LinksList = function FooterLinksList({children, ...restProps}) {
  return <LinksList {...restProps}>{children}</LinksList>
}

Footer.Item = function FooterLinksListItem({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>
}

Footer.Link = function FooterLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

export default Footer