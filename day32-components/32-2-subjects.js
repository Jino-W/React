function change(input,array){
    const result = []
    array.forEach((a)=>{
        result.push({name:a, students:[]})
    })

result.forEach((r)=>{
    input.forEach((i) => {
        const item = i.subjects.find((obj) => {
            return obj.name == r.name
        })
        if (item) {
            r.students.push({name: i.name, score: item.score })
        }
    })
})

    return result

}

/*
[ { name: 'English', students: [ [Object], [Object] ] },
  { name: 'Math', students: [ [Object] ] } ]
*/

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


console.log(change(input,["English", "Math"]))
