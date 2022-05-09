import styled from "styled-components"

export const Container = styled.section`
  background-color: #000;
  color: #757577;
  padding: 50px 25px;

  p {
    color: red;
  }
`

export const Inner = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  width: 90%;
`

export const Forefront = styled.h4`
  font-weight: 400;
  margin-bottom: 30px;

  a {
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const LinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const Item = styled.li`
  box-sizing: border-box;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  margin-right: 16px;
  margin-bottom: 16px;
  width: calc(50% - 16px);

  @media (min-width: 550px) {
    width: calc(25% - 16px);
  }
`

export const Link = styled.a`
  color: inherit;
  font-weight:

  &:hover {
    text-decoartion: underline;
  }
`

