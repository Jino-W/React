const fs = require('fs')


// //M1 - synchronous
// let jsonData = require('./39-students.json') //inbuilt parsing
// console.log(jsonData)  //[ { id: '1', name: 'Jino' }, { id: '2', name: 'Minu' } ]

// jsonData.forEach((each)=>{
//     console.log(each)    //{ id: '1', name: 'Jino' }
//     console.log(each.name)      //Jino
// })

//M2 - Asynchronous
let jsonData1 = {}
    fs.readFile('39-students.json', 'utf-8', (err, data) => {
        if (err) {
            return console.error(err);
        }
    jsonData1 = JSON.parse(data)   //[ { id: '1', name: 'Jino' }, { id: '2', name: 'Minu' } ]
    console.log(jsonData1)
    jsonData1.map((each)=>{
        console.log(each)    //{ id: '1', name: 'Jino' }
        console.log(each.name)      //Jino
    })
})










//---------------------------------------------------------------





// // Asynchronous read
// fs.readFile('students.json', function (err, jsonData) {
//     console.log(jsonData)
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + jsonData.toString());
// });

//  //synchronous
// var data = fs.readFileSync('/students.json');
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");