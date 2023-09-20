const $placeHolderImage = 'images/placeholder-image-square.jpg';
const $photoUrl = document.querySelector('#photo-url');
const $placeHolder = document.querySelector('.placeholder');
const $entryForm = document.querySelector('#entry-form');
const $ul = document.querySelector('ul');
const $noEntries = document.querySelector('.no-entries');
const $entryFormView = document.querySelector('[data-view = "entry-form"]');
const $entries = document.querySelector('[data-view = "entries"]');
const $entriesButton = document.querySelector('.entries-button');
const $newButton = document.querySelector('.new-button');

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
  $ul.prepend(renderEntry(entry));
  $placeHolder.setAttribute('src', $placeHolderImage);
  $entryForm.reset();
  viewSwap('entries');
  toggleNoEntries();
}

function renderEntry(entry) {
  const $entryItem = document.createElement('li');
  $entryItem.setAttribute('class', 'row');

  const $imageWrapper = document.createElement('div');
  $imageWrapper.setAttribute('class', 'column-half');

  const $image = document.createElement('img');
  $image.setAttribute('src', entry.photoUrl);
  $image.setAttribute('alt', entry.photoUrl);

  const $contentWrapper = document.createElement('div');
  $contentWrapper.setAttribute('div', 'column-half');

  const $title = document.createElement('h3');
  $title.textContent = entry.title;

  const $notes = document.createElement('p');
  $notes.textContent = entry.notes;

  $entryItem.appendChild($imageWrapper);
  $entryItem.appendChild($contentWrapper);
  $imageWrapper.appendChild($image);
  $contentWrapper.appendChild($title);
  $contentWrapper.appendChild($notes);

  return $entryItem;
}

function contentLoaded(event) {
  for (let i = 0; i < data.entries.length; i++) {
    const $entry = renderEntry(data.entries[i]);
    $ul.appendChild($entry);
    viewSwap(data.view);
    toggleNoEntries();
  }
}
toggleNoEntries();

function toggleNoEntries() {
  if (data.entries.length > 0) {
    $noEntries.classList.add('hidden');
  } else {
    $noEntries.classList.remove('hidden');
  }
}

function viewSwap(view) {
  if (view === 'entries') {
    $entryFormView.classList.add('hidden');
    $entries.classList.remove('hidden');
  } else {
    $entryFormView.classList.remove('hidden');
    $entries.classList.add('hidden');
  }
  data.view = view;
}

$photoUrl.addEventListener('input', photoUrl);
$entryForm.addEventListener('submit', entryForm);
document.addEventListener('DOMContentLoaded', contentLoaded);

$entriesButton.addEventListener('click', function (event) {
  viewSwap('entries');
});
$newButton.addEventListener('click', function (event) {
  viewSwap('entry-form');
});
