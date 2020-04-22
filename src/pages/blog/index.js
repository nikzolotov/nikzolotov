import React from "react";
import { Link, graphql } from "gatsby";
import { css } from "@emotion/core";

import Layout from "../../components/Layout";
import Intro from "../../components/Intro";
import LayoutColumn from "../../components/LayoutColumn";

export default ({ data }) => {
  return (
    <Layout>
      <Intro>
        Sometime I write some shit into computer. Here’s this shit. Sometime I
        write some shit into computer. Here’s this shit.
      </Intro>
      <LayoutColumn>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3
                css={css`
                  margin-bottom: 5px;
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </LayoutColumn>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
