const imagesData = [
    { src: './wallpapers/bleach.jpg', category: 'animes' },
    { src: './wallpapers/fgo.jpg', category: 'animes' },
    { src: './wallpapers/bleachBlood.jpg', category: 'animes' },
    { src: './wallpapers/saoSwords.png', category: 'animes' },
    { src: './wallpapers/pokemon.jpg', category: 'animes' },
    { src: './wallpapers/cass.jpg', category: 'series' },
    { src: './wallpapers/mandal.jpg', category: 'series' },
    { src: './wallpapers/thewitcher.jpeg', category: 'series' },
    { src: './wallpapers/tlou.jpeg', category: 'series' },
    { src: './wallpapers/tlou2.jpeg', category: 'series' },
    { src: './wallpapers/twddead.jpeg', category: 'series' },
    { src: './wallpapers/val.jpeg', category: 'games' },
    { src: './wallpapers/ow.jpg', category: 'games' },
    { src: './wallpapers/star.jpeg', category: 'games' },
    { src: './wallpapers/lol.png', category: 'games' },
    { src: './wallpapers/gi.png', category: 'games' },
    { src: './wallpapers/assassin.jpg', category: 'games' },
];

function generateImageElements(imagesData) {
    const gallery = document.querySelector('.image-gallery');

    imagesData.forEach(image => {
        const div = document.createElement('div');
        div.className = `image ${image.category}`;

        const a = document.createElement('a');
        a.href = image.src;
        a.target = '_blank';

        const img = document.createElement('img');
        img.src = image.src;
        a.appendChild(img);
        div.appendChild(a);
        gallery.appendChild(div);
    });
}

generateImageElements(imagesData);



function filterImages(category) {
    const images = document.querySelectorAll('.image');
    
    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function abrirImagem(){}
