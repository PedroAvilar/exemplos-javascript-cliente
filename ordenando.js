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

//Ordenar um vetor de inteiros. Função quick_sort.
const quick_sort = (array, pos_inicio, pos_final) => {
    if (pos_inicio < pos_final) {
        const pivot = array [Math.floor ((pos_inicio + pos_final) / 2)];
        const indicePivot = particionamento (array, pos_inicio, pos_final, pivot);
        quick_sort (array, pos_inicio, indicePivot - 1);
        quick_sort (array, indicePivot, pos_final);
    }
}
//Função particionamento para apoio da função quick_sort.
const particionamento = (array, pos_inicio, pos_final, pivot) => {
    while (pos_inicio <= pos_final) {
        while (array [pos_inicio] < pivot) {
            pos_inicio ++;
        }
        while (array [pos_final] > pivot) {
            pos_final --;
        }
        if (pos_inicio <= pos_final) {
            swap (array, pos_inicio, pos_final); //Usa função swap.
            pos_inicio ++;
            pos_final --;
        }
    } return pos_inicio;
}

//Abaixo linhas de teste para a função.
//let vetor = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
//console.log ("Vetor original: ", vetor);
//shuffle (vetor, 2);
//console.log ("Vetor após a troca: ", vetor);

//let vetor = [5, 3, 6, 2, 1, 4];
//console.log ("Vetor original: ", vetor);
//selection_sort (Vetor);
//console.log ("Vetor após ordenação: ", vetor);

let vetor = [9, 1, 20, 8, 2, 19, 7, 3, 18, 6, 4, 17, 5, 16, 10, 15, 11, 14, 12, 13];
console.log ("Vetor original: ", vetor);
quick_sort (vetor, 0, vetor.length - 1);
console.log ("Vetor após ordenação: ", vetor);