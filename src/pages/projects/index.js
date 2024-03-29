import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../../components/Layout'
import '../../Styles/projects.css';
export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.nodes;

  return (
    <Layout>
        <div className='portfolio'>
            <h2>PortFolio page</h2>
            <h3> This is the page where portfolio's displayed</h3>
            <div className='projects'>
              { projects.map(project => (
                <Link to={`/projects/${project.frontmatter.slug}`} key={project.id} >
                  <div>
                    <GatsbyImage image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt={project.frontmatter.title} />
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                </Link>
              ))}
            </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: AUTO)
          }
        }
      }
      id
    }
  }
}`

// export page query
// export const query = graphql`
//   query ProjectsPage {
//     project: allMarkdownRemark {
//       nodes {
//         frontmatter {
//           slug
//           stack
//           title
//         }
//         id
//       }
//     }
//     contact: site{
//       siteMetadata{
//       contact
//     }
//   }
//   }
// `