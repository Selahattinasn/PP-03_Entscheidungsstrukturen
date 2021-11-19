// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 30; 
const ageMark = 35; 

// Deklaration
let isJohnOlder,isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos

// if (true) 
// if (false) 
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter.");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (isJohnOlder)
// {
//     // Ja-Zweig / true
//     console.log("John ist älter."); 
// } 
// else 
// {
//     // Nein-Zweig / false
//     console.log("John ist jünger."); 
// }

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if (isJohnOlder) // John älter
// {
//     console.log("John ist älter."); 
// } 
// // 1. Alternative
// else if(isJohnEqual) // John gleich alt
// {
//     console.log("John ist gleich alt.");
// }
// // 2...n Alternative(n)

// // Alternative
// else  // John jünger
// {
//     console.log("John ist jünger."); 
// }

/****** Fallunterscheidung / CASE|SWITCH 1 ******/

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
// job = "diver";  // .. taucht im Rhein!
// job = "artist";  // .. malt ein Bild!
// job = "pilot"; // .. macht etwas anderes! --> default
// job = "teacher"; // .. unterrichtet!
// job = "instructor"; // .. unterrichtet!

switch (job) 
{
    case "driver":  // Test auf ==
        console.log(firstName + " fährt TAXI!");
        break;
    case "diver":  // Test auf ==
        console.log(firstName + " taucht im Rhein!");
        break;
    case "artist":  // Test auf ==
        console.log(firstName + " malt ein Bild!");
        break;
    case "teacher":  
    case "instructor":
        console.log(firstName + " unterrichtet!");
        break;

    default:  // Black Swan !!!
        console.log(firstName + " macht etwas anderes!");
        break;
}
