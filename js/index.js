$( document ).ready(function() {
  $(".page").hide();
  $("#page-1").show();
  var pageCounter = 1;

  $(".next-button").on("click",function(){
    if (pageCounter !== 10){
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
  
  function dragDropGame() {
    var $app = $('#page-7');
    console.log('here');
    console.log(pageCounter);
    console.log(pageCounter);

    var $orgBox = $app.find('.organelles');
    var organelles = ['Ribozom', 'Mitokondri', 'Golgi Cisimciği', 'Endoplazmik retikulum', 'Koful', 'Lizozom', 'Hücre zarı', 'Çekirdek', 'Periksizom', 'Plastitler', 'Hücre Çeperi', 'Sentrozom'];
    for(var i=1;i<=12;i++){
      var data = '<div class="col-sm-2" id="org_'+ i+'">'+organelles[i-1]+'</div>';
      $orgBox.append(data)
    }
    $('.organelles').children().draggable();
    $app.find('.circle-a').droppable({
      drop: function() {
        $(this)
          .css("background-color", "yellow");
      }
    });
  }
    dragDropGame();


  
});
