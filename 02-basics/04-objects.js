// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nasim"

// console.log(tinderUser);


const regularUser = {
    email: "som@gmail.com",
    fullname: {
        userfullname:{
             firstname: "NASIM",
             lastname: "AHMAD"
        }
    }
}
// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)


const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
      id: 1, 
      email: "nasim@gmail.com"
    },
    {
      id: 1, 
      email: "nasim@gmail.com"
    },
    {
      id: 1, 
      email: "nasim@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));




const course = {
    coursename: "js in hindi",
    price: "666",
    courseInstructor: "Nasim"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

{
  "name": "Nasim",
}