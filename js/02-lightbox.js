import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemCollection = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a> `
  )
  .join("");

gallery.innerHTML = galleryItemCollection;

const captionsData = "alt";
const captionDelay = 250;
new SimpleLightbox(".gallery a", { captionsData, captionDelay });
