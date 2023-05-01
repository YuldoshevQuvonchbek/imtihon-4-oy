// birinchi algaritim

function mixString(a, b) {
  let newStr = "";

  if (a.length > b.length) {
    for (let i = 0; i < b.length; i++) {
      newStr += a[i] + b[i];
    }
    newStr += a.substring(b.length);
  }

  if (a.length < b.length) {
    for (let i = 0; i < a.length; i++) {
      newStr += a[i] + b[i];
    }
    newStr += b.substring(a.length);
  }

  if (a.length == b.length) {
    for (let i = 0; i < a.length; i++) {
      newStr += a[i] + b[i];
    }
  }

  return newStr;
}

// ikkinchi algaritim

function sum_values(obj) {
  let total = 0;
  for (const key in obj) {
    const val = obj[key];
    if (val && typeof val === "object") {
      total += sum_values(val);
    } else if (typeof val === "number") {
      total += val;
    }
  }
  return total;
}
