import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

export default (props) => {
  return (
    <div
      css={css`
        display: table;
        width: 100%;
      `}
    >
      {props.items.map((props) => (
        <ProjectTableItem {...props} />
      ))}
    </div>
  );
};

function ProjectTableItem(props) {
  const rowStyle = css`
    display: table-row;
    color: var(--text-color-2);
  `;
  const StyledLink = styled((props) => <Link {...props} />)`
    ${rowStyle};
    &:hover {
      color: var(--text-color-1);
    }
    & .title {
      color: var(--text-color-1);
    }
  `;
  return (
    <>
      {!props.nda && (
        <StyledLink to={`/projects/${props.id}/`}>
          <ProjectTableItemData {...props} />
        </StyledLink>
      )}
      {props.nda && (
        <div className="nda" css={rowStyle}>
          <ProjectTableItemData {...props} />
        </div>
      )}
    </>
  );
}

function ProjectTableItemData(props) {
  const cellStyle = css`
    display: table-cell;
    padding: var(--spacing-small);
    border-bottom: 1px solid rgba(var(--white-rgb), 0.1);
    &:first-child {
      padding-left: 0;
    }
    .nda & {
      color: var(--text-color-3);
    }
  `;
  return (
    <>
      <div className="title" css={cellStyle}>
        <span dangerouslySetInnerHTML={{ __html: props.title }} />
        {props.nda && (
          <abbr
            css={css`
              display: inline-block;
              vertical-align: 40%;
              margin-left: 10px;
              padding: 1px 2px 2px 3px;
              font-size: 9px;
              line-height: 9px;
              letter-spacing: 1px;
              color: var(--red);
              border: 1px solid var(--red);
              border-radius: 3px;
            `}
            title="Non-Disclosure Agreement"
          >
            NDA
          </abbr>
        )}
      </div>
      <div css={cellStyle}>{props.year}</div>
      <div css={cellStyle} dangerouslySetInnerHTML={{ __html: props.field }} />
      <div css={cellStyle}>{props.type}</div>
    </>
  );
}
