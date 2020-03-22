console.log(process.argv)
let sum = 0
// process.argv.forEach((val, index) => {
//     if(index>1){
//         sum = sum + JSON.parse(val)
//     }     
// })
// console.log(sum)

//(or)

sum = JSON.parse(process.argv[2]) + JSON.parse(process.argv[3])
console.log(sum)