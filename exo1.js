function bonjour(nom) {
    return "Bonjour, " + nom + " !";
  }
  
  console.log(bonjour("Alice")); // "Bonjour, Alice !"
  console.log(bonjour("Bob"));   // "Bonjour, Bob !"

  //Deuxieme solution

  function bonjour(nom) {
    return `Bonjour, ${nom} !`;
    return 'Bonjour${nom} !';
  }