let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 225, 0)",
    "rgb(0, 225, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0 0, 255)"
]
//Selecting each square to have a different color
let square = document.querySelectorAll(".shape");
//Selecting picked color
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
//Display Message
let displayMessage = document.getElementById("message")

//Loop through square and assign color

 for(let i = 0; i < square.length; i++){
     //Add colors to square
     square[i].style.backgroundColor = colors[i];
     //Add a click event to each square
     square[i].addEventListener("click", function(){
        //Grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //Compare clickedColor to PickedColor
        if (clickedColor === pickedColor){
            changeColor(clickedColor);
            countScore();
            displayMessage.textContent = "Bravo!!"
            
        }else{
            this.style.backgroundColor = "#232323" ;
            displayMessage.textContent = "Try Again"
        }
     });
      }
      //Change color if correct
      function changeColor(color){
          //loop through square

          for(let i = 0; i < square
            .length; i++){
              square
              [i].style.backgroundColor = color;
          }

      }
      //Score Function
      let scoreDisplay = document.getElementById("score")
      function countScore(){
          let point =0;
        if (clickedColor = pickedColor){
           point++;

      }else{
          point = point;
      }
      scoreDisplay.textContent = point;

    }
    //Picked RandomColor
    function pickColor(){
        let random =Math.floor(Math.random() * colors.length);
        return colors[random];
    }