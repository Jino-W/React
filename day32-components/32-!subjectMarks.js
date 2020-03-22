//WRONG




function subjectOrder(input){
    const changed = [].concat(input)
    
    const sub = []
    const student = []
    const studentObj ={}
    changed.forEach((i)=>{
        //student name -array
        for(const key in i){
            if(key=="name" && !student.includes(i[key])){
                student.push(i[key])
            }
        }
        //subject name -array
        i.subjects.forEach((obj)=>{
            for(const key in obj){
                if(key=="name"){
                    if(!sub.includes(obj[key])){
                        sub.push(obj[key])
                    }
                    if(studentObj[obj[key]]){
                        studentObj[obj[key]].push(i.name)
                    }else{
                        studentObj[obj[key]] = []
                        studentObj[obj[key]].push(i.name)
                    }
                }else if(key=="score"){
                    function score(stu){
                        if(i.name==stu){
                            return obj[key]
                        }     
                    }
                }
            }
        })
        
    })
    console.log(sub)
    console.log(student)
    console.log(studentObj)
    console.log(changed)

    const newArr = []
    sub.forEach((s,index)=>{
        const object = {}
        object["name"] = s
        object["students"] = []
        studentObj[s].forEach((stu)=>{
            const object1 ={}
            object1["name"] = stu
            object1["score"] = score(stu)
            object["students"].push(object1)
            console.log(object1)
        })
        
        
        object["students"].push()

        newArr.push(object)
    })
    console.log(newArr)
}

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
    
console.log(subjectOrder(input))
    /*
    
    OUTPUT:
    
    [
        {
            name: "English",
            students: [
                {
                    name: "John",
                    score: 98
                },
                {
                    name: "Marry",
                    score: 95
                }
            ]
        },
        {
            name: "Math",
            students: [
                {
                    name: "John",
                    score: 70
                }
            ]
        }
    ]
    */