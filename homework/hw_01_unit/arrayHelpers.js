function findMax(arr) {
  if (!arr.length) return null;
  return Math.max(...arr);
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

module.exports = { findMax, removeDuplicates };
