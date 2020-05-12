import React from "react";
import ReactFauxDOM from "react-faux-dom";
import * as d3 from "d3";
// import sankey from "d3-sankey";
// Couldn't import sankey. Added export * from "d3-sankey"; to d3/index.js
// and somehow it worked

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: props.data.nodes,
      links: props.data.links,
    };
  }

  render() {
    var width = 1200,
      height = 620,
      padding = 20;

    var svgNode = ReactFauxDOM.createElement("div");

    var svg = d3
      .select(svgNode)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("viewBox", "0 0 " + width + " " + height);

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
    // .style("mix-blend-mode", "multiply");

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
      .style("fill", "#fff")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("x", (d) => (d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6))
      .attr("y", (d) => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", (d) => (d.x0 < width / 2 ? "start" : "end"))
      .text((d) => d.name)
      .append("tspan")
      .text((d) => ` ${d.value.toLocaleString()}`);

    // // ========================================================================
    // // Set units, margin, sizes
    // // ========================================================================
    // var margin = { top: 10, right: 0, bottom: 10, left: 0 };
    // var width = 690 - margin.left - margin.right;
    // var height = 400 - margin.top - margin.bottom;

    // var format = (d) => formatNumber(d);
    // var formatNumber = d3.format(",.0f"); // zero decimal places

    // // ========================================================================
    // // Set the sankey diagram properties
    // // ========================================================================
    // var sankey = d3
    //   .sankey()
    //   .size([width, height])
    //   .nodeWidth(15)
    //   .nodePadding(10);

    // var path = sankey.link();

    // var graph = {
    //   nodes: _.cloneDeep(this.state.nodes),
    //   links: _.cloneDeep(this.state.links),
    // };

    // sankey.nodes(graph.nodes).links(graph.links).layout(32);

    // // ========================================================================
    // // Initialize and append the svg canvas to faux-DOM
    // // ========================================================================
    // var svgNode = ReactFauxDOM.createElement("div");

    // var svg = d3
    //   .select(svgNode)
    //   .append("svg")
    //   .attr("width", width + margin.left + margin.right)
    //   .attr("height", height + margin.top + margin.bottom)
    //   .append("g")
    //   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // // ========================================================================
    // // Add links
    // // ========================================================================
    // var link = svg
    //   .append("g")
    //   .selectAll(".link")
    //   .data(graph.links)
    //   .enter()
    //   .append("path")
    //   .attr("class", "link")
    //   .on("click", this.props.openModal) // register eventListener
    //   .attr("d", path)
    //   .style("stroke-width", (d) => Math.max(1, d.dy));

    // // add link titles
    // link
    //   .append("title")
    //   .text(
    //     (d) =>
    //       d.source.name +
    //       " → " +
    //       d.target.name +
    //       "\n Weight: " +
    //       format(d.value)
    //   );

    // // ========================================================================
    // // Add nodes
    // // ========================================================================
    // var node = svg
    //   .append("g")
    //   .selectAll(".node")
    //   .data(graph.nodes)
    //   .enter()
    //   .append("g")
    //   .attr("class", "node")
    //   .on("click", this.props.openModal) // register eventListener
    //   .attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");

    // // add nodes rect
    // node
    //   .append("rect")
    //   .attr("height", (d) => d.dy)
    //   .attr("width", sankey.nodeWidth())
    //   .append("title")
    //   .text((d) => d.name + "\n" + format(d.value));

    // // add nodes text
    // node
    //   .append("text")
    //   .attr("x", -6)
    //   .attr("y", (d) => d.dy / 2)
    //   .attr("dy", ".35em")
    //   .attr("text-anchor", "end")
    //   .text((d) => d.name)
    //   .filter((d) => d.x < width / 2)
    //   .attr("x", 6 + sankey.nodeWidth())
    //   .attr("text-anchor", "start");

    // Above D3 manipaluation equal to following jsx if didn't rely on faux-dom
    // ------------------------------------------------------------------------
    // var links = graph.links.map((link, i) => {
    //   return (
    //     <g>
    //       <path key={i} className="link" onClick={()=>{this.props.openModal(link)}} d={path(link)} style={{strokeWidth: Math.max(1, link.dy)}}>
    //         <title>{link.source.name + " → " + link.target.name + "\n Weight: " + format(link.value)}</title>
    //       </path>
    //     </g>
    //   );
    // });

    // var nodes = graph.nodes.map((node, i) => {
    //   return (
    //     <g key={i} className="node" onClick={()=>{this.props.openModal(node)}} transform={"translate(" + node.x + "," + node.y + ")"}>
    //       <rect height={node.dy} width={sankey.nodeWidth()}>
    //         <title>{node.name + "\n" + format(node.value)}</title>
    //       </rect>
    //       { (node.x >= width / 2) ?
    //         <text x={-6} y={node.dy / 2} dy={".35em"} textAnchor={"end"} >{node.name}</text> :
    //         <text x={6 + sankey.nodeWidth()} y={node.dy / 2} dy={".35em"} textAnchor={"start"} >{node.name}</text>
    //       }
    //     </g>
    //   );
    // });

    // ========================================================================
    // Render the faux-DOM to React elements
    // ========================================================================
    return svgNode.toReact();

    // JSX rendering return if didn't rely on faux-dom
    // ------------------------------------------------------------------------
    // return (
    //   <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
    //     <g transform={"translate(" + margin.left + "," + margin.top + ")"}>
    //       {links}
    //       {nodes}
    //     </g>
    //   </svg>
    // );
  }
}

// export default () => {
//   var width = 1200,
//     height = 620,
//     padding = 20;

//   function chart(selection) {
//     selection.each(function (data, i) {
//       const svg = d3
//         .select(this)
//         .append("svg")
//         .attr("width", width)
//         .attr("height", height)
//         // .attr("preserveAspectRatio", "xMidYMid meet")
//         .attr("viewBox", "0 0 " + width + " " + height);

//       var sankey = d3
//         .sankey()
//         .nodeId((d) => d.name)
//         .nodeAlign(d3.sankeyLeft)
//         .nodeSort(null)
//         .nodeWidth(15)
//         .nodePadding(padding)
//         .extent([
//           [0, 5],
//           [width, height - 5],
//         ]);

//       const { nodes, links } = sankey({
//         nodes: data.nodes.map((d) => Object.assign({}, d)),
//         links: data.links.map((d) => Object.assign({}, d)),
//       });

//       svg
//         .append("g")
//         .selectAll("rect")
//         .data(nodes)
//         .join("rect")
//         .attr("x", (d) => d.x0 + 1)
//         .attr("y", (d) => d.y0)
//         .attr("height", (d) => d.y1 - d.y0)
//         .attr("width", (d) => d.x1 - d.x0 - 2)
//         .attr("fill", (d) => {
//           //   let c;
//           //   for (const link of d.sourceLinks) {
//           //     if (c === undefined) c = link.color;
//           //     else if (c !== link.color) c = null;
//           //   }
//           //   if (c === undefined)
//           //     for (const link of d.targetLinks) {
//           //       if (c === undefined) c = link.color;
//           //       else if (c !== link.color) c = null;
//           //     }
//           //   return (d3.color(c) || d3.color(color)).darker(0.5);
//           return "#dfd";
//         })
//         .append("title")
//         .text((d) => `${d.name}\n${d.value.toLocaleString()}`);

//       const link = svg
//         .append("g")
//         .attr("fill", "none")
//         .selectAll("g")
//         .data(links)
//         .join("g")
//         // .attr("stroke", (d) => d3.color(d.color) || color)
//         .attr("stroke", (d) => "#dfd")
//         .style("mix-blend-mode", "multiply");

//       link
//         .append("path")
//         .attr("d", d3.sankeyLinkHorizontal())
//         .attr("stroke-width", (d) => Math.max(1, d.width));

//       link
//         .append("title")
//         .text(
//           (d) =>
//             `${d.source.name} → ${d.target.name}\n${d.value.toLocaleString()}`
//         );

//       svg
//         .append("g")
//         .style("font", "12px sans-serif")
//         .selectAll("text")
//         .data(nodes)
//         .join("text")
//         .attr("x", (d) => (d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6))
//         .attr("y", (d) => (d.y1 + d.y0) / 2)
//         .attr("dy", "0.35em")
//         .attr("text-anchor", (d) => (d.x0 < width / 2 ? "start" : "end"))
//         .text((d) => d.name)
//         .append("tspan")
//         .attr("fill-opacity", 0.7)
//         .text((d) => ` ${d.value.toLocaleString()}`);
//     });
//   }

//   chart.width = function (value) {
//     if (!arguments.length) return width;
//     width = value;
//     return chart;
//   };

//   chart.height = function (value) {
//     if (!arguments.length) return height;
//     height = value;
//     return chart;
//   };

//   chart.padding = function (value) {
//     if (!arguments.length) return padding;
//     padding = value;
//     return chart;
//   };

//   return chart;
// };
