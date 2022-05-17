$(() => {
  
const triggers = {
  D: 'default',
  N: 'narrow',
  L: 'large'
};

$(document)
.keyup((e) => {
  const key = String.fromCharCode(e.which);
  if (key in triggers) {
    $(`#switcher-${triggers[key]}`).click();
  }
});
 
$('#switcher-default').addClass('selected');

$('#switcher button')
.click((e) => {
  const bodyClass = e.target.id.split('-')[1];

  $('body')
  .removeClass()
  .addClass(bodyClass);
  $('#switcher button').removeClass();
  $(e.target)
  .addClass('selected');

  e.stopPropagation();
});

$('#switcher-narrow, #switcher-large')
.click(() => {
  $('#switcher').off('click.collapse'); //.collapse es una etiqueta que asignamos para describir la accion.
});



const toggleSwitcher = (e) => {
    if (!$(e.target).is('button')) {
    $(e.currentTarget)
    .children('button')
    .toggleClass('hidden');
    }
  }

$('#switcher')
.on('click.collapse', toggleSwitcher);
      

$('#switcher').on(('click.collapse'), (e) => {
  $(e.currentTarget).children('button').toggleClass('hidden');
})


$('#switcher h3')
.hover(function() {
$(this).addClass('hover');
}, function() {
$(this).removeClass('hover');
});


$('#switcher-default')
 .click(() => {
 $('#switcher').on('click.collapse', toggleSwitcher);
 });


$('#switcher').click();
//apply selected to click author
$('.author').on('click',(e) => {
  $(e.currentTarget).toggleClass('selected');
})

//hide entry text on double click
$('.chapter-title').dblclick((e) =>{
  $(e.currentTarget).nextAll().toggleClass('hidden');
})

//cycle body classes when pressing right arrow

$(document)
.keyup((e) => {
  if (e.which == 39){
    if ($('body').hasClass('default')){
      $('body').removeClass().addClass('narrow');
    }
    else if ($('body').hasClass('narrow')){
      $('body').removeClass().addClass('large');
    }
    else if ($('body').hasClass('large')){
      $('body').removeClass().addClass('default');
    }
  }
});

});


