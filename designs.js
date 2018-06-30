
// Select size input
let length= $("#inputHeight");
let breadth = $("#inputWeight");
// Select color input
let color = $("#colorPicker");

$("#sizePicker").submit(function(event){
    let len = length.val();
    let bre = breadth.val();
   $("tr").remove();

    makeGrid(len, bre);
    event.preventDefault();
});
// color value as input changes
color.change(function(event) {
    let col = color.val();
    $("td").click(function(event){
        $(this).css("background-color", col);
        
    });

    event.preventDefault();
});




function makeGrid(height, width) {
    for (let x = 1; x<= height; x++) {
        const big = $("#pixelCanvas");
        big.append("<tr></tr>");
        for(let i =1; i<= width; i++){
            $("tr:last").append("<td></td>");


        }
        
    }

   

};

