// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/ValueProvider/StatisticDataSourceSelector.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"message" class\x3d"message note" title\x3d"${nls.sdsTip}"\x3e${nls.sdsTip}\x3c/div\x3e\r\n    \x3cselect data-dojo-props\x3d\'style:{width:"99.5%"}\'  emptyLabel\x3d"${nls.noSdsTip}" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"sourceSelect" data-dojo-attach-event\x3d"change:_onSourceSelectChanged" class\x3d"restrict-select-width"\x3e\r\n    \x3c/select\x3e\r\n    \x3cdiv class\x3d"state-icon small-loading hide" data-dojo-attach-point\x3d"loading"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"state-icon error-icon hide" data-dojo-attach-point\x3d"errorIcon" title\x3d"${nls.noDataReturned}"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/Evented dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./StatisticDataSourceSelector.html jimu/LayerInfos/LayerInfos jimu/utils ../../../utils dijit/form/RadioButton dijit/form/Select".split(" "),function(k,g,l,e,m,n,p,q,r,t,f){return k([m,n,p,l],{baseClass:"jimu-statistic-data-source-selector",templateString:q,postMixInProperties:function(){this.layerInfosObj=r.getInstanceSync();this._statSourceIDs=null;
this._currentSourceID=-1},postCreate:function(){this.inherited(arguments);var a=this.appConfig;a&&this._onAppConfigLoaded(a)},setDataSource:function(a){a=this._getStatSourceIDs(a);t.isEqual(a,this._statSourceIDs)||(this._reset(),this._statSourceIDs=a,a=this._genarateSelectOption(a),this._initSourceSelect(a))},triggerChange:function(){var a=this.sourceSelect.get("value");this._onSourceSelectChanged(a)},updateFetchState:function(a){this._hideErrorIcon();this._hideLoading();"loading"===a?this._showLoading():
"error"===a&&this._showErrorIcon()},_showLoading:function(){e.removeClass(this.loading,"hide")},_hideLoading:function(){e.addClass(this.loading,"hide")},_showErrorIcon:function(){e.removeClass(this.errorIcon,"hide")},_hideErrorIcon:function(){e.addClass(this.errorIcon,"hide")},isValid:function(){return this._statSourceIDs&&this._statSourceIDs.length},_reset:function(){this._currentSourceID=-1;this._statSourceIDs=null;this.sourceSelect.removeOption(this.sourceSelect.getOptions());this.sourceSelect.addOption([]);
this.sourceSelect.reset()},reset:function(){this._reset();this._onAppConfigLoaded(this.appConfig)},_onSourceSelectChanged:function(a){this._currentSourceID=a;this._isCurrentSourceIDValid();var b=this._tryGetLayerIdDataSchema(a);b=this._getLayerDefinition(b.dataSchema,b.layerId);this.emit("change",{definition:b,sourceID:a})},_getLayerDefinition:function(a,b){if(a||b){var c;b&&(c=this.layerInfosObj.getLayerInfoById(b).getPopupInfo());b={type:"Table",fields:[]};b.fields=g.clone(a.fields);a.groupByFields&&
a.groupByFields[0]&&(b.groupByFields=g.clone(a.groupByFields));f.addAliasForLayerDefinition(b,c);return b=f.preProcessDefinition(b)}},_tryGetLayerIdDataSchema:function(a){var b={layerId:"",dataSchema:null};a=(a=f.getDsTypeInfoMeta(a,this.appConfig))&&a.dsMeta;if(!a)return b;b.dataSchema=a.dataSchema;a=f.parseDataSourceId(a.id);b.layerId=a&&a.layerId;return b},getSelectedDataSource:function(){var a=this.sourceSelect.get("value");if(a&&(a=this._tryGetLayerIdDataSchema(a),a=this._getLayerDefinition(a.dataSchema,
a.layerId)))return a},getCurrentSourceID:function(){return this._currentSourceID},getCurrentSourceLabel:function(){var a=this._currentSourceID;if(this._currentSourceID){var b=this._getAppConfigDataSource()[this._currentSourceID];b&&(a=b.label)}return a},setCurrentSourceID:function(a){if(this._currentSourceID!==a){this._currentSourceID=a;if(!this._isCurrentSourceIDValid())return!1;this.sourceSelect.set("value",this._currentSourceID);return!0}},_isCurrentSourceIDValid:function(){return!!this._getAppConfigDataSource()[this._currentSourceID]},
_getAppConfigDataSource:function(){return this.appConfig&&this.appConfig.dataSource&&this.appConfig.dataSource.dataSources||{}},_getStatSourceIDs:function(a){var b=[],c=Object.keys(a);if(!c||!c.length)return b;c.forEach(function(d){var h=a[d];h&&"FeatureStatistics"===h.type&&b.push(d)}.bind(this));return b},_genarateSelectOption:function(a){var b=[];if(!a||!a.length)return b;var c=this._getAppConfigDataSource();a.forEach(function(d){b.push({label:c[d].label,value:d})}.bind(this));return b},_initSourceSelect:function(a){a&&
a.length&&(this.sourceSelect.removeOption(this.sourceSelect.getOptions()),this.sourceSelect.addOption(a))},_onAppConfigLoaded:function(a){a&&(this.appConfig=g.clone(a),a=this._getAppConfigDataSource(),this.setDataSource(a))}})});