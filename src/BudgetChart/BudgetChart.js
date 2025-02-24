import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios'


ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetChart() {
    const [chartData, setChartData] = useState(null);

    
    useEffect(() => {
        const getData = async () => {
            const data = await axios.fetchBudgetData();
            if (data.length) {
                setChartData({
                    labels: data.map(item => item.category),
                    datasets: [
                        {
                            data: data.map(item => item.amount),
                            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
                        },
                    ],
                });
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h2>Budget Distribution</h2>
            {chartData ? <Doughnut data={chartData} /> : <p>Loading chart...</p>}
        </div>
    );
}

export default BudgetChart;
