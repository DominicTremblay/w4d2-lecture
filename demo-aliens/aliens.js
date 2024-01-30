$(document).ready(function () {
  // add event listener to the alien button

  $('.alien-btn').on('click', function (event) {
    // target the p tag and add the dialog to it

    const alienSection = $(this).closest('.alien-section');
    console.log(alienSection);

    const pTalk = alienSection.find('.talk');
    console.log(pTalk);

    pTalk.append('💬')

   
  });
}); // document ready
