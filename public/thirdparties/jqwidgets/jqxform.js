/*
jQWidgets v13.2.0 (2022-Jan)
Copyright (c) 2011-2022 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxForm","",{});a.extend(a.jqx._jqxForm.prototype,{defineInstance:function(){var b={padding:{left:5,top:5,right:5,bottom:5},backgroundColor:"#F5F5F5",borderColor:"#E5E5E5",value:{},template:[{type:"text",label:"TextBox 1"},{type:"text",label:"TextBox 2"},]};a.extend(true,this,b)},createInstance:function(c){var b=this;b._isInitialized=false;var d=b.host;d.addClass(b.toThemeProperty("jqx-widget"));b._renderAndInit();this._setValue(this.value);this._prevValue=this._getValue();b._isInitialized=true},destroy:function(){this._destroyElements();this.host.removeData();this.host.remove();delete this.host;delete this.set;delete this.get;delete this.call;delete this.element},_destroyElements:function(){for(var c=0;c<this.template.length;c++){if(a.isArray(this.template[c].columns)){for(var b=0;b<this.template[c].columns.length;b++){var d=c+"_"+b;this._getComponentById(d).off();this.host.find("#rowWrap_el_"+d).remove()}}this._getComponentById(c).off();this._getComponentLabelById(c).off();this._getComponentLabelById(c).removeData();this.host.find("#rowWrap_el_"+c).remove()}this.host.find("#formWrap").remove()},val:function(b){if(undefined==b){return this._getValue()}else{this._setValue(b)}},_onChangeHandler:function(f){if(!this.isInitialized||this._suppressEvents){return}var c=this._getValue();if(this._prevValue&&JSON.stringify(c)==JSON.stringify(this._prevValue)){return}var d=new a.Event("formDataChange");d.args={value:c,previousValue:this._prevValue};d.owner=this;var b=this.host.trigger(d);if(d.cancel){this._setValue(this._prevValue)}else{this._prevValue=c}return b},_onButtonClick:function(c,d){if(!this.isInitialized){return}var e=new a.Event("buttonClick");e.args={name:d.name,text:c.val()};e.owner=this;var b=this.host.trigger(e);return b},submit:function(f,k,b){var l=this;var d=l._getValue(true);var h="<form id='jqx_fromToSubmit'";if(f){h+=' action="'+f+'"'}if(k){h+=' target="'+k+'"'}if(b&&b.toString().toLowerCase()==="get"){h+=' method="GET"'}else{h+=' method="POST"'}h+=">";for(var g=0;g<d.length;g++){var e=d[g].value;var j=d[g].tool;var c=j.name;if(c==undefined){c=j.id}if(c==undefined){c=j.bind}if(j.type=="button"||j.type=="label"){if(!j.submit||j.submit==false){continue}}if(j.submit==false){continue}if(c!==undefined){h+='<input type="hidden" ';h+=' name="'+c+'"';h+=' value="'+e+'"';h+=">"}}h+="</form>";l.host.find("#formSubmit").html(h);l.host.find("#jqx_fromToSubmit").submit()},_getValue:function(c){var e={};var d=[];for(var h=0;h<this.template.length;h++){var k=this.template[h];var l="el_"+this.element.id+h;if(a.isArray(k.columns)){for(var g=0;g<k.columns.length;g++){var f=k.columns[g];var p=l+"."+g;if(f.type=="option"&&f.component!="jqxDropDownList"){var o=this._radioGroupGetValue(f,p);if(f.bind==undefined){}else{this._setObjectProperty(e,f.bind,o)}if(c){d.push({tool:f,value:o})}continue}var b=this._getComponentById(h+"_"+g);var n=b.val();if(n===undefined){n=null}if(f.bind==undefined){}else{this._setObjectProperty(e,f.bind,n)}if(c){d.push({tool:f,value:n})}}continue}if(k.type=="option"&&k.component!="jqxDropDownList"){var o=this._radioGroupGetValue(k,l);if(k.bind==undefined){}else{this._setObjectProperty(e,k.bind,o)}if(c){d.push({tool:k,value:o})}continue}var m=this._getComponentById(h);var n=m.val();if(n===undefined){n=null}if(k.bind==undefined){}else{this._setObjectProperty(e,k.bind,n)}if(c){d.push({tool:k,value:n})}}if(c){return d}return a.extend({},this._prevValue,e)},_getObjectProperty:function(f,d){if(typeof(f)!=="object"||f===undefined||d===undefined||d==""){return f}var e=d.split(".");var g=f;for(var c=0;c<e.length;c++){g=g[e[c]]}return g},_setObjectProperty:function(g,d,e){if(undefined===g){return}if(undefined==d||d==""){g=e;return}var f=d.split(".");var c=0;while(c<f.length-1){if(undefined==g[f[c]]){g[f[c]]={}}c++}g[f[c]]=e},_setValue:function(c){this._suppressEvents=true;for(var g=0;g<this.template.length;g++){var h=this.template[g];var k="el_"+this.element.id+g;var d=undefined;if(a.isArray(h.columns)){for(var f=0;f<h.columns.length;f++){var e=h.columns[f];var m=k+"."+f;if(!e.bind){continue}d=this._getObjectProperty(c,e.bind);if(e.type=="option"&&e.component!="jqxDropDownList"){this._radioGroupSetValue(e,m,d);continue}var b=this._getComponentById(g+"_"+f);if(c!==undefined){b.val(d)}}continue}if(!h.bind){continue}d=this._getObjectProperty(c,h.bind);if(h.type=="option"&&h.component!="jqxDropDownList"){this._radioGroupSetValue(h,k,d);continue}var l=this._getComponentById(g);if(h.type=="label"){l.html(d);continue}if(c!==undefined){l.val(d)}}this._prevValue=c;this._suppressEvents=false},_radioGroupGetValue:function(b,f){for(var c=0;c<b.options.length;c++){var e=f+"_option_"+c;var d=this.host.find("#"+e);if(d.length>0){var g=d.jqxRadioButton("val");if(g==true){if(b.options[c].value!==undefined){return b.options[c].value}return b.options[c].label}}}return undefined},_radioGroupSetValue:function(b,f,g){for(var c=0;c<b.options.length;c++){if(b.options[c].value!==undefined){if(g!==b.options[c].value){continue}}else{if(g!==b.options[c].label){continue}}var e=f+"_option_"+c;var d=this.host.find("#"+e);if(d.length>0){d.jqxRadioButton("val",true)}}},_getToolStyle:function(b){var c="display: block;";var d=["left","right","top","bottom"];if(b.height){c+="height: "+b.height+";"}if(b.valign!==undefined){c+="vertical-align: "+b.valign+";"}else{c+="vertical-align: middle;"}return c},_getAlignMargin:function(b,f){if(!b||!b[f]){return""}var g=["left","right","top","bottom"];var e={};var d="";if(b[f]){e={};if(b[f]=="left"){e.left="0px";e.right="auto"}else{if(b[f]=="right"){e.left="auto";e.right="0px"}else{e.left="auto";e.right="auto"}}}if(e){for(var c in g){if(e[g[c]]){d+="margin-"+g[c]+": "+e[g[c]]+";"}}}return d},_getPaddingAndMarginStyle:function(f,g){var b="";var h=["left","right","top","bottom"];var k=g?"labelpadding":"padding";var e=g?"labelmargin":"margin";var j=a.extend({left:5,top:5,right:5,bottom:5},f[k]);for(var d in j){j[d]=!isNaN(j[d])?j[d]:parseFloat(j[d].toString())}var c=f[e];if(j){for(var d in h){if(j[h[d]]){b+="padding-"+h[d]+": "+j[h[d]]+"px;"}}}if(c){for(var d in h){if(c[h[d]]){b+="margin-"+h[d]+": "+c[h[d]]+";"}}}return b},_getToolLabelStyle:function(b){var c="display:block;";var d=["left","right","top","bottom"];if(b.labelheight!==undefined){c+="height: "+b.labelheight+";"}else{c+="height: 100%;"}if(b.labelvalign!==undefined){c+="vertical-align: "+b.labelvalign+";"}else{if(b.valign!==undefined){c+="vertical-align: "+b.valign+";"}else{c+="vertical-align: middle;"}}return c},_renderAndInit:function(){var b=this._createTemplateHtml();this.host.append(b);this._initTools()},refresh:function(c){var b=this;if(!b._isInitialized||c===true){return}var d=b.val();b._destroyElements();b._renderAndInit();b._prevValue=d;b.val(d)},_createTemplateHtml:function(){var c=this.groups;var b="padding-left: "+parseFloat(this.padding.left)+"px;padding-right: "+parseFloat(this.padding.right)+"px;padding-top: "+parseFloat(this.padding.top)+"px;padding-bottom: "+parseFloat(this.padding.bottom)+"px;";var f="<table id='formWrap' style='background-color: "+this.backgroundColor+"; width: 100%; white-space: nowrap; border: 1px solid "+this.borderColor+";"+b+"' cellpadding='0' cellspacing='0'><div id='formSubmit' style='display:hidden;'><div>";var j=this.template;for(var e=0;e<j.length;e++){var h="el_"+this.element.id+e;var d=this.template[e];var g=this._getToolTemplate(d,h);f+=g}f+="</table>";return f},_beginRow:function(e,b,c){if(undefined===b){b="auto"}if(c){c="valign='"+c+"'"}else{c=""}var d="<tr style='width: 100%; height: "+b+";' id='rowWrap_"+e+"' "+c+">";d+="<td style='width: 100%;'><table style='width: 100%; white-space: nowrap; border: 0px;' cellspacing='0' cellpadding='0'><tr style='width: 100%'>";return d},_endRow:function(){return"<td style='width: auto; background: transparent;'> </tr></table></td></tr>"},_beginColumn:function(d,c){if(!c){c=""}if(undefined===d){d="auto"}var b="<td style='width:"+d+"; background: transparent;'>";b+="<div style='display:block; overflow: visible; width: 100%; background: transparent;'>";return b},_endColumn:function(){return"</div></td>"},_splitLabelToolWidth:function(e,c){var h=c?"auto":e.columnwidth;var b=e.labelwidth;var d=a.extend({left:5,top:5,right:5,bottom:5},e.padding);var g=a.extend({left:5,top:5,right:5,bottom:5},e.labelpadding);for(var f in d){d[f]=!isNaN(d[f])?d[f]:parseFloat(d[f].toString())}for(var f in g){g[f]=!isNaN(g[f])?g[f]:parseFloat(g[f].toString())}if(e.label==""||e.label==undefined){b=0;g={left:0,right:0,top:0,bottom:0}}if(e.labelposition=="top"||e.labelposition=="bottom"){if(undefined===b){b=h}if(undefined===h){h=b}if(h&&h.toString().indexOf("%")!=-1&&b&&b.toString().indexOf("%")!=-1){h=b=Math.max(parseFloat(h),parseFloat(b))+"%"}if(h&&h.toString().indexOf("%")==-1&&b&&b.toString().indexOf("%")==-1){h=b=Math.max(parseFloat(h),parseFloat(b))+"px"}return[b,h]}if(b===undefined){if(h!==undefined&&h!=="auto"){return["auto",h]}else{if(e.labelposition=="right"){if(e.align=="right"||e.align=="center"||e.align=="middle"){return["auto","100%"]}return["100%","auto"]}return["auto","100%"]}}else{if(b.toString().indexOf("%")!==-1){b=parseFloat(b);if(h!==undefined){if(h.toString().indexOf("%")!==-1){h=parseFloat(h);return[Math.min(100,b)+"%",Math.min(h,100-b)+"%"]}else{h=parseFloat(h);return[Math.min(100,b)+"%",h]}}return[Math.min(100,b)+"%",Math.max(0,100-b)+"%"]}else{b=parseFloat(b)+g.left+g.right;if(h==undefined){return[b+"px","calc(100% - "+b+"px)"]}return[b+"px",h]}}},_getToolTemplate:function(h,t,j,q){var g={};for(var s in h){g[s.toLowerCase()]=h[s]}if(a.isArray(g.columns)&&isNaN(j)){var w=this._beginRow(t,g.rowheight||"auto");for(var B=0;B<g.columns.length;B++){var z=this._getToolTemplate(g.columns[B],(t+"_"+B),undefined,true);var u="auto";if(g.columns[B].columnWidth!==undefined){u=g.columns[B].columnWidth}else{if(g.columns[B].width!==undefined){u=g.columns[B].width}}w+=this._beginColumn(u);w+="<table cellspacing='0' cellpadding='0' style='width: 100%; white-space: nowrap; border: 0px;'>"+z+"</table>";w+=this._endColumn()}w+=this._endRow();return w}if(g.type=="option"&&g.component!="jqxDropDownList"){if(isNaN(j)){var C=this._beginRow(t,g.rowheight||"auto",g.valign);for(var B=0;B<g.options.length;B++){var z=this._getToolTemplate(g,(t+"_option_"+B),B,true);if(g.optionslayout=="horizontal"){var u=100/Math.max(1,g.options.length)+"%";if(g.columnwidth){u=g.columnwidth}C+=this._beginColumn(u);C+="<table cellspacing='0' cellpadding='0' style='width: 100%; white-space: nowrap; border: 0px;'>"+z+"</table>";C+=this._endColumn()}else{C+=z}}C+=this._endRow();return C}}var d=g.labelposition;var m=g.label;var k="";if(g.type=="option"&&g.component!="jqxDropDownList"&&!isNaN(j)){var k=g.options[j].label;m=k}if(m===undefined){m=""}var C="";var b=this._getToolLabelStyle(g)+this._getPaddingAndMarginStyle(g,true);var r=this._getToolStyle(g)+this._getPaddingAndMarginStyle(g,false);var e="";var y=this._getAlignMargin(g,"align");var D="text-align: left;";if(g.labelalign=="center"||g.labelalign=="middle"){D="text-align: center"}else{if(g.labelalign=="right"){D="text-align: right"}}var E="text-align: left;";if(g.align=="center"||g.align=="middle"){E="text-align: center"}else{if(g.align=="right"){E="text-align: right"}}var o=this._splitLabelToolWidth(g,q);var f=m;if(g.required){var n="<span class='"+e+"' style='color:red;'>*</span>";if(g.requiredposition){if(g.requiredposition.toLowerCase()=="left"){f=n+" "+m}else{f=m+" "+n}}else{f=m+" "+n}}var x="";if(g.type=="boolean"||(g.type=="option"&&!isNaN(j))){x+="; cursor: pointer;"}var l="<div class='"+e+"' style='"+b+"'><div style='"+D+x+";' id='label_"+t+"'>"+f+"</div></div>";var A=(g.info!==undefined&&g.infoposition!="left")?"margin-left: -3px;":"margin-right: -3px;";var c="<div style='"+A+"' class='"+this.toThemeProperty("jqx-info-icon")+"' title='"+g.info+"'></div>";var v="<div style='background: transparent;"+r+"'><div style='width: auto; height: auto; "+y+"' id='"+t+"'></div></div>";if(g.type=="text"||g.type=="button"){v="<div style='background: transparent;"+r+E+"'><input style='width: auto; height: auto; "+y+"' id='"+t+"' type='"+g.type+"'/></div>"}else{if(g.type=="password"){v="<div style='background: transparent;"+r+E+"'><input type='password' style='width: auto; height: auto; "+y+"' id='"+t+"'/></div>"}}if(g.type=="option"&&g.component!="jqxDropDownList"&&!isNaN(j)){var u=g.width;if(u===undefined){u="15px"}o=[g.labelwidth||"auto",u];if(g.labelposition&&(g.labelposition=="top"||g.labelposition=="bottom")){o=["100%","100%"]}v="<div style='background: transparent;"+r+y+E+"'><div style='width: "+u+"; height: 100%; "+y+E+";' id='"+t+"'></div></div>"}if(g.info!==undefined&&g.info!==""){if(g.infoposition=="left"){v="<table cellspacing='0' cellpadding='0' style='border: 0px; white-space: nowrap;"+y+"'><tr><td>"+c+"</td><td>"+v+"</td></tr></table>"}else{v="<table cellspacing='0' cellpadding='0' style='border: 0px; white-space: nowrap;"+y+"'><tr><td>"+v+"</td><td>"+c+"</td></tr></table>"}}if(d=="right"){C+=this._beginRow(t,g.rowheight||"auto",g.valign);C+=this._beginColumn(o[1]);C+=v;if(m!=""){C+=this._endColumn();C+=this._beginColumn(o[0]);C+=l}C+=this._endColumn();C+=this._endRow()}else{if(d=="top"){C+=this._beginRow(t,g.rowheight||"auto",g.valign);C+=this._beginColumn(g.columnwidth);if(m!=""){C+=l}C+=v;C+=this._endColumn();C+=this._endRow()}else{if(d=="bottom"){C+=this._beginRow(t,g.rowheight||"auto",g.valign);C+=this._beginColumn(g.columnwidth);C+=v;if(m!=""){C+=l}C+=this._endColumn();C+=this._endRow()}else{C+=this._beginRow(t,g.rowheight||"auto",g.valign);if(m!=""){C+=this._beginColumn(o[0]);C+=l;C+=this._endColumn()}C+=this._beginColumn(o[1]);C+=v;C+=this._endColumn();C+=this._endRow()}}}return C},_initTools:function(f,e){var d=f||this.template;if(undefined==e){e=""}for(var c=0;c<d.length;c++){var b=d[c];if(a.isArray(b.columns)){this._initTools(b.columns,c+"_");continue}var g=e+c;switch(b.type){case"color":this._initColorTool(g);break;case"option":if(b.component=="jqxDropDownList"){this._initOptionToolDropDownList(g)}else{this._initOptionTool(g)}break;case"dropdownlist":this._initOptionToolDropDownList(g);break;case"number":this._initNumberTool(g);break;case"boolean":case"checkbox":this._initBooleanTool(g);break;case"text":this._initTextTool(g);break;case"password":this._initPasswordTool(g);break;case"label":this._initLabelTool(g);break;case"date":case"time":case"datetime":this._initDateTimeTool(g);break;case"button":this._initButtonTool(g);break;case"custom":this._initCustomTool(g);break}if(b.visible===false){this._showhideComponent(undefined,g,false)}if(b.theme){this._setToolTheme(b,g)}}},_setToolTheme:function(c,e){var b=this._getComponentById(e);var d=c.theme||this.theme;switch(c.type){case"option":if(c.component=="jqxDropDownList"){b.jqxDropDownList("theme",d)}break;case"number":b.jqxNumberInput("theme",d);break;case"text":b.jqxInput("theme",d);break;case"password":b.jqxPasswordInput("theme",d);break}},_initOptionTool:function(h){var b=this;var j="el_"+this.element.id+h;var c=b._getTool(h);for(var d=0;d<c.options.length;d++){var g=j+"_option_"+d;var e=b.host.find("#"+g);if(e.length>0){e.jqxRadioButton({width:25,theme:b.theme,groupName:"group_"+h}).on("change",function(i){b._onChangeHandler(i)})}var f=b.host.find("#label_"+g);f.data("el",e);f.on("mousedown",function(k){var i=a(this).data("el");i.jqxRadioButton("toggle")})}},_initOptionToolDropDownList:function(j){var l=this;var d="el_"+this.element.id+j;var f=l._getTool(j);var g=this.host.find("#"+d);var h='<div style="height: 20px;"></div>';var b=[];if(f.options&&a.isArray(f.options)){for(var e=0;e<f.options.length;e++){b.push(f.options[e])}}if(f.init){f.init(g)}else{var c=isNaN(parseFloat(f.width))?"auto":f.width;if(f.width&&f.width.toString().indexOf("%")!=-1&&f.columnwidth===undefined){c="100%"}var k=isNaN(parseFloat(f.height))?"30px":f.height;g.jqxDropDownList({theme:l.theme,width:c||"auto",autoDropDownHeight:true,height:k,enableBrowserBoundsDetection:true,source:b,selectedIndex:0})}g.on("change",function(i){l._onChangeHandler(i)})},_initNumberTool:function(g){var c=this;var h="el_"+this.element.id+g;var d=c._getTool(g);var e=this.host.find("#"+h);if(d.init){d.init(e)}else{var f=isNaN(parseFloat(d.width))?"auto":d.width;var b=isNaN(parseFloat(d.height))?"30px":d.height;e.jqxNumberInput({theme:c.theme,width:f,height:b,inputMode:"simple"})}e.on("change",function(i){c._onChangeHandler(i)})},_initBooleanTool:function(f){var j=this;var b="el_"+this.element.id+f;var e=j._getTool(f);var g=this.host.find("#"+b);if(e.init){e.init(g)}else{var c=isNaN(parseFloat(e.width))?"auto":e.width;var i=isNaN(parseFloat(e.height))?"30px":e.height;var d=e.isThreeState==true;if(e.component===undefined||e.component=="jqxCheckBox"){g.jqxCheckBox({theme:j.theme,width:c,height:i,hasThreeStates:d})}else{return}}g.on("change",function(k){j._onChangeHandler(k)});var h=j.host.find("#label_"+b);h.on("mousedown",function(k){var l=j.host.find("#"+b).val();j.host.find("#"+b).val(!l)})},_initTextTool:function(g){var d=this;var h="el_"+this.element.id+g;var e=d._getTool(g);var c=this.host.find("#"+h);if(e.init){e.init(c)}else{var f=isNaN(parseFloat(e.width))?"auto":e.width;var b=isNaN(parseFloat(e.height))?"30px":e.height;c.jqxInput({theme:d.theme,width:f,height:b})}c.on("change",function(i){d._onChangeHandler(i)})},_initLabelTool:function(f){var b=this;var g="el_"+this.element.id+f;var c=b._getTool(f);var e=this.host.find("#"+g);if(c.render&&a.isFunction(c.render)){var d=c.render();e.html(d||"")}},_getTool:function(e){var b=this;var d=e.split("_");var c=b.template[d[0]];if(d[1]){if(a.isArray(c.columns)&&c.columns.length>d[1]){return c.columns[d[1]]}return undefined}return c},_initCustomTool:function(d){var b=this;var f="el_"+this.element.id+d;var c=b._getTool(d);var e=this.host.find("#"+f);if(c.init){c.init(e)}},_initButtonTool:function(g){var c=this;var h="el_"+this.element.id+g;var d=c._getTool(g);var e=this.host.find("#"+h);if(d.init){d.init(e)}else{var f=isNaN(parseFloat(d.width))?"auto":d.width;var b=isNaN(parseFloat(d.height))?"30px":d.height;e.jqxButton({theme:c.theme,width:f,height:b});e.val(d.text===undefined?"Button":d.text)}this.host.find("#"+h).on("click",function(i){c._onButtonClick(e,d)})},_initPasswordTool:function(g){var d=this;var h="el_"+this.element.id+g;var e=d._getTool(g);var c=this.host.find("#"+h);if(e.init){e.init(c)}else{var f=isNaN(parseFloat(e.width))?"auto":e.width;var b=isNaN(parseFloat(e.height))?"25px":e.height;c.jqxPasswordInput({theme:d.theme,width:f,height:b})}c.on("change",function(i){d._onChangeHandler(i)})},_initDateTimeTool:function(h){var e=this;var i="el_"+this.element.id+h;var f=e._getTool(h);var d=this.host.find("#"+i);if(f.init){f.init(d)}else{var g=isNaN(parseFloat(f.width))?"auto":f.width;var c=isNaN(parseFloat(f.height))?"30px":f.height;var b=f.formatString;if(!b){if(f.type=="time"){b="hh mm ss tt"}else{if(f.type=="date"){b="MM/dd/yyyy"}else{b="MM/dd/yyyy hh:mm:ss tt"}}}d.jqxDateTimeInput({theme:e.theme,width:g,height:c,formatString:b,showTimeButton:f.type!="date",showCalendarButton:f.type!="time"})}d.on("valueChanged",function(j){e._onChangeHandler(j)})},getComponentByName:function(c){if(!a.isArray(this.template)){return undefined}for(var d=0;d<this.template.length;d++){if(this.template[d].name==c){return this._getComponentById(d)}if(a.isArray(this.template[d].columns)){for(var b=0;b<this.template[d].columns.length;b++){if(this.template[d].columns[b].name==c){return this._getComponentById(d+"_"+b)}}}}return undefined},_getComponentById:function(c){var b=this.host.find("#el_"+this.element.id+c);return b},_getComponentLabelById:function(c){var b=this.host.find("#label_el_"+c);return b},hideComponent:function(b){this._showhideComponent(b,undefined,false)},showComponent:function(b){this._showhideComponent(b,undefined,true)},_showhideComponent:function(e,h,b){if(!a.isArray(this.template)){return}var d="";if(h===undefined){for(var f=0;f<this.template.length;f++){if(this.template[f].name==e){d=f;break}if(this.template[f].bind==e){d=f;break}if(a.isArray(this.template[f].columns)){for(var c=0;c<this.template[f].length;c++){if(this.template[f].columns[c].name==e){d=f+"_"+c;break}if(this.template[f].columns[c].bind==e){d=f+"_"+c;break}}}}}else{d=h}if(d!=""){var g=this.host.find("#rowWrap_el_"+this.element.id+d);if(g&&g.length!=0){if(b){g.show()}else{g.hide()}}}}})})(jqxBaseFramework);

