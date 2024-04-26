//Trocar valores de duas posições.
const swap = (array, posicao1, posicao2) => {
    [array[posicao1], array[posicao2]] = [array[posicao2], array[posicao1]];
}

//Embaralhar elementos.
const shuffle = (array, quantTroca) => {
    for (let indice = 0; indice < quantTroca; indice ++) {
        let posicao1 = Math.floor (Math.random() * array.length);
        let posicao2 = Math.floor (Math.random() * array.length);
        while (posicao2 === posicao1) {
            posicao2 = Math.floor (Math.random() * array.length);
        }
        swap (array, posicao1, posicao2);
    }
}

//Abaixo linhas de teste para a função.
let vetor = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log ("Vetor original: ", vetor);
shuffle (vetor, 2);
console.log ("Vetor após a troca: ", vetor);