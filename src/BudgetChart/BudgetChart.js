import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import * as d3 from 'd3';
/*import "../budgetChart.scss";*/

const BudgetChart = () => {
  Chart.register(ArcElement, Tooltip, Legend);

  const [chartData, setChartData] = useState({
    datasets: [{ data: [], backgroundColor: [] }],
    labels: []
  });
  
  useEffect(() => {
    axios.get('http://localhost:3000/budget')
      .then(res => {
        const budgetData = res.data.myBudget;
        setChartData({
          datasets: [{
            data: budgetData.map(item => item.budget),
            backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb', '#fd6b19']
          }],
          labels: budgetData.map(item => item.title)
        });
        createD3Chart(budgetData);
      })
      .catch(err => console.error(err));
  }, []);

  const d3Container = useRef(null);

  const createD3Chart = (data) => {
    const width = 400, height = 400, margin = 40;
    const radius = Math.min(width, height) / 2 - margin;

    d3.select(d3Container.current).select("svg").remove(); // clear old charts
    const svg = d3.select(d3Container.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal().range(d3.schemeDark2);

    const pie = d3.pie().value(d => d.budget);
    const data_ready = pie(data);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    svg.selectAll('slices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.title))
      .style("opacity", 0.7);

    svg.selectAll('labels')
      .data(data_ready)
      .enter()
      .append('text')
      .text(d => d.data.title)
      .attr("transform", d => `translate(${arc.centroid(d)})`)
      .style("text-anchor", "middle");
  };

  return (
    <div className="budget-chart-container">
      <div className="chart-container">
        <h2>ChartJS Budget Chart</h2>
        <div className="pie-chart">
          <Pie data={chartData} />
        </div>
      </div>
      <div className="chart-container">
        <h2>D3JS Budget Chart</h2>
        <div ref={d3Container}></div>
      </div>
    </div>
  );
};

export default BudgetChart;