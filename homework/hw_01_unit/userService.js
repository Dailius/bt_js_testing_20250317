function isAdult(user) {
  return user.age >= 18;
}

function getFullName(user) {
  return `${user.firstName} ${user.lastName}`;
}

module.exports = { isAdult, getFullName };
