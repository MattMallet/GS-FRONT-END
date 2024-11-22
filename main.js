const ctx = document.getElementById('grafico-consumo').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ar-condicionado', 'Aquecedores', 'Refrigeradores', 'Máquinas de Lavar', 'Eletrônicos em Standby'],
        datasets: [{
            label: 'Consumo Médio (kWh)',
            data: [150, 120, 100, 80, 50],
            backgroundColor: 'rgba(46, 125, 50, 0.7)'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});

const slides = document.querySelector('.slides');
let index = 0;

function moveCarrossel() {
    index = (index + 1) % 3;
    slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(moveCarrossel, 7000);

const form = document.getElementById('form-contato');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
    form.reset();
});

