const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const navGalleryEl = document.querySelector('#gallery');
navGalleryEl.classList.add('gallery__list');

const imageEl = images.map(({ url, alt }) => {
    const imgContext = `<img class="img-item" src=${ url } alt=${ alt } />`;

    const listEl = document.createElement('li');
    listEl.classList.add('gallery__item');
    listEl.insertAdjacentHTML('beforeend', imgContext);

    return listEl;
});

navGalleryEl.append(...imageEl);

console.log(imageEl);