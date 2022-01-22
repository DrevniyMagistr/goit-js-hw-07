import { galleryItems } from './gallery-items.js';

const galleryWrapper = document.querySelector('.gallery');

const createGalleryEl = (el) =>
  el
    .map(
      ({ preview, original, description }) =>
        `
        <div class="gallery__item">
            <a class="gallery__link" href='${original}'>
                <img
                    class="gallery__image"
                    src='${preview}'
                    data-source='${original}'
                    alt='${description}'
                />
            </a>
        </div>`
    )
    .join('');

const onClickImage = (e) => {
  e.preventDefault();
  if (e.target.classList === 'gallery__image') {
    return;
  }

  const imgSrc = e.target.dataset.source;
  const modalImage = basicLightbox.create(`
        <img src='${imgSrc}'>
    `);
  modalImage.show();
};

const galleryMarkup = createGalleryEl(galleryItems);
galleryWrapper.insertAdjacentHTML('beforeend', galleryMarkup);
galleryWrapper.addEventListener('click', onClickImage);
