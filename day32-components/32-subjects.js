const input = [
    {
        "name": "John",
        "subjects": [
            {"name": "English", "score": 98},
            {"name": "Math", "score": 70},
            {"name": "Literature", "score": 78}
            ]
    },
    {
        "name": "Marry",
        "subjects": [
            {"name": "English", "score": 95},
            {"name": "Music", "score": 50},
            {"name": "Physics", "score": 70}
            ]
    },
    {
        "name": "Brian",
        "subjects": [
            {"name": "History", "score": 95},
            {"name": "Music", "score": 50},
            {"name": "Physics", "score": 70}
            ]
    }
]

const result=new Array()
    
    input.forEach(element => {   //element => each object in the array(i.e, input)
        element.subjects.forEach(item =>{   //item => {name:sub, score:..} inside subjects
            const resultItem=result.find(resultEle => resultEle.name==item.name)  //like element.name but inside result
            if (resultItem){
                resultItem.students.push(JSON.stringify({name:element.name,score:item.score}))
            }else{
                result.push({name:item.name,students:[JSON.stringify({name:element.name,score:item.score})]})
            }
        })
    });
    

console.log(result)

/*
[ { name: 'English', students: [ [Object], [Object] ] },
  { name: 'Math', students: [ [Object] ] },
  { name: 'Literature', students: [ [Object] ] },
  { name: 'Music', students: [ [Object], [Object] ] },
  { name: 'Physics', students: [ [Object], [Object] ] },
  { name: 'History', students: [ [Object] ] } ]
  

//JSON.Stringify(obj)

[ { name: 'English',
    students:
     [ '{"name":"John","score":98}', '{"name":"Marry","score":95}' ] },
  { name: 'Math', students: [ '{"name":"John","score":70}' ] },
  { name: 'Literature',
    students: [ '{"name":"John","score":78}' ] },
  { name: 'Music',
    students:
     [ '{"name":"Marry","score":50}', '{"name":"Brian","score":50}' ] },
  { name: 'Physics',
    students:
     [ '{"name":"Marry","score":70}', '{"name":"Brian","score":70}' ] },
  { name: 'History', students: [ '{"name":"Brian","score":95}' ] } ]
*/