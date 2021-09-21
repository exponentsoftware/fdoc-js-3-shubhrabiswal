

// Copy the student object to newStudent without mutating the original 
// object. In the new object add the following.


const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

let stu_copy = {...student}   
// console.log(stu_copy)

// 	1. Add Bootstrap with level 8 to the front end skill sets

function Add_frontEnd(skill,level){
    student.skills.frontEnd.push({'skill':skill,'level':level})
    return student.skills.frontEnd
}

console.log(Add_frontEnd('Bootstrap',8))

// 	2. Add Express with level 9 to the back end skill sets

function Add_backEnd(skill,level){
    student.skills.backEnd.push({'skill':skill,'level':level})
    return student.skills.backEnd
}

console.log(Add_backEnd('Express',9))


// 	3. Add SQL with level 8 to the data base skill sets

function Add_dataBase(skill,level){
    student.skills.dataBase.push({'skill':skill,'level':level})
    return student.skills.dataBase
}

console.log(Add_dataBase('SQL',8))

// 	4. Add SQL without level to the data science skill sets


function Add_dataScience(skill){
    student.skills.dataScience.push(skill)
    return student.skills.dataScience
}

console.log(Add_dataScience('SQL'))


// Use the student object to solve the following questions:

// a. Find the length of student object keys

function stu_key_length(student){
    return Object.keys(student).length
    
}
console.log("length of student object keys ",stu_key_length(student))


// b. Find the length of the student object values

function stu_value_length(student){
    return Object.values(student).length
}

console.log("length of the student object values ",stu_value_length(student))


// c. Find the length of skills object keys

function skill_len(student){
    let skill_set = student.skills
    return Object.keys(skill_set).length
}

console.log("length of skills object keys ",skill_len(student))

// d. check if the student object has graphicDesign property

// skills: {
//     frontEnd: [
//         { skill: 'HTML', level: 10 },
//         { skill: 'CSS', level: 8 },
//         { skill: 'JS', level: 8 },
//         { skill: 'React', level: 9 }
//     ],
//     backEnd: [
//         { skill: 'Node',level: 7 },
//         { skill: 'GraphQL', level: 8 },
//     ],
//     dataBase:[
//         { skill: 'MongoDB', level: 7.5 },
//     ],
//     dataScience:['Python', 'R', 'D3.js']
// }
// function check_property(subject,student){
//     let skill_set = Object.entries(student.skills)
//     sub_set = []
//     let result = skill_set.filter(sk =>{
//         // console.log("sk",sk[1])
//         for(let i=0;i<=sk.length;i++){
//             sub_set.push(sk[1][i])
//         }
//     })
//     console.log(sub_set)
    
//     console.log(Object.values(sub_set))
// }

function check_property(subject,student){
    let skills = Object.entries(student.skills)
    // console.log(skills)
    // console.log(skills[3][1])
    for(let ind of skills){
        // console.log(ind[1])
        for(let ob of ind){
            let val = Object.entries(ob)
            console.log("val",val)
        }
    }
}
// console.log(check_property('graphicDesign',student))

// e. Iterate the keys of the student object

function obj_iterate(student){
    let keys = Object.keys(student)
    for(let k of keys){
        console.log(k)
    }
}   

obj_iterate(student)


