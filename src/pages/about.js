import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Leah Schmidt"
    // const projects = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}  products={data.ProductProjects.edges} illustrations={data.IllustrationProjects.edges}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />  
        <h1>howdy</h1>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tag
          }
        }
      }
    }
    ProductProjects: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tag: {in: "product"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tag
            title
          }
        }
      }
    }
    IllustrationProjects: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {tag: {in: "illustration"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tag
            title
          }
        }
      }
    }
  }
`
