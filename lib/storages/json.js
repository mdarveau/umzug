'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class JSONStorage
 */
module.exports = function () {
  /**
   * Constructs JSON file storage.
   *
   * @param {Object} [options]
   * @param {Object} [options.storageOptions]
   * @param {String} [options.storageOptions.path='./umzug.json'] - Path to JSON
   * file where the log is stored. Defaults './umzug.json' relative to process'
   * cwd.
   * @constructs JSONStorage
   */
  function JSONStorage() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, JSONStorage);

    this.options = options;

    this.options.storageOptions = _extends({
      path: _path2.default.resolve(process.cwd(), 'umzug.json')
    }, this.options.storageOptions || {});
  }

  /**
   * Logs migration to be considered as executed.
   *
   * @param {String} migrationName - Name of the migration to be logged.
   * @returns {Promise}
   */


  _createClass(JSONStorage, [{
    key: 'logMigration',
    value: function logMigration(migrationName) {
      var filePath = this.options.storageOptions.path;
      var readfile = _bluebird2.default.promisify(_fs2.default.readFile);
      var writefile = _bluebird2.default.promisify(_fs2.default.writeFile);

      return readfile(filePath).catch(function () {
        return '[]';
      }).then(function (content) {
        return JSON.parse(content);
      }).then(function (content) {
        content.push(migrationName);
        return writefile(filePath, JSON.stringify(content, null, '  '));
      });
    }

    /**
     * Unlogs migration to be considered as pending.
     *
     * @param {String} migrationName - Name of the migration to be unlogged.
     * @returns {Promise}
     */

  }, {
    key: 'unlogMigration',
    value: function unlogMigration(migrationName) {
      var filePath = this.options.storageOptions.path;
      var readfile = _bluebird2.default.promisify(_fs2.default.readFile);
      var writefile = _bluebird2.default.promisify(_fs2.default.writeFile);

      return readfile(filePath).catch(function () {
        return '[]';
      }).then(function (content) {
        return JSON.parse(content);
      }).then(function (content) {
        content = _lodash2.default.without(content, migrationName);
        return writefile(filePath, JSON.stringify(content, null, '  '));
      });
    }

    /**
     * Gets list of executed migrations.
     *
     * @returns {Promise.<String[]>}
     */

  }, {
    key: 'executed',
    value: function executed() {
      var filePath = this.options.storageOptions.path;
      var readfile = _bluebird2.default.promisify(_fs2.default.readFile);

      return readfile(filePath).catch(function () {
        return '[]';
      }).then(function (content) {
        return JSON.parse(content);
      });
    }
  }]);

  return JSONStorage;
}();