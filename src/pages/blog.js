import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {

    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.edges.map(node => (
                        <li key={node.node.id}>
                            {node.node.id}
                        </li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
query allFilesQuery {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      edges {
        node {
          id
        }
      }
    }
  }
`

export default BlogPage