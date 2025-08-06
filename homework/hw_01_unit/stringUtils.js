function capitalize(str) {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function containsSubstring(str, sub) {
  return str.includes(sub);
}

module.exports = { capitalize, containsSubstring };
