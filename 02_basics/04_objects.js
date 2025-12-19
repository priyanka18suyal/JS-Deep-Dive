//objects part 2
// const tinderUser = new Object(); // object constructor syntax

 const tinderUser = {}

//console.log(tinderUser); // empty object

tinderUser.id = "12367"
tinderUser.name = "Priyanka"
tinderUser.isLoggedIn = false
//console.log(tinderUser); // { id: '12367', name: 'Priyanka', isLoggedIn: false }

//nested objects

const regularUser = {
    email:"priyanka@example.com",
    fullname:{
        username:{
            firstename:"Priyanka",
            Lastname:"Suyal"

        }

    }
}

console.log(regularUser);  // entire object
/*
  email: 'priyanka@example.com',
  fullname: { username: { firstename: 'Priyanka', Lastname: 'Suyal' } }
}
*/

console.log(regularUser.fullname.username);
// { username: { firstename: 'Priyanka', Lastname: 'Suyal' } }

console.log(regularUser.fullname.username.firstename); // Priyanka

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1,obj2,obj3} // object inside object so not a good way to merge objects
const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//still we can use spread operator to merge objects becuase it is more readable
const obj5 = {...obj1,...obj2,...obj3}
console.log(obj5);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const  users = [
    {
        id:1,
        email:"hi@gmail.com"
    },
     {
        id:1,
        email:"hi@gmail.com"
    },
]
users[1].email
console.log(tinderUser);
// { id: '12367', name: 'Priyanka', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '12367', 'Priyanka', false ]
console.log(Object.entries(tinderUser));
// [ [ 'id', '12367' ], [ 'name', 'Priyanka' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isloggedIn")); // true
console.log(tinderUser.hasOwnProperty("age")); // false
 //it checks whether the given property is present in the object or not

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
console.log(course.courseInstructor)
 const {courseInstructor} = course;
// console.log(courseInstructor);
