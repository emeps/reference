// const doSomethingAssync = ()=>{
//     return new Promise(resolve =>{
//         setTimeout(()=> resolve ('Eu estou tentando'),3000)
//     })
// }

// const doSomethingAssync2 = async()=>{
//     console.log(await doSomethingAssync());
// }
// console.log('Before');
// console.time('doSomethingAssync2()');
// doSomethingAssync2()
// console.timeEnd('doSomethingAssync2()');
// console.log('After');


// Async
/* const aFunctio = async () => {
    return 'test'
}
aFunctio().then(alert);
// Promisse
const aFunction = async () => {
    return Promise.resolve('test')
}
aFunction().then(alert) // This will alert 'test'


// Fetch
const getFirstUserData = () => {
    return fetch('/users.json') // get users list
        .then(response => response.json()) // parse JSON
        .then(users => users[0]) // pick first user
        .then(user => fetch(`/users/${user.name}`)) // get user data
        .then(userResponse => userResponse.json()) // parse JSON
}
getFirstUserData()

// Assync
const getFirstUserData = async () => {
    const response = await fetch('/users.json') // get users list
    const users = await response.json() // parse JSON
    const user = users[0] // pick first user
    const userResponse = await fetch(`/users/${user.name}`) // get user data
    const userData = await userResponse.json() // parse JSON
    return userData
}

getFirstUserData() */


// Encadeamento Async
const promisseToDo = ()=>{
    return new Promise(resolve =>{
        setTimeout(()=> resolve('I did'),10000);
    })
}
const watchOverSomething = async ()=>{
    const something = await promisseToDo()
    return something + '\nand I watched'
}
const watchOverSomething2 = async ()=>{
    const something = await watchOverSomething()
    return something + '\nand I watched as well'
}
watchOverSomething2().then(res =>{
    console.log(res);
})
