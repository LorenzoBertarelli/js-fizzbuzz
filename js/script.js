// NUMERI DA 1 A 100 CON FIZZ E BUZZ
// for (let i = 1; i <= 100; i++) {
//     let oddEven;
//     if (i % 15 === 0) {
//         oddEven = "BuzzFizz";
//     } else if (i % 5 === 0) {
//         oddEven = "Buzz";
//     } else if (i % 3 === 0) {
//         oddEven = "Fizz"
//     }
//     console.log(i, oddEven);
// }

// APPLICARE DOM SU HTML E AGGIUNGERE COLORI
const gridElem = document.querySelector(".grid");
for (let i = 1; i <= 100; i++) {
    let BF;
    let Number
    let classColor;
    if (i % 15 === 0) {
        Number = "BuzzFizz";
        BF = "BuzzFizz";
        classColor = "red";
    } else if (i % 5 === 0) {
        Number = "Buzz";
        BF = "Buzz";
        classColor = "yellow";
    } else if (i % 3 === 0) {
        Number = "Fizz";
        BF = "Fizz";
        classColor = "green";
     } else if (i % 1 === 0) {
        Number = `${i}`;
        BF = "";
    }
    console.log(i, BF);

    gridElem.innerHTML += `<div class="box ${classColor}"> ${Number}</div>`;
}