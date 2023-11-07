$(document).ready(function() {

  // declare a click event listener
  $('.alien-btn').on('click', function(e) {

    // target the p element with a class of talk

    // target the ancestor
    const alienSection = $(this).closest('.alien-section');
    // target the descendant with a class of tals

    const pTalk = alienSection.find('.talk')

    pTalk.append('💬')



  })


  // add the dialog 💬


 
}); // document ready
