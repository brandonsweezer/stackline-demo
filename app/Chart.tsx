import * as d3 from 'd3';
import { SalesData } from '@/types/salesData'
import { useEffect, useRef } from 'react';

export default function Chart({data}: {data: SalesData[]}) {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!data || data.length === 0) return;

        // Set up the dimensions and margins of the graph
        const width = 854
        const height = 480
        const margin = { top: 40, right: 20, bottom: 60, left: 60 }; // Increase the top margin

        // Parse the date and time
        const parseTime = d3.timeParse('%Y-%m-%d');

        // Format the data
        const formattedData = data.map((d) => ({
            weekEnding: parseTime(d.weekEnding),
            retailSales: +d.retailSales,
            wholesaleSales: +d.wholesaleSales,
            unitsSold: +d.unitsSold,
            retailerMargin: +d.retailerMargin,
        }));

        // Set the ranges
        const xScale = d3
            .scaleTime()
            .range([0, width])
            .domain(d3.extent(formattedData, (d) => d.weekEnding));

        const yScale = d3
            .scaleLinear()
            .range([height, 0])
            .domain([0, d3.max(formattedData, (d) => Math.max(d.retailSales, d.wholesaleSales))])
            .nice();

        // Define the lines
        const retailLine = d3
            .line()
            .x((d) => xScale(d.weekEnding))
            .y((d) => yScale(d.retailSales))
            .curve(d3.curveCardinal);

        const wholesaleLine = d3
            .line()
            .x((d) => xScale(d.weekEnding))
            .y((d) => yScale(d.wholesaleSales))
            .curve(d3.curveCardinal);

        // Create the SVG element
        const svg = d3
            .select(chartRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Add the retail sales line
        svg
            .append('path')
            .data([formattedData])
            .attr('class', 'line retail-line')
            .attr('d', retailLine)
            .attr('stroke', "#0084ff")
            .attr('stroke-width', 4)
            .attr('fill', 'none');

        // Add the wholesale sales line
        svg
            .append('path')
            .data([formattedData])
            .attr('class', 'line wholesale-line')
            .attr('d', wholesaleLine)
            .attr('stroke', 'grey')
            .attr('stroke-width', 4)
            .attr('fill', 'none');

        // Add the X Axis
        svg
            .append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale).tickFormat(d3.timeFormat('%b')).tickSize(0)) // Set tickSize to 0 to remove ticks
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('dy', '1em')
            .style('fill', 'grey');

        // Add the title
        svg
            .append('text')
            .attr('x', 0)
            .attr('y', -margin.top / 2) // Adjust the y position for better visibility
            .attr('text-anchor', 'middle')
            .style('font-size', '16px')
            .text('Retail Sales');

        // Add the Y Axis
        // svg.append('g').call(d3.axisLeft(yScale).ticks(3))
        //     .selectAll('text').style('fill', 'grey');


        // Cleanup function
        return () => {
            d3.select(chartRef.current).selectAll('*').remove();
        };
    }, [data]);

    return <div ref={chartRef}></div>;
};