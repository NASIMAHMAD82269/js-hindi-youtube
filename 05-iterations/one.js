// for loop

for (let i = 0; i <= 12; i++) {
    const element = i;
   // console.log(element);
    
}

// console.log(element);


for (let i = 1; i < 11; i++) {
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j < 11; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
     //console.log(i + '*' + j + ' = ' + i*j);   
    }
    
}

let myArray = ["SUPERMAN", "WONDERWOMAN", "FLASH"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue

    }
    console.log(`Value of i is ${i} `);
    
    
}