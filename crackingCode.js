function decode(codedSentence) {
  const wordArray = codedSentence.split(" ");
  let decodedMessage = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i][0] === "a") {
      decodedMessage += wordArray[i][1];
    } else if (wordArray[i][0] === "b") {
      decodedMessage += wordArray[i][2];
    } else if (wordArray[i][0] === "c") {
      decodedMessage += wordArray[i][3];
    } else if (wordArray[i][0] === "d") {
      decodedMessage += wordArray[i][4];
    } else {
      decodedMessage += " ";
    }
  }
  return decodedMessage;
}

console.log(decode("craft block argon meter bells brown croon droop"));
