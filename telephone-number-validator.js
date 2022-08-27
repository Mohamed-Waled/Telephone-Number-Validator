function telephoneCheck(str) {
  if ((str.indexOf("(") === -1 && str.indexOf(")") > -1) || 
      (str[0] === "(" && str[str.length - 1] === ")") || 
      (str[str.length - 2] === "-" || str[0] === "-")) {
    return false;
  }

  let justNumbers = str.replace(/-| /g, "");

  if (justNumbers.indexOf("(") < justNumbers.indexOf(")")) {
    justNumbers = justNumbers.replace(/\(|\)/g, "")
  }

  if (justNumbers.length === 10) {
    return true;
  } else if (justNumbers.length === 11 && justNumbers[0] === "1") {
    return true
  }

  return false;
}


console.log(telephoneCheck("1 555-555-5555"));