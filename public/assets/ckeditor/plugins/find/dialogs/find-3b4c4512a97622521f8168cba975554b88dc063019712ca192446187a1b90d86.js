!function(){function e(e){return e.type==CKEDITOR.NODE_TEXT&&0<e.getLength()&&(!n||!e.isReadOnly())}function t(e){return!(e.type==CKEDITOR.NODE_ELEMENT&&e.isBlockBoundary(CKEDITOR.tools.extend({},CKEDITOR.dtd.$empty,CKEDITOR.dtd.$nonEditable)))}function a(a,l){function s(a,n){var i=this,o=new CKEDITOR.dom.walker(a);o.guard=n?t:function(e){!t(e)&&(i._.matchBoundary=!0)},o.evaluator=e,o.breakOnFalse=1,a.startContainer.type==CKEDITOR.NODE_TEXT&&(this.textNode=a.startContainer,this.offset=a.startOffset-1),this._={matchWord:n,walker:o,matchBoundary:!1}}function d(e,t){var n=a.createRange();return n.setStart(e.textNode,t?e.offset:e.offset+1),n.setEndAt(a.editable(),CKEDITOR.POSITION_BEFORE_END),n}function c(e){var t=a.getSelection().getRanges()[0],n=a.editable();return t&&!e?(e=t.clone(),e.collapse(!0)):(e=a.createRange(),e.setStartAt(n,CKEDITOR.POSITION_AFTER_START)),e.setEndAt(n,CKEDITOR.POSITION_BEFORE_END),e}var u=new CKEDITOR.style(CKEDITOR.tools.extend({attributes:{"data-cke-highlight":1},fullMatch:1,ignoreReadonly:1,childRule:function(){return 0}},a.config.find_highlight,!0));s.prototype={next:function(){return this.move()},back:function(){return this.move(!0)},move:function(e){var t=this.textNode;if(null===t)return i.call(this);if(this._.matchBoundary=!1,t&&e&&0<this.offset)this.offset--;else if(t&&this.offset<t.getLength()-1)this.offset++;else{for(t=null;!(t||(t=this._.walker[e?"previous":"next"].call(this._.walker),this._.matchWord&&!t||this._.walker._.end)););this.offset=(this.textNode=t)&&e?t.getLength()-1:0}return i.call(this)}};var p=function(e,t){this._={walker:e,cursors:[],rangeLength:t,highlightRange:null,isMatched:0}};p.prototype={toDomRange:function(){var e=a.createRange(),t=this._.cursors;if(1>t.length){var n=this._.walker.textNode;if(!n)return null;e.setStartAfter(n)}else n=t[0],t=t[t.length-1],e.setStart(n.textNode,n.offset),e.setEnd(t.textNode,t.offset+1);return e},updateFromDomRange:function(e){var t=new s(e);this._.cursors=[];do e=t.next(),e.character&&this._.cursors.push(e);while(e.character);this._.rangeLength=this._.cursors.length},setMatched:function(){this._.isMatched=!0},clearMatched:function(){this._.isMatched=!1},isMatched:function(){return this._.isMatched},highlight:function(){if(!(1>this._.cursors.length)){this._.highlightRange&&this.removeHighlight();var e=this.toDomRange(),t=e.createBookmark();u.applyToRange(e,a),e.moveToBookmark(t),this._.highlightRange=e,t=e.startContainer,t.type!=CKEDITOR.NODE_ELEMENT&&(t=t.getParent()),t.scrollIntoView(),this.updateFromDomRange(e)}},removeHighlight:function(){if(this._.highlightRange){var e=this._.highlightRange.createBookmark();u.removeFromRange(this._.highlightRange,a),this._.highlightRange.moveToBookmark(e),this.updateFromDomRange(this._.highlightRange),this._.highlightRange=null}},isReadOnly:function(){return this._.highlightRange?this._.highlightRange.startContainer.isReadOnly():0},moveBack:function(){var e=this._.walker.back(),t=this._.cursors;return e.hitMatchBoundary&&(this._.cursors=t=[]),t.unshift(e),t.length>this._.rangeLength&&t.pop(),e},moveNext:function(){var e=this._.walker.next(),t=this._.cursors;return e.hitMatchBoundary&&(this._.cursors=t=[]),t.push(e),t.length>this._.rangeLength&&t.shift(),e},getEndCharacter:function(){var e=this._.cursors;return 1>e.length?null:e[e.length-1].character},getNextCharacterRange:function(e){var t,a;return a=this._.cursors,a=(t=a[a.length-1])&&t.textNode?new s(d(t)):this._.walker,new p(a,e)},getCursors:function(){return this._.cursors}};var m=function(e,t){var a=[-1];t&&(e=e.toLowerCase());for(var n=0;n<e.length;n++)for(a.push(a[n]+1);0<a[n+1]&&e.charAt(n)!=e.charAt(a[n+1]-1);)a[n+1]=a[a[n+1]-1]+1;this._={overlap:a,state:0,ignoreCase:!!t,pattern:e}};m.prototype={feedCharacter:function(e){for(this._.ignoreCase&&(e=e.toLowerCase());;){if(e==this._.pattern.charAt(this._.state))return this._.state++,this._.state==this._.pattern.length?(this._.state=0,2):1;if(!this._.state)return 0;this._.state=this._.overlap[this._.state]}},reset:function(){this._.state=0}};var h=/[.,"'?!;: \u0085\u00a0\u1680\u280e\u2028\u2029\u202f\u205f\u3000]/,g=function(e){if(!e)return!0;var t=e.charCodeAt(0);return 9<=t&&13>=t||8192<=t&&8202>=t||h.test(e)},f={searchRange:null,matchRange:null,find:function(e,t,n,i,o,r){this.matchRange?(this.matchRange.removeHighlight(),this.matchRange=this.matchRange.getNextCharacterRange(e.length)):this.matchRange=new p(new s(this.searchRange),e.length);for(var l=new m(e,!t),u=0,h="%";null!==h;){for(this.matchRange.moveNext();(h=this.matchRange.getEndCharacter())&&(u=l.feedCharacter(h),2!=u);)this.matchRange.moveNext().hitMatchBoundary&&l.reset();if(2==u){if(n){var f=this.matchRange.getCursors(),b=f[f.length-1],f=f[0],v=a.createRange();if(v.setStartAt(a.editable(),CKEDITOR.POSITION_AFTER_START),v.setEnd(f.textNode,f.offset),f=v,b=d(b),f.trim(),b.trim(),f=new s(f,!0),b=new s(b,!0),!g(f.back().character)||!g(b.next().character))continue}return this.matchRange.setMatched(),!1!==o&&this.matchRange.highlight(),!0}}return this.matchRange.clearMatched(),this.matchRange.removeHighlight(),!(!i||r)&&(this.searchRange=c(1),this.matchRange=null,arguments.callee.apply(this,Array.prototype.slice.call(arguments).concat([!0])))},replaceCounter:0,replace:function(e,t,i,o,r,l,s){if(n=1,e=0,e=this.hasMatchOptionsChanged(t,o,r),!this.matchRange||!this.matchRange.isMatched()||this.matchRange._.isReplaced||this.matchRange.isReadOnly()||e)e&&this.matchRange&&(this.matchRange.clearMatched(),this.matchRange.removeHighlight(),this.matchRange=null),e=this.find(t,o,r,l,!s);else{if(this.matchRange.removeHighlight(),t=this.matchRange.toDomRange(),i=a.document.createText(i),!s){var d=a.getSelection();d.selectRanges([t]),a.fire("saveSnapshot")}t.deleteContents(),t.insertNode(i),s||(d.selectRanges([t]),a.fire("saveSnapshot")),this.matchRange.updateFromDomRange(t),s||this.matchRange.highlight(),this.matchRange._.isReplaced=!0,this.replaceCounter++,e=1}return n=0,e},matchOptions:null,hasMatchOptionsChanged:function(e,t,a){return e=[e,t,a].join("."),t=this.matchOptions&&this.matchOptions!=e,this.matchOptions=e,t}},b=a.lang.find;return{title:b.title,resizable:CKEDITOR.DIALOG_RESIZE_NONE,minWidth:350,minHeight:170,buttons:[CKEDITOR.dialog.cancelButton(a,{label:a.lang.common.close})],contents:[{id:"find",label:b.find,title:b.find,accessKey:"",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindFind",label:b.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFind",align:"left",style:"width:100%",label:b.find,onClick:function(){var e=this.getDialog();f.find(e.getValueOf("find","txtFindFind"),e.getValueOf("find","txtFindCaseChk"),e.getValueOf("find","txtFindWordChk"),e.getValueOf("find","txtFindCyclic"))||alert(b.notFoundMsg)}}]},{type:"fieldset",className:"cke_dialog_find_fieldset",label:CKEDITOR.tools.htmlEncode(b.findOptions),style:"margin-top:29px",children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtFindCaseChk",isChanged:!1,label:b.matchCase},{type:"checkbox",id:"txtFindWordChk",isChanged:!1,label:b.matchWord},{type:"checkbox",id:"txtFindCyclic",isChanged:!1,"default":!0,label:b.matchCyclic}]}]}]},{id:"replace",label:b.replace,accessKey:"M",elements:[{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtFindReplace",label:b.findWhat,isChanged:!1,labelLayout:"horizontal",accessKey:"F"},{type:"button",id:"btnFindReplace",align:"left",style:"width:100%",label:b.replace,onClick:function(){var e=this.getDialog();f.replace(e,e.getValueOf("replace","txtFindReplace"),e.getValueOf("replace","txtReplace"),e.getValueOf("replace","txtReplaceCaseChk"),e.getValueOf("replace","txtReplaceWordChk"),e.getValueOf("replace","txtReplaceCyclic"))||alert(b.notFoundMsg)}}]},{type:"hbox",widths:["230px","90px"],children:[{type:"text",id:"txtReplace",label:b.replaceWith,isChanged:!1,labelLayout:"horizontal",accessKey:"R"},{type:"button",id:"btnReplaceAll",align:"left",style:"width:100%",label:b.replaceAll,isChanged:!1,onClick:function(){var e=this.getDialog();for(f.replaceCounter=0,f.searchRange=c(1),f.matchRange&&(f.matchRange.removeHighlight(),f.matchRange=null),a.fire("saveSnapshot");f.replace(e,e.getValueOf("replace","txtFindReplace"),e.getValueOf("replace","txtReplace"),e.getValueOf("replace","txtReplaceCaseChk"),e.getValueOf("replace","txtReplaceWordChk"),!1,!0););f.replaceCounter?(alert(b.replaceSuccessMsg.replace(/%1/,f.replaceCounter)),a.fire("saveSnapshot")):alert(b.notFoundMsg)}}]},{type:"fieldset",label:CKEDITOR.tools.htmlEncode(b.findOptions),children:[{type:"vbox",padding:0,children:[{type:"checkbox",id:"txtReplaceCaseChk",isChanged:!1,label:b.matchCase},{type:"checkbox",id:"txtReplaceWordChk",isChanged:!1,label:b.matchWord},{type:"checkbox",id:"txtReplaceCyclic",isChanged:!1,"default":!0,label:b.matchCyclic}]}]}]}],onLoad:function(){var e,t=this,a=0;this.on("hide",function(){a=0}),this.on("show",function(){a=1}),this.selectPage=CKEDITOR.tools.override(this.selectPage,function(n){return function(i){n.call(t,i);var l,s=t._.tabs[i];if(l="find"===i?"txtFindWordChk":"txtReplaceWordChk",e=t.getContentElement(i,"find"===i?"txtFindFind":"txtFindReplace"),t.getContentElement(i,l),s.initialized||(CKEDITOR.document.getById(e._.inputId),s.initialized=!0),a){var d;i="find"===i?1:0;var c,s=1-i,u=r.length;for(c=0;c<u;c++)l=this.getContentElement(o[i],r[c][i]),d=this.getContentElement(o[s],r[c][s]),d.setValue(l.getValue())}}})},onShow:function(){f.searchRange=c();var e=this.getParentEditor().getSelection().getSelectedText(),t=this.getContentElement(l,"find"==l?"txtFindFind":"txtFindReplace");t.setValue(e),t.select(),this.selectPage(l),this[("find"==l&&this._.editor.readOnly?"hide":"show")+"Page"]("replace")},onHide:function(){var e;f.matchRange&&f.matchRange.isMatched()&&(f.matchRange.removeHighlight(),a.focus(),(e=f.matchRange.toDomRange())&&a.getSelection().selectRanges([e])),delete f.matchRange},onFocus:function(){return"replace"==l?this.getContentElement("replace","txtFindReplace"):this.getContentElement("find","txtFindFind")}}}var n,i=function(){return{textNode:this.textNode,offset:this.offset,character:this.textNode?this.textNode.getText().charAt(this.offset):null,hitMatchBoundary:this._.matchBoundary}},o=["find","replace"],r=[["txtFindFind","txtFindReplace"],["txtFindCaseChk","txtReplaceCaseChk"],["txtFindWordChk","txtReplaceWordChk"],["txtFindCyclic","txtReplaceCyclic"]];CKEDITOR.dialog.add("find",function(e){return a(e,"find")}),CKEDITOR.dialog.add("replace",function(e){return a(e,"replace")})}();