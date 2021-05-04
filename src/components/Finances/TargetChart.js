import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

class TargetChart extends React.Component {
  constructor(props) {
    super(props);

    this.data = this.parseData(props.data);
    this.target = this.parseTarget(props.target);
    this.dataToTarget = [this.data[this.data.length - 1], this.target];
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    const { width, height, margin } = this.props,
      svg = this.svg,
      data = this.data,
      target = this.target,
      dataToTarget = this.dataToTarget;

    // d3 scales
    const x = d3
      .scaleTime()
      .domain([d3.min(data, (d) => d.date), target.date])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, target.total])
      .range([height - margin.bottom, margin.top]);

    // svg groups for elements
    const gX = svg
      .append("g")
      .attr("transform", "translate(0," + (height - margin.bottom) + ")");

    const gArea = svg.append("g");
    const gLine = svg.append("g");

    // Axes
    const xAxis = (g) =>
      g.call(
        d3
          .axisBottom(x)
          .tickSize(0, 0)
          .tickPadding(10)
          .tickFormat((d) => d3.timeFormat("%Y")(d))
          .tickValues([x.domain()[0], x.domain()[1]])
      );

    gX.call(xAxis)
      .selectAll("text")
      .style("text-anchor", (d, i) => (i === 0 ? "start" : "end"));

    // Net worth graph and projected line
    const area = d3
      .area()
      .x((d) => x(d.date))
      .y0(y(0))
      .y1((d) => y(d.total))
      .curve(d3.curveBasis);

    const line = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.total));

    gArea.append("path").datum(data).attr("d", area).attr("fill", "#456E45");

    gArea
      .append("path")
      .datum(dataToTarget)
      .attr("d", area)
      .attr("fill", "#292E32");

    gLine
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#94C784")
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("d", line);

    gLine
      .append("path")
      .datum(dataToTarget)
      .attr("fill", "none")
      .attr("stroke", "#94C784")
      .attr("stroke-width", 2)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-dasharray", "0 4.5")
      .attr("d", line);
  }

  parseData(data) {
    return data.map((d) => ({
      date: new Date(d.date),
      total: +d.total,
    }));
  }

  parseTarget(data) {
    return {
      date: new Date(data.date),
      total: +data.total,
    };
  }

  render() {
    return (
      <svg
        // width="100%"
        // height="100%"
        viewBox={"0 0 " + this.props.width + " " + this.props.height}
        ref={(element) => (this.svg = d3.select(element))}
        style={{ display: "block", overflow: "visible" }}
      ></svg>
    );
  }
}

TargetChart.defaultProps = {
  width: 274,
  height: 145,
  margin: {
    top: 0,
    right: 0,
    bottom: 25,
    left: 0,
  },
};

TargetChart.propTypes = {
  data: PropTypes.array.isRequired,
  target: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
};

export default TargetChart;
