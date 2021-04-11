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

// CREATE GALLERY ITEMS
export function createImagesItemMarkup(obj) {
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



