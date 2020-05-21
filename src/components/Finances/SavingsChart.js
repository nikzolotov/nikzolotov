import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

class SavingsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // incomeTotals: parseData(props.data.income.Total),
      incomeTotals: d3.entries(props.data.income.Total),
      expensesTotals: d3.entries(props.data.expenses.Total),
      diff: d3.entries(props.data.diff.Total),
    };
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    const { width, height } = this.props,
      svg = this.svg;

    var y = d3
      .scaleLinear()
      .domain([
        -1 * d3.max(this.state.expensesTotals, (d) => d.value),
        d3.max(this.state.incomeTotals, (d) => d.value),
      ])
      .range([height, 0]);

    const gIncome = svg.append("g").attr("fill", "#292E32");
    const gExpenses = svg.append("g").attr("fill", "#292E32");
    const gDiff = svg.append("g");

    gIncome
      .selectAll("rect")
      .data(this.state.incomeTotals)
      .join("rect")
      .attr("height", (d) => y(0) - y(d.value))
      .attr("width", "20")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d) => y(d.value))
      .attr("rx", 4);

    gExpenses
      .selectAll("rect")
      .data(this.state.expensesTotals)
      .join("rect")
      .attr("height", (d) => Math.abs(y(0) - y(d.value * -1)))
      .attr("width", "20")
      .attr("x", (d, i) => i * 50)
      .attr("y", y(0))
      .attr("rx", 4);

    gDiff
      .selectAll("rect")
      .data(this.state.diff)
      .join("rect")
      .attr("height", (d) => Math.abs(y(0) - y(d.value * -1)))
      .attr("width", "20")
      .attr("x", (d, i) => i * 50)
      .attr("y", (d) => (y(0) > y(d.value) ? y(d.value) : y(0)))
      .attr("fill", (d) => (d.value > 0 ? "#4F7E4F" : "#AB4040"))
      .attr("rx", (d) => (Math.abs(y(0) - y(d.value * -1)) > 4 ? "4" : "2"));

    svg
      .append("line")
      .attr("x1", 0)
      .attr("y1", y(0))
      .attr("x2", width)
      .attr("y2", y(0))
      .style("stroke", "white")
      .attr("stroke-opacity", 0.1);
  }

  // parseData(data){
  //   data.forEach
  // }

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

SavingsChart.defaultProps = {
  width: 1200,
  height: 490,
};

SavingsChart.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default SavingsChart;
