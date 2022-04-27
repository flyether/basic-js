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
  if (typeof arguments[i] !== 'string') {
    return false;
   }
 for (let i = 0; i < arguments.length; i++) {
  
  members.push(arguments[i][0]);

 }
 return members.sort().toUpperCase().join('');
}

module.exports = {
  createDreamTeam
};
