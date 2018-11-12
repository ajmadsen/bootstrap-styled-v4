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

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _grid = require('@bootstrap-styled/css-mixins/lib/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* A Fieldset (Box) */

var defaultProps = exports.defaultProps = {
  theme: {
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$enable-grid-classes': true
  }
};
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Node element passed has child of fieldset component */
  children: _propTypes2.default.node.isRequired,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$grid-gutter-widths': _propTypes2.default.object,
    '$enable-grid-classes': _propTypes2.default.bool
  })
};

var FieldsetUnstyled = function (_React$Component) {
  _inherits(FieldsetUnstyled, _React$Component);

  function FieldsetUnstyled() {
    _classCallCheck(this, FieldsetUnstyled);

    return _possibleConstructorReturn(this, (FieldsetUnstyled.__proto__ || Object.getPrototypeOf(FieldsetUnstyled)).apply(this, arguments));
  }

  _createClass(FieldsetUnstyled, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          rest = _objectWithoutProperties(_omit, ['className', 'children']);

      return _react2.default.createElement(
        'fieldset',
        _extends({
          className: className
        }, rest),
        children
      );
    }
  }]);

  return FieldsetUnstyled;
}(_react2.default.Component);
/**
 * `<Fieldset />` component is used to group related elements in a form.
 */


FieldsetUnstyled.propTypes = propTypes;
FieldsetUnstyled.defaultProps = defaultProps;
var Fieldset = (0, _styledComponents2.default)(FieldsetUnstyled).withConfig({
  displayName: 'Fieldset',
  componentId: 'sc-7vwzmh-0'
})(['', ''], function (props) {
  return '\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n\n    & .row {\n      ' + (0, _grid.makeRow)(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n\n  ';
});

Fieldset.defaultProps = defaultProps;
Fieldset.propTypes = propTypes;

/** @component */
exports.default = Fieldset;