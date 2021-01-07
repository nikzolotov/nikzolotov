import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

class NetWorthChart extends React.Component {
  constructor(props) {
    super(props);

    this.series = ["estate", "stocks", "cash"];
    this.colors = ["#1C4869", "#AB4040", "#C2A241"];

    this.data = this.parseData(props.data);
    this.stackedData = d3.stack().keys(this.series)(this.data);
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    const { width, height, margin } = this.props,
      svg = this.svg;

    const x = d3
      .scaleTime()
      .domain([this.data[0].date, this.data[this.data.length - 1].date])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(this.stackedData[this.stackedData.length - 1], (d) => d[1]),
      ])
      .range([height - margin.bottom, margin.top]);

    const color = d3.scaleOrdinal().domain(this.series).range(this.colors);

    const gAreas = svg.append("g");

    const areaGenerator = d3
      .area()
      .x((d) => x(d.data.date))
      .y0((d) => y(d[0]))
      .y1((d) => y(d[1]))
      .curve(d3.curveBasis);

    gAreas
      .selectAll("path")
      .data(this.stackedData)
      .join("path")
      .attr("d", areaGenerator)
      .attr("fill", (d) => color(d.key));
  }

  parseData(data) {
    return data.map((d) => ({
      date: new Date(d.date),
      estate: +d.estate,
      stocks: +d.stocks,
      cash: +d.cash,
    }));
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

NetWorthChart.defaultProps = {
  width: 274,
  height: 120,
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

NetWorthChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
};

export default NetWorthChart;
