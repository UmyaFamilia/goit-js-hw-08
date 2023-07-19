// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');
console.log(galleryItems);

const array = galleryItems.map(item => {
  return `<li class="gallery__item">
  <a class="gallery__link" href=${item.original}>
     <img class="gallery__image"  src=${item.preview} alt=${item.description} " />
  </a>
</li>`;
});

gallery.insertAdjacentHTML('beforeend', array.join(''));
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
