//Trocar valores de duas posições. Função swap.
const swap = (array, posicao1, posicao2) => {
    [array[posicao1], array[posicao2]] = [array[posicao2], array[posicao1]];
}

//Embaralhar elementos. Função shuffle.
const shuffle = (array, quantTroca) => {
    for (let indice = 0; indice < quantTroca; indice ++) {
        let posicao1 = Math.floor (Math.random() * array.length);
        let posicao2 = Math.floor (Math.random() * array.length);
        while (posicao2 === posicao1) {
            posicao2 = Math.floor (Math.random() * array.length);
        }
        swap (array, posicao1, posicao2);  //Usa função swap.
    }
}

//Ordenar um vetor de inteiros. Função bubble_sort.
const bubble_sort = (array) => {
    let ordenado = false;
    while (!ordenado) {
        ordenado = true;
        for (let indice = 0; indice < array.length - 1; indice ++) {
            if (array [indice] > array [indice + 1]) {
                swap (array, indice, indice + 1); //Usa função swap.
                ordenado = false;
            }
        }
    }
}

//Ordenar um vetor de inteiros. Função selection_sort.
const selection_sort = (array) => {
    for (let indice = 0; indice < array.length - 1; indice ++) {
        let min_indice = indice;
        for (let indiceItera = indice + 1; indiceItera < array.length; indiceItera ++) {
            if (array [indiceItera] < array [min_indice]) {
                min_indice = indiceItera
            }
        }
        if (min_indice !== indice) {
            swap (array, indice, min_indice); //Usa função swap.
        }
    }
}

//Abaixo linhas de teste para a função.
//let vetor = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
//console.log ("Vetor original: ", vetor);
//shuffle (vetor, 2);
//console.log ("Vetor após a troca: ", vetor);

let vetor = [5, 3, 6, 2, 1, 4];
console.log ("vetor original: ", vetor);
selection_sort (vetor);
console.log ("Vetor após ordenação: ", vetor);