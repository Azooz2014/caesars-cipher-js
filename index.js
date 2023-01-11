function isAlphabet(str) {
  return /^[a-zA-Z()]+$/.test(str);
}

const caesar = (plainText, key) => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cipherText = "";

  for (let i = 0; i < plainText.length; i++) {
    if (isAlphabet(plainText[i])) {
      for (let j = 0; j < alphabets.length; j++) {
        if (plainText[i].toUpperCase() === alphabets[j].toUpperCase()) {
          cipherText = cipherText + alphabets[(j + key) % 26].toUpperCase();

          break;
        }
      }
    } else {
      cipherText = cipherText + plainText[i];
    }
  }

  console.log(cipherText);
  return cipherText;
};

caesar("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13);
