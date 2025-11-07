export function desglosarString(str, escoger) {
  const vocales = 'aeiouAEIOU';
  const consonantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  const letras = [...str];

  if (escoger === 'vocales') {
    return `Cantidad Vocales: ${letras.filter(letra => vocales.includes(letra)).length}`;
  }

  if (escoger === 'consonantes') {
    return `Cantidad consonantes: ${letras.filter(letra => consonantes.includes(letra)).length}`;
  }

  throw new Error("escoger debe ser 'vocales' o 'consonantes'");
}



export function twoSum(numeros, target){
    
    const i = numeros.findIndex((num) => {
        const match = target - num;
        return numeros.includes(match) && numeros.indexOf(match) !== numeros.indexOf(num);
    })
    const j = numeros.indexOf(target-numeros[i]);

    return ([i,j]);
}


export function conversionRomana(string) {
  const numerosRomanos = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };

  return [...string].reduce((acc, curr, i, arr) => {
    const act = numerosRomanos[curr];
    const sigt = numerosRomanos[arr[i + 1]];

    let suma = 0;
    if (sigt && act < sigt) {
      suma = -act;   
    } else {
      suma = act;    
    }
    return acc + suma;  
  }, 0);
}



export function descomposicion(string) {
  const divide = string.split(",");
  const objetivo = divide[0];
  const grupo = divide.slice(1).map(s => s.trim());

  const primerPalabra = grupo.find(palabra => {
    const resto = objetivo.replace(palabra, '');
    return grupo.includes(resto) && (palabra + resto === objetivo);
  });

  if (!primerPalabra) return [];

  const segundaPalabra = objetivo.replace(primerPalabra, '');
  return [primerPalabra, segundaPalabra];
}
