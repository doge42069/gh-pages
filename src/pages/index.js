import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "@utils/layout"
import SEO from "@utils/seo"
import Img from "gatsby-image"
import Button from "@atoms/button"
import ContentBlock from "@atoms/contentBlock"
import Container from "@atoms/container"
import List from "@atoms/list"
import Subheading from "@atoms/subheading"
import SectionHeader from "@molecules/sectionHeader"
import SectionSetup from "@molecules/sectionSetup"
import SectionCheckout from "@molecules/sectionCheckout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexImagesQuery {
      moonclerk: file(relativePath: { eq: "accepting-payments.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      gatsbyjs: file(relativePath: { eq: "fast-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      netlify: file(relativePath: { eq: "deploying-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <SectionHeader />
      <br/><br/><br/><br/>
      <SectionSetup />
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.moonclerk.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Main purpose:</Subheading>
          <h2>
            ThiccDoge is an NFT Marketplace for <div style={{display:'inline', fontWeight:'1000'}}>THICC</div> themed NFTs.
          </h2>
          <p>
            People are clearly thirsty for the juiciest NFTTs (Non Fungible Thicc Tokens).  
            Thicc Pokemon NFTs were just the beginning, there are plenty of anime waifus out 
            there that only appeal to antiquated men interested in stick figures...we promote 
            body positivity on the blockchain.  Our platform will be the premier marketplace 
            for people who want to invest in a brighter, <div style={{display:'inline', fontWeight:'1000'}}>THICC</div>ER future!
          </p>
        </ContentBlock>
      </ContentContainer>
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.gatsbyjs.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Supply:</Subheading>
          <h2>
            Tokenomics
          </h2>
          <p>
            We have implemented a novel redistribution feature and mechanics to benefit each holder of ThiccDoge
          </p>
          <List>
            <li>With the 2% burn fee and the 2% redistribution fee the supply goes down over time and the number of tokens in your wallet goes up with every transaction.</li>
            <li>Total Supply — 1,000,000,000,000 ThiccDoge Coins</li>
            <li>THICC launch — no presale</li>
            <li>Liquidity locked</li>
            <li>Anti-<div style={{display:'inline', fontWeight:'1000', textDecoration:'line-through'}}>THICC</div>Whale mechanics — only 5% of the supply can be bought or sold at one time</li>
          </List>
        </ContentBlock>
      </ContentContainer>
      <ContentContainer content grid gridSplit>
        <Image>
          <Img fluid={data.netlify.childImageSharp.fluid} />
        </Image>
        <ContentBlock>
          <Subheading>Milestones:</Subheading>
          <h2>
            Roadmap
          </h2>
          <b>Launch(Already Completed):</b>
          <List><List>
            <li>Uniswap Listing</li>
            <li>Website</li>
            <li>Twitter</li>
            <li>Telegram</li>
          </List></List>

          <b>Development:</b>
          <List><List>
            <li>Encourage/reward creators to tokenize their <div style={{display:'inline', fontWeight:'1000'}}>THICC</div> related artwork NFTs on our network!</li>
            <li>Run montly Twitter contests for the best <div style={{display:'inline', fontWeight:'1000'}}>THICC</div> Art</li>
            <li>Airdrop to Hodlers</li>
          </List></List>

          <b>Growth (Applications Submitted):</b>
          <ul>
            <li style={{marginBottom:'0.1rem'}}>Price Tracker Listings:</li>
            <List>
              <li>CoinGecko</li>
              <li>CoinMarketCap</li>
              <li>Coinbase</li>
            </List>
            <li style={{marginBottom:'0.1rem'}}>Centralized Exchange (CEX) Listings:</li>
            <List>
              <li>WhiteBit</li>
              <li>LBank</li>
              <li>Biki</li>
              <li>BKEX</li>
              <li>LATOKEN</li>
              <li>Bitrue</li>
            </List>
          </ul>
          <h4>To the <div style={{display:'inline', fontWeight:'1000'}}>THICC</div>Moon!</h4>
        </ContentBlock>
      </ContentContainer>
    </Layout>
  )
}

export default IndexPage

const Image = styled.div``

const ContentContainer = styled(Container)`
  &:nth-of-type(odd) {
    direction: rtl;

    div {
      direction: ltr;
    }
  }
`
