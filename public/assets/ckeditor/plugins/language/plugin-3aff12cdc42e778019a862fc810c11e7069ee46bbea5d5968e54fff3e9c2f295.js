!function(){CKEDITOR.plugins.add("language",{requires:"menubutton",lang:"en",icons:"language",hidpi:!0,init:function(e){var t,n,a,i,o=e.config.language_list||["ar:Arabic:rtl","fr:French","es:Spanish"],r=this,s=e.lang.language,l={};for(e.addCommand("language",{allowedContent:"span[!lang,!dir]",requiredContent:"span[lang,dir]",contextSensitive:!0,exec:function(e,t){var n=l["language_"+t];n&&e[n.style.checkActive(e.elementPath(),e)?"removeStyle":"applyStyle"](n.style)},refresh:function(e){this.setState(r.getCurrentLangElement(e)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)}}),i=0;i<o.length;i++)t=o[i].split(":"),n=t[0],a="language_"+n,l[a]={label:t[1],langId:n,group:"language",order:i,ltr:"rtl"!=(""+t[2]).toLowerCase(),onClick:function(){e.execCommand("language",this.langId)},role:"menuitemcheckbox"},l[a].style=new CKEDITOR.style({element:"span",attributes:{lang:n,dir:l[a].ltr?"ltr":"rtl"}});l.language_remove={label:s.remove,group:"language_remove",state:CKEDITOR.TRISTATE_DISABLED,order:l.length,onClick:function(){var t=r.getCurrentLangElement(e);t&&e.execCommand("language",t.getAttribute("lang"))}},e.addMenuGroup("language",1),e.addMenuGroup("language_remove"),e.addMenuItems(l),e.ui.add("Language",CKEDITOR.UI_MENUBUTTON,{label:s.button,allowedContent:"span[!lang,!dir]",requiredContent:"span[lang,dir]",toolbar:"bidi,30",command:"language",onMenu:function(){var t,n={},a=r.getCurrentLangElement(e);for(t in l)n[t]=CKEDITOR.TRISTATE_OFF;return n.language_remove=a?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,a&&(n["language_"+a.getAttribute("lang")]=CKEDITOR.TRISTATE_ON),n}})},getCurrentLangElement:function(e){var t=e.elementPath();e=t&&t.elements;var n;if(t)for(var a=0;a<e.length;a++)t=e[a],!n&&"span"==t.getName()&&t.hasAttribute("dir")&&t.hasAttribute("lang")&&(n=t);return n}})}();