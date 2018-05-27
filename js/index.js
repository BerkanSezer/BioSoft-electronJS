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
  var organelles = [
    {
      name:'Ribozom',
      type: 'all'
    },
    {
      name: 'Mitokondri',
      type: 'all'
    },
    {
      name: 'Golgi Cisimciği',
      type: 'all'
    },
    {
      name: 'Endoplazmik retikulum',
      type: 'all'
    },
    {
      name: 'Koful',
      type: 'all'
    },
    {
      name: 'Lizozom',
      type: 'all'
    },
    {
      name: 'Hücre zarı',
      type: 'all'
    },
    {
      name: 'Çekirdek',
      type: 'all'
    },
    {
      name: 'Periksizom',
      type: 'all'
    },
    {
      name: 'Plastitler',
      type: 'plant'
    },
    {
      name: 'Hücre Çeperi',
      type: 'plant'
    },
    {
      name: 'Sentrozom',
      type: 'animal'
    } ];


  var correctCards = 0;
  $( init );

  function init() {
    $('#successMessage').hide();
    $('#successMessage').css( {
      left: '580px',
      top: '250px',
      width: 0,
      height: 0
    } );

    correctCards = 0;
    for ( var i=0; i<12; i++ ) {
      $('<div class="col-sm-2">' + organelles[i].name + '</div>').data( 'type', organelles[i].type ).appendTo( '#cardPile' ).draggable( {
        containment: '#content',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
        // stop: function(event,ui){
        //   var slotType = $(this).data('type');
        //   var cardType = ui.draggable.data('type');
        //   console.log(slotType);
        //   // var cardType = ui.draggable.data('type');
        //   $(this).css({
        //     top: '0px',
        //     left: '0px'
        //   });;
        // }
      } );
    }
    var words = [{
      name: 'Bitki',
      type: 'plant'
    },
    {
      name: 'Her ikisi de',
      type: 'all'
    },
    {
      name: 'Hayvan',
      type: 'animal'
    }];
    for ( var i=1; i<=3; i++ ) {
      $('<div class="col-sm-4">' + words[i-1].name + '</div>').data( 'type', words[i-1].type ).appendTo( '#cardSlots' ).droppable( {
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
      } );
    }

  }
  var height = 80;
  function handleCardDrop(event, ui) {
    var slotType = $(this).data('type');

    var cardType = ui.draggable.data('type');
    if (slotType === cardType) {
      height += 80;
      $(this).css('height', height + 'px');

      ui.draggable.addClass('correct');
      ui.draggable.draggable('disable');
      ui.draggable.position({
        of: $(this), my: 'left top', at: 'left top'
      });
      ui.draggable.draggable('option', 'revert', false);
      correctCards++;
    }else{
      console.log('false');
    }
    if (correctCards === 12) {
      $('#successMessage').show();
      $('#successMessage').animate({
        left: '380px',
        top: '200px',
        width: '400px',
        height: '100px',
        opacity: 1
      });
    }
  }




});
