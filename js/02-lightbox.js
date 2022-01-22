import { galleryItems } from './gallery-items.js';

const galleryWrapper = document.querySelector('.gallery');

const createGalleryEl = (el) =>
  el
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    )
    .join('');

const galleryMarkup = createGalleryEl(galleryItems);
galleryWrapper.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
lightbox.on('simple-lightbox');