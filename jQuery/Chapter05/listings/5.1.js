$(() => {
  $('div.chapter a[href*="wikipedia"]')
    .attr({ 
    rel: 'external',  
    title: function(){ `Learn more about ${$(this).text()} Wikipedia.` },
    id: index => `wikilink-${index}`
  });

  $('#hide-read')
  .change((e) => {
  if ($(e.target).is(':checked')) {
  $('.chapter p')
  .filter((i, p) => $(p).data('read'))
  .hide();
  } else {
  $('.chapter p').show();
  }
  });

  $('.chapter p')
  .click((e) => {
  const $elm = $(e.target);
  $elm
  .css(
  'textDecoration',
  $elm.data('read') ? 'none' : 'line-through'
  )
  .data('read', !$(e.target).data('read'));
  });
 

  // $('<a href="#top">back to top</a>')
  // .insertAfter('div.chapter p');
  // $('<a id="top"></a>') 
  // .prependTo('body');

  // $('span.footnote').insertBefore('#footer')
  // .wrapAll('<ol id="notes"></ol>')
  // .wrap('<li></li>');
  const $notes = $('<ol id="notes"></ol>')
  .insertBefore('#footer');

  $('span.footnote')
  .each((i, span) => {
  $(`<sup>${i + 1}</sup>`)
  .insertBefore(span);
  $(span)
  .appendTo($notes)
  .wrap('<li></li>');
  });
 
  //back to top despues del 4to parafo
  $('<a id="top"></a>') 
  .prependTo('body');
  $('div.chapter p').each((i, element) => {
    if (i > 2){
      $('<a href="#top">back to top</a>').insertAfter(element);
    }
  })

  //despues de click a back to top añadir you were here
  $('a:contains(back to top)').click(function(){
    $('<p style="font-weight: bold;">You were here</p>').insertAfter(this)
  })

  //hacer negritas el nombre del autor por medio de añadir elementos
  $('#f-author').click(function(){
    $('<div style="font-weight: bold">by Edwin A. Abbott</p>').insertBefore(this);
    $(this).hide();
  })


});
