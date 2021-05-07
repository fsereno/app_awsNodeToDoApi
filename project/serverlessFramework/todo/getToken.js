"use strict;"

module.exports = (parseError, token) => !parseError && token ? token : undefined;