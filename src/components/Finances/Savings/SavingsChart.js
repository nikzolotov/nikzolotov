import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";

import "./style.css";

class SavingsChart extends React.Component {
  constructor(props) {
    super(props);

    this.income = this.parseData(props.income);
    this.expenses = this.parseData(props.expenses);
    this.diff = this.calcDiff(this.income, this.expenses);
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    const { width, height, margin, marginBrush, duration } = this.props,
      svg = this.svg,
      income = this.income,
      expenses = this.expenses,
      diff = this.diff;

    const formatDate = {
      short: d3.timeFormat("%b"),
      long: d3.timeFormat("%b %y"),
      month: d3.timeFormat("%B"),
      year: d3.timeFormat("%Y"),
    };

    // d3 scales
    const x = d3
      .scaleBand()
      .domain(expenses.map((d) => d.date))
      .range([margin.left, width - margin.right])
      .padding(0.6);

    const y = d3
      .scaleLinear()
      .domain([
        -1 * d3.max(expenses, (d) => d.sum),
        d3.max(income, (d) => d.sum),
      ])
      .range([height - margin.bottom, margin.top]);

    const xBrush = d3
      .scaleBand()
      .domain(x.domain())
      .range([0, width - marginBrush.right - marginBrush.left])
      .padding(0.3);

    const xtBrush = d3
      .scaleTime()
      .domain(d3.extent(expenses, (d) => d.date))
      .range([0, width - marginBrush.right - marginBrush.left]);

    const yBrush = d3
      .scaleLinear()
      .domain([d3.min(diff, (d) => d.sum), d3.max(diff, (d) => d.sum)])
      .range([height - marginBrush.top - marginBrush.bottom, 0]);

    // Mask for the graph and x-axis
    svg
      .append("defs")
      .append("clipPath")
      .attr("id", "sc-graph-mask")
      .append("rect")
      .attr("width", width - margin.left - margin.right)
      .attr("height", height - margin.bottom)
      .attr("x", margin.left)
      .attr("y", 0);

    svg
      .append("defs")
      .append("clipPath")
      .attr("id", "sc-axis-mask")
      .append("rect")
      .attr("width", width - margin.left - margin.right)
      .attr("height", 40)
      .attr("x", margin.left);

    // svg groups for elements
    const gX = svg
      .append("g")
      .attr("transform", "translate(0," + (height - margin.bottom) + ")")
      .attr("clip-path", "url(#sc-axis-mask)");

    const gY = svg
      .append("g")
      .attr("transform", "translate(" + (margin.left - 10) + ",0)");

    const gBrushX = svg
      .append("g")
      .attr("transform", "translate(0," + (height - marginBrush.bottom) + ")");

    const gAxisLabels = svg.append("g");
    const gLine = svg.append("g");

    const gIncome = svg
      .append("g")
      .attr("fill", "#292E32")
      .attr("clip-path", "url(#sc-graph-mask)");

    const gExpenses = svg
      .append("g")
      .attr("fill", "#292E32")
      .attr("clip-path", "url(#sc-graph-mask)");

    const gDiff = svg
      .append("g")
      .attr("class", "bars")
      .attr("clip-path", "url(#sc-graph-mask)");

    const gBrush = svg
      .append("g")
      .attr(
        "transform",
        "translate(" + marginBrush.left + "," + marginBrush.top + ")"
      );

    // Axes
    const xAxis = (g) =>
      g.call(
        d3
          .axisBottom(x)
          .ticks(10)
          .tickSize(0, 0)
          .tickPadding(15)
          .tickFormat((d, i) =>
            d.getMonth() === 0 ? formatDate.long(d) : formatDate.short(d)
          )
          .tickValues(x.domain().filter((d, i) => !(i % 2)))
      );

    const yAxis = (g) =>
      g
        .call(
          d3
            .axisLeft(y)
            .ticks(5)
            .tickSize(10, 0)
            .tickPadding(10)
            .tickFormat((d) => `${d / 1000}${d !== 0 ? " k" : ""}`)
        )
        .call(function (g) {
          g.selectAll(".tick")
            .filter((d) => d === 0)
            .select("line")
            .remove();
        });

    gX.call(xAxis);
    gY.call(yAxis);

    gBrushX.call(
      d3
        .axisBottom(x)
        .tickSize(0, 0)
        .tickPadding(5)
        .tickFormat((d, i) =>
          d.getMonth() === 0 || i === 0 ? formatDate.year(d) : ""
        )
    );

    // Axes labels
    gAxisLabels
      .append("text")
      .attr("class", "axis-label")
      .attr("x", 0)
      .attr("y", 13)
      .text("Income, ₽");

    gAxisLabels
      .append("text")
      .attr("class", "axis-label")
      .attr("x", 0)
      .attr("y", height - margin.bottom + 24)
      .text("Expenses");

    // Ground line
    gLine
      .append("line")
      .attr("x1", margin.left - 20)
      .attr("y1", y(0))
      .attr("x2", width - margin.right)
      .attr("y2", y(0))
      .style("stroke", "white")
      .attr("stroke-opacity", 0.1);

    // Income bars
    gIncome
      .selectAll("rect")
      .data(income)
      .join("rect")
      .attr("height", (d) => y(0) - y(d.sum))
      .attr("width", x.bandwidth())
      .attr("x", (d) => x(d.date))
      .attr("y", (d) => y(d.sum))
      .attr("rx", 4)
      .append("title")
      .text(
        (d) => formatDate.month(d.date) + " income: " + d.sum.toLocaleString()
      );

    // Expenses bars
    gExpenses
      .selectAll("rect")
      .data(expenses)
      .join("rect")
      .attr("height", (d) => Math.abs(y(0) - y(d.sum * -1)))
      .attr("width", x.bandwidth())
      .attr("x", (d) => x(d.date))
      .attr("y", y(0))
      .attr("rx", 4)
      .append("title")
      .text(
        (d) => formatDate.month(d.date) + " expenses: " + d.sum.toLocaleString()
      );

    // Savings and overspending bars
    gDiff
      .selectAll("rect")
      .data(diff)
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
          `${formatDate.month(d.date)} ${
            d.sum > 0 ? "savings" : "overspending"
          }: ${Math.abs(d.sum).toLocaleString()}`
      );

    // Savings and overspending labels
    gDiff
      .selectAll("text")
      .data(diff)
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

    // Brushable area with mini graph
    const xBrushStep = xBrush.range()[1] / diff.length;

    const brush = d3
      .brushX()
      .handleSize(10)
      .extent([
        [0, 0],
        [
          width - marginBrush.left - marginBrush.right,
          height - marginBrush.top - marginBrush.bottom,
        ],
      ])
      .on("brush", brushing)
      .on("end", brushed);

    gBrush
      .selectAll("rect")
      .data(diff)
      .join("rect")
      .attr("class", "bar")
      .attr("height", (d) => Math.abs(yBrush(0) - yBrush(d.sum * -1)))
      .attr("width", xBrush.bandwidth())
      .attr("x", (d) => xBrush(d.date))
      .attr("y", (d) => (yBrush(0) > yBrush(d.sum) ? yBrush(d.sum) : yBrush(0)))
      .attr("fill", (d) => (d.sum > 0 ? "#4F7E4F" : "#AB4040"))
      .attr("rx", (d) =>
        Math.abs(yBrush(0) - yBrush(d.sum * -1)) > 2 ? "2" : "0"
      );

    gBrush
      .append("g")
      .call(brush)
      .call(brush.move, [
        width - margin.right - margin.left - xBrushStep * 24,
        width - margin.right - margin.left,
      ]);

    gBrush.selectAll(".selection").attr("rx", 4);

    function brushing() {
      const selection = d3.event.selection;

      // Update widths and x of the bars
      const brushScaleF = xBrush.range()[1] / (selection[1] - selection[0]);

      x.range([
        margin.left - selection[0] * brushScaleF,
        width - margin.right + (xBrush.range()[1] - selection[1]) * brushScaleF,
      ]);

      gIncome
        .selectAll("rect")
        .attr("x", (d) => x(d.date))
        .attr("width", x.bandwidth());

      gExpenses
        .selectAll("rect")
        .attr("x", (d) => x(d.date))
        .attr("width", x.bandwidth());

      gDiff
        .selectAll("rect")
        .attr("x", (d) => x(d.date))
        .attr("width", x.bandwidth());

      gDiff.selectAll("text").attr("x", (d) => x(d.date) + x.bandwidth() / 2);

      gX.call(xAxis);

      // Highlight selected bars on mini graph
      const fd = filteredDomain(xBrush, ...selection);

      gBrush
        .selectAll(".bar")
        .attr("opacity", (d) => (fd.includes(d.date) ? 1 : 0.2));
    }

    function brushed() {
      const selection = d3.event.selection;

      if (!selection) return;

      // Update heights and y of the bars
      const dateRange = selection.map((d) => xtBrush.invert(d));

      const filteredIncome = income.filter(
        (d) => d.date >= dateRange[0] && d.date <= dateRange[1]
      );
      const filteredExpenses = expenses.filter(
        (d) => d.date >= dateRange[0] && d.date <= dateRange[1]
      );

      y.domain([
        -1 * d3.max(filteredExpenses, (d) => d.sum),
        d3.max(filteredIncome, (d) => d.sum),
      ]);

      gIncome
        .selectAll("rect")
        .transition()
        .duration(duration)
        .attr("height", (d) => y(0) - y(d.sum))
        .attr("y", (d) => y(d.sum));

      gExpenses
        .selectAll("rect")
        .transition()
        .duration(duration)
        .attr("height", (d) => Math.abs(y(0) - y(d.sum * -1)))
        .attr("y", y(0));

      gDiff
        .selectAll("rect")
        .transition()
        .duration(duration)
        .attr("height", (d) => Math.abs(y(0) - y(d.sum * -1)))
        .attr("y", (d) => (y(0) > y(d.sum) ? y(d.sum) : y(0)));

      gDiff
        .selectAll("text")
        .transition()
        .duration(duration)
        .attr("y", (d) => (d.sum < 0 ? y(d.sum) + 24 : y(d.sum)) - 7);

      gLine
        .selectAll("line")
        .transition()
        .duration(duration)
        .attr("y1", y(0))
        .attr("y2", y(0));

      gY.transition().duration(duration).call(yAxis);

      // Snapping
      if (!d3.event.sourceEvent) return;

      const x = selection.map((d) => Math.round(d / xBrushStep) * xBrushStep);

      d3.select(this)
        .transition()
        .call(brush.move, x[1] > x[0] ? x : null);
    }

    function filteredDomain(scale, min, max) {
      let dif = scale(d3.min(scale.domain())) - scale.range()[0],
        iMin = min - dif < 0 ? 0 : Math.round((min - dif) / scale.step()),
        iMax = Math.round((max - dif) / scale.step());

      if (iMax === iMin) --iMin; // It happens with empty selections.

      return scale.domain().slice(iMin, iMax);
    }
  }

  parseData(data) {
    return data.map((d) => ({
      date: new Date(d.date),
      sum: +d.Total,
    }));
  }

  calcDiff(income, expenses) {
    return expenses.map(function (d) {
      let inc = income.filter((dd) => dd.date.getTime() === d.date.getTime())[0]
        .sum;
      return {
        date: d.date,
        sum: inc - d.sum,
        rate: (1 - d.sum / inc) * 100,
      };
    });
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

SavingsChart.defaultProps = {
  width: 768,
  height: 610,
  margin: {
    top: 28,
    right: 0,
    bottom: 162,
    left: 70,
  },
  marginBrush: {
    top: 500,
    right: 0,
    bottom: 30,
    left: 70,
  },
  duration: 200,
};

SavingsChart.propTypes = {
  income: PropTypes.array.isRequired,
  expenses: PropTypes.array.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.object,
  duration: PropTypes.number,
};

export default SavingsChart;
