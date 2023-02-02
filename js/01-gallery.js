import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemCollection = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div> `
  )
  .join("");

gallery.innerHTML = galleryItemCollection;

function openBigImg(evt) {
  evt.preventDefault();

  const element = evt.target;

  if (!element.classList.contains("gallery__image")) {
    return;
  }

  createModalWindow(takeUrlBigImg(element));
}

function takeUrlBigImg(elem) {
  const urlBigImg = elem.dataset.source;
  return urlBigImg;
}

let instance;

function createModalWindow(result) {
  instance = basicLightbox.create(`
        <img src="${result}">
    `);

  instance.show();
}

gallery.addEventListener("click", openBigImg);

function closeBigImg(evt) {
  if (!instance.visible) {
    return;
  }
  if (evt.code !== "Escape") {
    return;
  }
  instance.close();
}

gallery.addEventListener("keydown", closeBigImg);
