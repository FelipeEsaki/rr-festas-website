// const btnL = document.getElementById('btnleft');
// const btnR = document.getElementById('btnright');

// const container = document.getElementById('scroll-container');

// btnR.addEventListener('click', () => {
//     container.style.left = '-95%';
// });

// btnL.addEventListener('click', () => {
//     if (container.style.left = '20px') {
//         container.style.left = '20px';
//     }
// });

// const btnL = document.getElementById('btnleft');
// const btnR = document.getElementById('btnright');

// const container = document.getElementById('scroll-container');

// container.style.transition = 'left 0.5s ease';

// let currentLeft = 0;

// btnR.addEventListener('click', () => {
//     currentLeft -= 95;
//     container.style.left = `${currentLeft}%`;
// });

// btnL.addEventListener('click', () => {
//     currentLeft = 20 / container.offsetWidth * 100; // Converter 20px para porcentagem relativa
//     container.style.left = `${currentLeft}%`;
// });

// const btnL = document.getElementById('btnleft');
// const btnR = document.getElementById('btnright');
// const container = document.getElementById('scroll-container');
// const images = container.querySelectorAll('img');

// container.style.transition = 'left 0.5s ease';

// let currentIndex = 0;
// const imageWidth = images[0].offsetWidth; // Largura da primeira imagem

// function updateButtons() {
//     btnL.disabled = currentIndex <= 0;
//     btnR.disabled = currentIndex >= images.length - 1;
// }

// btnR.addEventListener('click', () => {
//     if (currentIndex < images.length - 1) {
//         currentIndex++;
//         const newPosition = -currentIndex * imageWidth;
//         container.style.left = `${newPosition}px`;
//         updateButtons();
//     }
// });

// btnL.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         const newPosition = -currentIndex * imageWidth;
//         container.style.left = `${newPosition}px`;
//         updateButtons();
//     }
// });

// updateButtons(); // Chamada inicial para garantir que os botões estejam corretos no início

const btnL = document.getElementById('btnleft');
const btnR = document.getElementById('btnright');
const container = document.getElementById('scroll-container');
const images = container.querySelectorAll('img');

container.style.transition = 'left 0.5s ease';

let currentIndex = 0;
const displacement = 208; // Ajuste o valor conforme desejado

function updateButtons() {
    btnL.disabled = currentIndex <= 0;
    btnR.disabled = currentIndex >= images.length - 1;
}

btnR.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        const newPosition = -currentIndex * displacement;
        container.style.left = `${newPosition}px`;
        updateButtons();
    }
});

btnL.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        const newPosition = -currentIndex * displacement;
        container.style.left = `${newPosition}px`;
        updateButtons();
    }
});

updateButtons(); // Chamada inicial para garantir que os botões estejam corretos no início




