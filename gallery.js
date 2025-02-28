let currentPage = 1;
const imagesPerPage = 12;
const rawgApiKey = 'f31313bbfbbc43929361d3e507ea163d';
let currentCategory = 'all';

async function fetchAnimeImages(page = 1) {
    try {
        const response = await fetch(`https://nekos.best/api/v2/neko?amount=${imagesPerPage}&page=${page}`);
        const data = await response.json();
        console.log('Anime API response:', data);
        return data.results.map(item => ({
            src: item.url,
            category: 'anime'
        }));
    } catch (error) {
        console.error('Error fetching anime images:', error);
        return [];
    }
}

async function fetchGameImages(page = 1) {
    try {
        const response = await fetch(`https://api.rawg.io/api/games?key=${rawgApiKey}&page_size=${imagesPerPage}&page=${page}`);
        const data = await response.json();
        console.log('Game API response:', data); 
        return shuffleArray(data.results.map(item => ({
            src: item.background_image,
            category: 'games'
        })));
    } catch (error) {
        console.error('Error fetching game images:', error);
        return [];
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function generateImageElements(page = 1, category = 'anime') {
    const gallery = document.querySelector('.image-gallery');
    gallery.innerHTML = ''; 
    let images = [];

    if (category === 'anime') {
        images = await fetchAnimeImages(page);
    } else if (category === 'games') {
        images = await fetchGameImages(page);
    } else if (category === 'all') {
        const animeImages = await fetchAnimeImages(page);
        const gameImages = await fetchGameImages(page);
        images = shuffleArray([...animeImages, ...gameImages]);
    }

    console.log('Images to display:', images);

    images.forEach(image => {
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

function updateImages() {
    currentPage++;
    generateImageElements(currentPage, currentCategory);
}

generateImageElements();

function filterImages(category) {
    currentPage = 1;
    currentCategory = category;
    generateImageElements(currentPage, category);
}

function abrirImagem(){}