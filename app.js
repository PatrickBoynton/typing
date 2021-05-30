const p = document.querySelectorAll('p');

document.addEventListener('keydown', (event) => {
  console.log(event);
  p.forEach((p) => {
    if (p.classList.contains(event.key)) p.style.backgroundColor = 'yellow';
    if (p.classList.contains(event.code)) p.style.backgroundColor = 'yellow';
  });
});

document.addEventListener('keyup', (event) => {
  p.forEach((p) => {
    if (p.classList.contains(event.key)) p.style.backgroundColor = '#fff';
    if (p.classList.contains(event.code)) p.style.backgroundColor = '#fff';
  });
});
