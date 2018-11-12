'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Size variables. Can be: */
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  /** Color variables. Can be: */
  color: _propTypes2.default.oneOf(['success', 'info', 'warning', 'danger', 'white', 'gray-dark', 'primary', 'hide'])
};

var FaUnstyled = function (_React$Component) {
  _inherits(FaUnstyled, _React$Component);

  function FaUnstyled() {
    _classCallCheck(this, FaUnstyled);

    return _possibleConstructorReturn(this, (FaUnstyled.__proto__ || Object.getPrototypeOf(FaUnstyled)).apply(this, arguments));
  }

  _createClass(FaUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    value: function render() {
      var _cn;

      var _props = this.props,
          className = _props.className,
          size = _props.size,
          color = _props.color,
          attributes = _objectWithoutProperties(_props, ['className', 'size', 'color']);

      var classes = (0, _classnames2.default)(className, 'fa', (_cn = {}, _defineProperty(_cn, 'text-' + color, color), _defineProperty(_cn, 'fa-' + size, size), _cn));

      return _react2.default.createElement('i', {
        className: (0, _classnames2.default)(classes, Object.keys(attributes).map(function (key) {
          return 'fa-' + key;
        }))
      });
    } // eslint-disable-line react/prefer-stateless-function
    /* eslint-disable react/no-unused-prop-types */

  }]);

  return FaUnstyled;
}(_react2.default.Component);

FaUnstyled.propTypes = propTypes;


var Fa = (0, _styledComponents2.default)(FaUnstyled).withConfig({
  displayName: 'Fa',
  componentId: 'kluax7-0'
})(['&.fa-lg{vertical-align:-2%;}']);

Fa.propTypes = propTypes;

/** @component */
exports.default = Fa;