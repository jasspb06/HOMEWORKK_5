const uncompressedString = "QQQUUUUUUUlllllllqqQQQQQQQQQTTA";
function rel() {
   
    let rel = '';

    for (let i = 0; i < uncompressedString.length; i++) {
      let count = 1;
      for (let j = i; j < uncompressedString.length; j++) {
        if (uncompressedString[i] !== uncompressedString[j+1]) break;
        count++;
        i++;
      }
      rel += count === 1 ? uncompressedString[i] : count + uncompressedString[i];
    }

    return rel
  }
console.log(rel());
