'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = exports.getColumnSizeClass = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _gridFramework = require('@bootstrap-styled/css-mixins/lib/grid-framework');

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]);

var columnProps = _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.shape({
  size: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string]),
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var getColumnSizeClass = exports.getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? '' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }

  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};

var defaultProps = exports.defaultProps = {
  tag: 'div',
  widths: colWidths,
  theme: {
    '$enable-grid-classes': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$grid-columns': '12',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    }
  }
};
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  /** Extra small columns variables. */
  xs: columnProps,
  /** Small columns variables. */
  sm: columnProps,
  /** Medium columns variables. */
  md: columnProps,
  /** Large columns variables. */
  lg: columnProps,
  /** Extra large columns variables. */
  xl: columnProps,
  /** Widths size variables. */
  widths: _propTypes2.default.array,
  /** Theme variables. */
  theme: _propTypes2.default.shape({}),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var ColUnstyled = function (_React$Component) {
  _inherits(ColUnstyled, _React$Component);

  function ColUnstyled() {
    _classCallCheck(this, ColUnstyled);

    return _possibleConstructorReturn(this, (ColUnstyled.__proto__ || Object.getPrototypeOf(ColUnstyled)).apply(this, arguments));
  }

  _createClass(ColUnstyled, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _this2 = this;

      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          widths = _omit.widths,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'widths', 'tag']);

      var colClasses = [];

      widths.forEach(function (colWidth, i) {
        var columnProp = _this2.props[colWidth];

        if (!i && columnProp === undefined) {
          columnProp = true;
        }

        delete attributes[colWidth];

        if (!columnProp) {
          return;
        }

        var isXs = !i;
        var colClass = void 0;

        if ((typeof columnProp === 'undefined' ? 'undefined' : _typeof(columnProp)) === 'object') {
          var _cn;

          var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
          colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);

          colClasses.push((0, _mapToCssModules2.default)((0, _classnames2.default)((_cn = {}, _defineProperty(_cn, colClass, columnProp.size || columnProp.size === ''), _defineProperty(_cn, 'push' + colSizeInterfix + columnProp.push, columnProp.push), _defineProperty(_cn, 'pull' + colSizeInterfix + columnProp.pull, columnProp.pull), _defineProperty(_cn, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset), _cn))), cssModule);
        } else {
          colClass = getColumnSizeClass(isXs, colWidth, columnProp);
          colClasses.push(colClass);
        }
      });

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, colClasses), cssModule)
      }, attributes));
    }
  }]);

  return ColUnstyled;
}(_react2.default.Component);
/**
 * Column component to use inside a `<Row />` component.
 */


ColUnstyled.propTypes = propTypes;
ColUnstyled.defaultProps = defaultProps;
var Col = (0, _styledComponents2.default)(ColUnstyled).withConfig({
  displayName: 'Col',
  componentId: 'sc-14ninbu-0'
})(['', ''], function (props) {
  return '\n    ' + (0, _gridFramework.makeGridColumns)(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});

Col.defaultProps = defaultProps;
Col.propTypes = propTypes;

/** @component */
exports.default = Col;