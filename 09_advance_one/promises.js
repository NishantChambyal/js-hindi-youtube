// fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve ,  reject){
    //Do and Async tasks
    // DB calls , Cryptography , network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "Chai" , email: "Chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false 
        if (!error) {
            resolve({userName: 'Nishant', password: '123'})
        }    
        else{
            reject('Error Somethimng Went Wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.userName
    
}).then((Myusername)=>{
    console.log(Myusername);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=> (console.log('The Promise Is Either Resolved Or Rejected')))





const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({userName: 'javaScript', password: '123'})
        } else{
            reject('Error: js Went Wrong')
        }
    })
})

async function consumedPromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumedPromiseFive()

    
