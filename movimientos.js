function bloomRose() {
    const rose = document.getElementById('rose');
    rose.style.opacity = 1;
}

function changeBackgroundColor() {
    const body = document.querySelector('body');
    const currentColor = body.style.backgroundColor;
    body.style.backgroundColor = currentColor === 'rgb(240, 240, 240)' ? '#ffff99' : '#f0f0f0';
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(bloomRose, 1000); // Espera 1 segundo antes de hacer florecer la rosa
});
