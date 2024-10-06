const intro = document.getElementById('intro');

// Smooth scroll functionality
intro.addEventListener('click', function(){
    document.getElementById("intro_page").scrollIntoView({ behavior: "smooth" });
});
document.getElementById('prediction_btn').addEventListener('click', function(){
    document.getElementById('prediction_widget').scrollIntoView({behavior: "smooth"});
});
document.getElementById('logo').addEventListener('click', function(){
    document.getElementById('sec1').scrollIntoView({behavior: "smooth"});
});
document.getElementById('ex').addEventListener('click', function(){
    document.getElementById('examples').scrollIntoView({behavior: "smooth"});
});

// Chart.js configuration for emissions
const data = {
    labels: ["2020-01", "2020-02"],
    datasets: [{
        label: "CO₂ Emissions (mmol m²/s)",
        data: [-4.5, -3.2],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                title: { display: true, text: 'Time (Months)' },
                ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 }
            },
            y: {
                title: { display: true, text: 'CO₂ Emissions (mmol m²/s)' },
                beginAtZero: false,
                suggestedMin: -6,
                suggestedMax: 5
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);