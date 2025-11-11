//componente mejorado
const productos = [
    { nombre: "img1", precio: 20, img:  "https://www.patasencasa.com/sites/default/files/styles/article_detail_desktop/public/2024-07/meme-del-gato-riendo_0.jpg.webp?itok=ezIW4YiM"},
    { nombre: "img2", precio: 20, img:  "https://www.patasencasa.com/sites/default/files/styles/article_detail_desktop/public/2024-07/meme-del-gato-riendo_0.jpg.webp?itok=ezIW4YiM"},
    { nombre: "img3", precio: 20, img:  "https://www.patasencasa.com/sites/default/files/styles/article_detail_desktop/public/2024-07/meme-del-gato-riendo_0.jpg.webp?itok=ezIW4YiM"},
    { nombre: "img4", precio: 20, img:  "https://www.patasencasa.com/sites/default/files/styles/article_detail_desktop/public/2024-07/meme-del-gato-riendo_0.jpg.webp?itok=ezIW4YiM"},
    { nombre: "img5", precio: 20, img:  "https://www.patasencasa.com/sites/default/files/styles/article_detail_desktop/public/2024-07/meme-del-gato-riendo_0.jpg.webp?itok=ezIW4YiM"},
    { nombre: "img6", precio: 20, img:  "https://www.patasencasa.com/sites/default/files/styles/article_detail_desktop/public/2024-07/meme-del-gato-riendo_0.jpg.webp?itok=ezIW4YiM"},
    { nombre: "img7", precio: 2000, img:  "https://i.pinimg.com/1200x/af/fb/b0/affbb0826a594a563ce0bbb33fd5ffba.jpg"},
];

const contenedor = document.getElementById("contenedor");

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});