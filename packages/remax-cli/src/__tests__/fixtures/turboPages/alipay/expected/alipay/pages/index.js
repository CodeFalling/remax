'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index$1 = require('../index-chunk.js');
require('react-reconciler');
require('scheduler');
var React = require('react');
var index$2 = require('../index-chunk2.js');

var NativeComponent = index$1.createNativeComponent('native-component-0');
var RenameView = index$2.View;
var Deep = {
  Object: {
    View: index$2.View
  }
};
var DDD = index$1.createHostComponent('ddd');

function ReactComp(_ref) {
  var children = _ref.children;
  return React.createElement(React.Fragment, null, React.createElement(index$2.View, {
    _tid: "1"
  }, React.createElement("stub-block", null), React.createElement(React.Fragment, null, React.createElement("stub-block", null)), React.createElement("block", null, React.createElement(index$2.View, {
    _tid: "2"
  }, "View inside Expression")), React.createElement("block", null, React.Children.map(children, function (child, index) {
    return React.cloneElement(child, {
      id: 'reactComp' + index
    });
  }))));
}

function _ref2() {
  var _React$useState = React.useState(1),
      _React$useState2 = index$1._slicedToArray(_React$useState, 1),
      count = _React$useState2[0];

  var props = {
    id: 'spreadId'
  };

  var _React$useState3 = React.useState(true),
      _React$useState4 = index$1._slicedToArray(_React$useState3, 1),
      show = _React$useState4[0];

  var _React$useState5 = React.useState(true),
      _React$useState6 = index$1._slicedToArray(_React$useState5, 1),
      showPlainText = _React$useState6[0];

  var plainText = 'plain-text-leaf';
  return React.createElement(React.Fragment, null, React.createElement("block", {
    _tid: "3"
  }, 'expression entry'), React.createElement(React.Fragment, null, React.createElement(index$2.Text, {
    _tid: "4"
  }, "Fragment Text 1"), React.createElement(index$2.Text, {
    _tid: "5"
  }, "Fragment Text 2"), React.createElement(React.Fragment, null, React.createElement(index$2.Text, {
    _tid: "6"
  }, "Fragment Text 3"), React.createElement(index$2.Text, {
    _tid: "7"
  }, "Fragment Text 4"))), React.createElement(React.Fragment, null, "Fragment"), React.createElement(React.Fragment, null, "React.Fragment"), React.createElement("block", {
    _tid: "8"
  }, React.createElement(DDD, null)), React.createElement(index$2.Text, {
    _tid: "9"
  }, "Remax.Text"), React.createElement("block", {
    _tid: "10"
  }, React.createElement(NativeComponent, null)), React.createElement("block", {
    _tid: "11"
  }, React.createElement(ReactComp, null, React.createElement(index$2.View, {
    _tid: "26"
  }, "React Component First Child"), React.createElement("block", null, 'React Component Second Child'))), React.createElement(index$2.View, {
    _tid: "12"
  }, "Count: ", React.createElement("block", null, count)), React.createElement(index$2.View, {
    id: count,
    _tid: "13"
  }, "view"), React.createElement(index$2.View, {
    _tid: "14"
  }, "custom view"), React.createElement("block", {
    _tid: "15"
  }, React.createElement('view', {
    id: 'view'
  }, [React.createElement(index$2.View, {
    _tid: "27"
  }, "create element children 1"), React.createElement('view', {
    key: '2'
  })])), React.createElement("block", {
    _tid: "16"
  }, [1, 2, 3].map(function (item) {
    return React.createElement(index$2.View, {
      key: item,
      _tid: "28"
    }, "array map: ", React.createElement("block", null, item));
  })), React.createElement(index$2.View, index$1._extends({}, props, {
    _tid: "17"
  }), "Spread Attributes View"), React.createElement(index$2.Text, {
    _tid: "18"
  }, "long long long long long long long long long long long long text long long long long long long long long long long long long text"), React.createElement("block", {
    _tid: "19"
  }, React.createElement(index$2.RemaxWindow, null)), React.createElement("block", {
    _tid: "20"
  }, 'Literal Expression'), React.createElement("block", {
    _tid: "21"
  }, React.createElement(Deep.Object.View, null, "Deep Object View")), React.createElement("block", {
    _tid: "22"
  }, React.createElement(RenameView, null, "Rename View")), React.createElement("block", {
    _tid: "23"
  }, show && React.createElement(index$2.View, {
    _tid: "29"
  }, "Conditional View")), React.createElement(index$2.Text, {
    _tid: "24"
  }, showPlainText && plainText), React.createElement(index$2.View, {
    _tid: "25"
  }));
}

var index = Page(index$1.createPageConfig(_ref2));

exports.default = index;
