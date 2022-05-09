import React from "react"

import Footer from "../components/footer"

const footerLinks = ["FAQ", "Help Center", "Account", "Media Center", "Investor Relations", "Jobs", "Redeem Gift Cards", "Buy Gift Cards", "Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us", "Speed Test", "Legal Notices", "Netflix Originals"]

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Forefront>
        Questions? Call <a href="#">1-844-542-4813</a>
      </Footer.Forefront>
      <Footer.LinksList>
        {footerLinks.map((link) => {
          return (
            <Footer.Item>
              <Footer.Link href="#">
                {link}
              </Footer.Link>
            </Footer.Item>
          )
        })}
      </Footer.LinksList>
      <p>Netflix Canada</p>
    </Footer>
  )
}