
exports.min = function min(array) {

  if (array && array.length > 0) {
    return Math.min.apply(null, array)
  } else return 0

}

exports.max = function max(array) {

  if (array && array.length > 0) {
    return Math.max.apply(null, array)
  } else return 0

}

exports.avg = function avg(array) {
  let avg = 0;
  if (array && array.length > 0) {
      let i = 0;
      let counts = 0;
      for ( i ; i < array.length; i++) {
          avg += array[i];
          counts++;
      }
      avg = avg / counts;
  }

  return avg;

}
