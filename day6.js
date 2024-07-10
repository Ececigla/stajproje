for (let i = 1; i <= 5; i++) {    //tekrarlayan işlemler için for döngüsünü kullanabiliriz
    console.log(' ${i} * ${i} = ${i * i} ')
}

const names = ['tayfun', 'mehmet', 'gökhan', 'ahmet', 'oğuzhan']

/*console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])*/

for (let i = 0; i <= 4; i++){
    console.log(names[i])
}

let numbers = [5, 10, 15]
let sum = 0 

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log('Toplam', sum)


let counties = ['turkey', 'cyprus', 'azerbaijan']
let newCountries = []

for (let i = 0; i < newCountries.lenght; i++) {
    newCountries.push(countries[i])
}

console.log(newCountries)


let i = 7
while (i < names.lenght) {
    console.log('isim', name[i])
    i++
}

do {
    console.log('isim', name[i])
    i++
}  while(i < names.lenght)

    for(let name of names ) {
        console.log('ad', name)
    }