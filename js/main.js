const $placeHolderImage = 'images/placeholder-image-square.jpg';
const $photoUrl = document.querySelector('#photo-url');
const $placeHolder = document.querySelector('.placeholder');
const $entryForm = document.querySelector('#entry-form');

function photoUrl(event) {
  $placeHolder.setAttribute('src', event.target.value);
}

function entryForm(event) {
  event.preventDefault();

  const entry = {
    entryId: data.nextEntryId,
    title: event.target.elements.title.value,
    photoUrl: event.target.elements.photoUrl.value,
    notes: event.target.elements.notes.value,
  };
  data.nextEntryId++;
  data.entries.unshift(entry);
  $placeHolder.setAttribute('src', $placeHolderImage);
  $entryForm.reset();
}

$photoUrl.addEventListener('input', photoUrl);
$entryForm.addEventListener('submit', entryForm);
