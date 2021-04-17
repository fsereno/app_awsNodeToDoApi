"use strict;"

exports.handler = (item) => item ? (!item.id || item.id === "-1") : false;