// Texas CO2 Emission Chart
const ctxTexas = document.getElementById('texasChart').getContext('2d');
const texasChart = new Chart(ctxTexas, {
    type: 'line',
    data: {
        labels: ['2000', '2005', '2010', '2015', '2020'],
        datasets: [{
            label: 'CO2 Emissions in Texas (Million Metric Tons)',
            data: [400, 450, 480, 460, 430],
            borderColor: '#ff5722',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { display: true },
            y: { display: true }
        }
    }
});

// California CO2 Emission Chart
const ctxCalifornia = document.getElementById('californiaChart').getContext('2d');
const californiaChart = new Chart(ctxCalifornia, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022'],
        datasets: [{
            label: 'CO2 Emissions in California (Million Metric Tons)',
            data: [350, 340, 330],
            borderColor: '#2196f3',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { display: true },
            y: { display: true }
        }
    }
});

// Placeholder for 2D Model Viewer
const canvas = document.getElementById('modelCanvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(400, 400);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, canvas.width / canvas.height, 0.1, 1000);
camera.position.z = 5;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();