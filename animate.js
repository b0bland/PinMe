        function gradientChange(){
        for(i=0; i<10; i++){
        var newDiv = $("<div>");
        newDiv.addClass('div');
        newDiv.addClass('c'+i);
        $(".color").append(newDiv);
      }
      }
      gradientChange();


// Anime.js Animations
var tl = anime.timeline({
          easing: 'easeOutExpo',
          duration: 750
        })

        tl.add ({
          targets: '.div',
          width:'100%',
          opacity:'0.8',
          delay:anime.stagger(100)
        })
        
        tl.add ({
          targets: '.c3, .c4, .c5, .c6, .c7, .c8, .c9',
          width: '75%',
          opacity: '0.8',
        })

        tl.add ({
          targets: '.c0, .c1, .c2',
          width: '0%',
          opacity: '0.8',
        })
        for (i=0; i<7;i++){
        tl.add ({
          targets: 'h1',
          top:'20%',
          opacity: 1,
          delay:anime.stagger(500)
        })
      }