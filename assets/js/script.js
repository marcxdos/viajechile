$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  //Despedida
  $(document).ready(function () {
    $("h4").on ("click", function() {
      alert("Muchas gracias por visitarnos!");
    });
  });

  //Cambia de color los titulos H3.
  $(document).ready(function () {
  $( "h3" ).on( "dblclick", function() {
    $(this).css({
      "color": "red",
      "font-size": "2em"
      });
    });
  });
  
  /* Al dar click esconde los cards*/
  $(document).ready(function () {
  $( ".card" ).click(function() {
    $( ".card-text" ).toggle( "slow", function() {
    });  
    });
  });