const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arguments) {
  let members = [] ;
   if ( arguments === null ||  arguments === undefined) {
     return false;
    }
    console.log(arguments);
   for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === null || arguments[i] == undefined || typeof arguments[i] !== 'string' ) {
      throw new NotImplementedError();
      }
     
      for(let j = 0; j < arguments[i].length; j++) 
      arguments[i] = arguments[i].trim()
    members.push(arguments[i][0]);
    
  
   }
   return members.sort().join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
