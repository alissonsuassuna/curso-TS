// Tipos básicos

let nome: string = 'Alisson Suassuna' // qualquer tipo de string ``, '', ""
let idade: number = 32 // 10, 1.58, -9.99, Oxf00d, ob1010
let crente: boolean = true // verdade ou false (true e false)
let simbolo: symbol = Symbol('Qualquer-symbol') // Symbol
//let big: bigint = 10n // BigInt

// Arrays
let arrayDeNomes: Array<string> = ['Jesus', 'Jacó', "Elias"]
let arrayDeNumeris: Array<number> = [1, 2, 3]

// Arrays - Mais curto
let arrayDeNumerios2: number[] = [1, 2, 3]

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Alisson',
    idade: 32
}

// Funções

function soma(x: number, y: number): number {
    return x + y
}

const soma2: (x: number, y: number) => number = (x, y) => x + y
console.log(soma2(2, 3))