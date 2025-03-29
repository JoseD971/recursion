const fibs = (n) => {
  var result = [0, 1];

  if (n <= 0) return [];
  if (n === 1) return [0];

  while (result.length < n) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }

  return result;
}

console.log(fibs(8));

const fibsRec = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) {
      return [0, 1];
  } else {
      const sequence = fibsRec(n - 1);
      const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
      return sequence;
  }
}

console.log(fibsRec(10));