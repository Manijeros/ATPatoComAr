import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Separator = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      separatorImage: file(relativePath: { eq: "separator.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 360, maxWidth: 1350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.separatorImage.childImageSharp.fluid} />
}
export default Separator
