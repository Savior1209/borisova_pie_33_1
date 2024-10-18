let storA = prompt ("Введите длинну стороны А (вещетвенное число):");
let storB = prompt("Введите длинну стороны B (вещественное число):");

let Ploshad = parseFloat(storA) * parseFloat(storB);
let Perimetr =   2 * (parseFloat(storA) + parseFloat(storB));

alert (`При A = ${storA} и B = ${storB}
Площадь = ${parseFloat(Ploshad.toFixed(3))}
Периметр = ${parseFloat(Perimetr.toFixed(3))}`)
