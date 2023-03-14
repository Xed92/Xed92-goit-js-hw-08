// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');

const createGalleryItems = ({ preview, original, description }) => `
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;

const createGalleryItemsEl = galleryItems
  .map(e => createGalleryItems(e))
  .join('');

galleryListEl.insertAdjacentHTML('beforeend', createGalleryItemsEl);

const lightbox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionsDelay: 250,
});
