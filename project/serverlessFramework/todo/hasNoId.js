"use strict;"

module.exports = (item) => item ? (!item.id || item.id === "-1") : true;