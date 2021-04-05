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

// DOCUMENT ELEMENTS
const galleryContainerEl = document.querySelector('.js-gallery');
const galleryLightboxEl = document.querySelector('.js-lightbox');
const closeButtonEl = document.querySelector('button[data-action="close-lightbox"]');
const lightBoxImageEl = document.querySelector('.lightbox__image');
const lightBoxOverlayEl = document.querySelector('.lightbox__overlay');

// CREATE GALLERY ITEMS
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

// EVENTS
galleryContainerEl.addEventListener('click', onShowImage);
closeButtonEl.addEventListener('click', onCloseModal);
lightBoxOverlayEl.addEventListener('click', onLightBoxClick);
window.addEventListener('keydown', onKeyPress);

// EVENTS FUNCTIONS
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
  closeModal();
}

function closeModal() {
  galleryLightboxEl.classList.remove('is-open');
  lightBoxImageEl.src = '';
}

function onLightBoxClick(e) {
  console.log(e.currentTarget);
  console.log(e.target);
  closeModal();
}

// GET ARRAY ORIGINAL IMAGES
function getArrayImagesSrc(obj) {
  const arrSrc = [];
  obj.forEach(image => arrSrc.push(image.dataset.source));
  return arrSrc;
}

function onKeyPress(e) {
  // console.log(e.code);
  // code: "ArrowRight"
  // code: "ArrowLeft"

  if (e.code != 'Escape' && e.code != 'ArrowRight' && e.code != 'ArrowLeft') {
    return;
  }

  if (e.code === 'Escape') {
    closeModal();
    return;
  }

  if (e.code === 'ArrowRight') {
    if (galleryLightboxEl.classList.contains('is-open')) {
      const arrImageSrc = getArrayImagesSrc(document.querySelectorAll('.gallery__image'));
      const currentIndexSrc = arrImageSrc.indexOf(lightBoxImageEl.src);
      let nextIndexSrc = arrImageSrc[currentIndexSrc + 1];

      if (!nextIndexSrc) {
        nextIndexSrc = arrImageSrc[0];
      }

      // console.log('3 nextIndexSrc: ', nextIndexSrc);

      lightBoxImageEl.src = '';
      lightBoxImageEl.src = nextIndexSrc;

      console.log('3: ', lightBoxImageEl.src);

      return;
    }
  }

  if (e.code === 'ArrowLeft') {
    if (galleryLightboxEl.classList.contains('is-open')) {
      // console.log('3: ', e.code);
      const arrImageSrc = getArrayImagesSrc(document.querySelectorAll('.gallery__image'));
      const currentIndexSrc = arrImageSrc.indexOf(lightBoxImageEl.src);
      let nextIndexSrc = arrImageSrc[currentIndexSrc - 1];

      if (!nextIndexSrc) {
        nextIndexSrc = arrImageSrc[arrImageSrc.length - 1];
      }

      lightBoxImageEl.src = '';
      lightBoxImageEl.src = nextIndexSrc;

      console.log('3: ', lightBoxImageEl.src);

      return;
    }
  }
}

