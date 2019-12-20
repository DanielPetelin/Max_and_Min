var array = [1, 5, 2, 9, 2, 329, -43, 103];
var max = getMaxValue(array);
var min = getMinValue(array);
console.log(max);
console.log(min);

//Функция, которая считает и возвращает максимальный элемент.
function getMaxValue(array) {
    var max = array[0];
    for (var i = 0; i < array.lenght; i++) {
        if (max < array[i]) max = array[i]; 
    }
    return max;
}

//Функция, которая считает и возвращает минимальный элемент.
function getMinValue(array) {
    var min = array[0];
    for (var i = 0; i < array.lenght; i++) {
        if (min > array[i]) min = array[i]; 
    }
    return min;
}