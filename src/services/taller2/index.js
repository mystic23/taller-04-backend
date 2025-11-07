
export function findMax(lista) {
    let max = lista[0]; 
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > max) {
            max = lista[i];
        }
    }
    return max;
}


export function includes(lista, numero) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numero) {
            return true;
        }
    }
    return false;
}


export function sum(lista) {
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
        total += lista[i];
    }
    return total;
}

export function missingNumbers(lista) {
    let min = lista[0];
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < min) {
            min = lista[i];
        }
        if (lista[i] > max) {
            max = lista[i];
        }
    }

    let faltantes = [];
    for (let num = min; num <= max; num++) {
        let existe = false;
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] === num) {
                existe = true;
                break;
            }
        }
        if (!existe) {
            faltantes.push(num);
        }
    }
    return faltantes;
}


