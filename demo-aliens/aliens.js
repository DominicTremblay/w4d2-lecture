$(document).ready(function () {

  $('.alien-btn').on('click', function (event) {
    // finding the ancestor of the button with a class of alien-section

    const ancestor = $(this).closest('.alien-section');

    // find the descendent with a class of .talk
    pDescendant = ancestor.find('.talk');

    pDescendant.append('💬');

  });
}); // document ready
