

const logoAnimation = anime.timeline({ 
  // autoplay: true,
  // delay: anime.stagger(100) ,


});
// ...... анимация конверта.......

logoAnimation.add({
  targets: '.cls-1',
  opacity: [.0, .5],
  elasticity: 1,
  duration: 1000,

  easing: 'easeInCubic',
});
logoAnimation.add({
  targets: '.morphing-demo',
  opacity: [.0, 1],
  elasticity: 1,
  duration: 1000,

  easing: 'easeInCubic',
});


logoAnimation.add({
  targets: '.morphing-demo',
  points: [
    { value: '1220.5 342.15 978.5 0.5 735.15 342.15 735.15 587.5 1220.5 587.5 1220.5 342.15' },
    { value: '1920.5 0.5 978.5 0.5 735.15 342.15 735.15 587.5 1220.5 587.5 1920.5 0.5' },
    { value: '1920.5 0.5 978.5 0.5 735.15 342.15 735.15 587.5 1920.5 930.5 1920.5 0.5' },
    { value: '1920.5 0.5 978.5 0.5 735.15 342.15 0.5 930.5 1920.5 930.5 1920.5 0.5' },
    { value: '1920.5 0.5 978.5 0.5 0.5 0.5 0.5 930.5 1920.5 930.5 1920.5 0.5' },
  ],
  easing: 'easeOutQuad',
  duration: 1900,
  delay: 500,
})

// //...... анимация лого.......

logoAnimation.add({
  targets: '.property-keyframes-demo',
  opacity: [.6, 1],
  elasticity: 1,
  duration: 500,
  translateX: -820,
  translateY: -375,
  easing: 'easeInCubic',
});

// //...... появление верхних блоков.......
logoAnimation.add({
  targets: '.cls',
  opacity: [0, 1],
  duration: 1300,
// delay: 00,
delay: anime.stagger(100),
});



logoAnimation.add({
  targets: '#css3-b',
  elasticity: 1,
  duration: 300,
  translateX: [70, 0],
  translateY: [-192, 0],
  easing: 'easeInCubic',

});


// рандомная  отрисовка круга CSS....
  logoAnimation.add({
  targets: '.cls-62',
  opacity: [0, 0],

  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });

// возвращение отрисовка круга CSS....
logoAnimation.add({
  targets: '.cls-62',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});

// анимация рисования линии....
logoAnimation.add({
  targets: '#map path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  });



// рандомная  отрисовка кгугов....
  logoAnimation.add({
  targets: '.cls-63',
  opacity: [0, 1],
  duration: 1,
  delay: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });

// возвращение рандомной отрисовки кгугов....
logoAnimation.add({
  targets: '.cls-63',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});





// отрисовка текста CSS....


logoAnimation.add({

  targets: '.csstext',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});



logoAnimation.add({
  targets: '#javascript-b',
  elasticity: 1,
  duration: 500,
  translateX: [-350, 0],
  translateY: [-110, 0],
  easing: 'easeInCubic',
});


// рандомная  отрисовка круга CSS....
  logoAnimation.add({
  targets: '.cls-57',
  opacity: [0, 0],

  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга CSS....

logoAnimation.add({
  targets: '.cls-57',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});



// анимация рисования линии js
logoAnimation.add({
  targets: '.cls-53',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  loop: true
  });

// рандомная  отрисовка кгугов..js..
  logoAnimation.add({
  targets: '.polygoniconjs',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение рандомной отрисовки кгугов.js...

logoAnimation.add({
  targets: '.polygoniconjs',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});


 // отрисовка текста js
logoAnimation.add({

  targets: '.textjs',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});

// возвращение jqueri 


logoAnimation.add({
  targets: '#jquery',
  elasticity: 1,
  duration: 500,
  translateX: [-23, 0],
  translateY: [-496, 0],
  easing: 'easeInCubic',

});


// рандомная  отрисовка круга CSS....
  logoAnimation.add({
  targets: '.jqueriicon',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга CSS....
logoAnimation.add({
  targets: '.jqueriicon',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});
// анимация рисования линии linejqueri
logoAnimation.add({
  targets: '.linejqueri',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  loop: true
  });

logoAnimation.add({
  targets: '#webgl',
  elasticity: 1,
  duration: 500,
  translateX: [-28, 0],
  translateY: [-502, 0],
  easing: 'easeInCubic',
});
// рандомная  отрисовка круга webjl....
  logoAnimation.add({
  targets: '.cls-59',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга webjl....
logoAnimation.add({
  targets: '.cls-59',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});


// рандомная  отрисовка круга webgl....
  logoAnimation.add({
  targets: '.cls-60',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга webgl....
logoAnimation.add({
  targets: '.cls-60',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});

///появление списка текста webgl....
logoAnimation.add({

  targets: '.webgltext',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});

// перемещение  блока svg...

logoAnimation.add({
  targets: '#svg',
  elasticity: 1,
  duration: 500,
  translateX: [-233, 0],
  translateY: [-98, 0],
  easing: 'easeInCubic',

});

// рандомная  отрисовка круга svgcircle....
  logoAnimation.add({
  targets: '.svgcircle',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга svgcircle....
logoAnimation.add({
  targets: '.svgcircle',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});


////отрисовка линии svg

logoAnimation.add({
  targets: '.cls-47',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  });

// рандомная  отрисовка кгугов..svg..
  logoAnimation.add({
  targets: '.cls-50',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение рандомной отрисовки кгугов.svg...

logoAnimation.add({
  targets: '.cls-50',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});

// появление текста svg

logoAnimation.add({

  targets: '.svgtext',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});

/////перемещение блока САNVas


logoAnimation.add({
  targets: '#canvas-b',
  elasticity: 1,
  duration: 500,
  translateX: [-87, 0],
  translateY: [-363, 0],
  easing: 'easeInCubic',
  delay: 10,
});



// рандомная  отрисовка круга САNVas....
  logoAnimation.add({
  targets: '.cls-44',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга САNVas....
logoAnimation.add({
  targets: '.cls-44',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});


// отрисовка линии САNVas

logoAnimation.add({
  targets: '.cls-43',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  loop: true
  });


// рандомная  отрисовка кгугов..САNVas..
  logoAnimation.add({
  targets: '.cls-45',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение рандомной отрисовки кгугов.САNVas...

logoAnimation.add({
  targets: '.cls-45',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});


// // появление текста САNVas
logoAnimation.add({
  targets: '.canvastext',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});

//возвращение  круга Transitions....

logoAnimation.add({
  targets: '#transitions',
  elasticity: 1,
  duration: 500,
  translateX: [-156, 0],
  translateY: [-233, 0],
  easing: 'easeInCubic',
});


// рандомная  отрисовка круга Transitions....
  logoAnimation.add({
  targets: '.transitionscircle',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга Transitions....
logoAnimation.add({
  targets: '.transitionscircle',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});

// отрисовка линии Transitions

logoAnimation.add({
  targets: '.cls-41',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  });

// возвращение отрисовка  PhysicsEngine....
logoAnimation.add({
  targets: '#physics',
  elasticity: 1,
  duration: 500,
  translateX: [41, 0],
  translateY: [-744, 0],
  easing: 'easeInCubic',
});

// рандомная  отрисовка круга PhysicsEngine....
  logoAnimation.add({
  targets: '.cls-25',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга PhysicsEngine....
logoAnimation.add({
  targets: '.cls-25',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});


// отрисовка линии Transitions

logoAnimation.add({
  targets: '.cls-24',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  });



// рандомная  отрисовка кгугов..PhysicsEngine..
  logoAnimation.add({
  targets: '.cls-26',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение рандомной отрисовки PhysicsEngine...
logoAnimation.add({
  targets: '.cls-26',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});

// // появление текста САNVas
logoAnimation.add({
  targets: '.PhysicsEtext',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});


// возвращение блока ScrollParallax....


logoAnimation.add({
  targets: '#scroll',
  elasticity: 1,
  duration: 500,
  translateX: [-76, 0],
  translateY: [-95, 0],
  easing: 'easeInCubic',
});



// рандомная  отрисовка круга ScrollParallax....
  logoAnimation.add({
  targets: '.cls-35',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },

  });
// возвращение отрисовка круга ScrollParallax....
logoAnimation.add({
  targets: '.cls-35',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});



// // отрисовка линии ScrollParallax

logoAnimation.add({
  targets: '.cls-34',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  });

// // рандомная  отрисовка кгугов..ScrollParallax..
  logoAnimation.add({
  targets: '.cls-36',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение рандомной отрисовки ScrollParallax...
logoAnimation.add({
  targets: '.cls-36',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});
// // появление текста ScrollParallax
logoAnimation.add({
  targets: '.textsckrolr',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});



// возвращение блока AnimationPlatforms....
logoAnimation.add({
  targets: '#platforms',
  elasticity: 1,
  duration: 500,
  translateX: [-72, 0],
  translateY: [-117, 0],
  easing: 'easeInCubic',
});

// рандомная  отрисовка круга AnimationPlatforms....
  logoAnimation.add({
  targets: '.cls-18',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга AnimationPlatforms....
logoAnimation.add({
  targets: '.cls-18',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});
// // отрисовка линии AnimationPlatforms

logoAnimation.add({
  targets: '.animationline',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  });

// // рандомная  отрисовка кгугов..AnimationPlatforms..
  logoAnimation.add({
  targets: '.animcircle',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение рандомной отрисовки AnimationPlatforms...
logoAnimation.add({
  targets: '.animcircle',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});
// // появление текста AnimationPlatforms
logoAnimation.add({
  targets: '.animtext',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});


//  возвращение блока Sprite....
logoAnimation.add({
  targets: '#spriteb',
  elasticity: 1,
  duration: 500,
  translateX: [-85, 0],
  translateY: [-643, 0],
  easing: 'easeInCubic',
});


// рандомная  отрисовка круга Sprite....
  logoAnimation.add({
  targets: '.circlesprite',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга Sprite....
logoAnimation.add({
  targets: '.circlesprite',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});

// // отрисовка линии Sprite
logoAnimation.add({
  targets: '.linesprite',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  });

// // рандомная  отрисовка кгугов..Sprite..
  logoAnimation.add({
  targets: '.cirsprite',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });



// возвращение рандомной отрисовки Sprite...
logoAnimation.add({
  targets: '.cirsprite',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});
// // появление текста Sprite
logoAnimation.add({
  targets: '.textsprite',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});




// возвращение блока 3d....
logoAnimation.add({
  targets: '#d-3',
  elasticity: 1,
  duration: 500,
  translateX: [-72, 0],
  translateY: [-117, 0],
  easing: 'easeInCubic',
});




// рандомная  отрисовка круга 3d....
  logoAnimation.add({
  targets: '.cls-14',
  opacity: [0, 0],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение отрисовка круга 3d....
logoAnimation.add({
  targets: '.cls-14',
  opacity: [0, 1],
  duration: 800,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
});

// // отрисовка линии 3d
logoAnimation.add({
  targets: '.line3d',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 800,
  direction: 'alternate',
  });

// // рандомная  отрисовка кгугов..3d..
  logoAnimation.add({
  targets: '.circle3d',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение рандомной отрисовки 3d...
logoAnimation.add({
  targets: '.circle3d',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});

// // появление текста 3d
logoAnimation.add({
  targets: '.d3text',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});


// возвращение блока Mobile....
logoAnimation.add({
  targets: '#Mobile',
  elasticity: 1,
  duration: 500,
  translateX: [-187, 0],
  translateY: [-181, 0],
  easing: 'easeInCubic',
});

// // рандомная  отрисовка кгугов..AnimationPlatforms..
  logoAnimation.add({
  targets: '.mobcircle',
  opacity: [0, 1],
  duration: 1,
  translateX: function(e) {
      return anime.random(-300, 300);
    },
  translateY:  function(e) {
      return anime.random(-300, 300);
    },
  });
// возвращение рандомной отрисовки AnimationPlatforms...
logoAnimation.add({
  targets: '.mobcircle',
  opacity: [0, 1],
  duration: 900,
  translateX: function(e) {
      return anime.random(0, 0);
    },
  translateY: function(e) {
      return anime.random(0, 0);
    },
  delay: anime.stagger(50),
});


// // появление текста 3d
logoAnimation.add({
  targets: '.mobtext',
  opacity: [0, 1],
  duration: 500,
  delay: anime.stagger(100),
});





// анимация рисования круга
// logoAnimation.add({
//   targets: '.cls-62',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 500,

//   direction: 'alternate',
//   loop: true
//   });









