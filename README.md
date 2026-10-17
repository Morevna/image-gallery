# Image Gallery (Unsplash API Integration) 📷

A responsive and modern web image gallery that dynamically fetches and displays high-quality visual content directly from the Unsplash API. Developed as part of the Rolling Scopes School curriculum.

## 🔗 Live Demo
[Launch Image Gallery](https://morevna.github.io/image-gallery/)

## 🛠️ Tech Stack & Architecture
- **Language:** JavaScript (ES6+)
- **Markup & Styling:** HTML5, CSS3, FontAwesome Icons (for UI elements)
- **External Web APIs:** Unsplash REST API (`/photos/random`, `/search/photos`)
- **Asynchronous Logic:** Native JavaScript Promises (`fetch` API)

## 🚀 Key Features Implemented in Code
- **REST API Integration:** Implemented secure network requests to the Unsplash API utilizing custom developer access keys.
- **Asynchronous Data Fetching:** Applied `fetch()` workflows combined with JSON parsing (`.then(res => res.json())`) to safely process external photographic feeds.
- **Dynamic DOM Generation:** Built an efficient, iterative image rendering engine (`makeImages`) that maps over programmatic server responses to inject responsive `<img>` nodes dynamically into the DOM tree via `appendChild()`.
- **URL Parameter Extraction:** Leveraged native `location.search` logic parsed through array manipulations (`.split('=').pop()`) to dynamically read, track, and handle active user search requests.
- **Infinite Grid Preparation:** Curated high-volume visual displays restricting layouts to clean blocks of 30 fluid, responsive images per request instance.

## 📂 Code Workflow Sample
The application logic requests random collections on load and supports search queries by utilizing high-precision API routing:
```javascript
const access_key = 'BuakfDjOFEi2uOmwEcYQh40aUL_KdOOBp30epiRAqt4';
const random_photo_url = `https://api.unsplash.com/photos/random?client_id=${access_key}&count=30`;

fetch(random_photo_url)
  .then(res => res.json())
  .then(data => makeImages(data));
```
