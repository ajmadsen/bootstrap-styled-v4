'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('@bootstrap-styled/provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our H6 component
 */
var children = _react2.default.createElement(
  'p',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _index2.default,
    props,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _index2.default,
      props,
      props.children
    )
  ));
};

describe('<H6 />', function () {
  it('should render an <H6> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('H6Unstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <H6> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('H6').length).toBe(1);
  });
  it('should have an attribute color', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'danger'
    });
    expect(renderedComponent.find('H6').props().color).toBe('danger');
  });
  it('should have a classname lead', function () {
    var renderedComponent = renderComponentUsingTheme({
      lead: true
    });
    expect(renderedComponent.find('h6').hasClass('lead'));
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});