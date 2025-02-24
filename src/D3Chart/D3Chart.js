import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { fetchBudgetData } from '../api';

function D3Chart() {
    useEffect(() => {
        const drawChart = async () => {
            const data = await fetchBudgetData();
            if (!data.length) return;

            const svg = d3.select("#d3Chart")
                .append("svg")
                .attr("width", 500)
                .attr("height", 300);

            const xScale = d3.scaleBand()
                .domain(data.map(d => d.category))
                .range([0, 500])
                .padding(0.2);

            const yScale = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.amount)])
                .nice()
                .range([300, 0]);

            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", d => xScale(d.category))
                .attr("y", d => yScale(d.amount))
                .attr("width", xScale.bandwidth())
                .attr("height", d => 300 - yScale(d.amount))
                .attr("fill", "#4bc0c0");

            svg.append("g")
                .attr("transform", "translate(0,300)")
                .call(d3.axisBottom(xScale));

            svg.append("g")
                .call(d3.axisLeft(yScale));
        };

        drawChart();
    }, []);

    return <div id="d3Chart"></div>;
}

export default D3Chart;
