// functioMath.maxn plusGrandNombre(tab) {
//     return (...tab);
//   }
  
  console.log(plusGrandNombre([3, 7, 2, 9, 5])); // 9
  console.log(plusGrandNombre([1, 20, 3])); // 20

  //deuxieme solution

  function plusGrandNombre(tab) {
    let max = tab[0];
    for (let nombre of tab) {
      if (nombre > max) max = nombre;
    }
    return max;
  }
  