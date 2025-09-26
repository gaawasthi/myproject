// ?Topic 1 equality comparisons or sameness
// console.log({} == {})false because object is compared by refrence not valuse
// both are diffenent object in memory 
// javascript only checks if they point to the same place in memory 
// const obj = {}
// const obj1 = obj;
// console.log(obj === obj1)// return true 
// here , obj is an object in memory 
// then you assign obj1 = obj
// that means both obj and ob2 point to the same memory refresnce 
// they are literaly same 



// ?Topic 2 sort splice splicing


// const arr = [5,4,3,2,1];
// const a = arr.sort()
// console.log(a === arr)

// const arr = [5,4,3,2,1];
// TODO const a = arr.slice(0, 3)
// console.log(a)

// !const months = ["Jan", "March", "April", "June"];
// const a = months.splice(1, 2, "Feb");

// console.log(months, a)

// sort method modifies the existing array not return new array 
// slice return new array  it is used to clone array or extract parts without changing the original

// splice takes three arguments 
// it changes the original array and also return the deleted elements 
//? topic 3 
//  TODO:scope and hoisting(var , let , const)
// {
// var a = 10; 
// let b = 10;
// const c = 10;
// }

// console.log(a)
// console.log(b)
// console.log(c)

// var a = 10

// function fn(){
//    var a
//     console.log(a) // 20, 10 global, undefined
//     var a = 20
//     return () => {
//      lat a -> tdz
//         console.log(a) // 20, clouser
//         let a = 30
//     }
    
// }

// console.log(a)

// fn()()

// console.log(a)

//TODO  pass by value, pass by ref
// var x = 10
// var obj = {value: 5}

// function fn(x){
//     x = 20
// }

// function fn1(x){
//     x.value = 20
// }

// fn(x) // pass by value -> no update
// fn1(obj) // pass by ref => update

// console.log(x, obj)

// const obj = {value: 5}
// const obj1 = obj
// obj1.value = 20

// console.log(obj)
// const a = 5
// const b = Number(5)

// console.log(a === b, a == b);