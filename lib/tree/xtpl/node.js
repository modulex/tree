/*compiled by xtemplate#3.3.1*/
var ret = module.exports = function node(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func1(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n        ';
pos.line = 3;
var callRet2
callRet2 = callFnUtil(tpl, scope, {escape:1,params:['selected']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet2);
buffer.data += '\r\n     ';
return buffer;
}
function func5(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n    <div class="';
pos.line = 9;
var exp7 = 'checked';
var id6 = ((t=(affix.checkState)) !== undefined ? t:((t = data.checkState) !== undefined ? t :scope.resolveLooseUp(["checkState"])));
exp7 = ('checked')+(id6);
var callRet8
callRet8 = callFnUtil(tpl, scope, {escape:1,params:[exp7]}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet8);
buffer.data += ' ';
var callRet9
callRet9 = callFnUtil(tpl, scope, {escape:1,params:['checked']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet9);
buffer.data += '"></div>\r\n    ';
return buffer;
}
function func15(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\nstyle="display:none"\r\n';
return buffer;
}


buffer.data += '<div class="';
var callRet0
callRet0 = callFnUtil(tpl, scope, {escape:1,params:['row']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet0);
buffer.data += '\r\n     ';
pos.line = 2;
pos.line = 2;
var id3 = ((t=(affix.selected)) !== undefined ? t:((t = data.selected) !== undefined ? t :scope.resolveLooseUp(["selected"])));
buffer = ifCommand.call(tpl, scope, {params:[id3],fn: func1}, buffer);
buffer.data += '\r\n     ">\r\n    <div class="';
pos.line = 6;
var callRet4
callRet4 = callFnUtil(tpl, scope, {escape:1,params:['expand-icon']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet4);
buffer.data += '">\r\n    </div>\r\n    ';
pos.line = 8;
pos.line = 8;
var id10 = ((t=(affix.checkable)) !== undefined ? t:((t = data.checkable) !== undefined ? t :scope.resolveLooseUp(["checkable"])));
buffer = ifCommand.call(tpl, scope, {params:[id10],fn: func5}, buffer);
buffer.data += '\r\n    <div class="';
pos.line = 11;
var callRet11
callRet11 = callFnUtil(tpl, scope, {escape:1,params:['icon']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet11);
buffer.data += '">\r\n\r\n    </div>\r\n    <div class="';
pos.line = 14;
var callRet12
callRet12 = callFnUtil(tpl, scope, {escape:1,params:['content']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet12);
buffer.data += '">';
var id13 = ((t=(affix.content)) !== undefined ? t:((t = data.content) !== undefined ? t :scope.resolveLooseUp(["content"])));
buffer = buffer.write(id13);
buffer.data += '</div>\r\n</div>\r\n<div class="';
pos.line = 16;
var callRet14
callRet14 = callFnUtil(tpl, scope, {escape:1,params:['children']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet14);
buffer.data += '"\r\n';
pos.line = 17;
var id16 = ((t=(affix.expanded)) !== undefined ? t:((t = data.expanded) !== undefined ? t :scope.resolveLooseUp(["expanded"])));
buffer = ifCommand.call(tpl, scope, {params:[!(id16)],fn: func15}, buffer);
buffer.data += '\r\n>\r\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;