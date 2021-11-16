$(document).ready(function () {



  $('.alien-btn').on('click', function (event) {
    $(this)
      .closest('.alien-section')
      .find('.talk')
      .append('💬');

      // $('.talk').empty();

    });
}); // document ready
