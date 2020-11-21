const parseStringAsArray = string => string.split(',')
.map(item => item.trim());

module.exports = parseStringAsArray;