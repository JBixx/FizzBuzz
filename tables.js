/**
 * =========================================================
 * Tables de multiplication
 * =========================================================
 * Réutilise le pont DOM unique `afficher(cible, html)` déclaré
 * dans fizzbuzz.js (chargé juste avant ce fichier).
 * On ne manipule le DOM qu’à travers ce bridge.
 */
const sortieTables = document.querySelector("#conteneur-tables");

/**
 * Construit le HTML d’UNE carte pour la table de `nombre` (1 × … × 10).
 * Utilise une boucle while pour contraster avec le for de FizzBuzz.
 *
 * Différence d’intention for / while dans ce projet :
 * - for   : parcours borné quand début, fin et pas sont connus à l’avance
 *           (ex. générer les tables 1 à 9, ou FizzBuzz 1 à 100).
 * - while : on avance tant qu’une condition reste vraie ; utile quand
 *           le nombre d’itérations est pensé comme « continuer jusqu’à… »
 *           (ici : tant que multiplicateur <= 10).
 */
function genererTable(nombre) {
  let lignes = "";
  let i = 1;

  while (i <= 10) {
    const resultat = nombre * i;
    lignes += `<li>${nombre} x ${i} = ${resultat}</li>`;
    i++;
  }

  return `
    <div class="carte-table">
      <h3>Table de ${nombre}</h3>
      <ul>
        ${lignes}
      </ul>
    </div>
  `;
}

/**
 * Génère toutes les tables de `debut` à `fin` et les affiche.
 */
function genererToutesLesTables(debut, fin) {
  // for : intervalle connu (1 → 9), idéal pour appeler genererTable à chaque tour
  for (let n = debut; n <= fin; n++) {
    const carteHtml = genererTable(n);
    afficher(sortieTables, carteHtml);
    console.log(`[Tables] Carte générée pour la table de ${n}.`);
  }

  console.log(`[Tables] Tables générées de ${debut} à ${fin}.`);
}

// Lancement : tables de 1 à 9
genererToutesLesTables(1, 9);
