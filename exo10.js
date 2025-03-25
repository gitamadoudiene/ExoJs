function nombreCache() {
    let secret = Math.floor(Math.random() * 10) + 1;
    let guess = 5; // Modifier ce nombre pour tester
    return guess === secret ? "Bravo !" : `Dommage, le nombre était ${secret}`;
  }
  
  console.log(nombreCache());

  //Deuxieme solution

  function nombreCache() {
    let secret = Math.floor(Math.random() * 10) + 1;
    let guess;
  
    while (guess !== secret) {
      guess = Number(prompt("Devine le nombre entre 1 et 10 :"));
      if (guess === secret) {
        alert("Bravo !");
        return;
      } else {
        alert("Essaye encore !");
      }
    }
  }
  