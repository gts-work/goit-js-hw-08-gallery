import { galleryLightboxEl, lightBoxImageEl } from './elements';


// EVENTS FUNCTIONS
export function onShowImage(e) {
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

export function onCloseModal(e) {
  closeModal();
}

function closeModal() {
  galleryLightboxEl.classList.remove('is-open');
  lightBoxImageEl.src = '';
}

export function onLightBoxClick(e) {
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

export function onKeyPress(e) {
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