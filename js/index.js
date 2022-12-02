/*
Jeff  11/30/2022
index.js 
clamp() text width/size tool:  https://codesandbox.io/s/clamp-linear-intepolation-based-on-viewport-width-builder-xgkft?from-embed
*/

"use strict"

let array = [89,2,3,4,56,7,8,9,0,2,4,3456,57,765,756,754]

for (let num = 0; num < array.length; num++) {
    const element = array[num] + 2;
    console.log(element)
}


/*_______________________________*/

// const numbers = [15.5, 2.3, 1.1, 4.7];
// let theTotal = numbers.reduce(getSum, 0);
// console.log(theTotal)

// function getSum(total, num) {
//   return total + Math.round(num);
// }

/*_______________________________*/

// let cars = ["Mazda", "Toyota", "Honda", "Ford", "Chevy"]

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     console.log(car)
// }


/*_______________________________*/

let word = "Pneumonoultramicroscopicsilicovolcanoconiosis";

const wordCount = {};

for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!wordCount[letter]) {  // if there is not already a property set for word count of letter
        wordCount[letter] = 1;
    } else {
        wordCount[letter]++
    }

}    
console.log(wordCount);


/*_________Set() and Has() methods  : https://www.youtube.com/watch?v=hLgUTM3FOII&ab_channel=JavaScriptMastery  _____________*/


/* Set is different from an array and is not meant to replace array entirely but to provide additional support 
 to complete what array is missing. Since set only contains distinct elements it makes life much easier if we 
 know in advance we want to avoid saving duplicate data to our structure it can easily remove duplicates.  */


let cars = ["Mazda", "Toyota", "Honda", "Ford", "Chevy", "Toyota", "Honda", "Ford", "Isuzu", "Chevy"]
let newCars = [];

    const mySet = new Set(cars)
    newCars.push(mySet);


    console.log(cars)
    console.log(mySet)
    console.log(mySet.add("Volvo"))
    // console.log(mySet.delete("Honda"))
    console.log(mySet.clear)
    console.log(mySet.size)
    console.log(mySet.has("Mazda"))  // boolean true or false
    console.log(mySet)



    let submitButton = document.querySelector('.submitButton');
    let keepButton = document.querySelector('.keepButton-container');

    let gameCard = document.querySelector('.gameCard') 
    let userNumber = document.querySelector('.userNumber');

    keepButton.classList.remove('active');
    gameCard.classList.remove('active');
    userNumber.value = "";

submitButton.addEventListener("click", ()=> {

    keepButton.classList.add('active');
    gameCard.classList.add('active');
    
    const pokeAPIBaseURL = 'https://pokeapi.co/api/v2/pokemon/';
    const endURL = userNumber.value;
    const totalURL = pokeAPIBaseURL + endURL;
    
fetch(totalURL)
    .then((resp) => resp.json())
    .then(function (data) {
        
        let name = data.name;
        let upperCaseName = name.toUpperCase();
        let spriteImg = data.sprites.other.dream_world.front_default;
        let type = data.types[0].type.name;

        gameCard.innerHTML = `
        <div class="name">${upperCaseName}</div>
        <div class="type">type: ${type}</div>
        `

        let img = document.createElement("img");
        let itemUrl = spriteImg;
        img.src = itemUrl;
        gameCard.appendChild(img)
    })
    .catch(function (error) {
        console.log(error);
    });
})  /*  END SEARCH BUTTON EVENT LISTENER  */




keepButton.addEventListener("click", ()=> {
    let keep = document.querySelector('.keepStuff-container')
    keep.classList.add('active');

const pokeAPIBaseURL = 'https://pokeapi.co/api/v2/pokemon/';
const endURL = userNumber.value;
const totalURL = pokeAPIBaseURL + endURL;


fetch(totalURL)
    .then((resp) => resp.json())
    .then(function (data) {
        
        let name = data.name;
        let upperCaseName = name.toUpperCase();
        let spriteImgKeep = data.sprites.other.dream_world.front_default;
        let type = data.types[0].type.name;

        
// keep.innerHTML= `
// <div class="name-keep">${upperCaseName}</div>
// <div class="type-keep">type: ${type}</div>
//  ` 
    let newDiv = document.createElement("div")
    let newH4 = document.createElement('h4');
    let newH5 = document.createElement('h5');

    let h4Node = upperCaseName;
    let h5Node = type;
    newH4.append(h4Node);
    newH5.append(h5Node);


    newDiv.append(newH4);
    newDiv.append(newH5);

    // newH4 = upperCaseName
    // newH5 = type;

    let img1 = document.createElement("img");
    let itemUrl1 = spriteImgKeep;
    img1.src = itemUrl1;
    newDiv.append(img1);
    keep.append(newDiv);


})
    
.catch(function (error) {
    console.log(error);
});

})  /*  END KEEP BUTTON EVENT LISTENER  */