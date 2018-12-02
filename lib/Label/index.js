'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

var _buttons = require('@bootstrap-styled/css-mixins/lib/buttons');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Label component
                                                                                                                                                                                                                              */

var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

var stringOrNumberProp = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]);

var columnProps = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.shape({
  size: stringOrNumberProp,
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);

var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string]),
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({}),
  /** Toggles check CSS style. */
  check: _propTypes2.default.bool,
  /** Specified node element will be passed as children of `<Label />` component. */
  children: _propTypes2.default.node,
  /** Toggles disabled CSS style. */
  disabled: _propTypes2.default.bool,
  /** `For` attribute ill be replaced with the specified one. */
  for: _propTypes2.default.string,
  /** Toggles hidden CSS style. */
  hidden: _propTypes2.default.bool,
  /** Toggles inline CSS style. */
  inline: _propTypes2.default.bool,
  /** `size` attribute ill be replaced with the specified one. */
  size: _propTypes2.default.string,
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
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var defaultProps = exports.defaultProps = {
  tag: 'label',
  theme: _theme2.default
};

var LabelUnstyled = function LabelUnstyled(props) {
  // eslint-disable-line
  var _omit = (0, _lodash2.default)(props, ['theme']),
      className = _omit.className,
      cssModule = _omit.cssModule,
      hidden = _omit.hidden,
      Tag = _omit.tag,
      check = _omit.check,
      inline = _omit.inline,
      disabled = _omit.disabled,
      size = _omit.size,
      htmlFor = _omit.for,
      attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'hidden', 'tag', 'check', 'inline', 'disabled', 'size', 'for']);

  var colClasses = [];

  colSizes.forEach(function (colSize) {
    // eslint-disable-line
    var columnProp = props[colSize];
    delete attributes[colSize];

    if (columnProp && columnProp.size) {
      var _cn;

      colClasses.push((0, _mapToCssModules2.default)((0, _classnames2.default)((_cn = {}, _defineProperty(_cn, 'col-' + colSize + '-' + columnProp.size, columnProp.size), _defineProperty(_cn, 'push-' + colSize + '-' + columnProp.push, columnProp.push), _defineProperty(_cn, 'pull-' + colSize + '-' + columnProp.pull, columnProp.pull), _defineProperty(_cn, 'offset-' + colSize + '-' + columnProp.offset, columnProp.offset), _cn))), cssModule);
    } else if (columnProp) {
      colClasses.push('col-' + colSize + '-' + columnProp);
    }
  });

  var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, hidden ? 'sr-only' : false, check ? 'form-check-' + (inline ? 'inline' : 'label') : false, check && inline && disabled ? 'disabled' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);

  return _react2.default.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};
/**
 * `<Label />` defines a label for an <input> element.
 */
var Label = (0, _styledComponents2.default)(LabelUnstyled).withConfig({
  displayName: 'Label',
  componentId: 'sc-1f2mnn3-0'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    /* Allow labels to use margin for spacing. */\n    display: inline-block;\n    margin-bottom: ' + props.theme['$label-margin-bottom'] + ';\n\n    ' + (0, _buttons.button)(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

/** @component */
exports.default = Label;