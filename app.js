const p = document.querySelectorAll('p');

document.addEventListener('keydown', (event) => {
  p.forEach((p) => {
    if (p.classList.contains(event.key)) p.style.backgroundColor = 'yellow';
  });
});

document.addEventListener('keyup', (event) => {
  p.forEach((p) => {
    if (p.classList.contains(event.key)) p.style.backgroundColor = '#fff';
  });
});
