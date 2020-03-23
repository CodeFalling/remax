'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index = require('./index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var React__default = _interopDefault(React);

function useAppContextValue() {
  var _useState = React.useState(false),
      _useState2 = index._slicedToArray(_useState, 1),
      bindStatus = _useState2[0];

  return {
    bindStatus: bindStatus
  };
}

var defaultAppContext = new Proxy({}, {
  get: function get() {
    throw new Error('This object should never be called');
  }
});
var AppContext = React.createContext(defaultAppContext);

var AppContextProvider = function AppContextProvider(props) {
  var context = useAppContextValue();
  return /*#__PURE__*/React__default.createElement(AppContext.Provider, {
    value: context
  }, props.children);
};

var _App = /*#__PURE__*/function (_React$Component) {
  index._inherits(_App, _React$Component);

  var _super = index._createSuper(_App);

  function _App() {
    index._classCallCheck(this, _App);

    return _super.apply(this, arguments);
  }

  index._createClass(_App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React__default.createElement(AppContextProvider, null, this.props.children);
    }
  }]);

  return _App;
}(React__default.Component);

var app = App(index.createAppConfig(_App));

exports.AppContext = AppContext;
exports.default = app;
