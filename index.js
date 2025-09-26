/*
promise 
async await 
closure
callback 
git commands 
js loops 
exeption handling 
how to handle promise which return promise
fetch method 
function types 
ES6 updates  
*/

//promise has three states pending , fullfilled , resolved 
async function fetchUserData(userId){
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error('Network not woeking');
    }
    return await response.json();

}
function processUserData(user){
    return {
        name:user.name,
        email:user.email,
        city:user.address.city
    }
}

fetchUserData(1)
.then(user=>{
   const  processedData = processUserData(user)
   console.log(processedData)
}).catch(error=>{
    console.log(error)
}
)

// multiple promises 
const getUsers = new Promise((resolve)=>setTimeout(()=>resolve("User Data") , 2000));
const setUsers = new Promise((_,reject)=>setTimeout(()=>reject("set user"),3000 ));
const dropUsers = new Promise((resolve)=>setTimeout(()=>resolve("Drop users"),4000 ));

Promise.all([getUsers , setUsers ,dropUsers]).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})
//Bestpeers!@#321