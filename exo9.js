function compteVoyelles(mot) {
    let compteur = 0;
    let voyelles = "aeiou";
  
    for (let lettre of mot) {
      if (voyelles.includes(lettre)) {
        compteur++;
      }
    }
  
    return compteur;
  }
  
  console.log(compteVoyelles("javascript")); // 3
  console.log(compteVoyelles("bonjour")); // 3
  
    //Deuxieme solution

    function compteVoyelles(mot) {
        return mot.split("").reduce((total, lettre) => "aeiou".includes(lettre) ? total + 1 : total, 0);
      }
      