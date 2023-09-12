$(document).ready(function () {
  $('.alien-btn').on('click', function (event) {
    // DOM traversal

    const $parentSection = $(this).closest('.alien-section');

    const $pTalk = $parentSection.find('.talk');


    $pTalk.append('💬');
  });
}); // document ready
