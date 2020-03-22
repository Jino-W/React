const myPromise  = new Promise(function(resolve, reject){
    setTimeout(()=>{
        const num = Math.round(Math.random() * 100)
        if(num % 2 == 0){
            resolve(num)
        }
        else{
            reject(num)
        }
    })
}, 2000)

myPromise
    .then(function(n){
        console.log("success-Even", n)
    })
    .catch(function(n){
        console.log("failure-Odd",n)
    })