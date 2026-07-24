function afficher(cible, html) {
  cible.innerHTML += html;
}

const sortieFizzbuzz = document.querySelector("#grille-fizzbuzz");

/**
 * Règles :
 *   - multiple de 3 ET de 5 → "FizzBuzz" (classe .fizzbuzz)
 *   - multiple de 3 seul    → "Fizz"     (classe .fizz)
 *   - multiple de 5 seul    → "Buzz"     (classe .buzz)
 *   - sinon                 → le nombre  (pas de classe spéciale)
 */
function genererFizzBuzz(debut, fin) {
  // Boucle for : on connaît d’avance le début et la fin (parcours borné).
  for (let i = debut; i <= fin; i++) {
    let contenu;
    let classe;

    /*
     * L’opérateur % (modulo) donne le reste d’une division.
     * Si i % 3 === 0, i est multiple de 3 (reste 0).
     * Si i % 5 === 0, i est multiple de 5.
     *
     * On teste D’ABORD le cas « 3 ET 5 » (donc multiple de 15),
     * sinon un simple if (i % 3 === 0) capturerait aussi 15, 30…
     * et on n’atteindrait jamais le label « FizzBuzz ».
     */
    if (i % 3 === 0 && i % 5 === 0) {
      contenu = "FizzBuzz";
      classe = "fizzbuzz";
    } else if (i % 3 === 0) {
      contenu = "Fizz";
      classe = "fizz";
    } else if (i % 5 === 0) {
      contenu = "Buzz";
      classe = "buzz";
    } else {
      contenu = i;
      classe = "";
    }

    // Template literal : une case HTML par nombre
    const html = `<div class="case ${classe}">${contenu}</div>`;
    afficher(sortieFizzbuzz, html);

    // Débogage console (séparé de l’affichage utilisateur)
    console.log(`[FizzBuzz] ${i} → ${contenu} (classe: "${classe}")`);
  }

  console.log(`[FizzBuzz] Grille générée de ${debut} à ${fin}.`);
}

// Lancement : 100 cases, de 1 à 100
genererFizzBuzz(1, 100);
