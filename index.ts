// Niveau 1 : Facile

// 1. Inverser une chaîne
// Écrivez une fonction qui prend une chaîne de caractères en entrée et retourne cette chaîne inversée.
// Exemple : "hello" → "olleh"

const reverseString: (str: string) => string = (str) => {
	return str.split("").reverse().join("");
};

console.info(`Exercice 1: \n ${reverseString("Hello")}\n`);

// 2. Vérifier un palindrome
// Écrivez une fonction qui vérifie si une chaîne est un palindrome (se lit de la même manière à l'envers).
// Exemple : "racecar" → true, "hello" → false
const checkPalindrome: (str: string) => boolean = (str) => {
	return (
		str.toLocaleLowerCase() ===
		str.toLocaleLowerCase().split("").reverse().join("")
	);
};

console.info(`Exercice 2: \n ${checkPalindrome("racecar")}\n`);

// 3. Trouver le maximum
// Écrivez une fonction qui prend un tableau de nombres et retourne le plus grand nombre.
// Exemple : [1, 3, 2] → 3
const findBigger: (arr: Array<number>) => number = (arr) => {
	return Math.max(...arr);
};

console.info(`Exercice 3: \n ${findBigger([1, 3, 2])}\n`);

// 4. Compter les voyelles
// Écrivez une fonction qui compte le nombre de voyelles dans une chaîne de caractères.
// Exemple : "hello" → 2
const countVowels: (str: string) => number = (str) => {
	return str
		.toLowerCase()
		.split("")
		.filter((vowel: string) => "aeiou".includes(vowel)).length;
};

console.info(`Exercice 4: \n ${countVowels("hello")}\n`);

// 5. Fibonacci
// Écrivez une fonction qui retourne le n-ième nombre de la séquence de Fibonacci.
// Exemple : fibonacci(5) → 5 (0, 1, 1, 2, 3, 5)
const fibonacci: (n: number) => Array<number> = (n) => {
	const fibArray: Array<number> = [0, 1];
	for (let i = 2; i < n; i++) {
		fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
	}
	return fibArray.slice(0, n);
};

console.info(`Exercice 5: \n ${fibonacci(10)}\n`);

// Niveau 2 : Intermédiaire

// 6. Tri par sélection
// Implémentez l'algorithme de tri par sélection pour trier un tableau de nombres.
// Exemple : [64, 25, 12, 22, 11] → [11, 12, 22, 25, 64]
const sortArray: (arr: Array<number>) => Array<number> = (arr) => {
	return arr.sort((a: number, b: number) => a - b);
};
console.info(`Exercice 6: \n ${sortArray([64, 25, 12, 22, 11])}\n`);

// 7. Facteur de nombre
// Écrivez une fonction qui retourne un tableau des facteurs d'un nombre donné.
// Exemple : factors(12) → [1, 2, 3, 4, 6, 12]
const factors: (n: number) => Array<number> = (n) => {
	return Array.from({ length: n }, (_, i) => i + 1).filter((i) => n % i === 0);
};

console.info(`Exercice 7: \n ${factors(12)}\n`);

// 8. Trouver le deuxième plus grand nombre
// Écrivez une fonction qui retourne le deuxième plus grand nombre d'un tableau.
// Exemple : [3, 1, 4, 2] → 3
const findSecondBigger: (arr: Array<number>) => number = (arr) => {
	return arr.sort((a: number, b: number) => a - b).reverse()[1];
};

console.info(`Exercice 8: \n ${findSecondBigger([3, 1, 4, 2])}\n`);

// 9. Fusionner deux tableaux triés
// Écrivez une fonction qui fusionne deux tableaux triés en un seul tableau trié.
// Exemple : [1, 3, 5] et [2, 4, 6] → [1, 2, 3, 4, 5, 6]
const mergeArrays: (arr1: Array<number>, arr2: Array<number>) => Array<number> =
	(arr1, arr2) => {
		return arr1
			.sort((a: number, b: number) => a - b)
			.concat(arr2.sort((a: number, b: number) => a - b))
			.sort((a, b) => a - b);
	};

console.info(`Exercice 9: \n ${mergeArrays([1, 5, 3], [2, 6, 4])}\n`);

// 10. Trouver les éléments uniques
// Écrivez une fonction qui prend un tableau et retourne un tableau contenant uniquement les éléments uniques.
// Exemple : [1, 2, 2, 3, 4, 4] → [1, 2, 3, 4]
const deleteDuplicate: (arr: Array<number>) => Array<number> = (arr) => {
	return Array.from(new Set(arr));
};
console.info(`Exercice 10: \n ${deleteDuplicate([1, 2, 2, 3, 4, 4])}\n`);

// Niveau 3 : Difficile

// 11. Anagramme
// Écrivez une fonction qui vérifie si deux chaînes de caractères sont des anagrammes.
// Exemple : "listen" et "silent" → true

// 12. Détecter les parenthèses équilibrées
// Écrivez une fonction qui détermine si une chaîne de caractères a des parenthèses équilibrées.
// Exemple : "((()))" → true, "(())(" → false

// 13. Permutation de chaîne
// Écrivez une fonction qui génère toutes les permutations possibles d'une chaîne de caractères.
// Exemple : "abc" → ["abc", "acb", "bac", "bca", "cab", "cba"]

// 14. Sous-tableau avec somme maximale
// Écrivez une fonction qui trouve la somme maximale d'un sous-tableau d'un tableau donné.
// Exemple : [-2, 1, -3, 4, -1, 2, 1, -5, 4] → 6 (sous-tableau [4, -1, 2, 1])

// 15. Recherche binaire
// Implémentez l'algorithme de recherche binaire pour trouver un élément dans un tableau trié.
// Exemple : Pour le tableau [1, 2, 3, 4, 5], trouver 3 doit retourner l'index 2.

// Niveau 4 : Très difficile

// 16. Triangle de Pascal
// Écrivez une fonction qui génère le triangle de Pascal jusqu'à n lignes.
// Exemple : Pour n = 4, retournez :
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1]
// ]

// 17. Trouver le plus long préfixe commun
// Écrivez une fonction qui trouve le plus long préfixe commun parmi un tableau de chaînes de caractères.
// Exemple : ["flower", "flow", "flight"] → "fl"

// 18. Table de hachage
// Implémentez une table de hachage simple en TypeScript avec des méthodes pour ajouter, supprimer et rechercher des éléments.

// 19. Équilibre de parenthèses
// Écrivez une fonction qui détermine si une chaîne de caractères est équilibrée en termes de parenthèses, crochets et accolades.
// Exemple : "{[()]}" → true, "{[(])}" → false

// 20. Voyageur de commerce
// Implémentez une solution pour le problème du voyageur de commerce (TSP) en utilisant une approche de force brute.
// Pour les petits ensembles de villes, calculez le chemin le plus court qui visite chaque ville une fois et revient à la ville de départ.
