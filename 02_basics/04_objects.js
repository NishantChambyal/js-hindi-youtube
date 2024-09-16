// const tinderUser = new Object()


const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {

    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nishant",
            lastname: "chambyal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = { 3: "a" , 4: "b" }
const obj4 = { 5: "a" , 6: "b" }

// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {obj1 , obj2 , obj4}

const obj3 = {...obj1, ...obj2 , ...obj4}

// console.log(obj3);


const user = [
    {  
    },
    {  
    },
    {  
    },
    {  
    },
    {  
    }
]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));   // coverts object in array
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "histesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
// const {courseInstructor} = course
console.log(instructor);



// {
//     "name": "nishant",
//     "coursename": "js in hindi",  // jason file
//     "price", "free" 
// }

[
    {},
    {},
    {},                           //api can be in array
    {}
]