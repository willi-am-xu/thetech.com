CKEDITOR.dialog.add("cellProperties",function(e){function t(e){return function(t){for(var a=e(t[0]),i=1;i<t.length;i++)if(e(t[i])!==a){a=null;break}"undefined"!=typeof a&&(this.setValue(a),CKEDITOR.env.gecko&&"select"==this.type&&!a&&(this.getInputElement().$.selectedIndex=-1))}}function a(e){if(e=l.exec(e.getStyle("width")||e.getAttribute("width")))return e[2]}var i=e.lang.table,n=i.cell,o=e.lang.common,r=CKEDITOR.dialog.validate,l=/^(\d+(?:\.\d+)?)(px|%)$/,s={type:"html",html:"&nbsp;"},d="rtl"==e.lang.dir,c=e.plugins.colordialog;return{title:n.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:n.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",width:"100px",label:o.width,validate:r.number(n.invalidWidth),onLoad:function(){var e=this.getDialog().getContentElement("info","widthType").getElement(),t=this.getInputElement(),a=t.getAttribute("aria-labelledby");t.setAttribute("aria-labelledby",[a,e.$.id].join(" "))},setup:t(function(e){var t=parseInt(e.getAttribute("width"),10);return e=parseInt(e.getStyle("width"),10),isNaN(e)?isNaN(t)?"":t:e}),commit:function(e){var t=parseInt(this.getValue(),10),i=this.getDialog().getValueOf("info","widthType")||a(e);isNaN(t)?e.removeStyle("width"):e.setStyle("width",t+i),e.removeAttribute("width")},"default":""},{type:"select",id:"widthType",label:e.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[i.widthPx,"px"],[i.widthPc,"%"]],setup:t(a)}]},{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"height",label:o.height,width:"100px","default":"",validate:r.number(n.invalidHeight),onLoad:function(){var e=this.getDialog().getContentElement("info","htmlHeightType").getElement(),t=this.getInputElement(),a=t.getAttribute("aria-labelledby");t.setAttribute("aria-labelledby",[a,e.$.id].join(" "))},setup:t(function(e){var t=parseInt(e.getAttribute("height"),10);return e=parseInt(e.getStyle("height"),10),isNaN(e)?isNaN(t)?"":t:e}),commit:function(e){var t=parseInt(this.getValue(),10);isNaN(t)?e.removeStyle("height"):e.setStyle("height",CKEDITOR.tools.cssLength(t)),e.removeAttribute("height")}},{id:"htmlHeightType",type:"html",html:"<br />"+i.widthPx}]},s,{type:"select",id:"wordWrap",label:n.wordWrap,"default":"yes",items:[[n.yes,"yes"],[n.no,"no"]],setup:t(function(e){var t=e.getAttribute("noWrap");if("nowrap"==e.getStyle("white-space")||t)return"no"}),commit:function(e){"no"==this.getValue()?e.setStyle("white-space","nowrap"):e.removeStyle("white-space"),e.removeAttribute("noWrap")}},s,{type:"select",id:"hAlign",label:n.hAlign,"default":"",items:[[o.notSet,""],[o.alignLeft,"left"],[o.alignCenter,"center"],[o.alignRight,"right"],[o.alignJustify,"justify"]],setup:t(function(e){var t=e.getAttribute("align");return e.getStyle("text-align")||t||""}),commit:function(e){var t=this.getValue();t?e.setStyle("text-align",t):e.removeStyle("text-align"),e.removeAttribute("align")}},{type:"select",id:"vAlign",label:n.vAlign,"default":"",items:[[o.notSet,""],[o.alignTop,"top"],[o.alignMiddle,"middle"],[o.alignBottom,"bottom"],[n.alignBaseline,"baseline"]],setup:t(function(e){var t=e.getAttribute("vAlign");switch(e=e.getStyle("vertical-align")){case"top":case"middle":case"bottom":case"baseline":break;default:e=""}return e||t||""}),commit:function(e){var t=this.getValue();t?e.setStyle("vertical-align",t):e.removeStyle("vertical-align"),e.removeAttribute("vAlign")}}]},s,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:n.cellType,"default":"td",items:[[n.data,"td"],[n.header,"th"]],setup:t(function(e){return e.getName()}),commit:function(e){e.renameNode(this.getValue())}},s,{type:"text",id:"rowSpan",label:n.rowSpan,"default":"",validate:r.integer(n.invalidRowSpan),setup:t(function(e){if((e=parseInt(e.getAttribute("rowSpan"),10))&&1!=e)return e}),commit:function(e){var t=parseInt(this.getValue(),10);t&&1!=t?e.setAttribute("rowSpan",this.getValue()):e.removeAttribute("rowSpan")}},{type:"text",id:"colSpan",label:n.colSpan,"default":"",validate:r.integer(n.invalidColSpan),setup:t(function(e){if((e=parseInt(e.getAttribute("colSpan"),10))&&1!=e)return e}),commit:function(e){var t=parseInt(this.getValue(),10);t&&1!=t?e.setAttribute("colSpan",this.getValue()):e.removeAttribute("colSpan")}},s,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",label:n.bgColor,"default":"",setup:t(function(e){var t=e.getAttribute("bgColor");return e.getStyle("background-color")||t}),commit:function(e){this.getValue()?e.setStyle("background-color",this.getValue()):e.removeStyle("background-color"),e.removeAttribute("bgColor")}},c?{type:"button",id:"bgColorChoose","class":"colorChooser",label:n.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){e.getColorFromDialog(function(e){e&&this.getDialog().getContentElement("info","bgColor").setValue(e),this.focus()},this)}}:s]},s,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:n.borderColor,"default":"",setup:t(function(e){var t=e.getAttribute("borderColor");return e.getStyle("border-color")||t}),commit:function(e){this.getValue()?e.setStyle("border-color",this.getValue()):e.removeStyle("border-color"),e.removeAttribute("borderColor")}},c?{type:"button",id:"borderColorChoose","class":"colorChooser",label:n.chooseColor,style:(d?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){e.getColorFromDialog(function(e){e&&this.getDialog().getContentElement("info","borderColor").setValue(e),this.focus()},this)}}:s]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection()),this.setupContent(this.cells)},onOk:function(){for(var e=this._.editor.getSelection(),t=e.createBookmarks(),a=this.cells,i=0;i<a.length;i++)this.commitContent(a[i]);this._.editor.forceNextSelectionCheck(),e.selectBookmarks(t),this._.editor.selectionChange()},onLoad:function(){var e={};this.foreach(function(t){t.setup&&t.commit&&(t.setup=CKEDITOR.tools.override(t.setup,function(a){return function(){a.apply(this,arguments),e[t.id]=t.getValue()}}),t.commit=CKEDITOR.tools.override(t.commit,function(a){return function(){e[t.id]!==t.getValue()&&a.apply(this,arguments)}}))})}}});