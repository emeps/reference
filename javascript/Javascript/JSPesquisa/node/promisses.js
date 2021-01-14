// Promisses
/* let done = false;
const isItDoneYet = new Promise((res,rej)=>{
    if (done){
        const workDone = 'Here is the thing I built';
        res(workDone);
    }else{
        const why = 'Still working on something else';
        rej(why);
    }
});
const Check = ()=>{
    isItDoneYet.then(ok =>{
        console.log('Esta tudo ok por aqui!!')
    }).catch(err =>{
        console.error(err);
    })
    
}
Check(); */

// Fletch
/* const status = response =>{
    if(response.status >= 200 && response.status<300){
        return Promisse.resolve(response);
    }
    return Promisse.reject(new Error(response.statusText))
}
const json = response => response.json();
fetch('/todos.json').then(status).then(json).then(data=>{
    console.log('Request succeeded', data);
}).catch(error=>{
    console.log('Request Failed', error);
}) */

// Sincronização de promessas
/* const f1 = fetch('/something.json');
const f2 = fetch('/something2.json');
Promise.all([f1,f2]).then(res =>{
    console.log('asdmfkjasdf'. res);
}).catch(err =>{
    console.log(err);
}); */

// ES2015
/* Promise.all([f1, f2]).then(([res1, res2]) => {
    console.log('Results', res1, res2)
}) */

// Promisses.race
const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first')
  })
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 499, 'second')
  })
  
  Promise.race([first, second]).then(result => {
    console.log(result) // second
  })
