'use strict';

$(document).ready(() => {
  $('#tab1, #tab2').click(() => {
    // if tab2 has active class remove active class else remove from tab1 and add active class to tab2
    if ($('#tab1').hasClass('active')) {
      $('#tab1').removeClass('active');
      $('#tab2').addClass('active');
      
      // Change background of mountain
      $('#climb-section').removeClass('mountain1');
      $('#climb-section').addClass('mountain2');

      // Update the schedule display based on the active tab
      $('#schedule1').removeClass('show');
      $('#schedule1').addClass('hidden');
      $('#schedule2').removeClass('hidden');
      $('#schedule2').addClass('show');
    } else {
      $('#tab2').removeClass('active');
      $('#tab1').addClass('active');

      // Change background of mountain
      $('#climb-section').removeClass('mountain2');
      $('#climb-section').addClass('mountain1');
      
      // Update the schedule display based on the active tab
      $('#schedule2').removeClass('show');
      $('#schedule2').addClass('hidden');
      $('#schedule1').removeClass('hidden');
      $('#schedule1').addClass('show');
    }
  });
});