define(["require","underscore","backbone","request","serverSettingsCommon/enum/serverSettingGroupsEnum"],function(e){var t=e("underscore"),n=e("backbone"),r=e("request"),i=e("serverSettingsCommon/enum/serverSettingGroupsEnum"),u=n.Collection.extend({initialize:function(e,t){this.urlPUTTemplate="rest_v2/attributes?_embedded=permission",this.urlGETTemplate=this.urlPUTTemplate+"&group="+i.CUSTOM_SERVER_SETTINGS},parse:function(e){return e&&e.attribute?e.attribute:[]},url:function(e){return"PUT"===e?this.urlPUTTemplate:this.urlGETTemplate},escapeLevelId:function(e){return encodeURIComponent(e).replace("'","%27")},save:function(e,t){var n="PUT",i=this._modelsToJSON(t);return r({url:this.url(n)+this._concatNames(e),type:"PUT",contentType:"application/hal+json",headers:{Accept:"application/hal+json"},data:JSON.stringify({attribute:i})})},_modelsToJSON:function(e){return t.map(e,function(e){return e.toJSON()})},_concatNames:function(e){e=t.isArray(e)?e:[e];var n="";return t.each(e,function(e){n+="&name="+this.escapeLevelId(e.get("name"))},this),n}});return u});