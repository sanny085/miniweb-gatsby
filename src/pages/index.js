import React from "react"
import { Link,graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from "gatsby-image"
import  '../styles/home.css'

export default function Home({data}) {
  console.log("Home",data);
  // const {title, description} = props.data.site.siteMetadata;

  return (
    <Layout>
      <section className="header">
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className="btn" to="/projects">My Portfolio Projects</Link>
        </div>
        {/*<img src="/banner.png" alt="Home site banner" style={{maxWidth:'85%'}}/>*/}
        <Img fluid={data.file.childImageSharp.fluid} />
       {/*<p>{title}- {description}</p>*/}
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`;