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
    if (pageCounter === 7) {
      dragNDropGame();
    }
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
      name: 'Plastitler',
      type: 'plant'
    },
    {
      name: 'Hücre Çeperi',
      type: 'plant'
    },
    {
      name: 'Golgi Cisimciği',
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
      name: 'Sentrozom',
      type: 'animal'
    } ];


  var correctCards = 0;
  // $( init );

  function dragNDropGame() {
    console.log('run');
    $('#cardPile').children().remove();
    $('#cardSlots').children('.content-list').remove();
    $('#successMessage').hide();
    $('#successMessage').css( {
      left: '580px',
      top: '250px',
      width: 0,
      height: 0
    } );

    correctCards = 0;
    for ( var i=0; i<12; i++ ) {
      $('<div class="col-sm-2" id="card'+(i+1)+'">' + organelles[i].name + '</div>').data( 'type', organelles[i].type ).appendTo( '#cardPile' ).draggable( {
        containment: '#content',
        stack: '#cardPile div',
        cursor: 'move',
        revert: true
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
      $('<div class="col-sm-4 content-list" id="'+ words[i-1].type+'">' + '</br></div>').data( 'type', words[i-1].type ).appendTo( '#cardSlots' ).droppable( {
        accept: '#cardPile div',
        hoverClass: 'hovered',
        drop: handleCardDrop
      } );
    }

  }

  function handleCardDrop(event, ui) {
    var slotType = $(this).data('type');
    var cardType = ui.draggable.data('type');

    if (slotType === cardType) {
      $(this).css('height', '320px');
      ui.draggable.css('position', 'relative');
      ui.draggable.addClass('correct');
      ui.draggable.draggable('disable');
      ui.draggable.draggable('option', 'revert', false);
      correctCards++;
    }
    if (correctCards === 12) {
      $('#cardPile').remove();
      $('#successMessage').show();
      $('#successMessage').css({
        transform: 'translate(-50%,-50%)'
      });
      $('#successMessage').animate({
        left: '50%',
        top: '50%',
        width: '400px',
        height: '120px',
        opacity: 1
      });
    }
  }


  




});
