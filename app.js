// 2) протипизировать функции:
var userCar = { name: 'Max', age: 18, gender: 'male', car: { model: 'Toyota', year: 2018 }, arr: [1, 2, 3] };
console.log(userCar);
var carUser = { model: 'Mazda', year: 2008, user: { id: 1, name: 'Diana', age: 24, gender: 'female', arr: ['cat', 'dog'] } }; // Partial - частичное использование
console.log(carUser);
function sum(a, b) {
    return a + b;
}
var ISum = sum(5, 2);
console.log(ISum);
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)
