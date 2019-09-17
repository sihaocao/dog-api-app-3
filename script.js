"use strict";

function getDogImages() {
  const userInput = $('#breed-choice').val().toLowerCase();
  $('#breed-choice').val('');
  fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status !== "success") {
    alert('Sorry, we cannot find that breed of Dog. Please enter another breed.');
  } else if (responseJson.status === "success") {
    $('.results').html('<h2>What a great looking dog!</h2>');
    $('.results').append(`<img src="${responseJson.message}" class="results">`);
    $('.results').removeClass('hidden');
  }
}

function watchForm() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    getDogImages();
  })
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
})