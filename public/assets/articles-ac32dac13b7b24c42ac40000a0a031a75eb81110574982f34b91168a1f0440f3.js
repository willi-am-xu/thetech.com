(function(){var e;e=function(){var e,t,n,i,o,a;if($(document).on("click",".asset-candidate",function(){return CKEDITOR.instances.article_html.insertHtml('<img src="'+this.src+'">')}),$(document).on("click",".article_list",function(){return CKEDITOR.instances.article_html.insertHtml($(this).data("placeholder-html"))}),$("#articles_new, #articles_create, #articles_edit, #articles_update, #article_versions_revert").length>0){for(t=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("name"),queryTokenizer:Bloodhound.tokenizers.whitespace,local:gon.authors}),t.initialize(),a=$("input[name=draft\\[comma_separated_author_ids\\]]"),a.tagsinput({itemValue:"id",itemText:"name",typeaheadjs:{name:"authors",displayKey:"name",source:t.ttAdapter()}}),o=gon.prefilled_authors,n=0,i=o.length;n<i;n++)e=o[n],a.tagsinput("add",e);$("input[name=article\\[headline\\]], textarea[name=article\\[lede\\]]").on("blur keyup paste input",function(){return $(".headline",$(".btf-preview").contents()).text($("input[name=article\\[headline\\]]").val()),$(".lede",$(".btf-preview").contents()).text($("textarea[name=article\\[lede\\]]").val())})}if($("#articles_index").length>0)return $("#keywords").keyup(function(){return window.delay("keywords_search",function(){return $("#keywords").parents("form").submit()},300)})},$(document).ready(e),$(document).on("page:load",e)}).call(this);