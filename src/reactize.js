var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');

var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');
var convertHTML = require('html-to-vdom')({
    VNode: VNode,
    VText: VText
});

var bodyVTree = {};

var Reactize = {
  version: "0.5.0"
};

Reactize.applyDiff = function(replacementElement, targetElement) {
  var replacementVtree = convertHTML(replacementElement.outerHTML.trim());
  var patches = diff(bodyVTree, replacementVtree);
  targetElement = patch(targetElement, patches);
  bodyVTree = replacementVtree;
};

module.exports = global.Reactize = Reactize;