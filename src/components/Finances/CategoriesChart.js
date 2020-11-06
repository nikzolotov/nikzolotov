import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

class CategoriesChart extends React.Component {
  constructor(props) {
    super(props);

    this.data = this.parseData(props.data);
    this.series = this.parseSeries(props.series.categories);
    this.colors = this.parseColors(props.series.categories);

    this.stackedData = d3
      .stack()
      .keys(this.series)(this.data)
      .map((d) => (d.forEach((v) => (v.key = d.key)), d));

    this.formatDate = {
      short: d3.timeFormat("%b"),
      long: d3.timeFormat("%b %y"),
      month: d3.timeFormat("%B"),
    };
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    const { width, height, margin } = this.props,
      svg = this.svg;

    const x = d3
      .scaleBand()
      .domain(this.data.map((d) => d.date))
      .range([margin.left, width - margin.right])
      .padding(0.6);

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(this.stackedData[this.stackedData.length - 1], (d) => d[1]),
      ])
      .range([height - margin.bottom, margin.top]);

    const color = d3.scaleOrdinal().domain(this.series).range(this.colors);

    const gX = svg
      .append("g")
      .attr("transform", "translate(0," + (height - margin.bottom) + ")");

    const gY = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)");

    const gLine = svg.append("g");
    const gBars = svg.append("g");

    // Axes
    gX.call(
      d3
        .axisBottom(x)
        .tickSize(0, 0)
        .tickPadding(15)
        .tickFormat((d) =>
          d.getMonth() === 0
            ? this.formatDate.long(d)
            : this.formatDate.short(d)
        )
    ).call(function (g) {
      g.attr("font-size", 13)
        .attr("font-family", null)
        .attr("opacity", 0.5)
        .select(".domain")
        .remove();
    });

    gY.call(
      d3
        .axisLeft(y)
        .ticks(5)
        .tickSize(10, 0)
        .tickPadding(10)
        .tickFormat((d) => `${d / 1000}${d !== 0 ? " k" : ""}`)
    ).call(function (g) {
      g.attr("font-size", 13)
        .attr("font-family", null)
        .selectAll("text")
        .attr("opacity", 0.5);
      g.selectAll("line").attr("opacity", 0.2);
      g.select(".domain").remove();

      g.selectAll(".tick")
        .filter((d) => d === 0)
        .select("line")
        .remove();
    });

    // Ground line
    gLine
      .append("line")
      .attr("x1", margin.left - 10)
      .attr("y1", y(0))
      .attr("x2", width - margin.right)
      .attr("y2", y(0))
      .style("stroke", "white")
      .attr("stroke-opacity", 0.1);

    // Bars
    gBars
      .selectAll("g")
      .data(this.stackedData)
      .join("g")
      .attr("fill", (d) => color(d.key))
      .attr("stroke", "#242526")
      .selectAll("rect")
      .data((d) => d)
      .join("rect")
      .attr("x", (d) => x(d.data.date))
      .attr("y", (d) => y(d[1]))
      .attr("height", (d) => y(d[0]) - y(d[1]))
      .attr("width", x.bandwidth())
      .append("title")
      .text(
        (d) =>
          `${this.formatDate.month(d.data.date)} ${d.key}: ${Math.abs(
            d.data[d.key]
          ).toLocaleString()}`
      );

    // Bar labels
    gBars
      .selectAll("text")
      .data(this.data)
      .join("text")
      .attr("x", (d) => x(d.date) + x.bandwidth() / 2)
      .attr("y", (d) => y(d.Total) - 7)
      .style("font-size", 13)
      .style("fill", "#e9e9e9")
      .attr("text-anchor", "middle")
      // .attr("dx", 0)
      .text((d) => (d.Total / 1000).toFixed(0));
  }

  parseData(data) {
    return d3.entries(data).map((d) => ({
      date: new Date(d.key),
      ...d.value,
    }));
  }

  parseSeries(data) {
    return d3
      .entries(data)
      .filter((d) => d.value.parent === null)
      .map((d) => [d.value.title]);
  }

  parseColors(data) {
    return d3
      .entries(data)
      .filter((d) => d.value.parent === null)
      .map((d) => [d.value.color]);
  }

  render() {
    return (
      <svg
        // width="100%"
        // height="100%"
        viewBox={"0 0 " + this.props.width + " " + this.props.height}
        ref={(element) => (this.svg = d3.select(element))}
        style={{ overflow: "visible" }}
      ></svg>
    );
  }
}

CategoriesChart.defaultProps = {
  width: 768,
  height: 360,
  margin: {
    top: 28,
    right: 0,
    bottom: 32,
    left: 60,
  },
};

CategoriesChart.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
};

export default CategoriesChart;
