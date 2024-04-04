import React from 'react';

const SalesOverviewGraph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales Overview',
                data: [100, 200, 300, 400, 500, 600],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + ' units';
                        }
                        return label;
                    }
                }
            }
        }
    };

    return (
        <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
            <div className="w-full">
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default SalesOverviewGraph;
