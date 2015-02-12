var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');

var VNode = require('virtual-dom/vnode/vnode');
var VText = require('virtual-dom/vnode/vtext');
var convertHTML = require('html-to-vdom')({
    VNode: VNode,
    VText: VText
});

var vTrees = {};

var Reactize = {
  version: "0.0.1"
};

Reactize.applyDiff = function(replacementElement, targetElement) {
  var replacementVtree = convertHTML(replacementElement.outerHTML.trim());
  var patches = diff(vTrees[targetElement.id], replacementVtree);
  targetElement = patch(targetElement, patches);
  vTrees[targetElement.id] = replacementVtree;
};

Reactize.initialize = function(element) {
  var vTree = convertHTML(element.outerHTML.trim());
  vTrees[element.id] = vTree;
};

module.exports = global.Reactize = Reactize;
