const $photoUrl = document.querySelector('#photo-url');
const $placeholder = document.querySelector('.placeholder');

function photoUrl(event) {
  $placeholder.setAttribute('src', event.target.value);
}

$photoUrl.addEventListener('input', photoUrl);
