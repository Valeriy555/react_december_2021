// 2) протипизировать функции:

// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }

interface IUser<T> { // T означает Type (тип)
    id?:number, // ? значит не обязательное поле
    name: string,
    age: number,
    gender: string,
    car?: ICar<T>,
    arr:T[]

}

interface ICar<T> {
    model:string,
    year:number,
    user?:IUser<T>

}

const user: IUser<number> = {name: 'Max', age: 18, gender: 'male', car:{model:'Toyota', year:2018},arr:[1,2,3]};

console.log(user);

const carUser: ICar<string> ={model:'Mazda',year:2008, user:{id:1,name:'Diana',age:24,gender:'female',arr:['cat','dog']}} // Partial - частичное использование

console.log(carUser);



const sum = (a:number, b:number): number => a + b;




const showSum = (a:number, b:number): void => {
    console.log(a + b);
};


const incAge = (someUser:IUser<number>, inc:number): IUser<number> => {
    someUser.age+=inc
    return someUser
};


console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)