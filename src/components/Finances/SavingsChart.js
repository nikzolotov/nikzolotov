import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

class SavingsChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      income: this.parseData(props.income.Total),
      expenses: this.parseData(props.expenses.Total),
    };

    this.state.diff = this.calcDiff();

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
      .domain(this.state.expenses.map((d) => d.date))
      .range([margin.left, width - margin.right])
      .padding(0.6);

    const y = d3
      .scaleLinear()
      .domain([
        -1 * d3.max(this.state.expenses, (d) => d.sum),
        d3.max(this.state.income, (d) => d.sum),
      ])
      .range([height - margin.bottom, margin.top]);

    const gX = svg
      .append("g")
      .attr("transform", "translate(0," + (height - margin.bottom) + ")");

    const gY = svg
      .append("g")
      .attr("transform", "translate(" + margin.left + ",0)");

    const gLine = svg.append("g");
    const gIncome = svg.append("g").attr("fill", "#292E32");
    const gExpenses = svg.append("g").attr("fill", "#292E32");
    const gDiff = svg.append("g");

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
        .attr("font-family", "")
        .attr("opacity", 0.5)
        .select(".domain")
        .remove();
    });

    gY.call(
      d3
        .axisLeft(y)
        .tickSize(10, 0)
        .tickPadding(10)
        .tickFormat((d) => `${d / 1000}${d !== 0 ? " k" : ""}`)
    ).call(function (g) {
      g.attr("font-size", 13)
        .attr("font-family", "")
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
      .attr("x2", width - margin.right + 10)
      .attr("y2", y(0))
      .style("stroke", "white")
      .attr("stroke-opacity", 0.1);

    // Income bars
    gIncome
      .selectAll("rect")
      .data(this.state.income)
      .join("rect")
      .attr("height", (d) => y(0) - y(d.sum))
      .attr("width", x.bandwidth())
      .attr("x", (d) => x(d.date))
      .attr("y", (d) => y(d.sum))
      .attr("rx", 4)
      .append("title")
      .text(
        (d) =>
          this.formatDate.month(d.date) + " income: " + d.sum.toLocaleString()
      );

    // Expenses bars
    gExpenses
      .selectAll("rect")
      .data(this.state.expenses)
      .join("rect")
      .attr("height", (d) => Math.abs(y(0) - y(d.sum * -1)))
      .attr("width", x.bandwidth())
      .attr("x", (d) => x(d.date))
      .attr("y", y(0))
      .attr("rx", 4)
      .append("title")
      .text(
        (d) =>
          this.formatDate.month(d.date) + " expenses: " + d.sum.toLocaleString()
      );

    // Savings and overspending bars
    gDiff
      .selectAll("rect")
      .data(this.state.diff)
      .join("rect")
      .attr("height", (d) => Math.abs(y(0) - y(d.sum * -1)))
      .attr("width", x.bandwidth())
      .attr("x", (d) => x(d.date))
      .attr("y", (d) => (y(0) > y(d.sum) ? y(d.sum) : y(0)))
      .attr("fill", (d) => (d.sum > 0 ? "#4F7E4F" : "#AB4040"))
      .attr("rx", (d) => (Math.abs(y(0) - y(d.sum * -1)) > 4 ? "4" : "2"))
      .append("title")
      .text(
        (d) =>
          `${this.formatDate.month(d.date)} ${
            d.sum > 0 ? "savings" : "overspending"
          }: ${Math.abs(d.sum).toLocaleString()}`
      );

    // Savings and overspending labels
    gDiff
      .selectAll("text")
      .data(this.state.diff)
      .join("text")
      .attr("x", (d) => x(d.date) + x.bandwidth() / 2)
      .attr("y", (d) => (d.sum < 0 ? y(d.sum) + 24 : y(d.sum)) - 7)
      .style("font-size", 13)
      .style("fill", (d) =>
        d.sum < 0 ? "var(--red-bright)" : "var(--green-bright)"
      )
      .attr("text-anchor", "middle")
      .attr("dx", (d) => (d.sum < 0 ? "-.2em" : 0))
      .text((d) => d.rate.toFixed(0));
  }

  parseData(data) {
    return d3.entries(data).map((d) => ({
      date: new Date(d.key),
      sum: +d.value.sum,
    }));
  }

  calcDiff() {
    let expenses = this.state.expenses;

    return this.state.income.map(function (d) {
      let e = expenses.filter((dd) => dd.date.getTime() === d.date.getTime())[0]
        .sum;

      return {
        date: d.date,
        sum: d.sum - e,
        rate: (1 - e / d.sum) * 100,
      };
    });
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

SavingsChart.defaultProps = {
  width: 768,
  height: 480,
  margin: {
    top: 28,
    right: 0,
    bottom: 32,
    left: 60,
  },
};

SavingsChart.propTypes = {
  income: PropTypes.object.isRequired,
  expenses: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
};

export default SavingsChart;
