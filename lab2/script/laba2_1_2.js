let sizeFile = prompt("Размер файла в байтах (целое положительное число):");
let sizeinKb = Math.floor(sizeFile / 1024); //округляет число до ближайшего меньшего целого числа
alert(`Вы ввели размер файла в байт:${sizeFile}
Размер файла в Кбай: ${sizeinKb}`);