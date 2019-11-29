const readLine = require('readline-sync');

/**
 * @name index
 * @author Aélion - Nov. 2019
 * @package
 * @version 1.0.0
 */

/**
 * @constant who string
 * Store the name of the one i want to say hello
 */
const who = readLine.question('Who are you ? ');

console.log('Hello ' + who);