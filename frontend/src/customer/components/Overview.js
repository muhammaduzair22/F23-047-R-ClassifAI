// OverviewPage.js
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

    useEffect(() => {
        // Create and update charts here using Chart.js
        const chartData = {
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

        const chartConfig = {
            type: 'bar', // Change chart type as needed (e.g., 'line', 'doughnut', 'pie')
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        };

        // Destroy the previous chart if it exists
        const canvasParent = chartRef.current.parentElement;
        canvasParent.removeChild(chartRef.current);

        // Create a new canvas element
        const newCanvas = document.createElement('canvas');
        chartRef.current = newCanvas;
        canvasParent.appendChild(newCanvas);

        const ctx = newCanvas.getContext('2d');

        // Create a new chart instance
        const newChart = new Chart(ctx, chartConfig);

        // Update the chart data
        newChart.data = chartData;

        // Ensure the chart is updated/rendered
        newChart.update();
    }, [dataInsights]);

    return (
        <Container fluid>
            <h1 className="page-title">Data Insights</h1>
            <Row>
                {dataInsights.map((insight, index) => (
                    <Col key={index} sm={6} md={4} lg={3}>
                        <div className="data-insight-card">
                            <h2>{insight.title}</h2>
                            <p className="data-value">{insight.value}</p>
                        </div>
                    </Col>
                ))}
                <Col sm={12} className="graph chart-col">
                    <div ref={chartRef}></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Overview;
