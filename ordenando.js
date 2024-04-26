const swap = (array, posicao1, posicao2) => {
    [array[posicao1], array[posicao2]] = [array[posicao2], array[posicao1]];
};

//Abaixo linhas de teste para a função.
let vetor = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log ("Vetor original: ", vetor);
swap (vetor, 0, 6);
console.log ("Vetor após a troca: ", vetor);