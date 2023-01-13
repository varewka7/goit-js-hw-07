import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');
const galleryMarkUp = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkUp);

gallery.addEventListener('click', onGalleryClick);

 function createGalleryItem (galleryItems) {
     return galleryItems
         .map(({ preview, original, description }) => {
        return `
   <div class="gallery__item">
  <a class="gallery__link" href= "${original}">
    <img
      class="gallery__image"
      src= "${ preview }"
      data-source= "${ original }"
      alt= "${ description } "
    />
  </a>
</div>
 `;
    })
        .join('');
 }


function onGalleryClick(e) {
    e.preventDefault();

    const instance = basicLightbox.create(`<img src= "${e.target.dataset.source}" width="800",height="600">`);
    instance.show();

    document.addEventListener('keydown', event => {
       
        if (event.key === "Escape") {
            instance.close();
        }
});
}

 

