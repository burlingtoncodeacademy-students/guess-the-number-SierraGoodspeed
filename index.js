const readline = require("readline");
const { isAsyncFunction } = require("util/types");
const rl = readline.createInterface(process.stdin, process.stdout);
// Ask function that takes in text and returns and resolves a promise
function ask(questionText) {
    return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
});
}

start ()

async function start () {

console.log("\n-------------------------");
console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.");
console.log("-------------------------");

    let minNum = 1;
    let quarterNum = 25
    let midNum = 50
    let thirdNum = 75
    let maxNum = 100;
    let maxMaxNum = 101

let guessNum = await ask(
    `\nPlease choose a number between ${minNum} and ${maxNum} \n This will be your secret number that I will try to guess (I won't look.) `
);

let secretNumber = parseInt(guessNum);


async function playGame () {
    // Math.ceil(Math.random() * maxNum / 2)
    //Guess 50
    let numMath = Math.floor((midNum))
    //let numMath2 = Math.floor(Math.random() midNum - maxNum + 1 )
    // guess === "y" || guess === "Y" && ...
    // (guess === "y" || guess === "Y" ) && ...

    let compGuess = await ask(`Is your number: ${numMath}? (Y)es or (N)o?`)  
    
  
     
    
    if (compGuess === "N" && numMath !== secretNumber) {
    console.log(`\nOoops guess I'm wrong.:/`); 
    
 } else if (compGuess === "Y" && numMath === secretNumber) {
    console.log(`\n Yaaayyyy! I got it! :3`);
    console.log("The End")
    process.exit()
    };

    let wrongAnswer = await ask (`Is your number (H)igher or (L)ower?`)


    if (wrongAnswer === "H") {
        guess75();
    } if (wrongAnswer === "L") {
        guess25();
    };


//--------------75 section
async function guess75 () {  //guess 75
    let numMath2 = Math.floor((thirdNum))
    
    let compGuess2 = await ask(`Is your number: ${numMath2}? (Y)es or (N)o?`)  
    
    if (compGuess2 === "N" && numMath2 !== secretNumber) {
        console.log(`\nOoops guess I'm wrong.:/`);
        
  
        } if (compGuess2 === "Y" && numMath2 === secretNumber) {
        console.log(`\n Yaaayyyy! I got it! :3`);
        console.log("The End")
        process.exit()
        
        };
        
        let wrongAnswer2 = await ask (`Is your number (H)igher or (L)ower?`)

        
        if (wrongAnswer2 === "H") {
        higher75();
        } if (wrongAnswer2 === "L") {
            lower75();
        };
    
};
 async function higher75 () {
  
    let numMath75 = Math.floor(Math.random() * (maxNum - thirdNum + 1)) + thirdNum;
    let compGuess2 = await ask(`Is your number: ${numMath75}? (Y)es or (N)o?`)  
    
    if (compGuess2 === "N" && numMath75 !== secretNumber) {
        console.log(`\nOoops guess I'm wrong.:/`);
        higher75()
  
        } if (compGuess2 === "Y" && numMath75 === secretNumber) {
        console.log(`\n Yaaayyyy! I got it! :3`);
        console.log("The End")
        process.exit()
        
        };
       

        
        
 };

 async function lower75 () {
  
    let numMath75 = Math.floor(Math.random() * ( thirdNum - midNum + 1)) + midNum;
    let compGuess2 = await ask(`Is your number: ${numMath75}? (Y)es or (N)o?`)  
    
    if (compGuess2 === "N" && numMath75 !== secretNumber) {
        console.log(`\nOoops guess I'm wrong.:/`);
        lower75()
  
        } else if (compGuess2 === "Y" && numMath75 === secretNumber) {
        console.log(`\n Yaaayyyy! I got it! :3`);
        console.log("The End")
        process.exit()
        
        }else {
            console.log("Lol what?")
            lower75()
        };
        
        
        

 };


 //-----------------25 section
 async function guess25 () { // 25
    let numMath25 = Math.floor((quarterNum))

    let compGuess3 = await ask(`Is your number: ${numMath25}? (Y)es or (N)o?`)  
    
  
    
    if (compGuess3 === "N" && numMath25 !== secretNumber) {
        console.log(`\nOoops guess I'm wrong.:/`);
        
        
        } else if (compGuess3 === "Y" && numMath25 === secretNumber) {
        console.log(`\n Yaaayyyy! I got it! :3`);
        console.log("The End")
        process.exit()
        
        };
        
        let wrongAnswer2 = await ask (`Is your number (H)igher or (L)ower?`)

        if (wrongAnswer2 === "H") {
            higher25();
        } if (wrongAnswer2 === "L") {
            lower25();
        };




 }
async function higher25 () {
    let numMath25 = Math.floor(Math.random() * (midNum - quarterNum + 1)) + quarterNum;

    let compGuess3 = await ask(`Is your number: ${numMath25}? (Y)es or (N)o?`)  
    
  
    
    if (compGuess3 === "N" && numMath25 !== secretNumber) {
        console.log(`\nOoops guess I'm wrong.:/`);
        higher25()
        
        } else if (compGuess3 === "Y" && numMath25 === secretNumber) {
        console.log(`\n Yaaayyyy! I got it! :3`);
        console.log("The End")
        process.exit()
        
        };
        
}
async function lower25 () {
    let numMath25 = Math.floor(Math.random() * (quarterNum - minNum + 1)) + minNum;

    let compGuess3 = await ask(`Is your number: ${numMath25}? (Y)es or (N)o?`)  
    
  
    
    if (compGuess3 === "N" && numMath25 !== secretNumber) {
        console.log(`\nOoops guess I'm wrong.:/`);
        lower25()
        
        } else if (compGuess3 === "Y" && numMath25 === secretNumber) {
        console.log(`\n Yaaayyyy! I got it! :3`);
        console.log("The End")
        process.exit()
        
        };
        
        

}
};


playGame();
};

//process.exit();