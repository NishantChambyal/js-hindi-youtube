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
