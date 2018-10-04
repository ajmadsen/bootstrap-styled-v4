'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _A = require('../A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  tag: _A2.default
};
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /** Use that property to pass a ref callback to the native button component. */
  innerRef: _propTypes2.default.func,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var CardLink = function (_React$Component) {
  _inherits(CardLink, _React$Component);

  function CardLink() {
    _classCallCheck(this, CardLink);

    return _possibleConstructorReturn(this, (CardLink.__proto__ || Object.getPrototypeOf(CardLink)).apply(this, arguments));
  }

  _createClass(CardLink, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = _objectWithoutProperties(_props, ['className', 'cssModule', 'tag', 'innerRef']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'card-link'), cssModule),
        ref: innerRef
      }, attributes));
    }
  }]);

  return CardLink;
}(_react2.default.Component);

CardLink.propTypes = propTypes;
CardLink.defaultProps = defaultProps;


CardLink.defaultProps = defaultProps;
CardLink.propTypes = propTypes;

exports.default = CardLink;