// 1. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.
//    ```js
//      const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//      console.log(name, skills, scores)
//      console.log(jsScore, reactScore)

//    ```
// 	Write a function called convertArrayToObject which can convert the array to a structured object.


function convertArrayToObject(students) {
    // let stu_array = students.map(s1=> [
    //     s1[0],
    //     s1[1],
    //     s1[2]
    // ])
    let stu_array = students.map(s1 => 
        Object.assign({"name": s1[0],
         "skills":JSON.stringify(s1[1]),
         "scores":JSON.stringify(s1[2])})
    )

    return stu_array
}


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))
