import React from "react"
import {Accordion} from "../components"
import faqsData from "../fixtures/faqs.json"

import chevronRightIcon from "../images/icons/chevron-right.svg"


export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.FaqList>
        {faqsData.map((item) => {
          return (
            <Accordion.Item key={item.id}>
              <Accordion.FaqListButton>
                {item.header}
              </Accordion.FaqListButton>
              <Accordion.Body>
                <Accordion.BodyInner>
                  {item["multi-par"] ? (<>{item.body.slice(0, item.body.indexOf("\n"))} <br /><br /> {item.body.slice(item.body.indexOf("\n"), -1)}</>) : item.body}
                </Accordion.BodyInner>
                </Accordion.Body>
            </Accordion.Item>
          )}
        )}
      </Accordion.FaqList>
      <Accordion.CallToActionForm>
        <Accordion.CallToActionFormTitle>Ready to watch? Enter your email to create or restart your membership.</Accordion.CallToActionFormTitle>
        <Accordion.FormGroup>
          <Accordion.Input type="text" placeholder="Email address"></Accordion.Input>
          <Accordion.FormButton>
            <span>Get started</span>
            <img src={chevronRightIcon} />
          </Accordion.FormButton>
        </Accordion.FormGroup>
      </Accordion.CallToActionForm>
    </Accordion>
  )
}

