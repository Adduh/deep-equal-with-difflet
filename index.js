var difflet = require('difflet')({ indent: 2, comment : true  });

module.exports = function(actual, expected, message) {
    var diff = difflet.compare(actual, expected);
    message = message || 'deepEqual found the following diff: \n' + diff
    this(diff == '', '\033[0m' + message);
};
