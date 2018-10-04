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
 * Testing our Nav component
 */

var children = _react2.default.createElement(
  'h1',
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

describe('<Nav />', function () {
  it('should render an <Nav> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('NavUnstyled').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <nav> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Nav').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class navbar-nav but not nav', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      navbar: true
    });
    expect(renderedComponent.find('ul').hasClass('navbar-nav')).toBe(true);
  });
  it('should have a class nav-tabs', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      tabs: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-tabs')).toBe(true);
  });
  it('should have a class nav-pills', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      pills: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-pills')).toBe(true);
  });
  it('should have a class nav-fill', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      fill: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-fill')).toBe(true);
  });
  it('should have a class nav-inline', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inline: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-inline')).toBe(true);
  });
  it('should have a class nav-stacked', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      stacked: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-stacked')).toBe(true);
  });
  it('should have a class nav-justified', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      justified: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-justified')).toBe(true);
  });
  it('should have a class flex-column', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      vertical: true
    });
    expect(renderedComponent.find('ul').hasClass('flex-column')).toBe(true);
  });
});