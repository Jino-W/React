//node 39-edit.js 2
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
        return console.log(err);
    }
  //jsonData1 = JSON.parse(data)   //[ { id: '1', name: 'Jino' }, { id: '2', name: 'Minu' } ]
  jsonData1 = data
  console.log(jsonData1)  //"[{"id":"1", "name": "Jino"},{"id":"2", "name": "Minu"}]"
  const parsed = JSON.parse(jsonData1)
  parsed.map((each)=>{
     console.log("each: ", each)
     console.log([JSON.parse(process.argv[2])])
     console.log('each.id: ',each.id)


        if([JSON.parse(process.argv[2])] == each.id){
            console.log('same id')
            each.name = "sam"
            console.log(each)
        }
        console.log(each)
  })
  console.log(parsed)

  fs.writeFile('39-edit.js', JSON.stringify(parsed),err =>{
      if(err)
      throw err
      console.log(JSON.stringify(parsed))
  })


})

/*
//node 39-edit.js 2

[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ASUS\\Desktop\\july2019-mern\\react\\day39-fsNode-ctrlpromptInput\\39-edit.js',
  '2' ]
2
[
    {"id":"1", "name": "Jino"},
    {"id":"2", "name": "Minu"}
]
each:  { id: '1', name: 'Jino' }
[ 2 ]
each.id:  1
{ id: '1', name: 'Jino' }
each:  { id: '2', name: 'Minu' }
[ 2 ]
each.id:  2
same id
{ id: '2', name: 'sam' }
{ id: '2', name: 'sam' }
[ { id: '1', name: 'Jino' }, { id: '2', name: 'sam' } ]
[{"id":"1","name":"Jino"},{"id":"2","name":"sam"}]

//---------------------------------------------


//node 39-edit.js 1

[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\ASUS\\Desktop\\july2019-mern\\react\\day39-fsNode-ctrlpromptInput\\39-edit.js',
  '1' ]
1
[
    {"id":"1", "name": "Jino"},
    {"id":"2", "name": "Minu"}
]
each:  { id: '1', name: 'Jino' }
[ 1 ]
each.id:  1
same id
{ id: '1', name: 'sam' }
{ id: '1', name: 'sam' }
each:  { id: '2', name: 'Minu' }
[ 1 ]
each.id:  2
{ id: '2', name: 'Minu' }
[ { id: '1', name: 'sam' }, { id: '2', name: 'Minu' } ]
[{"id":"1","name":"sam"},{"id":"2","name":"Minu"}]

*/