let searchParam = location.search.split('=').pop();

const access_key = 'BuakfDjOFEi2uOmwEcYQh40aUL_KdOOBp30epiRAqt4';


//рандомные фото
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;
//фото по запросу
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=30`;

const gallery = document.querySelector('.img-container');

let allImages;

const getImages = () => {
    fetch(random_photo_url)
    .then(res => res.json())
    .then(data => {
        allImages = data;
        makeImages(allImages)
    });
}

//создаёт элементы (фото)
const makeImages = (data) => {
    data.forEach((item, index) => {
        console.log(item);

        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';

//дочерний метод добавления
        gallery.appendChild(img);
    })
}

getImages();