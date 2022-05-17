$(() => {

//fade page body when it is loaded
$('body').fadeIn(1000)
//2 give each p yellow bg when mouse is hover
$('p').hover(
  (e) => {$(e.target).css('backgroundColor','yellow')}, 
  (e) => {$(e.target).css('backgroundColor','white')}
)
//3 click h2 fade it to 25% opacity and grow left hand margin to 20px. Then when animation complete fade text to 50% opac.
$('h2').on('click', (e) => {
  $(e.target)
  .animate({'margin-left': '20px', opacity: 0.25}, 'slow')
  .queue((next) => {
    $('p').fadeTo('slow',0.50);
  })
})

//4 pressing arrows key moves switcher box 20 pixels to correspondind directions
$(document).keydown((e) => {
  let $position = $('#switcher').offset();
  // $('#switcher').css('position','absolute')
  if (e.which == 37){
    $('#switcher').animate({'margin-left': '-=20px'}, 'slow')
    // $('#switcher').offset({left : $position.left - 20}, 'slow')
  }
  if (e.which == 38){
    $('#switcher').animate({'margin-top': '-=20px'}, 'slow')
    // $('#switcher').offset({left : $position.top + 20}, 'slow')
  }
  if (e.which == 39){
    $('#switcher').animate({'margin-left': '+=20px'}, 'slow')
    // $('#switcher').offset({left : $position.left + 20}, 'slow')
  }
  if (e.which == 40){
    $('#switcher').animate({'margin-top': '+=20px'}, 'slow')
    // $('#switcher').offset({left : $position.top - 20}, 'slow')
  }
})


const $speech = $('div.speech');
const defaultSize = parseFloat($speech.css('fontSize'));

const sizeMap = {
  'switcher-small': n => n / 1.4,
  'switcher-large': n => n * 1.4,
  'switcher-default': () => defaultSize,
  };
 
$('#switcher button')
.click((e) => {
  const num = parseFloat($speech.css('fontSize'));
  $speech.animate( //puedes reemplazar el css con animate y hace un slide a los cambios en tamaño del texto, en vez de aparecer instantaneamente
    {fontSize: `${sizeMap[e.target.id](num)}px`}
  );
});

const $firstPara = $('p')
.eq(1)
.hide();

$('a.more')
.click((e) => {
  e.preventDefault();

  $firstPara
  .animate(
    { 
    height: 'toggle' 
    }, 
    'slow'
  );
  
  $(e.target)
  .text(
    $(e.target).text() === 'read more' ? 'read less' : 'read more'
  );
});

$('div.label')
.click((e) => {
  const $switcher = $(e.target).parent();
  const paraWidth = $('div.speech p').outerWidth();
  const switcherWidth = $switcher.outerWidth();

  // $switcher
  // .css('position','relative')
  // .animate({
  //   borderWidth: '5px',
  //   left: paraWidth - switcherWidth,
  //   height: '+=20px'
  // }, 'slow');
  $switcher
  .css('position', 'relative')
  .fadeTo('fast', 0.5)
  .animate({ left: paraWidth - switcherWidth },{ duration: 'slow', queue: false })
  .fadeTo('slow', 1.0)
  .slideUp('slow')
  .queue((next) => {
     $switcher.css('backgroundColor', '#f00');
     next();
     })
  .slideDown('slow');
});

////p3 y p4 moviendose simultaneamente
// $('p')
// .eq(2)
// .css('border', '1px solid #333')
// .click((e) => {
// $(e.target)
// .slideUp('slow')
// .next()
// .slideDown('slow');
// });

//primero se mueve abajo p4 y en el callback se mueve arriba p3 y desaparece.
$('p')
.eq(2)
.css('border', '1px solid #333')
.click((e) => {
  $(e.target)
  .next()
  .slideDown('slow', () => {
    $(e.target).slideUp('slow');
  });
});

$('p')
.eq(3)
.css('backgroundColor', '#ccc')
.hide();

});
