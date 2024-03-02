import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Chart from 'chart.js/auto';
import './Overview.css'; // Import your custom CSS file

const Overview = () => {
    // Placeholder data (replace with your actual data)
    const dataInsights = [
        { title: 'Bugs', value: 1000 },
        { title: 'Enhancements', value: 5000 },
        { title: 'Questions', value: 3000 },
        // Add more data insights as needed
    ];

    const chartRef = useRef(null);
    const pieChartRef = useRef(null);

    useEffect(() => {
        // Create and update bar chart
        const barChartData = {
            labels: dataInsights.map(insight => insight.title),
            datasets: [
                {
                    label: 'Values',
                    data: dataInsights.map(insight => insight.value),
                    backgroundColor: ['#007bff', '#28a745', '#ffc107'], // Customize colors as needed
                    borderColor: ['#007bff', '#28a745', '#ffc107'], // Customize colors as needed
                    borderWidth: 1,
                },
            ],
        };

        const barChartConfig = {
            type: 'bar',
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };

        // Create and update pie chart
        const pieChartData = {
            labels: dataInsights.map(insight => insight.title),
            datasets: [
                {
                    label: 'Values',
                    data: dataInsights.map(insight => insight.value),
                    backgroundColor: ['#007bff', '#28a745', '#ffc107'], // Customize colors as needed
                    borderColor: ['#fff', '#fff', '#fff'], // Customize colors as needed
                    borderWidth: 1,
                },
            ],
        };

        const pieChartConfig = {
            type: 'pie',
            options: {
                responsive: true,
            },
        };

        // Destroy the previous bar chart canvas if it exists
        const barChartCanvasParent = chartRef.current?.parentElement;
        if (barChartCanvasParent) {
            barChartCanvasParent.removeChild(chartRef.current);
        }

        // Create a new bar chart canvas element
        const newBarChartCanvas = document.createElement('canvas');
        chartRef.current = newBarChartCanvas;
        barChartCanvasParent?.appendChild(newBarChartCanvas);

        const barChartCtx = newBarChartCanvas.getContext('2d');

        // Create a new bar chart instance
        const newBarChart = new Chart(barChartCtx, barChartConfig);

        // Update the bar chart data
        newBarChart.data = barChartData;

        // Ensure the bar chart is updated/rendered
        newBarChart.update();

        // Destroy the previous pie chart canvas if it exists
        const pieChartCanvasParent = pieChartRef.current?.parentElement;
        if (pieChartCanvasParent) {
            pieChartCanvasParent.removeChild(pieChartRef.current);
        }

        // Create a new pie chart canvas element
        const newPieChartCanvas = document.createElement('canvas');
        pieChartRef.current = newPieChartCanvas;
        pieChartCanvasParent?.appendChild(newPieChartCanvas);

        const pieChartCtx = newPieChartCanvas.getContext('2d');

        // Create a new pie chart instance
        const newPieChart = new Chart(pieChartCtx, pieChartConfig);

        // Update the pie chart data
        newPieChart.data = pieChartData;

        // Ensure the pie chart is updated/rendered
        newPieChart.update();
    }, [dataInsights]);

    return (
        <Container fluid>
            <h1 className="page-title">Data Insights</h1>
            <Row>
                {dataInsights.map((insight, index) => (
                    <Col className="cards" key={index} sm={6} md={4} lg={3}>
                        <div className="data-insight-card">
                            <h2>{insight.title}</h2>
                            <p className="data-value">{insight.value}</p>
                        </div>
                    </Col>
                ))}
                <Col className="bar">
                    <div className="bar" ref={chartRef}></div>
                </Col>
                <Col className="pie">
                    <div ref={pieChartRef}></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Overview;
