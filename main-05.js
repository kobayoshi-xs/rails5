$(document).ready(function(){
  $(function(){
    $('.text_area').keyup(function(){
      text = $(".text_area").val();
      $('.img-list li').each(function(){
        val = $(this).text();
        if (val.match(text)){
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
});