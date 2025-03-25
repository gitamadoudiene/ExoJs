function reverseMot(mot) {
    return mot.split("").reverse().join("");
  }
  
  console.log(reverseMot("hello")); // "olleh"
  console.log(reverseMot("javascript")); // "tpircsavaj"
  
  //Deuxieme solution
  function reverseMot(mot) {
    let reversed = "";
    for (let i = mot.length - 1; i >= 0; i--) {
      reversed += mot[i];
    }
    return reversed;
  }
  