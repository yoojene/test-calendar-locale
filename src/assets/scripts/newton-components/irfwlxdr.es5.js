/*! Built with http://stenciljs.com */
NewtonComponents.loadBundle("irfwlxdr",["exports"],function(e){var t=window.NewtonComponents.h,n=function(){function e(){this.available=!1}return e.prototype.onServiceUpdated=function(){!this.isServer&&this.service?this.available=!0:this.available=!1},e.prototype.getFolderList=function(){var e=this;return this.service.getFolderList().then(function(t){e.folderList=t}).catch(function(e){return e})},e.prototype.getFolderDetail=function(){},e.prototype.render=function(){return this.available?this.folderList.length?t("div",null,this.folderList.map(function(e){return t("div",{class:"label"},e.title)})):t("div",{class:"none"},"Google Drive not connected."):t("div",{class:"none"},"Google Drive not available.")},Object.defineProperty(e,"is",{get:function(){return"newton-google-drive-view"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{available:{state:!0},folderList:{state:!0},getFolderDetail:{method:!0},getFolderList:{method:!0},isServer:{context:"isServer"},service:{type:"Any",attr:"service",watchCallbacks:["onServiceUpdated"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"newton-google-drive-view-stencil .none{padding:10px;text-align:center}newton-google-drive-view-stencil .label{margin:11px 8px 11px 0}"},enumerable:!0,configurable:!0}),e}();e.NewtonGoogleDriveView=n,Object.defineProperty(e,"__esModule",{value:!0})});