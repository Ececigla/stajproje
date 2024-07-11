function multiply(num1, num2) {
   let total = num1 * num2
   return total
    }

    let num1 = 5,
        num2 = 2
    let total = multiply(num1, num2)

    function sumArrayValues(array) {
        let total = 0
        for (let i = 0; i< array.length; i++) {
            total += array[i]
        }
        return total

    }

    let dizi = [2, 4, 6, 8, 10]
    
    console.log('toplam', sumArrayValues(dizi))


    function topla() {
        let total = 0
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i]
        }
        return total
    }

    console.log(topla(2, 5, 7, 9, 10))

    const sayHello = function(name) {
        return 'hello $(name)'
    }
    console.log(sayHello('ece'))

    ;[function(){
        console.log('he yo')
    }]()

    let sayHello2 = (function(name){
        console.log('hello $name')
    })('ece')
    
    //normal fonksiyon(regular function)
    function hello(name) {
        return 'hello ${name}'

    }

    //ok foksiyonu (array funciton)
    const hello2 = name => {
        return 'hello $(name)'

    }



     