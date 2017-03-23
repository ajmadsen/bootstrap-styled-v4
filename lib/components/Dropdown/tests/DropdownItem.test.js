'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Dropdown component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _DropdownItem = require('../DropdownItem');

var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var _ref = _jsx(_BootstrapProvider2.default, {}, void 0, _jsx(_DropdownItem2.default, {}, void 0, children));

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  return (0, _enzyme.mount)(_ref);
};

var _ref2 = _jsx(_DropdownItem2.default, {
  header: true
}, void 0, 'Heading');

var _ref3 = _jsx(_DropdownItem2.default, {
  header: true
}, void 0, 'Heading');

var _ref4 = _jsx(_DropdownItem2.default, {
  divider: true
});

var _ref5 = _jsx(_DropdownItem2.default, {
  disabled: true
}, void 0, 'Item');

var _ref6 = _jsx(_DropdownItem2.default, {
  divider: true
});

var _ref7 = _jsx(_DropdownItem2.default, {
  header: true
}, void 0, 'Header');

var _ref8 = _jsx(_DropdownItem2.default, {}, void 0, 'Click me');

describe('<DropdownItem />', function () {
  it('should render an <DropdownItem> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownItem').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  describe('header', function () {
    it('should render h6 tag heading', function () {
      var renderedComponent = (0, _enzyme.mount)(_ref2);

      expect(renderedComponent.find('h6').length).toBe(1);
      expect(renderedComponent.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(renderedComponent.text()).toBe('Heading');
    });
  });

  var isOpen = void 0; // eslint-disable-line no-unused-vars

  beforeEach(function () {
    isOpen = false;
  });

  describe('header', function () {
    it('should render h6 tag heading', function () {
      var renderedComponent = (0, _enzyme.mount)(_ref3);

      expect(renderedComponent.find('h6').length).toBe(1);
      expect(renderedComponent.find('h6').hasClass('dropdown-header')).toBe(true);
      expect(renderedComponent.text()).toBe('Heading');
    });
  });

  describe('divider', function () {
    it('should render a divider element', function () {
      var renderedComponent = (0, _enzyme.mount)(_ref4);
      expect(renderedComponent.find('.dropdown-divider').length).toBe(1);
    });
  });
  describe('onClick', function () {
    it('should not be called when disabled', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_ref5);
      renderedComponent.find('button').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should not be called when divider is set', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_ref6);
      renderedComponent.find('div').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should not be called when header item', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_ref7);
      renderedComponent.find('h6').simulate('click');
      expect(functionTest).not.toHaveBeenCalled();
    });

    it('should call toggle', function () {
      var functionTest = jest.fn();
      var renderedComponent = (0, _enzyme.mount)(_ref8, {
        context: {
          toggle: functionTest
        }
      });
      renderedComponent.find('button').simulate('click');
      expect(functionTest).toHaveBeenCalled();
    });
  });
});