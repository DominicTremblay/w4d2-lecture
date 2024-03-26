$(document).ready(function () {
  // add event listener "click"
  $('.alien-btn').on('click', function (event) {
    // Target the p.talk tag

    // get the ancestor
    const section = $(this).closest('.alien-section');

    const pTalk = section.find('.talk');


    pTalk.append('💬')

    // add the 💬
  });
}); // document ready
