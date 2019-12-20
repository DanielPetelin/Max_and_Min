var array = [1325412, 34, 64, 12, -43, -1248, 1293];
var max = getMaxValue(array);
var min = getMinValue(array);
console.log(max);
console.log(min);
 
//высчитываем максимальный элемента массива
function getMaxValue(array){
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i]; 
    }
    return max;
}
 
//высчитываем минимальный элемента массива
function getMinValue(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}