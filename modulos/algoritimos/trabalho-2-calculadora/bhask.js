// vou tentar desenvolver uma forma de desenvolver bhaskhara me inspirei neste código (https://gist.github.com/almirb/4070cb178c5b8b8111d64bfcb44f8fec)


const equacao = " -2x² + 3x + 5 = 0"

// vou pegar as variaveis da equação

const a = -2
const b = 3
const c = 5

// formula do delta => (b * b) - 4 * a * c

const delta = Math.pow(b, 2) - 4 * a * c

// agora vou fazer a formula do bhaskharas => x1 = -b + match.sqrt(delta) / 2 * a
// x2 = -b - match.sqrt(delta) / 2 * a

const x1 = - b + Math.sqrt(delta) / 2 * a
const x2 = - b - Math.sqrt(delta) / 2 * a


console.log(`de acordo com a equação passada a cima o x1 e o x2 são respectivamente ${x1}, ${x2}`)

 