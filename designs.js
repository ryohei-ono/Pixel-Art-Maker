/** Select color input */
let colorPicker = '#000';
$('#colorPicker').change(function(){
    colorPicker = $('#colorPicker').val();
});

/** Apply the selected color to the grid cell when clicked */
$('#pixelCanvas').on('click','td',function(){
    $(this).css('background-color',colorPicker);
});

/** When size is submitted by the user, call makeGrid() */
$('#sizePicker').submit(function(event){
    event.preventDefault();
    let inputHeight = $('#inputHeight').val();
    let inputWeight = $('#inputWeight').val();
    makeGrid(inputHeight,inputWeight);
});

/**
* Create the grid based on user input
* @param {number} h - height or the number of rows
* @param {number} w - width or the number of columns
*/
function makeGrid(h,w) {
    $('#pixelCanvas').children('tr').remove();
    for (let i = 1; i <= h; i++) {
        $('#pixelCanvas').append(`<tr class="row-${i}"></tr>`);
        for (let j = 1; j <= w; j++) {
            $('#pixelCanvas').children(`.row-${i}`).append('<td></td>');
        }
    }
}