export function sum(a, b) {
  return a + b;
}

export function capitalize(a) {
  try {
    let z = a.split("");
    const firtLetter = z[0].toUpperCase();
    delete z[0];
    z[0] = firtLetter;
    return z.join("");
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

function shiftLetters(word, shiftNum) {
  const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabet = text.toLowerCase();
  const newText = word;
  let i = 0;
  const newArr = [];
  const shift = shiftNum;

  while (i <= newText.length - 1) {
    let temp = alphabet.indexOf(newText[i].toLowerCase());
    if (temp == -1) newArr.push(`${newText[i]}`);
    if (temp != -1) {
      const aIndex = temp + shift;
      if (aIndex > 25) {
        const converter = aIndex - 25;
        newArr.push(alphabet[converter - 1]);
      } else {
        newArr.push(alphabet[aIndex]);
      }
    }
    i++;
  }

  return newArr.join("");
}

export function caesarCipher(string, shiftNum) {
  const newString = string.split(" ");
  const result = [];
  if (shiftNum > 26 || shiftNum < 0) {
    return "Your shift factor is behond the limits, please enter any positive number below 27";
  } else {
    newString.forEach((element) => {
      result.push(shiftLetters(element, shiftNum));
    });
    result[0] = capitalize(result[0]);
    return result.join(" ");
  }
}

export function analyzeArray(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return { average: average, min: min, max: max, length: arr.length };
}
