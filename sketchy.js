$(document).ready(function() {
    createGrid();
    $("#canvas").on("mouseenter", "div div", colorSquare);
    $("#left-button").on("click", clearCanvas);
});

function createGrid(dimX, dimY) {
    if(dimX == null) {
        dimX = 66;
    }
    if(dimY == null) {
        dimY = 33;
    }

    for(let y = 0; y < dimY; y++) {
        let row = $('<div class="grid-row"></div>');

        for(let x = 0; x < dimX; x++) {
            row.append('<div class="grid-square"></div>');
        }
        $("#canvas").append(row);
    }
}

function colorSquare() {
    $(this).addClass("colored");
}

function clearCanvas() {
    $("#canvas").empty();

    // a prompt to ask for new grid size

    createGrid();  // will get values from prompt
}