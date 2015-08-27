var babel = require('babel-core')

module.exports = {
	process: function (src) {
		return babel.transform(src).code
	}
}
