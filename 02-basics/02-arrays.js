const mavel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Wonderwoman"]

// mavel_heros.push(dc_heros)
// console.log(mavel_heros[3][0]);

// const allHeros = mavel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros = [...mavel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("NASIM"));
console.log(Array.from("NASIM"));
console.log(Array.from({name: "NASIM"}));   // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


