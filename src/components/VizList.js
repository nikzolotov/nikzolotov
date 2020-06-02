import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export default (props) => {
  return (
    <div css={css``}>
      {props.items.map((props) => (
        <VizListItem key={props.id} {...props} />
      ))}
    </div>
  );
};

function VizListItem(props) {
  return (
    <div key={props.id} css={css``}>
      <Link to={`/datavis/${props.id}/`}>
        {/* <Frame>
          <Device
            image={props.image}
            model={props.device}
            maxWidth={props.deviceMaxWidth}
            width={props.deviceWidth}
            margin="0"
          />
        </Frame> */}
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
