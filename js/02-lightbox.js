import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const mainGalarry = document.querySelector(".gallery");
const galleryMarkup = createGalarryMarkup(galleryItems);

mainGalarry.insertAdjacentHTML('beforeend', galleryMarkup);
mainGalarry.addEventListener("click", onClick);

function createGalarryMarkup(galleryItems) {
    return galleryItems
        .map(({preview, original, description}) => {
            return `
    <div class="gallery__item">
    
      <a class="gallery__item" href="${original}">
  <img class="gallery__image"
   src="${preview}"
   alt="${description}" />
</a>
    </div>`;
        })
        .join("");
}

function onClick(event) {
    event.preventDefault();
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
  if (event.target.nodeName !== "IMG") {
    return;
  }
    
    lightbox.open();
}   