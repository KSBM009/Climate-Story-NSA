document.addEventListener('DOMContentLoaded', function() {
    const gasTypeSelect = document.getElementById('gasType');
    const metricTypeSelect = document.getElementById('metricType');

    // Initialize the map and set the view to fit the entire state of New York
    const map = L.map('map').setView([43.0, -75.0], 7); // Initial center

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // New York State's bounding box (approximate)
    const nyBounds = [
        [40.4774, -79.76259], // Southwest corner (approx.)
        [45.01585, -71.85621] // Northeast corner (approx.)
    ];

    // Fit the map to the bounds of New York State
    map.fitBounds(nyBounds);

    // Climate data from CSV, simplified for example purposes.
    const climateData = {
        CO2: [5131, 5076, 5178, 5279, 5361, 5425, 5601, 5673, 5736, 5473, 5529, 5368, 5246, 5017],
        Methane: [924, 931, 927, 915, 926, 916, 913, 897, 885, 821, 814, 828, 796, 782],
        NitrousOxide: [412, 402, 400, 422, 423, 426, 440, 422, 426, 441, 444, 439, 418, 408],
    };
    
    const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 2013, 2014, 2015, 2016, 2021];

    let chart;

    function createChart(data, label) {
        const ctx = document.getElementById('climateGraph').getContext('2d');
        if (chart) {
            chart.destroy();
        }
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: `${label} Concentration`,
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function updateMapAndGraph() {
        const gasType = gasTypeSelect.value;
        const metricType = metricTypeSelect.value;

        const data = climateData[gasType];
        const label = `${gasType} (${metricType})`;

        createChart(data, label);

        // Simulate map regions changing based on gas type
        // Add colored polygons representing regions within New York based on the gas type
        map.eachLayer(layer => {
            if (layer instanceof L.TileLayer) return; // keep tile layer
            map.removeLayer(layer); // remove other layers
        });

        const color = gasType === 'CO2' ? 'red' : gasType === 'Methane' ? 'green' : 'blue';

        // Add simple rectangles as a placeholder for regions in NY State (could be replaced with GeoJSON data)
        const regions = [
            [[42.5, -79.0], [43.5, -75.0]],  // Western NY
            [[40.7, -74.0], [42.0, -72.0]],  // NYC Metro
            [[43.0, -77.0], [44.0, -74.5]],  // Upstate NY
        ];

        regions.forEach(region => {
            L.rectangle(region, { color: color, weight: 1, fillOpacity: 0.5 }).addTo(map);
        });
    }

    gasTypeSelect.addEventListener('change', updateMapAndGraph);
    metricTypeSelect.addEventListener('change', updateMapAndGraph);

    // Initialize with default values
    updateMapAndGraph();
});
