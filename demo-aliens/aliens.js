$(document).ready(function () {
  // we need add an event on the click of a button

  // Element.addEventListener("click", function(event){})

  $('.alien-btn').on('click', function (event) {
    console.log('clicked💬!', this);

    const alienSection = $(this).closest('.alien-section');
    const pTalk = alienSection.find('.talk');

    pTalk.append('💬');
  });
}); // document ready
