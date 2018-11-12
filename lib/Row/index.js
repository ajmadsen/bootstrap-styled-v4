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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _grid = require('@bootstrap-styled/css-mixins/lib/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  tag: 'div',
  theme: {
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$enable-grid-classes': false
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
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /** . */
  noGutters: _propTypes2.default.bool,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$grid-gutter-widths': _propTypes2.default.object,
    '$enable-grid-classes': _propTypes2.default.bool
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var RowUnstyled = function (_React$Component) {
  _inherits(RowUnstyled, _React$Component);

  function RowUnstyled() {
    _classCallCheck(this, RowUnstyled);

    return _possibleConstructorReturn(this, (RowUnstyled.__proto__ || Object.getPrototypeOf(RowUnstyled)).apply(this, arguments));
  }

  _createClass(RowUnstyled, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          noGutters = _omit.noGutters,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'noGutters', 'tag']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);

  return RowUnstyled;
}(_react2.default.Component);
/**
 * A simple way to build **responsive grids**.
 * Building a **grids layout** is very simple:
 * * Add a `<Row />` component
 * * Add as many `<Col />` component as you want as `child` of your `<Row />` component
 * Each column will have an equal width, no matter the number of columns.
 */


RowUnstyled.propTypes = propTypes;
RowUnstyled.defaultProps = defaultProps;
var Row = (0, _styledComponents2.default)(RowUnstyled).withConfig({
  displayName: 'Row',
  componentId: 'sc-2hg243-0'
})(['', ''], function (props) {
  return '\n    &.row {\n      ' + (0, _grid.makeRow)(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n    /*\n      Remove the negative margin from default .row, then the horizontal padding\n      from all immediate children columns (to prevent runaway style inheritance).\n    */\n\n    &.no-gutters {\n      margin-right: 0;\n      margin-left: 0;\n\n      > .col,\n      > [class*="col-"] {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n ';
});

Row.defaultProps = defaultProps;
Row.propTypes = propTypes;

/** @component */
exports.default = Row;