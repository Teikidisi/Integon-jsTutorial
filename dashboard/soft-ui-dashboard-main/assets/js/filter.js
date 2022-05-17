




$(() => {
    $('#Manager').on('click', function(e){
        $('tr').show(1).children(':nth-child(2)').not(':contains(Manager)').parent().fadeOut(1250);
        $('.filter').css('backgroundColor','white').css('color','#cb0c9f');
        $(this).css('backgroundColor','#cb0c9f').css('color','white');
        
    })
    $('#Programator').on('click',function(e){
        $('tr').show(1).children(':nth-child(2)').not(':contains(Programator)').parent().fadeOut(1250);
        $('.filter').css('backgroundColor','white').css('color','#cb0c9f');
        $(this).css('backgroundColor','#cb0c9f').css('color','white');
    })
    $('#CEO').on('click', function(e){
        $('tr').show(1).children(':nth-child(2)').not(':contains(CEO)').parent().hide(1250); //igual que fade out
        $('.filter').css('backgroundColor','white').css('color','#cb0c9f');
        $(this).css('backgroundColor','#cb0c9f').css('color','white');
    })
    $('#All').on('click',function(e){
        $('tr').show(1250)
        $('.filter').css('backgroundColor','white').css('color','#cb0c9f');
        $(this).css('backgroundColor','#cb0c9f').css('color','white');
    })
});
