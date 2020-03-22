const fruits = ['apple','mango','jackfruit','chikoo']

//without map()

const result = []
for(i=0;i<fruits.length;i++){
    result.push(fruits[i].toUpperCase())
}
console.log(result)        //[ 'APPLE', 'MANGO', 'JACKFRUIT', 'CHIKOO' ]



//with map()

const result1 = fruits.map(function(fruit){
    return fruit.toUpperCase()
})
console.log(result1)   //[ 'APPLE', 'MANGO', 'JACKFRUIT', 'CHIKOO' ]

const result2 = fruits.map(fruit => fruit.toUpperCase() )
console.log(result2)    //[ 'APPLE', 'MANGO', 'JACKFRUIT', 'CHIKOO' ]