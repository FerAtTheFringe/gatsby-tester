import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
query funnyQuery ($id:String){
  mdx(id: {eq: $id}) {
    id
    frontmatter {
      date(formatString: "DD/MM/YY")
      title
    }
    slug
    body
  }
}
`

export default BlogPost