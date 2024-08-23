// Original points
const P1 = { x: 0, y: 0.5 };
const P4 = { x: 1, y: 0.5 };

// Calculate the vector V between P1 and P4
const V = { x: P4.x - P1.x, y: P4.y - P1.y };

// Stretch factor
const k = 1.5; // Adjust this value as needed

// Calculate the new position of P4'
const P4_prime = { x: P1.x + k * V.x, y: P1.y + k * V.y };

console.log("Original P1:", P1);
console.log("Original P4:", P4);
console.log("Stretched P4:", P4_prime);

//https://www.desmos.com/calculator/p8flfqvgar