const { read } = require('fs');

// Realizando entrada de comandos dentro do console
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question(`Whats your name`, name=>{
    console.log(`Hi ${name}`);
    
    readline.close();
});
