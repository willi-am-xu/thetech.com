(function(){var e,t;e=function(){function e(e){this.layout=e}return e.prototype.remove_submodule=function(e){return $(".module-sub[data-uuid="+e+"]").remove(),this.each_module(function(t){return function(n){return $.each(n.submodules,function(i,r){if(r.uuid===e)return n.submodules.splice(i,1),t.change_callback()})}}(this))},e.prototype.move_up_submodule=function(e){var t,n,i;return i=this.get_layout_element(e),t=i[0],n=i[1],this.swap_paths(n,this.prev_path(n)),this.change_callback()},e.prototype.move_down_submodule=function(e){var t,n,i;return i=this.get_layout_element(e),t=i[0],n=i[1],this.swap_paths(n,this.next_path(n)),this.change_callback()},e.prototype.append_submodule=function(e,t){return this.each_module(function(n){return function(i){if(i.uuid===e)return i.submodules.push(t),n.change_callback()}}(this))},e.prototype.append_row=function(e){return this.layout.push(e),this.change_callback()},e.prototype.remove_row=function(e){return $(".row[data-uuid="+e+"]").remove(),$.each(this.layout,function(t){return function(n,i){if(i.uuid===e)return t.layout.splice(n,1),t.change_callback()}}(this))},e.prototype.children_count=function(e){var t;return t=this.get_layout_element_by_path(e),t.modules?t.modules.length:t.submodules?t.submodules.length:0},e.prototype.prev_path=function(e){switch(e.length){case 1:return[e[0]-1];case 2:return 0===e[1]?[e[0]-1,this.children_count([e[0]-1])-1]:[e[0],e[1]-1];case 3:return[e[0],e[1],e[2]-1]}},e.prototype.next_path=function(e){var t;switch(e.length){case 1:return[e[0]+1];case 2:return t=this.children_count([e[0]]),e[1]===t-1?[e[0]+1,0]:[e[0],e[1]+1];case 3:return[e[0],e[1],e[2]+1]}},e.prototype.of_compatible_size=function(e,t){var n,i;return n=this.get_layout_element_by_path(e),i=this.get_layout_element_by_path(t),!n.cols||e[0]===t[0]||n.cols===i.cols},e.prototype.move_row_upward=function(e){var t,n,i;return i=this.get_layout_element(e),t=i[0],n=i[1],this.swap_paths(n,this.prev_path(n)),this.change_callback()},e.prototype.move_row_downward=function(e){var t,n,i;return i=this.get_layout_element(e),t=i[0],n=i[1],this.swap_paths(n,this.next_path(n)),this.change_callback()},e.prototype.move_module_leftward=function(e){var t,n,i;return i=this.get_layout_element(e),t=i[0],n=i[1],this.swap_paths(n,this.prev_path(n)),this.change_callback()},e.prototype.move_module_rightward=function(e){var t,n,i;return i=this.get_layout_element(e),t=i[0],n=i[1],this.swap_paths(n,this.next_path(n)),this.change_callback()},e.prototype.get_element_by_uuid=function(e){return $("[data-uuid="+e+"]")},e.prototype.swap_elements=function(e,t){var n,i,r,o,a,s;return a=this.get_layout_element(e),n=a[0],r=a[1],s=this.get_layout_element(t),i=s[0],o=s[1],this.of_compatible_size(r,o)?(this.swap_layout_elements(e,t),this.swap_dom_elements(e,t)):void alert("You can only swap elements of compatible sizes. ")},e.prototype.swap_paths=function(e,t){var n,i;if(n=this.get_layout_element_by_path(e),i=this.get_layout_element_by_path(t),n&&i)return this.swap_elements(n.uuid,i.uuid)},e.prototype.get_layout_element=function(e){var t,n;return t=null,n=null,this.each_row(function(i,r){var o;if(i.uuid===e)return o=[i,r],t=o[0],n=o[1],o}),t?[t,n]:(this.each_module(function(i,r){var o;if(i.uuid===e)return o=[i,r],t=o[0],n=o[1],o}),t?[t,n]:(this.each_submodule(function(i,r){var o;if(i.uuid===e)return o=[i,r],t=o[0],n=o[1],o}),t?[t,n]:[null,null]))},e.prototype.set_layout_element=function(e,t){switch(e.length){case 1:return this.layout[e[0]]=t;case 2:return this.layout[e[0]].modules[e[1]]=t;case 3:return this.layout[e[0]].modules[e[1]].submodules[e[2]]=t}},e.prototype.get_layout_element_by_path=function(e){switch(e.length){case 1:return this.layout[e[0]];case 2:return this.layout[e[0]].modules[e[1]];case 3:return this.layout[e[0]].modules[e[1]].submodules[e[2]]}},e.prototype.swap_layout_elements=function(e,t){var n,i,r,o,a,s;if(a=this.get_layout_element(e),n=a[0],r=a[1],s=this.get_layout_element(t),i=s[0],o=s[1],r&&o)return this.set_layout_element(r,i),this.set_layout_element(o,n)},e.prototype.swap_dom_elements=function(e,t){var n,i,r;return n=this.get_element_by_uuid(e),i=this.get_element_by_uuid(t),r=n[0].outerHTML,n.replaceWith(i[0].outerHTML),i.replaceWith(r)},e.prototype.edit_submodule_field=function(e,t,n){return this.each_submodule(function(i){return function(r){if(r.uuid===e)return r[t]=n,i.change_callback()}}(this))},e.prototype.each_row=function(e){return $.each(this.layout,function(t,n){return e(n,[t])})},e.prototype.each_module=function(e){return this.each_row(function(t,n){return $.each(t.modules,function(t,i){return e(i,n.concat([t]))})})},e.prototype.each_submodule=function(e){return this.each_module(function(t,n){return $.each(t.submodules,function(t,i){return e(i,n.concat([t]))})})},e.prototype.on_change=function(e){return this.change_callback=e},e}(),jQuery.fn.toggleAttr=function(e){return this.each(function(){var t;t=$(this),t.attr(e)?t.removeAttr(e):t.attr(e,"true")})},t=function(){if($(".homepages_show").length>0)return window.homepage=new e(gon.layout),window.homepage.on_change(function(){return window.homepage_changed=!0}),$("#save_layout").click(function(){return $(window).unbind("beforeunload"),$("#save_layout_form input[name=layout]").val(JSON.stringify(window.homepage.layout)),$("#save_layout_form").submit(),!1}),$("#mark_publish_ready").click(function(){return confirm("Are you sure that you want to mark this layout as publish ready? ")&&($(window).unbind("beforeunload"),$("#mark_publish_ready_form input[name=layout]").val(JSON.stringify(window.homepage.layout)),$("#mark_publish_ready_form").submit()),!1}),$(".flash").length>0&&$(".master-editing-toolbar").css("opacity","1"),$(document).on("dblclick","*[data-editable]",function(){return $(this).toggleAttr("contenteditable")}),$(document).on("blur keyup paste input","*[data-editable]",function(){var e,t,n;return t=$(this).parents(".module-sub").data("uuid"),e=$(this).data("editable"),n=$(this).text(),$(this).html(n),window.homepage.edit_submodule_field(t,e,n)}),$(window).on("unload",function(){return console.log(window.homepage.layout)}),$(window).on("beforeunload",function(){return window.homepage_changed?"Layout has been changed yet not saved. Discard changes? ":void 0})},$(t)}).call(this);