document.querySelectorAll('.galally').forEach(gallery => {
  const mainImage = gallery.querySelector('.main-image img');
  const thumbs = gallery.querySelectorAll('.charactor-2, .charactor-2-2');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImage.src = thumb.src;
    });
  });
});
