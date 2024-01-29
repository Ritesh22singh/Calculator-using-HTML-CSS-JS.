const btn = document.querySelectorAll("button");        // here we are accessing all button 
const msg = document.querySelector(".msg");             // Here we are accessing msg section
const para = document.querySelector("p");            // Here we are accessing paragrapg section to change the content

let string = ""; // Initialize the string variable

/* 
  Here we are change array into string so we add many exprestion then later 
  with the help of forEach loop we add event listner in every button where while u click 

*/
Array.from(btn).forEach(button => {                  
    button.addEventListener("click", () => {
      //  console.log("Button was clicked");
       string += button.textContent;   // Here  we are storing value of button in string valraible
       msg.textContent = string;       // Here we are add string value into msg section
      //  console.log(button.textContent);
      if (button.textContent === 'AC' || button.textContent === 'C'){
        clearDisplay();
        string = "";

        // Here we are checking button value is either 'AC' or 'C' -- so we can call clearDisplay() and change the value of the to empty 

      }

      else{
        calculate();

        // If not then call calculate() to calculater the value
      }

        
    });
});


const clearDisplay = () => {
    msg.textContent = "";

    //This function is for clear the msg section
}

const calculate = () => {
    // string = eval(string);
    // msg.textContent = string;

    string = eval(string);  // the is javascript inbuild fuction which will evaluate
    msg.textContent = string;

    // This function is for calculate the value
}
