'use strict';

var _BootstrapProvider = require('@bootstrap-styled/provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Hr component
 */
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
    className: props.className
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_index2.default, {
      className: props.className
    })
  ));
};

describe('<Hr />', function () {
  it('should render an <Hr> tag without a theme', function () {
    var renderedComponent = renderComponent({});
    expect(renderedComponent.find('hr').length).toBe(1);
  });
  it('should render a <hr> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({});
    expect(renderedComponent.find('hr').length).toBe(1);
  });
});