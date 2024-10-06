// Chart.js CO2 Emissions Chart
const ctx = document.getElementById('co2EmissionsChart').getContext('2d');
const co2EmissionsChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
        datasets: [
            {
                label: 'CO₂ Emissions (in Gt)',
                data: [30, 35, 40, 45, 50, 60],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'Carbon Footprint (in Gt)',
                data: [25, 30, 35, 40, 45, 50], // hypothetical data
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            }
        ]
    },
    options: {
        scales: {
            x: {
                title: { display: true, text: 'Year' }
            },
            y: {
                title: { display: true, text: 'CO₂ and Footprint (Gt)' },
                beginAtZero: true
            }
        }
    }
});

// 2D Models (Simple Canvas Example)

// New York City Model (Rising Sea Levels)
const nycCanvas = document.getElementById('nycModel');
if (nycCanvas) {
    const nycContext = nycCanvas.getContext('2d');
    function drawNYCSeaLevel() {
        // Clear previous content
        nycContext.clearRect(0, 0, nycCanvas.width, nycCanvas.height);
        // Draw the coastline
        nycContext.fillStyle = "#00BFFF"; // Blue for sea
        nycContext.fillRect(0, 200, 400, 100); // Sea level rising (dynamic)
        // Draw city outline
        nycContext.fillStyle = "#808080"; // Gray for buildings
        nycContext.fillRect(50, 150, 50, 50); // Building 1
        nycContext.fillRect(150, 120, 50, 80); // Building 2
        nycContext.fillRect(250, 140, 50, 60); // Building 3
        // Rising sea level text
        nycContext.fillStyle = "#FFFFFF";
        nycContext.font = "16px Arial";
        nycContext.fillText("Rising Sea Levels (Projected 2050)", 60, 50);
    }
    drawNYCSeaLevel();
}

document.addEventListener('DOMContentLoaded', function() {
    // Chart.js CO2 Emissions Chart
    const ctx = document.getElementById('co2EmissionsChart').getContext('2d');
    const co2EmissionsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2000', '2005', '2010', '2015', '2020', '2025'],
            datasets: [
                {
                    label: 'CO₂ Emissions (in Gt)',
                    data: [30, 35, 40, 45, 50, 60],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                },
                {
                    label: 'Carbon Footprint (in Gt)',
                    data: [25, 30, 35, 40, 45, 50], // hypothetical data
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                }
            ]
        },
        options: {
            scales: {
                x: {
                    title: { display: true, text: 'Year' }
                },
                y: {
                    title: { display: true, text: 'CO₂ and Footprint (Gt)' },
                    beginAtZero: true
                }
            }
        }
    });
});