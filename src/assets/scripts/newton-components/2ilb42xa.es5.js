/*! Built with http://stenciljs.com */
NewtonComponents.loadBundle("2ilb42xa",["exports","./chunk-f9385b7c.js"],function(e,t){var n=window.NewtonComponents.h,a=t.moment?t.moment:t._moment,r=function(){function e(){this.titleDateFormat="ddd, MMM DD"}return e.prototype.render=function(){var e=this;return n("div",{class:"cal-week-cell",onClick:function(){return e.cellClick.emit({date:e.date,event:e.event})}},n("div",{class:"cal-week-cell-title "+(this.isToday?"today":"")},this.title),n("div",{class:"cal-week-cell-event"},n("div",{class:"cal-week-cell-event-time"},this.event?a(this.date).format("hh:mm A"):""),n("div",{class:"cal-week-cell-event-divider "+(this.event?"active":"")}),n("div",{class:"cal-week-cell-event-container"},this.event?this.eventContainerHasEvent:this.eventContainerNoEvent)))},Object.defineProperty(e.prototype,"title",{get:function(){var e=a();if(this.isToday)return n("div",null,"Today ",n("span",{class:"cal-week-cell-title-bull"})," ",e.format(this.titleDateFormat)," ");var t=e.clone().add(1,"day");return a(this.date).isSame(t,"day")?n("div",null,"Tomorrow ",n("span",{class:"cal-week-cell-title-bull"})," ",t.format(this.titleDateFormat)," "):a(this.date).format(this.titleDateFormat)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isToday",{get:function(){if(!this.date)return!1;var e=a();return a(this.date).isSame(e,"day")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"eventContainerNoEvent",{get:function(){return n("div",null,n("div",{class:"cal-week-cell-event-name empty"},"Nothing scheduled yet"),n("div",{class:"cal-week-cell-event-location empty"},"Tap to finds events for this day"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"eventContainerHasEvent",{get:function(){return n("div",null,n("div",{class:"cal-week-cell-event-name active"},this.event.name),n("div",{class:"cal-week-cell-event-location active"},this.event.location))},enumerable:!0,configurable:!0}),Object.defineProperty(e,"is",{get:function(){return"newton-calendar-week-cell"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{date:{type:"Any",attr:"date"},event:{type:"Any",attr:"event"},titleDateFormat:{type:String,attr:"title-date-format"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"cellClick",method:"cellClick",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".cal-week-cell{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.cal-week-cell .cal-week-cell-title{padding:8px;font-weight:600;font-size:12px;color:gray}.cal-week-cell-title.today{color:var(--primary)}.cal-week-cell .cal-week-cell-title-bull{font-size:30px;line-height:8px;vertical-align:middle}.cal-week-cell .cal-week-cell-title-bull::before{content:'\\2022'}.cal-week-cell .cal-week-cell-event{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding-left:8px;padding-right:8px;border-top:1px solid;border-bottom:1px solid;min-height:80px}.cal-week-cell .cal-week-cell-event-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:80;-ms-flex-positive:80;flex-grow:80}.cal-week-cell .cal-week-cell-event-time{-webkit-box-flex:20;-ms-flex-positive:20;flex-grow:20;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:100;max-width:72px;min-width:72px}.cal-week-cell .cal-week-cell-event-divider{display:-webkit-box;display:-ms-flexbox;display:flex;margin:8px 16px;border-left:1px solid}.cal-week-cell-event-divider.active{border-left:1px var(--primary) solid}.cal-week-cell .cal-week-cell-event-divider-default{border-left:1px var(--grey) solid}.cal-week-cell-event-container .cal-week-cell-event-location{margin-top:8px}.cal-week-cell-event-name.empty{color:var(--light-grey)}.cal-week-cell-event-location.empty{color:var(--light-grey);font-size:12px;font-weight:100}.cal-week-cell-event-name.active{color:#000}.cal-week-cell-event-location.active{color:#000;font-size:12px;font-weight:100}"},enumerable:!0,configurable:!0}),e}(),o=t.moment?t.moment:t._moment,l=function(){function e(){this.shownavbuttons=!0,this.currDay=o()}return e.prototype.watchData=function(){this.setWeekDays()},e.prototype.nextWeek=function(){this.currDay=this.currDay.clone().add(1,"week"),this.setWeekDays()},e.prototype.prevWeek=function(){this.currDay=this.currDay.clone().subtract(1,"week"),this.setWeekDays()},e.prototype.componentWillLoad=function(){this.setWeekDays()},e.prototype.render=function(){var e=this;return n("div",null,this.shownavbuttons?n("div",{class:"cal-week-split-view nav-buttons-container"},n("button",{class:"helix--button-primary",onClick:function(){return e.prevWeek()}},n("slot",{name:"cal-prev"},"Prev")),n("button",{class:"helix--button-primary",onClick:function(){return e.nextWeek()}},n("slot",{name:"cal-next"},"Next"))):"",n("newton-calendar-week-view",{selectedDay:this.currDay,onOnSelectedDayChange:function(){return e.changeDay(event)}}),this.renderCells)},e.prototype.changeDay=function(e){this.currDay=e.detail,this.setWeekDays()},Object.defineProperty(e.prototype,"renderCells",{get:function(){return this.events.map(function(e){return n("newton-calendar-week-cell",{date:e.day,event:e.event})})},enumerable:!0,configurable:!0}),e.prototype.setWeekDays=function(){for(var e=this.currDay,t=this.currDay.clone().endOf("isoWeek"),n=[],a=e,r=function(){var e=o(a.toDate()),t=l.data.filter(function(t){return e.isSame(o(t.day),"day")});if(0===t.length){var r={day:e,event:void 0};n.push(r)}else t.forEach(function(e){var t={day:o(e.day),event:e.event?e.event:void 0};n.push(t)});a=a.clone().add(1,"d")},l=this;a<=t;)r();this.events=n},Object.defineProperty(e,"is",{get:function(){return"newton-calendar-week-split-view"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{currDay:{state:!0},data:{type:"Any",attr:"data",watchCallbacks:["watchData"]},events:{state:!0},shownavbuttons:{type:Boolean,attr:"shownavbuttons"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".cal-week-split-view.nav-buttons-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-left:8px;padding-bottom:8px;padding-right:8px}.cal-week-split-view.nav-buttons-container button{padding:5px 20px}"},enumerable:!0,configurable:!0}),e}(),i=t.moment?t.moment:t._moment,c=function(){function e(){this.selectedDay=i(),this.locale="en"}return e.prototype.watchSelectedDay=function(){this.setWeekHeader()},e.prototype.selectDay=function(e){this.selectedDay=e,this.onSelectedDayChange.emit(e)},e.prototype.onLocaleUpdated=function(e){i.locale(e)},e.prototype.componentWillLoad=function(){this.onSelectedDayChange.emit(this.selectedDay),this.onLocaleUpdated(this.locale),this.setWeekHeader()},e.prototype.setWeekHeader=function(){for(var e=this.selectedDay.clone().startOf("isoWeek"),t=this.selectedDay.clone().endOf("isoWeek"),n=[],a=e;a<=t;)n.push(i(a.toDate())),a=a.clone().add(1,"d");this.columnHeaders=n},e.prototype.render=function(){var e=this;return n("div",{class:"cal-week-view"},n("div",{class:"cal-cell-row cal-header"},this.columnHeaders.map(function(t){return n("div",{class:"cal-cell",onClick:function(){return e.selectDay(t)}},t.format("dd").toString().toUpperCase().substr(0,1),n("div",{class:"call-day-number-wrapper"},n("span",{class:"\n                    cal-day-number\n                    "+(t.isSame(e.selectedDay,"day")?" cal-day-number-active":"")+"\n                  "},t.format("D"))))})))},Object.defineProperty(e,"is",{get:function(){return"newton-calendar-week-view"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{columnHeaders:{state:!0},locale:{type:String,attr:"locale",watchCallbacks:["onLocaleUpdated"]},selectDay:{method:!0},selectedDay:{type:"Any",attr:"selected-day",mutable:!0,watchCallbacks:["watchSelectedDay"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onSelectedDayChange",method:"onSelectedDayChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".cal-week-view .cal-header{text-align:center;font-weight:bolder;border-bottom:1px solid rgba(51,51,53,.25)}.cal-week-view .cal-cell-row:hover{background-color:var(--white)}.cal-week-view .cal-day-number{color:var(--light-gray);width:22px;height:22px;line-height:22px;text-align:center;display:inline-block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none;font-size:12px;font-weight:300}.cal-week-view .cal-day-number-active{background:var(--primary);color:var(--white);border-radius:50%}.cal-week-view .cal-cell-row{display:-webkit-box;display:-ms-flexbox;-js-display:flex;display:flex;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly}.cal-week-view .cal-header .cal-cell{padding:5px 0;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-week-view .cal-cell-row .cal-cell:hover,.cal-week-view .cal-cell.cal-has-events.cal-open{background-color:var(--white)}.cal-week-view .cal-cell{color:(--grey);font-weight:200;font-size:12px;float:left;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;-js-display:flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.cal-week-view .call-day-number-wrapper{padding-top:5px}"},enumerable:!0,configurable:!0}),e}();e.NewtonCalendarWeekCell=r,e.NewtonCalendarWeekSplitView=l,e.NewtonCalendarWeekView=c,Object.defineProperty(e,"__esModule",{value:!0})});