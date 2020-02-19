
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }

  let min = array[0];
  array.forEach(item => {
    if (item < min) {
      min = item;
    }
  })

  return min;
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }

  let max = array[0];
  array.forEach(item => {
    if (item > max) {
      max = item;
    }
  })

  return max;
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }

  return array.reduce((prev, item) => prev + item, 0) / array.length;
}
