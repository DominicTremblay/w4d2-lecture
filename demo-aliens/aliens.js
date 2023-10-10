$(document).ready(function () {
  // const btn = querySelector('.alien-btn')

  // btn.addEventListener('click', funciton(event) {

  // })

  $('.alien-btn').on('click', function (event) {
    // add the dialog 🗨️ to the p.talk

    // find the ancestor

    const alientSection = $(this).closest('.alien-section');

    const pTalk = alientSection.find('.talk');

    pTalk.append('🗨️');
  });
}); // document ready
