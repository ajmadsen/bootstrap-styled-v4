'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = undefined;

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

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _media = require('@bootstrap-styled/css-mixins/lib/media');

var _A = require('../A');

var _A2 = _interopRequireDefault(_A);

var _Img = require('../Img');

var _Img2 = _interopRequireDefault(_Img);

var _Ul = require('../Ul');

var _Ul2 = _interopRequireDefault(_Ul);

var _H = require('../H4');

var _H2 = _interopRequireDefault(_H);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * Media component
 */

var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<Media />` component. */
  children: _propTypes2.default.node,
  /** Toggles body CSS style. */
  body: _propTypes2.default.bool,
  /** Toggles body CSS style. */
  bottom: _propTypes2.default.bool,
  /** Toggles heading CSS style. */
  heading: _propTypes2.default.bool,
  /** Toggles left CSS display. */
  left: _propTypes2.default.bool,
  /** Toggles list CSS style. */
  list: _propTypes2.default.bool,
  /** Toggles middle CSS style. */
  middle: _propTypes2.default.bool,
  /** Toggles object CSS style. */
  object: _propTypes2.default.bool,
  /** Toggles right CSS style. */
  right: _propTypes2.default.bool,
  /** . */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  /** Toggles top CSS style. */
  top: _propTypes2.default.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};
/**
 * A classic `<Media />` component.
 * The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.
 * Use Nesting with Media objects can be infinitely nested, though we suggest you stop at some point. Place nested Media within the .media-body of a parent media object.
 * Or alignment Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your .media-body content.
 */

var MediaUnstyled = function (_React$Component) {
  _inherits(MediaUnstyled, _React$Component);

  function MediaUnstyled() {
    _classCallCheck(this, MediaUnstyled);

    return _possibleConstructorReturn(this, (MediaUnstyled.__proto__ || Object.getPrototypeOf(MediaUnstyled)).apply(this, arguments));
  }

  _createClass(MediaUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          body = _props.body,
          bottom = _props.bottom,
          className = _props.className,
          cssModule = _props.cssModule,
          heading = _props.heading,
          left = _props.left,
          list = _props.list,
          middle = _props.middle,
          object = _props.object,
          right = _props.right,
          tag = _props.tag,
          top = _props.top,
          attributes = _objectWithoutProperties(_props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);

      var defaultTag = void 0;
      if (heading) {
        defaultTag = _H2.default;
      } else if (left || right) {
        defaultTag = _A2.default;
      } else if (object) {
        defaultTag = _Img2.default;
      } else if (list) {
        defaultTag = _Ul2.default;
      } else {
        defaultTag = 'div';
      }
      var Tag = tag || defaultTag;

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
        'media-body': body,
        'media-heading': heading,
        'media-left': left,
        'media-right': right,
        'media-top': top,
        'media-bottom': bottom,
        'media-middle': middle,
        'media-object': object,
        'media-list': list,
        media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
      }), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return MediaUnstyled;
}(_react2.default.Component);

MediaUnstyled.propTypes = propTypes;


var Media = (0, _styledComponents2.default)(MediaUnstyled).withConfig({
  displayName: 'Media',
  componentId: 'sc-1pt808a-0'
})(['&.media,& .media{display:flex;align-items:flex-start;}& .media-body{flex:1 1 0%}', ''], (0, _media.media)());

Media.propTypes = propTypes;

/** @component */
exports.default = Media;