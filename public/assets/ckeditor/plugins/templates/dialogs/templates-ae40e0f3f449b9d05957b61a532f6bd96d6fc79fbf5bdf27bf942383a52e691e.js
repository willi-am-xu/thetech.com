!function(){CKEDITOR.dialog.add("templates",function(e){function t(e,t){var i=CKEDITOR.dom.element.createFromHtml('<a href="javascript:void(0)" tabIndex="-1" role="option" ><div class="cke_tpl_item"></div></a>'),n='<table style="width:350px;" class="cke_tpl_preview" role="presentation"><tr>';return e.image&&t&&(n+='<td class="cke_tpl_preview_img"><img src="'+CKEDITOR.getUrl(t+e.image)+'"'+(CKEDITOR.env.ie6Compat?' onload="this.width=this.width"':"")+' alt="" title=""></td>'),n+='<td style="white-space:normal;"><span class="cke_tpl_title">'+e.title+"</span><br/>",e.description&&(n+="<span>"+e.description+"</span>"),i.getFirst().setHtml(n+"</td></tr></table>"),i.on("click",function(){a(e.html)}),i}function a(t){var a=CKEDITOR.dialog.getCurrent();a.getValueOf("selectTpl","chkInsertOpt")?(e.fire("saveSnapshot"),e.setData(t,function(){a.hide();var t=e.createRange();t.moveToElementEditStart(e.editable()),t.select(),setTimeout(function(){e.fire("saveSnapshot")},0)})):(e.insertHtml(t),a.hide())}function i(e){var t=e.data.getTarget(),a=o.equals(t);if(a||o.contains(t)){var i,n=e.data.getKeystroke(),r=o.getElementsByTag("a");if(r){if(a)i=r.getItem(0);else switch(n){case 40:i=t.getNext();break;case 38:i=t.getPrevious();break;case 13:case 32:t.fire("click")}i&&(i.focus(),e.data.preventDefault())}}}var n=CKEDITOR.plugins.get("templates");CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(n.path+"dialogs/templates.css"));var o,n="cke_tpl_list_label_"+CKEDITOR.tools.getNextNumber(),r=e.lang.templates,l=e.config;return{title:e.lang.templates.title,minWidth:CKEDITOR.env.ie?440:400,minHeight:340,contents:[{id:"selectTpl",label:r.title,elements:[{type:"vbox",padding:5,children:[{id:"selectTplText",type:"html",html:"<span>"+r.selectPromptMsg+"</span>"},{id:"templatesList",type:"html",focus:!0,html:'<div class="cke_tpl_list" tabIndex="-1" role="listbox" aria-labelledby="'+n+'"><div class="cke_tpl_loading"><span></span></div></div><span class="cke_voice_label" id="'+n+'">'+r.options+"</span>"},{id:"chkInsertOpt",type:"checkbox",label:r.insertOption,"default":l.templates_replaceContent}]}]}],buttons:[CKEDITOR.dialog.cancelButton],onShow:function(){var e=this.getContentElement("selectTpl","templatesList");o=e.getElement(),CKEDITOR.loadTemplates(l.templates_files,function(){var a=(l.templates||"default").split(",");if(a.length){var i=o;i.setHtml("");for(var n=0,s=a.length;s>n;n++)for(var d=CKEDITOR.getTemplates(a[n]),c=d.imagesPath,d=d.templates,u=d.length,p=0;u>p;p++){var m=t(d[p],c);m.setAttribute("aria-posinset",p+1),m.setAttribute("aria-setsize",u),i.append(m)}e.focus()}else o.setHtml('<div class="cke_tpl_empty"><span>'+r.emptyListMsg+"</span></div>")}),this._.element.on("keydown",i)},onHide:function(){this._.element.removeListener("keydown",i)}}})}();