exports.min = function min(array) {

    if (typeof array[0] == "number") {
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
}

exports.max = function max(array) {
    return Math.max.apply(null, array);
}

exports.avg = function avg(array) {
    let i = 0;
    let sum = 0;
    while (i < array.length) {
        sum = sum + array[i];
        i++;
    }
    let result = sum / array.length;
    return result.toFixed(2);

}
