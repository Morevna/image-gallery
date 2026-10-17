let searchParam = location.search.split('=').pop();

const access_key = 'BuakfDjOFEi2uOmwEcYQh40aUL_KdOOBp30epiRAqt4';

const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;
const search_photo_url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchParam}&per_page=30`;

const gallery = document.querySelector('.img-container');

let allImages;

const makeImages = (data) => {
    data.forEach((item) => {
        let img = document.createElement('img');
        img.src = item.urls.regular;
        img.className = 'gallery-img';
        gallery.appendChild(img);
    });
};

const getImages = () => {
    if (searchParam && searchParam.trim() !== "") {
        fetch(search_photo_url)
        .then(res => res.json())
        .then(data => {
            allImages = data.results;
            gallery.innerHTML = '';
                            
            if (allImages.length === 0) {
                gallery.innerHTML = '<p class="no-results">Nothing found. Try another word!</p>';
            } else {
                makeImages(allImages);
            }
        })
        .catch(err => console.error("Error fetching search images:", err));
    } else {
        fetch(random_photo_url)
        .then(res => res.json())
        .then(data => {
            allImages = data; 
            gallery.innerHTML = '';
            makeImages(allImages);
        })
        .catch(err => console.error("Error fetching random images:", err));
    }
};

getImages();
