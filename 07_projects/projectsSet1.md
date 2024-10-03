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
let randomNumber = (parseInt(Math.random() * 100 + 1)) 

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField') 
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult') 
const lowOrHigh = document.querySelector('.lowOrHi') 

const startOver = document.querySelector('.resultParas') 

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1
let playGame =  true

if(playGame){
  submit.addEventListener("click" , function(e){
    e.preventDefault()
   const guess =  parseInt(userInput.value)
   console.log(guess)
   validateGuess(guess)
  })
}

function validateGuess(guess){
  if (isNaN(guess)){
    alert(`Please enter a valid Number`)
  }
  else if(guess < 1 ){
    alert(`Please enter Number greater then 0`)
  }
  else if(guess > 100 ){
    alert(`Please enter a Number less than 100`)
  }
  else {
    prevGuess.push(guess)
    if (numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over , Random Number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
  
}

function checkGuess(guess){
  if (guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }
  else if (guess < randomNumber){
    displayMessage(`Number is too low`)
  }
  else if (guess > randomNumber){
    displayMessage(`Number is too High`)
  }
}

function displayGuess(guess){
  userInput.value = ``
  guessSlot.innerHTML += `${guess}  `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame (){
  userInput.value("")
  userInput.setAttribute("disable", "")
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start a New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame();
}
function newGame (){
 const newGameButton =  document.querySelector('#newGame')
 newGameButton.addEventListener('click', function(e){
  randomNumber = (parseInt(Math.random() * 100 + 1)) 
  prevGuess = []
  numGuess = 1
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11 - numGuess}`
  userInput.removeAttribute("disable")
  startOver.removeChild(p)
  playGame =true
 })
}
```
