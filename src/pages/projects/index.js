import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Img from "gatsby-image"

import '../../styles/projects.css'
 
const Projects = ({data}) => {
  console.log(data);

  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className="portfolio">
        <h2>Our Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
          <div className="projects">
            {projects.map(project => (
              <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                  <h3>{ project.frontmatter.title }</h3>
                  <p>{ project.frontmatter.stack }</p>
                </div>
              </Link>
            ))}
          </div>
          <p>Like what you see? email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}
 
export default Projects;

//export page query
export const query = graphql`
query ProjectsPage {
  projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      id
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}

`;