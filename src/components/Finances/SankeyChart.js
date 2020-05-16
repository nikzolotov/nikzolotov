import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal, sankeyLeft } from "d3-sankey";

class SankeyChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: props.data.nodes,
      links: props.data.links,
    };
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    const { width, height, nodePadding, rightPadding, color } = this.props,
      svg = this.svg;

    var chart = sankey()
      .nodeId((d) => d.name)
      .nodeAlign(sankeyLeft)
      .nodeSort(null)
      .nodeWidth(15)
      .nodePadding(nodePadding)
      .extent([
        [0, 5],
        [width - rightPadding, height - 5],
      ]);

    const { nodes, links } = chart({
      nodes: this.state.nodes.map((d) => Object.assign({}, d)),
      links: this.state.links.map((d) => Object.assign({}, d)),
    });

    svg
      .append("g")
      .selectAll("rect")
      .data(nodes)
      .join("rect")
      .attr("x", (d) => d.x0 + 1)
      .attr("y", (d) => d.y0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("width", (d) => d.x1 - d.x0 - 2)
      .attr("fill", (d) => {
        let c;
        for (const link of d.sourceLinks) {
          if (c === undefined) c = link.color;
          else if (c !== link.color) c = null;
        }
        if (c === undefined)
          for (const link of d.targetLinks) {
            if (c === undefined) c = link.color;
            else if (c !== link.color) c = null;
          }
        return (d3.color(c) || d3.color(color)).darker(0.5);
        // return "#485848";
      })
      .append("title")
      .text((d) => `${d.name}\n${d.value.toLocaleString()}`);

    const link = svg
      .append("g")
      .attr("fill", "none")
      .selectAll("g")
      .data(links)
      .join("g")
      .attr("stroke", (d) => d3.color(d.color) || color);
    // .attr("stroke", (d) => "#566C56");

    link
      .append("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke-width", (d) => Math.max(1, d.width));

    link
      .append("title")
      .text(
        (d) =>
          `${d.source.name} → ${d.target.name}\n${d.value.toLocaleString()}`
      );

    svg
      .append("g")
      .style("fill", "#fff")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", (d) =>
        d.x0 < width / 2 || d.x0 > width - 50 - rightPadding
          ? d.x1 + 10
          : d.x0 - 10
      )
      .attr("y", (d) => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) =>
        d.x0 < width / 2 || d.x0 > width - 50 - rightPadding ? "start" : "end"
      )
      .style("font-size", (d) =>
        d.x0 < width - 50 - rightPadding ? "15px" : "13px"
      )
      .text((d) => d.name)
      .append("tspan")
      .attr("fill-opacity", 0.5)
      .attr("xml:space", "preserve")
      .text((d) => `  ${d.value.toLocaleString()}`);
  }

  render() {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox={"0 0 " + this.props.width + " " + this.props.height}
        ref={(element) => (this.svg = d3.select(element))}
        style={{ overflow: "visible" }}
      ></svg>
    );
  }
}

SankeyChart.defaultProps = {
  width: 1200,
  height: 600,
  nodePadding: 20,
  rightPadding: 150,
  color: "#566C56",
};

SankeyChart.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  nodePadding: PropTypes.number,
  rightPadding: PropTypes.number,
  color: PropTypes.string,
};

export default SankeyChart;
