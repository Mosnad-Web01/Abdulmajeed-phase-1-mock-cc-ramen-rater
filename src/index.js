document.addEventListener('DOMContentLoaded', () => {
  fetchRamenData();

  const ramenForm = document.getElementById('new-ramen');
  ramenForm.addEventListener('submit', handleNewRamenSubmit);
});

function fetchRamenData() {
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramenData => {
      ramenData.forEach(ramen => displayRamenImage(ramen));
      displayRamenDetails(ramenData[0]); 
    });
}

function displayRamenImage(ramen) {
  const ramenMenu = document.getElementById('ramen-menu');
  const img = document.createElement('img');
  img.src = ramen.image;
  img.alt = ramen.name;
  img.addEventListener('click', () => displayRamenDetails(ramen));
  ramenMenu.appendChild(img);
}

function displayRamenDetails(ramen) {
  const ramenImage = document.querySelector('.detail-image');
  const ramenName = document.querySelector('.name');
  const ramenRestaurant = document.querySelector('.restaurant');
  const ramenRating = document.getElementById('rating-display');
  const ramenComment = document.getElementById('comment-display');

  ramenImage.src = ramen.image;
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ramenRating.textContent = ramen.rating;
  ramenComment.textContent = ramen.comment;
}

function handleNewRamenSubmit(event) {
  event.preventDefault();

  const newRamen = {
    name: event.target.name.value,
    restaurant: event.target.restaurant.value,
    image: event.target.image.value,
    rating: event.target.rating.value,
    comment: event.target['new-comment'].value
  };

  displayRamenImage(newRamen);
  event.target.reset();
}
