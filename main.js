let colors = generateRandonColors(6);
//Selecting each square to have a different color
let square = document.querySelectorAll(".shape");
//Selecting picked color
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
//Display Message
let displayMessage = document.getElementById("message");
//Select h1
let h1 = document.querySelector("h1");
//Select the reset button
let resetBtn = document.getElementById("reset");
//Select the buttons
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    this.classList.add("selected");
    hardBtn.classList.remove("selected");
    
});
hardBtn.addEventListener("click", function(){
    this.classList.add("selected");
    easyBtn.classList.remove("selected");
    
})




resetBtn.addEventListener("click", function(){
  
    // //generate new colors
     colors = generateRandonColors(6);
    
    // //Pick new arrays of colors
    pickedColor = pickColor();

    // //Change display color to match picked color
    colorDisplay.textContent = pickedColor;
    //Reflect the color on the square
    for(let i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i];

        h1.style.backgroundColor = "#232323";
    }
    //colorr();

});
//Function to display color
// function colorr(){
//     for(let i = 0; i < square.length; i++){
//         square[i].style.backgroundColor = colors[i];
//     }
// }

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
            h1.style.backgroundColor = pickedColor;
            //countScore();
            displayMessage.textContent = "Bravo!!"
            resetBtn.textContent = "Play Again?"
            
        }else{
            this.style.backgroundColor = "#232323" ;
            displayMessage.textContent = "Try Again"
        }
     });
      }

      //Change color if correct
      function changeColor(color){
          //loop through square

          for(let i = 0; i < square.length; i++){
              square
              [i].style.backgroundColor = color;
          }
        //colorr();
      }

      //Score Function
    //   let scoreDisplay = document.getElementById("score");
    //   function countScore(){
    //       let point =0;
    //     if (clickedColor = pickedColor){
    //        point++;

    //   }else{
    //       point = point;
    //   }
    //   scoreDisplay.textContent = point;

    // }

    //Picked RandomColor
    function pickColor(){
        let random =Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    //To Generate Randoma array of colors
    function generateRandonColors(num){
        //make an empty array
        let arr = []
        //repeat num times
        for(let i = 0; i < num; i++){
            //get random color and push into arr
           arr.push(randomColor());
        }
        //return that array 
        return arr;
    }
    
    //Generating Random Color
    function randomColor(){
        //Pick Red from 255
       let r = Math.floor(Math.random() * 256);
        //Pick Green from 255
        let g = Math.floor(Math.random() * 256);
        //Pick Blue from 255
        let b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g +", " + b + ")";
    }