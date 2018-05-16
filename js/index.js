$( document ).ready(function() {
  $("#page-1").show();
  $("#page-2").hide();
  $("#page-3").hide();
  $("#page-4").hide();
  $("#page-5").hide();
  $("#page-6").hide();
  var pageCounter = 1;

  $(".next-button").on("click",function(){
    if (pageCounter !== 6){
      pageCounter ++;
      pageSwicher(pageCounter);
    }
  });

  $(".pre-button").on("click",function(){
    if (pageCounter !== 1){
      pageCounter --;
      pageSwicher(pageCounter);

    }
  });
  function pageSwicher(pageCounter) {
    switch (pageCounter){
      case 1:
        $("#page-2").hide();
        $("#page-1").show();
        break;
      case 2:
        $("#page-1").hide();
        $("#page-3").hide();
        $("#page-2").show();
        break;
      case 3:
        $("#page-2").hide();
        $("#page-4").hide();
        $("#page-3").show();
        break;
      case 4:
        $("#page-3").hide();
        $("#page-5").hide();
        $("#page-4").show();
        break;
      case 5:
        $("#page-4").hide();
        $("#page-6").hide();
        $("#page-5").show();
        break;
      case 6:
        $("#page-5").hide();
        $("#page-6").show();
        break;
    }
  }



});