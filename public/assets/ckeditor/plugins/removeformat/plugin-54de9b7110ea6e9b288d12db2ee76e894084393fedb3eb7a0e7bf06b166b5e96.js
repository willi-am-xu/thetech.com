CKEDITOR.plugins.add("removeformat",{lang:"en",icons:"removeformat",hidpi:!0,init:function(e){e.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat),e.ui.addButton&&e.ui.addButton("RemoveFormat",{label:e.lang.removeformat.toolbar,command:"removeFormat",toolbar:"cleanup,10"})}}),CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(e){for(var t,n=e._.removeFormatRegex||(e._.removeFormatRegex=new RegExp("^(?:"+e.config.removeFormatTags.replace(/,/g,"|")+")$","i")),i=e._.removeAttributes||(e._.removeAttributes=e.config.removeFormatAttributes.split(",")),a=CKEDITOR.plugins.removeformat.filter,o=e.getSelection().getRanges(),r=o.createIterator(),s=function(e){return e.type==CKEDITOR.NODE_ELEMENT};t=r.getNextRange();){t.collapsed||t.enlarge(CKEDITOR.ENLARGE_ELEMENT);var l=t.createBookmark(),c=l.startNode,u=l.endNode,d=function(t){for(var i,o=e.elementPath(t),r=o.elements,s=1;(i=r[s])&&!i.equals(o.block)&&!i.equals(o.blockLimit);s++)n.test(i.getName())&&a(e,i)&&t.breakParent(i)};if(d(c),u)for(d(u),c=c.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT);c&&!c.equals(u);)if(c.isReadOnly()){if(c.getPosition(u)&CKEDITOR.POSITION_CONTAINS)break;c=c.getNext(s)}else d=c.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT),"img"==c.getName()&&c.data("cke-realelement")||!a(e,c)||(n.test(c.getName())?c.remove(1):(c.removeAttributes(i),e.fire("removeFormatCleanup",c))),c=d;t.moveToBookmark(l)}e.forceNextSelectionCheck(),e.getSelection().selectRanges(o)}}},filter:function(e,t){for(var n=e._.removeFormatFilters||[],i=0;i<n.length;i++)if(!1===n[i](t))return!1;return!0}},CKEDITOR.editor.prototype.addRemoveFormatFilter=function(e){this._.removeFormatFilters||(this._.removeFormatFilters=[]),this._.removeFormatFilters.push(e)},CKEDITOR.config.removeFormatTags="b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var",CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign";