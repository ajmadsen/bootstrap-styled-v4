'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = exports.makeThemeList = undefined;

var _makeTheme = require('@bootstrap-styled/bootstrap-styled/lib/theme/makeTheme');

var _utils = require('@bootstrap-styled/bootstrap-styled/lib/utils');

var _makeOriginal = require('@bootstrap-styled/bootstrap-styled/lib/theme/makeOriginal');

var _makeOriginal2 = _interopRequireDefault(_makeOriginal);

var _theme = require('../A/theme');

var _theme2 = require('../Alert/theme');

var _theme3 = require('../Badge/theme');

var _theme4 = require('../Blockquote/theme');

var _theme5 = require('../Breadcrumb/theme');

var _theme6 = require('../Button/theme');

var _theme7 = require('../ButtonGroup/theme');

var _theme8 = require('../Caption/theme');

var _theme9 = require('../Cards/theme');

var _theme10 = require('../Close/theme');

var _theme11 = require('../Code/theme');

var _theme12 = require('../Col/theme');

var _theme13 = require('../Collapse/theme');

var _theme14 = require('../Container/theme');

var _theme15 = require('../ContainerFluid/theme');

var _theme16 = require('../Dd/theme');

var _theme17 = require('../Dl/theme');

var _theme18 = require('../Drawer/theme');

var _theme19 = require('../Dropdown/theme');

var _theme20 = require('../Dt/theme');

var _theme21 = require('../Fieldset/theme');

var _theme22 = require('../Form/theme');

var _theme23 = require('../H1/theme');

var _theme24 = require('../H2/theme');

var _theme25 = require('../H3/theme');

var _theme26 = require('../H4/theme');

var _theme27 = require('../H5/theme');

var _theme28 = require('../H6/theme');

var _theme29 = require('../Header/theme');

var _theme30 = require('../Hr/theme');

var _theme31 = require('../Img/theme');

var _theme32 = require('../Input/theme');

var _theme33 = require('../InputGroup/theme');

var _theme34 = require('../Jumbotron/theme');

var _theme35 = require('../Kbd/theme');

var _theme36 = require('../Label/theme');

var _theme37 = require('../Li/theme');

var _theme38 = require('../ListGroup/theme');

var _theme39 = require('../Mark/theme');

var _theme40 = require('../Modal/theme');

var _theme41 = require('../Nav/theme');

var _theme42 = require('../Navbar/theme');

var _theme43 = require('../Ol/theme');

var _theme44 = require('../P/theme');

var _theme45 = require('../Pagination/theme');

var _theme46 = require('../Pre/theme');

var _theme47 = require('../Progress/theme');

var _theme48 = require('../Row/theme');

var _theme49 = require('../Small/theme');

var _theme50 = require('../Table/theme');

var _theme51 = require('../Ul/theme');

var _theme52 = require('../Tooltip/theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeThemeList = exports.makeThemeList = [_makeOriginal2.default, _theme.makeTheme, _theme2.makeTheme, _theme3.makeTheme, _theme4.makeTheme, _theme5.makeTheme, _theme6.makeTheme, _theme7.makeTheme, _theme8.makeTheme, _theme9.makeTheme, _theme10.makeTheme, _theme11.makeTheme, _theme12.makeTheme, _theme13.makeTheme, _theme14.makeTheme, _theme15.makeTheme, _theme16.makeTheme, _theme17.makeTheme, _theme19.makeTheme, _theme20.makeTheme, _theme21.makeTheme, _theme22.makeTheme, _theme23.makeTheme, _theme24.makeTheme, _theme25.makeTheme, _theme26.makeTheme, _theme27.makeTheme, _theme28.makeTheme, _theme29.makeTheme, _theme30.makeTheme, _theme31.makeTheme, _theme32.makeTheme, _theme33.makeTheme, _theme34.makeTheme, _theme35.makeTheme, _theme36.makeTheme, _theme37.makeTheme, _theme38.makeTheme, _theme39.makeTheme, _theme40.makeTheme, _theme41.makeTheme, _theme42.makeTheme, _theme43.makeTheme, _theme44.makeTheme, _theme45.makeTheme, _theme46.makeTheme, _theme47.makeTheme, _theme48.makeTheme, _theme49.makeTheme, _theme50.makeTheme, _theme51.makeTheme, _theme52.makeTheme, _theme18.makeTheme];

/* eslint-disable */

var theme = (0, _makeTheme.makeTheme)(makeThemeList);

var makeTheme = exports.makeTheme = (0, _utils.toMakeTheme)(theme);

exports.default = theme;