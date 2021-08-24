import React from 'react'
import { Link, useStaticQuery, graphql  } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
 `);

  const { title } = data.site.siteMetadata;
  return (
    <nav>
      <div className="no-underline">
        <Link to="/"><h1>{ title }</h1></Link> 
      </div> 
      <div className="links">
        <Link to="/" className="item">Home</Link>
        <Link to="/about" className="item">About</Link>
        <Link to="/projects" className="item">Portfolio Projects</Link>
      </div>
    </nav>
  )
}