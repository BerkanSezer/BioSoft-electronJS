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
    }else if (pageCounter === 8) {
      questionGame();
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

  function questionGame() {

    var data = {
      "questions" : [
        {
          "number": "1",
          "question": "Aşağıda verilen özelliklerden hangisi prokaryot ve ökaryot hücreler arasındaki ayırt edici özelliktir?",
          "a": "A)	DNA taşıma",
          "b": "B)	Zarla çevrili çekirdeğe sahip olma",
          "c": "C)	Hücre duvarına sahip olma",
          "d": "D)	Bölünebilme",
          "e": "E)	Protein sentezi yapabilme",
          "trueAnswer": "c"
        },
        {
          "number": "2",
          "question": "Aşağıda verilen yapılardan hangisi prokaryot yapılı bir hücrede bulunmaz?",
          "a": "A)	Halkasal formda bir DNA",
          "b": "B)	Ribozom organeli",
          "c": "C)	Hücre zarı",
          "d": "D)	Hücre duvarı",
          "e": "E)	Çekirdekçik",
          "trueAnswer": "e"
        },
        {
          "number": "3",
          "question": "Hücre zarının yapısını açıklayan ve günümüzde kabul edilen görüş aşağıdakilerden hangisidir?",
          "a": "A)	Birim zar modeli",
          "b": "B)	Çift katlı zar modeli",
          "c": "C)	Akıcı mozaik zar modeli",
          "d": "D)	Sandviç modeli",
          "e": "E)	Dinamik zar modeli",
          "trueAnswer": "c"
        },
        {
          "number": "4",
          "question": "Bir hücrenin oksijensiz kalması durumunda faaliyetleri olumsuz olarak etkilenen ilk organel hangisidir?",
          "a": "A)	Lizozom",
          "b": "B)	Mitokondri",
          "c": "C)	Peroksizom",
          "d": "D)	Ribozom",
          "e": "E)	Endoplazmik retikulum",
          "trueAnswer": "b"
        },
        {
          "number": "5",
          "question": "Aşağıdaki maddelerden hangisi hücre zarından pasif taşıma ile geçemez?",
          "a": "A)	Su",
          "b": "B)	Mineral",
          "c": "C)	Vitamin ",
          "d": "D)	Amino asit",
          "e": "E)	Protein",
          "trueAnswer": "e"
        },
        {
          "number": "6",
          "question": "Aşağıda verilen hücre organellerinden hangisi zarlı bir yapıya sahip değildir?",
          "a": "A)	Kontraktil koful",
          "b": "B)	Sentrozom",
          "c": "C)	Peroksizom",
          "d": "D)	Lizozom",
          "e": "E)	Golgi ayıgıtı",
          "trueAnswer": "b"
        },
        {
          "number": "7",
          "question": "Aşağıda verilen organel çiftlerinden hangisinde oksijen tüketimi gerçekleşir?",
          "a": "A)	Kloroplast-mitokondri",
          "b": "B)	Lizozom-sentrozom",
          "c": "C)	Mitokondri-peroksizom",
          "d": "D)	Golgi aygıtı-ribozom",
          "e": "E)	Koful-endoplazmik retikulum",
          "trueAnswer": "c"
        },
        {
          "number": "8",
          "question": "Aşağıdakilerden hangisi çekirdekçiğin görevleri arasındadır?",
          "a": "A)	İnorganik maddelerden organik madde sentezi yapar.",
          "b": "B)	Hücre içindeki zehirleri etkisiz hale getirir.",
          "c": "C)	Hücre içi sindirim yapar.",
          "d": "D)	Ribozomların büyük ve küçük birimlerini sentezler.",
          "e": "E)	Hücreye destek olur ve hücrenin şeklini korur.",
          "trueAnswer": "d"
        },
        {
          "number": "9",
          "question": "Proteinlere sarılmış kalıtım materyaline ne ad verilir?",
          "a": "A)	Plazmit",
          "b": "B)	Nükleotit",
          "c": "C)	DNA",
          "d": "D)	Genom",
          "e": "E)	Kromatin",
          "trueAnswer": "e"
        },
        {
          "number": "10",
          "question": "Aşağıdakilerden hangisinde kontraktil koful bulunabilir?",
          "a": "A)	Karaciğer hücresi",
          "b": "B)	Bakteri hücresi",
          "c": "C)	Bitki hücresi",
          "d": "D)	Amip hücresi",
          "e": "E)	Mantar hücresi",
          "trueAnswer": "d"
        }
      ]
    };
    var $app = $('#page-8');
    var $form = $app.find('form');
    for(var i=0;i<10;i++){
      $form.append(
        '<div class="big-question'+ data.questions[i].number + '">' +
        '<p><b>'+ data.questions[i].number + ' -)'+ data.questions[i].question + '</b></p>' +
        '<p class="answer">' +
        '      <label>' +
        '        <input value="a" name="question'+ data.questions[i].number +'" type="radio" />' +
        '        <span>' +data.questions[i].a +'</span>' +
        '      </label>' +
        '</p>' +
        '<p class="answer">' +
        '      <label>' +
        '        <input value="b" name="question'+ data.questions[i].number +'" type="radio" />' +
        '        <span>' +data.questions[i].b +'</span>' +
        '      </label>' +
        '</p>' +
        '<p class="answer">' +
        '      <label>' +
        '        <input value="c" name="question'+ data.questions[i].number +'" type="radio" />' +
        '        <span>' +data.questions[i].c +'</span>' +
        '      </label>' +
        '</p>' +
        '<p class="answer">' +
        '      <label>' +
        '        <input value="d" name="question'+ data.questions[i].number +'" type="radio" />' +
        '        <span>' +data.questions[i].d +'</span>' +
        '      </label>' +
        '</p>' +
        '<p class="answer">' +
        '      <label>' +
        '        <input value="e" name="question'+ data.questions[i].number +'" type="radio"  />' +
        '        <span>' +data.questions[i].e +'</span>' +
        '      </label>' +
        '</p>' +
        '</div>');
    }
    $app.find('.btn-submit').on('click',function () {
      var userAnswerArr = [];
      var trueAnswerArr = [];
      for (var i=0;i<10;i++){
        var a = $('input[name=question'+ (i+1) +']:checked').val();
        userAnswerArr.push(a);
        trueAnswerArr.push(data.questions[i].trueAnswer);
      }
      var trueSide = 0;
      var falseSide = 0;
      var undefinedSide = 0;
      for (var j=0;j<10;j++){
        if(userAnswerArr[j] === trueAnswerArr[j]){
          trueSide++;
        }else if (userAnswerArr[j] === undefined){
          undefinedSide++;
        }
        else{
          falseSide++;
        }

      }
      console.log(trueSide, 'true');
      console.log(undefinedSide, 'undefined');
      console.log(falseSide, 'false');

      console.info("info");
    });

  }

});

// $('#successMessage').hide();
// $('#successMessage').css( {
//   left: '580px',
//   top: '250px',
//   width: 0,
//   height: 0
// } );