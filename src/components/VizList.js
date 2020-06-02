import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";

export default (props) => {
  return (
    <div
      css={css`
        width: calc((100% * 4 / 6) - (var(--gap) * 2 / 6));
      `}
    >
      {props.items.map((props) => (
        <VizListItem key={props.id} {...props} />
      ))}
    </div>
  );
};

function VizListItem(props) {
  return (
    <div
      key={props.id}
      css={css`
        margin-bottom: var(--spacing-x-large);
      `}
    >
      <Link
        // to={`/datavis/${props.id}/`}
        to={props.link}
        css={css`
          color: var(--text-color-1);
          &:hover,
          &:hover .meta {
            color: var(--text-color-1);
          }
        `}
      >
        <Img fluid={props.image} />
        <h3
          css={css`
            margin: var(--spacing-small) 0 0 0;
            font-family: ApercuRegular, Helvetica, Arial, sans-serif;
          `}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="meta"
          css={css`
            margin: 0;
            color: var(--text-color-2);
          `}
        >
          {props.year} · {props.type}
        </p>
      </Link>
    </div>
  );
}
