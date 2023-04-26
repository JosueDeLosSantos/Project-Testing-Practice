export function sum(a, b) {
  return a + b;
}

export function capitalize(a) {
  try {
    let z = a.split("");
    const firtLetter = z[0].toUpperCase();
    delete z[0];
    z[0] = firtLetter;
    const answer = z.toString();
    return answer.replaceAll(",", "");
  } catch {
    return "Input is not string type";
  }
}

export function reverseString(a) {
  try {
    let newArr = [];
    let z = a.split("");
    while (z.length > 0) {
      newArr.push(z.pop());
    }

    return newArr.toString().replaceAll(",", "");
  } catch {
    return "Input is not string type";
  }
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};
