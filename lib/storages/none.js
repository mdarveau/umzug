'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class NoneStorage
 */
module.exports = function () {
  /**
   * Constructs none storage.
   *
   * @param {Object} [options]
   * @constructs NoneStorage
   */
  function NoneStorage(options) {
    _classCallCheck(this, NoneStorage);
  }

  /**
   * Does nothing.
   *
   * @param {String} migrationName - Name of migration to be logged.
   * @returns {Promise}
   */


  _createClass(NoneStorage, [{
    key: 'logMigration',
    value: function logMigration(migrationName) {
      return _bluebird2.default.resolve();
    }

    /**
     * Does nothing.
     *
     * @param {String} migrationName - Name of migration to unlog.
     * @returns {Promise}
     */

  }, {
    key: 'unlogMigration',
    value: function unlogMigration(migrationName) {
      return _bluebird2.default.resolve();
    }

    /**
     * Does nothing.
     *
     * @returns {Promise.<String[]>}
     */

  }, {
    key: 'executed',
    value: function executed() {
      return _bluebird2.default.resolve([]);
    }
  }]);

  return NoneStorage;
}();