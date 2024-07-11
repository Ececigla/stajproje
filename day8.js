ad = 'ece'  //window scope

{ 
    let deneme = "test"
    //console.log(deneme)
}

let name = 'ece'
let surname = 'aksoy'

function letsLearnScope() {
//console.log(name, surname)
if(true) {
    let name = 'ayşe'
    let surname = 'sail'
    //console.log(name, surname)
}
//console.log(name, surname)
}
letsLearnScope()
//console.log(name, surname)

for (let i = 1; i <= 5; i++) {
   // console.log('i', i)
}
//console.log('son ,', i)

const user = {
    name: 'ece',
    surname: 'aksoy',
    age: 20,
    isMarried: false,
    skills: [
        "HTML"
        "Javascript"
        "CSS"

    ]
}
console.log(user.skills)


