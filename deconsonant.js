/**
 * Load Module Dependencies
 */
// Expose Interface
module.exports = function deconsonant(str) {
  if(typeof str !== 'string'){
    throw new TypeError('Expected a string as the first option');
  }
  return str.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');
};