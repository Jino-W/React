const fs = require('fs')
fs.readFile('./39-customer.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return
    }

    try {
        const customer = JSON.parse(jsonString)
        console.log(customer)
       //console.log("Customer address is:", customer.address) // => "Customer address is: Infinity Loop Drive"
    }
    catch(err) {
        console.log('Error parsing JSON string:', err)
    }
})