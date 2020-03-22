//node 39-show.js 1
//------------------------------------------------------

const fs = require('fs')


//1) accepting input from control prompt
console.log(process.argv)  
/*
[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ASUS\\Desktop\\july2019-mern\\react\\day39-fsNode-ctrlpromptInput\\39-show.js',
  '1' ]
*/
console.log(JSON.parse(process.argv[2])) //1


//2) Reading file from '39-students.json'
let jsonData1 = {}
fs.readFile('./39-students.json', 'utf-8', (err, data) => {
    if (err) {
        return console.error(err);
    }
  //jsonData1 = JSON.parse(data)   //[ { id: '1', name: 'Jino' }, { id: '2', name: 'Minu' } ]
  jsonData1 = data
  console.log(jsonData1)  //"[{"id":"1", "name": "Jino"},{"id":"2", "name": "Minu"}]"
  const parsed = JSON.parse(jsonData1)
  let ele = parsed.find((each, index)=>{
    return [JSON.parse(process.argv[2])] == each.id
 })

  //3) showing the 2nd data from '39-students.json'
  fs.writeFile('39-show.js', JSON.stringify(ele) , err=>{
    if(err){
      console.log(err)
    }else{
      console.log(JSON.stringify(ele))
      console.log(ele.name)
    }
  })

})
