import React, { useContext, useState, createContext } from "react"

import {Container, Inner, Title, Item, Body, FaqList, FaqListButton, BodyInner, AccordionIcon, CallToActionForm, CallToActionFormTitle, FormGroup, Input, FormButton} from "./styles/accordion"

import accordionIcon from "../../images/icons/accordion-icon.svg"

const ToggleContext = createContext()

function Accordion({children, ...restProps}) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Container = function ({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Accordion.Title = function ({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Item = function AccordionItem({children, ...restProps}) {
  const [accordionIsVisible, setToggleAccordion] = useState(false)

  return (
    <ToggleContext.Provider value={{accordionIsVisible, setToggleAccordion}}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.FaqList = function AccordionFaqList({children, ...restProps}) {
  return <FaqList {...restProps}>{children}</FaqList>
}

Accordion.Body = function AccordionBody({children, ...restProps}) {
  const {accordionIsVisible} = useContext(ToggleContext)
  return <Body accordionIsVisible={accordionIsVisible} {...restProps}>{children}</Body>
}

Accordion.BodyInner = function AccordionBodyInner({children, ...restProps}) {
  return <BodyInner {...restProps}>{children}</BodyInner>
}

Accordion.FaqListButton = function AccordionFaqListButton({children, ...restProps}) {
  const {accordionIsVisible, setToggleAccordion} = useContext(ToggleContext)

  return (
    (<FaqListButton onClick={() => {setToggleAccordion(!accordionIsVisible)}} {...restProps}>
      {children}
      <AccordionIcon accordionIsVisible={accordionIsVisible} src={accordionIcon} />
    </FaqListButton>)
  )
}

Accordion.CallToActionForm = function AccordionCallToActionForm({children, ...restProps}) {
  return <CallToActionForm {...restProps}>{children}</CallToActionForm>
}

Accordion.CallToActionFormTitle = function AccordionCallToActionFormTitle({children, ...restProps}) {
  return <CallToActionFormTitle {...restProps}>{children}</CallToActionFormTitle>
}

Accordion.FormGroup = function AccordionFormGroup({children, ...restProps}) {
  return <FormGroup {...restProps}>{children}</FormGroup>
}

Accordion.Input = function AccordionFormInput({children, ...restProps}) {
  return <Input {...restProps}>{children}</Input>
}

Accordion.FormButton = function AccordionFormButton({children, ...restProps}) {
  return <FormButton {...restProps}>{children}</FormButton>
}

export default Accordion