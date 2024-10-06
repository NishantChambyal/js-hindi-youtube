# Projects related to DOM

## Project link

[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Project 1

```javaScript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{
 console.log(button)
 button.addEventListener('click' , function(e){
   console.log(e)
   console.log(e.target)
   if(e.target.id === 'grey'){
     body.style.backgroundColor = e.target.id;
     // body.style.backgroundColor = "grey";
   }
   if(e.target.id === 'white'){
     body.style.backgroundColor = e.target.id;
     // body.style.backgroundColor = "white";
   }
   if(e.target.id === 'blue'){
     body.style.backgroundColor = e.target.id;
     // body.style.backgroundColor = "blue";
   }
   if(e.target.id === 'yellow'){
     body.style.backgroundColor = e.target.id;
     // body.style.backgroundColor = "yellow";
   }
   if(e.target.id === 'purple'){
     body.style.backgroundColor = e.target.id;
     // body.style.backgroundColor = "purple";
   }
 })
})



// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach((button) => {
//     console.log(button);
//     button.addEventListener('click', function(e) {
//         console.log(e);
//         console.log(e.target);

//         switch (e.target.id) {
//             case 'grey':
//             case 'white':
//             case 'blue':
//             case 'yellow':
//                 body.style.backgroundColor = e.target.id;
//                 break;
//             default:
//                 console.log('Unknown color');
//         }
//     });
// });


// example of switch


```

## Project 2

```javaScript

const form = document.querySelector('form')

form.addEventListener("submit" , function(e){
 e.preventDefault()
const height =  parseInt(document.querySelector('#height').value)
const weight =  parseInt(document.querySelector('#weight').value)
const result = document.querySelector('#results')

if(height === "" || height < 0 || isNaN(height)){
 result.innerHTML = `Please enter a valid height :- ${height}`
}
else if (weight === "" || weight < 0 || isNaN(weight)){
 result.innerHTML = `Please enter a valid weight :- ${weight}`
}
else {
 const bmi =  (weight / ((height*height)/10000).toFixed(2))
 //Show the result
 result.innerHTML = `<span>${bmi.toPrecision(3)}</span>`

 const final =  document.querySelector('#final')

 if(bmi < 18.6){
   final.innerHTML = `You are Under Weight`
 }
 else if(bmi > 18.6 && bmi < 24.9 ){

   final.innerHTML = `Your Weight is Balanced`
 }
 else if(bmi > 24.9){

   final.innerHTML = `You are overweight`
 }
 else{

 }


}

})


const form = document.querySelector("form")

form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")
  const final = document.querySelector('.final')
  
  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`
  }
  else if(weight === '' || weight < 0 || isNaN(weight)){
    
    results.innerHTML = `please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toPrecision(3);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`
    
    if(bmi < 18.6){
      final.innerHTML = `you are under weight ${bmi}`
      final.style.color = "yellow"
    }
    else if(bmi > 18.6 && bmi < 24.9){
      final.innerHTML = `you have healthy weight ${bmi}`
      final.style.color = "green"
    }
    else if(bmi > 24.9){
      final.innerHTML = `you have to loose weight ${bmi}`
      final.style.color = "red"
    }
    else{

    }
  }
})



```


## Project 3

```javaScript

const clock = document.getElementById("clock")



setInterval(function(){
  let date =  new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
} , 1000)


```

## project 4 

```javaScript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


// another example

let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

const submitButton = document.querySelector('#subt');
const userInputField = document.querySelector('#guessField');
const guessDisplay = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const hintDisplay = document.querySelector('.lowOrHi');
const resultContainer = document.querySelector('.resultParas');

const newGameParagraph = document.createElement('p');

let previousGuesses = [];
let guessCount = 1;
let isGameActive = true;

// Start game if isGameActive is true
if (isGameActive) {
  submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    const userGuess = parseInt(userInputField.value);
    validateUserGuess(userGuess);
  });
}

function validateUserGuess(userGuess) {
  if (isNaN(userGuess)) {
    alert('Please enter a valid number');
  } else if (userGuess < 1) {
    alert('Please enter a number greater than 0');
  } else if (userGuess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    previousGuesses.push(userGuess);
    if (guessCount === 11) {
      displayGuess(userGuess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(userGuess);
      checkUserGuess(userGuess);
    }
  }
}

function checkUserGuess(userGuess) {
  if (userGuess === randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (userGuess < randomNumber) {
    displayMessage(`Your guess is too low.`);
  } else if (userGuess > randomNumber) {
    displayMessage(`Your guess is too high.`);
  }
}

function displayGuess(userGuess) {
  userInputField.value = ''; // Clear input field
  guessDisplay.innerHTML += `${userGuess}, `; // Display guesses
  guessCount++;
  remainingGuesses.innerHTML = `${11 - guessCount}`; // Update remaining guesses
}

function displayMessage(message) {
  hintDisplay.innerHTML = `<h2>${message}</h2>`; // Show hint messages
}

function endGame() {
  userInputField.value = '';
  userInputField.setAttribute('disabled', ''); // Disable input field
  newGameParagraph.classList.add('button');
  newGameParagraph.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  resultContainer.appendChild(newGameParagraph);
  isGameActive = false;
  startNewGame();
}

function startNewGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    previousGuesses = []; // Reset guesses
    guessCount = 1; // Reset guess count
    guessDisplay.innerHTML = ''; // Clear displayed guesses
    remainingGuesses.innerHTML = `${11 - guessCount}`; // Reset remaining guesses
    userInputField.removeAttribute('disabled'); // Enable input field
    resultContainer.removeChild(newGameParagraph); // Remove the new game message
    isGameActive = true; // Set game state to active
  });
}







```



## Project 5


```javaScript
// genrate the random color

const RandomColor = function() {
  const hex = "0123456789ABCDEF";
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

const startChangingColor = function() {
  if (!intervalID) {
    intervalID = setInterval(changeBGColor, 1000);
  }
};

const changeBGColor = function() {
  document.body.style.background = RandomColor();
};

const stopChangingColor = function() {
  clearInterval(intervalID);
  intervalID = null;
};


document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);





//one more project keyboard event

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

```
