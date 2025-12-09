window.addEventListener('load', () => {
  const imgs = document.querySelectorAll('.card img');
  imgs.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'));
    }
  });
});
