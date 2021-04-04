import images from './data/gallery-items.js';



/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */

const galleryContainerEl = document.querySelector('.js-gallery');
const galleryLightboxEl = document.querySelector('.js-lightbox');
const closeButtonEl = document.querySelector('button[data-action="close-lightbox"]');
const lightBoxImageEl = document.querySelector('.lightbox__image');
const activeGalleryLink = '#';

function createImagesItemMarkup(obj) {
  return obj.map((image) => {
    const galleryItem = createItemList();
    const galleryItemLink = createItemLink(image.original);
    const galleryItemImage = createItemImage(image);

    galleryItemLink.append(galleryItemImage);
    galleryItem.append(galleryItemLink);

    // console.log(galleryItem);

    return galleryItem;
  });
}

function createItemList() {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');
  return galleryItem;
}

function createItemLink(attrHref) {
  const galleryItemLink = document.createElement('a');
  galleryItemLink.classList.add('gallery__link');
  galleryItemLink.setAttribute('href', attrHref);

  return galleryItemLink;
}

function createItemImage(obj) {
  const galleryItemImage = document.createElement('img');
  galleryItemImage.classList.add('gallery__image');
  galleryItemImage.setAttribute('src', obj.preview);
  galleryItemImage.setAttribute('data-source', obj.original);
  galleryItemImage.setAttribute('alt', obj.description);

  return galleryItemImage;
}

const galleryBody = createImagesItemMarkup(images);
galleryContainerEl.append(...galleryBody);

galleryContainerEl.addEventListener('click', onShowImage);
closeButtonEl.addEventListener('click', onCloseModal);

function onShowImage(e) {
  const isImageEl = e.target.classList.contains('gallery__image');
  if (!isImageEl) {
    return;
  }

  e.preventDefault();

  const imageEl = e.target;
  const imageSrc = imageEl.dataset.source;
  galleryLightboxEl.classList.add('is-open');
  lightBoxImageEl.src = imageSrc;
}

function onCloseModal(e) {
  galleryLightboxEl.classList.remove('is-open');
  lightBoxImageEl.src = '';
}