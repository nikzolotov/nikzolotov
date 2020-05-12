import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
// export * from "d3-sankey";
// Addes this line to node_modules/d3/index.js

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
    const { width, height, padding } = this.props,
      svg = this.svg;

    var sankey = d3
      .sankey()
      .nodeId((d) => d.name)
      .nodeAlign(d3.sankeyLeft)
      .nodeSort(null)
      .nodeWidth(15)
      .nodePadding(padding)
      .extent([
        [0, 5],
        [width, height - 5],
      ]);

    const { nodes, links } = sankey({
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
        //   let c;
        //   for (const link of d.sourceLinks) {
        //     if (c === undefined) c = link.color;
        //     else if (c !== link.color) c = null;
        //   }
        //   if (c === undefined)
        //     for (const link of d.targetLinks) {
        //       if (c === undefined) c = link.color;
        //       else if (c !== link.color) c = null;
        //     }
        //   return (d3.color(c) || d3.color(color)).darker(0.5);
        return "#485848";
      })
      .append("title")
      .text((d) => `${d.name}\n${d.value.toLocaleString()}`);

    const link = svg
      .append("g")
      .attr("fill", "none")
      .selectAll("g")
      .data(links)
      .join("g")
      //   .attr("stroke", (d) => d3.color(d.color) || color);
      .attr("stroke", (d) => "#566C56");

    link
      .append("path")
      .attr("d", d3.sankeyLinkHorizontal())
      .attr("stroke-width", (d) => Math.max(1, d.width));

    link
      .append("title")
      .text(
        (d) =>
          `${d.source.name} → ${d.target.name}\n${d.value.toLocaleString()}`
      );

    svg
      .append("g")
      .style("font-size", "15px")
      .style("fill", "#fff")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", (d) =>
        d.x0 < width / 2 || d.x0 > width - 100 ? d.x1 + 6 : d.x0 - 6
      )
      .attr("y", (d) => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) =>
        d.x0 < width / 2 || d.x0 > width - 100 ? "start" : "end"
      )
      .text((d) => d.name)
      .append("tspan")
      .attr("fill-opacity", 0.5)
      .text((d) => ` ${d.value.toLocaleString()}`);
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
  height: 620,
  padding: 20,
};

SankeyChart.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
};

export default SankeyChart;
