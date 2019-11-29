/**
 * @name receipe
 * @author Aélion - Nov. 2019 - Jean-Luc (the only one)
 * @package
 * @version 1.0.0
 */

/**
 * 
 * @param {number} price 
 * @param {number} quantity 
 * @param {string} sourceUnit 
 * @param {string} targetUnit 
 * @param {Optional number} targetQuantity 
 * 
 * @return number
 * 
 * Compute ingredient price
 */
function prix(price, quantity, sourceUnit, targetUnit, targetQuantity = null) {
    let ingredientPrice = 0;

    if (sourceUnit == targetUnit) {
        if (targetQuantity != null) {
            ingredientPrice = (price / targetQuantity) * quantity;
        } else {
            ingredientPrice = price * quantity;
        }
    } else {
        switch (sourceUnit) {
            case 'kg':
                ingredientPrice = price * (quantity / 1000);
                break;

            case 'l':
                switch (targetUnit) {
                    case 'cl':
                        ingredientPrice = price * (quantity / 100);
                        break;

                    case 'ml':
                        ingredientPrice = price * (quantity / 1000);
                        break;
                }
                break;
        }
    }

    return ingredientPrice;
}

/**
 * Compute the sale's price for a predefined ratio
 * 
 * @param {number} coutProduction 
 * @param {number} taux 
 * @return number
 */
function rentabilite(coutProduction, taux) {
    return coutProduction + ((coutProduction * taux) / 100);
}

/**
 * @constant array
 * Collection of ingredients
 */
const ingredients = [
    ['Farine', 1.8, 'kg', 300, 'g'],
    ['Oeufs', 0.22, 'unite', 3, 'unite'],
    ['Sucre', 0.69, 'kg', 60, 'g'],
    ['Beurre', 19.60, 'kg', 50, 'g'],
    ['Lait', 0.94, 'l', 60, 'cl'],
    ['Rhum', 9.75, 'cl', 5, 'cl', 70]
];

/**
 * @constant array
 * ROI
 */
const tauxRentabilite = [20, 25, 30, 35, 40, 45, 50, 100, 150, 200, 300, 500, 550];

/**
 * @constant number
 * Quantile of hour (3mn)
 */
const tempsCuisson = 0.05;

/**
 * @constant number
 * Electric consumption per hour
 */
const consoHeure = 0.3;

let coutProductionRecette = 0;
let coutProduction = 0;
const qteProduite = 15;


let tpsTotal = 0;

const qteAProduire = 300;

// First... Loop over ingredients to display each ingredient with price
for (let i = 0; i < ingredients.length; i++) {
    let ingredient = ingredients[i]; // Store the array of ingredients at the indice "i"

    // Cumul les coûts de production...
    coutProductionRecette = coutProductionRecette + prix(ingredient[1], ingredient[3], ingredient[2], ingredient[4], ingredient[5]);
}

console.log('Coût pour ' + qteProduite + ' crèpes : ' + coutProductionRecette);

// Calcul du coût pour une crèpe
coutProduction = coutProductionRecette / qteProduite;

console.log('Coût pour une crèpe : ' + coutProduction);

// Estimation des prix de vente
tauxRentabilite.forEach((taux, index) => {
    console.log(`Vendre à ${rentabilite(coutProduction, taux).toFixed(2)}€ [Taux : ${taux}%]`);
});