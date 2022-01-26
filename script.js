function Person(name){
    this.name=name
    this.walk= function () {
        return this.name + " esta andando"
    }
}
const delair= new Person("delair")
console.log(delair)


console.log(delair.walk())

const joao= new Person("joao")
// console.log(joao) 

// let subject = "creaate"
// function create() {
//     subject="study"
//     return subject
// }


// console.log(create(subject))
// console.log(subject)

let a="palavra"
console.log(a.length)

let numero = 1234.53567
 console.log( numero.toFixed(2).replace(".", ","))

let word="uau cara isso é bacana demais"
console.log(word.toUpperCase())

let word1="uau cara isso é bacana demais"
console.log(word1.toLocaleLowerCase())

let frase= "o amor é fogo que arde e não se vê"
let array=(frase.split(" "))
let underscore = array.join("_")
console.log(underscore)

let frase1= "Eu quero viver"
console.log(frase1.includes("i"))

let myarray= new Array('a', 'b','c')
console.log(myarray)

console.log(["delair" ,"luis", "yuri", "sebastiao" ].length)


console.log(["delair" ,"luis", "yuri", "sebastiao" ] [0])

let pala="manipulação"
console.log(Array.from(pala))

let techs = ["html", "css", "js"]

techs.push("Final")
console.log(techs)

techs.unshift("começo")
console.log(techs)

// techs.pop()
// console.log(techs)

// techs.shift()
// console.log(techs)


// console.log(techs.slice(1,3))

// techs.splice(1,2)
// console.log(techs)

console.log("AAAAAAAAAaaa")

let index= techs.indexOf("html")
techs.splice(index, 1)
console.log(techs)

let nota = 6
if(nota > 6){
    console.log("PASSOU")
} else{
    console.log("nao passou meu chapa")
}

let condicao = "e"
switch (condicao) {
    case 'a':
        console.log("escreveu a")
        break;

        case 'b':
            console.log("escreveu b")
            break;
        
        case 'c':
            console.log("c sabe")
            break

        case 'd':
            console.log("d viu")
            break

    default:
            console.log("escreveu defalt")
        break;
}



function Pegarname(name = '') {
    if(name === ''){
         throw new Error ("nome obrigatorio")
    }
    console.log(name)
}

try{
    Pegarname('Delair')
} catch(e){
    console.log(e)
}


// for(i = 0;i <10;i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i)
// }

// let i = 35000;
// while(i>10){
//     console.log(i)
//     i/=35;
// }

// let nome = "maik"
// let nomes = ['joao', 'marcos', 'gomes']
// for(let nomi of nome){
//     console.log(nomi)
// }

let person={
    nome: 'john',
    idade: 23,
    altura:86.6,
}

for(let propety in person){
    console.log(propety)
    console.log(person[propety])
  
}


// const sum = function(num,num1){
//     soma= num + num1
//     return soma

// }


// console.log(sum(1,2))