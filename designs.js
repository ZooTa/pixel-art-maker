//getting submit input and table to use them later
const submitBtn = document.getElementById("submitt"),

      table = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
submitBtn.addEventListener("click", makeGrid);//this is to call the function makeGrid when we clicked in
// this function is to make the grid with the height and width that the user Choosed
function makeGrid() {
// these variable is to get the values of height and width
var height = document.getElementById("inputHeight").value,
    width = document.getElementById("inputWidth").value;

table.innerHTML = ""; //this is to remove any thing in the table (tr or td)befor we doing our loop
//this loop is to make our grid
for (var i = 0; i < height; i++) {
  var newTr = document.createElement('tr');//to make a new Element
  table.appendChild(newTr);//this is to be in the HTML code
  for (var x = 0; x < width; x++) {
    var newTd = document.createElement('td');//to make a new Element
    newTr.appendChild(newTd);//this is to be in the HTML code
    newTd.onclick = colorCells;// this is to call the function colorCells
  }
}
event.preventDefault();//this is to make it in the defualt sitting of computer
}

//this function is to color the cells and it called when click any cell
function colorCells(){
  var color = document.getElementById("colorPicker").value; // get the value of color
  event.target.style.background = color //this color the cell that we clicked on
}
