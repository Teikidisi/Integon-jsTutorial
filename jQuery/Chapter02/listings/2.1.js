$(() => {
  $('#selected-plays > li')
    .addClass('horizontal');
  $('#selected-plays li:not(.horizontal)')
  .addClass('sub-level');
  $('#selected-plays li:not(.sub-level)')
 .addClass('big-letter');


  $('#selected-plays > li').addClass('horizontal');

  // $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  $('a[href^="mailto:"]').addClass('mailto');

  // $('tr:even').addClass('alt'); //: selector (even) todos los pares
  $('tr:nth-child(odd)').addClass('alt');

  $('a').filter((i, a) =>
 a.hostname && a.hostname !== location.hostname
 )
 .addClass('external');

 $('td:contains(Henry)')
 .next()
 .addClass('highlight');

//  $('td:contains(Henry)') // Find every cell containing "Henry"
//  .parent() // Select its parent
//  .find('td:eq(1)') // Find the 2nd descendant cell
//  .addClass('highlight') // Add the "highlight" class
//  .end() // Return to the parent of the cell containing "Henry"
//  .find('td:eq(2)') // Find the 3rd descendant cell
//  .addClass('highlight'); // Add the "highlight" class

 const eachText = [];
 $('td')
  .each((i, cell) => {
  if (cell.textContent.startsWith('H')) {
  eachText.push(`${i}, ${cell.textContent}`);
  }
  });
 console.log('each', eachText);
//añadir special  a segunod nivel de lista
$('li.horizontal li:not(.horizontal)').addClass('special'); //

//añadir year a terce elemento de tabla
$('tr').children(':nth-child(3)').addClass('year'); //

//añadir special a primer fila con palabra tragedy
$('td:contains(Tragedy)').parent().first().addClass('special'); //

//select all list items containing a link. add Afterlink to items that follow
$('li').children('a').parent().nextAll().addClass('afterlink') //

//add class tragedy to closest ancestor <ul> of any pdf link.
$('a[href$=".pdf"]').closest('ul').addClass('Tragedy');

});
