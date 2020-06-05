import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import LayoutColumn from "../components/LayoutColumn";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <LayoutColumn>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </LayoutColumn>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
