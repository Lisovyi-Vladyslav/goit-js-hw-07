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
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
        })
        .join("");
}

function onClick(event) {
    event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}"  width="800" height="600">`);

    instance.show();

    mainGalarry.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    });

}   