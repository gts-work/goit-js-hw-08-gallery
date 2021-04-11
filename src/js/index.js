import images from './data/gallery-items.js';
import { createImagesItemMarkup } from './gallery_container';
import { galleryContainerEl, closeButtonEl, lightBoxOverlayEl } from './elements';
import { onShowImage, onCloseModal, onLightBoxClick, onKeyPress } from './gallery_events';

// CREATE GALLERY ITEMS
const galleryBody = createImagesItemMarkup(images);
galleryContainerEl.append(...galleryBody);

// EVENTS
galleryContainerEl.addEventListener('click', onShowImage);
closeButtonEl.addEventListener('click', onCloseModal);
lightBoxOverlayEl.addEventListener('click', onLightBoxClick);
window.addEventListener('keydown', onKeyPress);