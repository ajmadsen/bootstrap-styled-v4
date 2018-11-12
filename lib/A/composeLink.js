'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = composeLink;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _a = require('@bootstrap-styled/css-mixins/lib/a');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  theme: _theme2.default
};

function composeLink(RouterLink) {
  var Link = function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link() {
      _classCallCheck(this, Link);

      return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _omit = (0, _lodash2.default)(this.props, ['theme']),
            className = _omit.className,
            to = _omit.to,
            attributes = _objectWithoutProperties(_omit, ['className', 'to']);

        return _react2.default.createElement(RouterLink, _extends({ className: className, to: to }, attributes));
      } // eslint-disable-line react/prefer-stateless-function

    }]);

    return Link;
  }(_react2.default.Component);

  // eslint-disable-next-line no-class-assign


  Link.propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: _propTypes2.default.string,
    to: _propTypes2.default.string.isRequired,
    theme: _propTypes2.default.object
    /* eslint-enable react/no-unused-prop-types */
  };
  Link = (0, _styledComponents2.default)(Link).withConfig({
    displayName: 'composeLink__Link',
    componentId: 'rslfo4-0'
  })(['', ''], function (props) {
    return '\n      ' + (0, _a.a)(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n    ';
  });
  Link.defaultProps = defaultProps;
  return Link;
}