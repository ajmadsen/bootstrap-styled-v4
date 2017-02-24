var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Small component
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';

var defaultProps = { theme: bsTheme };

var Small = function (_React$Component) {
  _inherits(Small, _React$Component);

  function Small() {
    _classCallCheck(this, Small);

    return _possibleConstructorReturn(this, (Small.__proto__ || Object.getPrototypeOf(Small)).apply(this, arguments));
  }

  _createClass(Small, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'children']); // eslint-disable-line no-unused-vars

      return React.createElement(
        'small',
        _extends({ className: className }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Small;
}(React.Component);

// eslint-disable-next-line no-class-assign


Small = styled(Small).withConfig({
  displayName: 'Small__Small',
  componentId: 'Small__Small-19q3vvc'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    font-size: ' + props.theme['$small-font-size'] + ';\n    font-weight: normal;\n  ';
});

Small.defaultProps = defaultProps;

export default Small;