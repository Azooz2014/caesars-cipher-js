//Function for checking if the input is an alphabet, returns boolean.
function isAlphabet(str) {
  return /^[a-zA-Z()]+$/.test(str);
}

const caesar = (plainText, key) => {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let cipherText = "";

  // Iterate over each character in plainText string.
  for (let i = 0; i < plainText.length; i++) {
    // Check if the ith character is an alphabet.
    if (isAlphabet(plainText[i])) {
      /* Iterate over each character in the alphabet and compare it
			with ith character in plaintext if matched enycrpt the letter. */
      for (let j = 0; j < alphabets.length; j++) {
        if (plainText[i].toUpperCase() === alphabets[j].toUpperCase()) {
          cipherText = cipherText + alphabets[(j + key) % 26].toUpperCase();
          break;
        }
      }
      // If not an alphabet store it as it is.
    } else {
      cipherText = cipherText + plainText[i];
    }
  }
  return cipherText;
};

caesar("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13);
