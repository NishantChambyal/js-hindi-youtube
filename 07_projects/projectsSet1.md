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