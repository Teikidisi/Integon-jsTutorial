




$(() => {
    $('#Manager').on('click', () => {
        $('tr').children(':nth-child(2)').not(':contains(Manager)').parent().hide()
    })
    $('#Programator').on('click', () => {
        $('tr').children(':nth-child(2)').not(':contains(Programator)').parent().hide()
    })
    $('#CEO').on('click', () => {
        $('tr').children(':nth-child(2)').not(':contains(CEO)').parent().hide()
    })
    $('#All').on('click', () => {
        $('tr').show()
    })
});
