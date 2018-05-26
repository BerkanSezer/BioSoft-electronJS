$( document ).ready(function() {
  $(".page").hide();
  $("#page-1").show();
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
    $(".page").hide();
    $("#page-" + pageCounter).show();
  }
});
