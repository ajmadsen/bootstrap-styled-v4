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

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _unitUtils = require('@bootstrap-styled/utils/lib/unitUtils');

var _unitUtils2 = _interopRequireDefault(_unitUtils);

var _conditional = require('@bootstrap-styled/css-mixins/lib/conditional');

var _boxShadow = require('@bootstrap-styled/css-mixins/lib/box-shadow');

var _borderRadius = require('@bootstrap-styled/css-mixins/lib/border-radius');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  active: false,
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': true,
    $white: '#fff',
    '$drawer-bg': '#fff',
    '$drawer-transition': 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    '$drawer-box-shadow': 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    '$drawer-border-radius': '0px',
    '$drawer-zindex': '1030',
    '$drawer-docked-width': '55px'
  }
};

var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Toggles open Panel. */
  active: _propTypes2.default.bool.isRequired,
  /** Place Drawer at the top of screen with it's set height */
  top: _propTypes2.default.string,
  /** Place Drawer at the right of screen with it's set width */
  right: _propTypes2.default.string,
  /** Place Drawer at the bottom of screen with it's set height */
  bottom: _propTypes2.default.string,
  /** Place Drawer at the left of screen with it's set width */
  left: _propTypes2.default.string,
  /** Toggles to make Drawer part of layout rather than float above. */
  docked: _propTypes2.default.bool,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-shadows': _propTypes2.default.bool,
    '$drawer-bg': _propTypes2.default.string,
    '$drawer-transition': _propTypes2.default.string,
    '$drawer-box-shadow': _propTypes2.default.string,
    '$drawer-border-radius': _propTypes2.default.string,
    '$drawer-zindex': _propTypes2.default.string,
    '$drawer-docked-width': _propTypes2.default.string
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var DrawerUnstyled = function (_React$Component) {
  _inherits(DrawerUnstyled, _React$Component);

  function DrawerUnstyled() {
    _classCallCheck(this, DrawerUnstyled);

    return _possibleConstructorReturn(this, (DrawerUnstyled.__proto__ || Object.getPrototypeOf(DrawerUnstyled)).apply(this, arguments));
  }

  _createClass(DrawerUnstyled, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    /* eslint-disable react/no-unused-prop-types */
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          top = _omit.top,
          right = _omit.right,
          bottom = _omit.bottom,
          left = _omit.left,
          docked = _omit.docked,
          cssModule = _omit.cssModule,
          props = _objectWithoutProperties(_omit, ['className', 'active', 'top', 'right', 'bottom', 'left', 'docked', 'cssModule']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, !docked ? 'drawer' : 'drawer-docked', {
        active: active,
        'drawer-top': top,
        'drawer-right': right,
        'drawer-bottom': bottom,
        'drawer-left': left
      }, cssModule));

      return _react2.default.createElement('div', _extends({ className: classes }, props));
    }
    /* eslint-enable react/no-unused-prop-types */

  }]);

  return DrawerUnstyled;
}(_react2.default.Component);

DrawerUnstyled.propTypes = propTypes;
DrawerUnstyled.defaultProps = defaultProps;


var Drawer = (0, _styledComponents2.default)(DrawerUnstyled).withConfig({
  displayName: 'Drawer',
  componentId: 'rffq8f-0'
})(['', ''], function (props) {
  return '\n    &.drawer {\n      background-color: ' + props.theme['$drawer-bg'] + ';\n      transition: ' + props.theme['$drawer-transition'] + ';\n      position: fixed;\n      flex: 1 0 auto;\n      z-index: ' + props.theme['$drawer-zindex'] + ';\n      overflow-y: auto;\n      outline: none;\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$drawer-border-radius']) + '\n      ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$drawer-box-shadow']) + '\n      &.drawer-top {\n        ' + (0, _conditional.ifThen)(props.top, '\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: ' + props.top + ';\n            transform: translate(0px, -' + (props.top && _unitUtils2.default.math.addition(props.top, 4)) + ');\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-right {\n        ' + (0, _conditional.ifThen)(props.right, '\n            bottom: 0;\n            right: 0;\n            height: 100%;\n            width: ' + props.right + ';\n            transform: translate(' + (props.right && _unitUtils2.default.math.addition(props.right, 4)) + ', 0px);\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-bottom {\n        ' + (0, _conditional.ifThen)(props.bottom, '\n            left: 0;\n            bottom: 0;\n            width: 100%;\n            height: ' + props.bottom + ';\n            transform: translate(0px, ' + (props.bottom && _unitUtils2.default.math.addition(props.bottom, 4)) + ');\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-left {\n        ' + (0, _conditional.ifThen)(props.left, '\n            bottom: 0;\n            left: 0;\n            height: 100%;\n            width: ' + props.left + ';\n            transform: translate(-' + (props.left && _unitUtils2.default.math.addition(props.left, 4)) + ', 0px);\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n    }\n    &.drawer-docked { \n      flex: 0 0 auto;\n      overflow: hidden;\n      background-color: ' + props.theme['$drawer-bg'] + ';\n      &.drawer-left {\n        ' + (0, _conditional.ifThen)(props.left, '\n          width: ' + props.theme['$drawer-docked-width'] + ';\n          transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;\n          &.active {\n            width: ' + props.left + ';\n          }\n          ') + '\n      }\n    }\n  ';
});

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

/** @component */
exports.default = Drawer;