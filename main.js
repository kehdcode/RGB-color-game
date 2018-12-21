let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 225, 0)",
    "rgb(255, 225, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(255 225, 255)"
]
//Selecting each square to have a different color
let square = document.querySelectorAll(".shape");

//Loop through square and assign color

 for(let i = 0; i < square.length; i++){
     square[i].style.backgroundColor = colors[i];
      }
