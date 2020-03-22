//function returns a promise object

function determine(n){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(n%2 == 0){
                resolve(n)
            }
            else{
                reject(n)
            }
        },500)
    })
}

determine(10)
    .then(function(n){
        console.log("success - ", n)
    })
    .catch(function(n){
        console.log("failure - ", n)
    })

//-------------------------------------------------------------------
     
//Method returns a promise object

const calc ={
    findOut: function determine(n){
        return new Promise(function(resolve, reject){
            setTimeout(()=>{
                if(n%2 == 0){
                    resolve(n)
                }
                else{
                    reject(n)
                }
            },500)
        })
    }
}

calc.findOut(101)
        .then(function(n){
            console.log("success - ", n)
        })
        .catch(function(n){
            console.log("failure - ", n)
        })