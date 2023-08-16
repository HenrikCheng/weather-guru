(this["webpackJsonpweather-guru"]=this["webpackJsonpweather-guru"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(6),s=a.n(r),i=(a(12),a(5)),d=a(7),l=a(2),o=(a(13),a(4),a(0)),j=function(e){return Object(o.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(e.weatherDescription.icon,".png"),alt:"weather icon"})},u=function(e){var t=e.data,a=e.isLoadingWeatherdata,n=e.isCurrent,c=function(){if(n)return Object(o.jsxs)("p",{className:"card-text",children:["\ud83d\ude0c Feels like: ",t.feels_like+" \xb0C"]});if("object"===typeof t.feels_like){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{children:"\ud83d\ude0c Feels like"}),["morn","day","eve","night"].map((function(e){return Object(o.jsxs)("p",{children:["Time: ",e.charAt(0).toUpperCase()+e.slice(1),", Temperature:"," ",t.feels_like[e]," \xb0C"]},e)}))]})}return Object(o.jsx)(o.Fragment,{})};return a?Object(o.jsx)(o.Fragment,{}):t?Object(o.jsx)("div",{className:"card",style:{lineHeight:"75%"},children:Object(o.jsxs)("div",{className:"card-body pt-1",children:[Object(o.jsxs)("h5",{className:"card-title d-flex align-items-center justify-content-between mb-0",children:[n&&Object(o.jsx)("span",{children:"Right now"}),Object(o.jsx)(j,{weatherDescription:t.weather[0]})]}),Object(o.jsx)("div",{className:"card-text",children:Object(o.jsx)(c,{})}),Object(o.jsxs)("p",{className:"card-text",children:["\ud83c\udf0a Humidity: ",t.humidity+" %"]}),Object(o.jsxs)("p",{className:"card-text",children:["\ud83c\udf05 Sunrise: ",new Date(1e3*t.sunrise).toLocaleTimeString()]}),Object(o.jsxs)("p",{className:"card-text",children:["\ud83c\udf07 Sunset: ",new Date(1e3*t.sunset).toLocaleTimeString()]})]})}):Object(o.jsx)(o.Fragment,{})},b=function(){return Object(o.jsxs)("div",{className:"loaderContainer",children:[Object(o.jsx)("span",{children:"Getting your data"}),Object(o.jsxs)("div",{className:"spinner",children:[Object(o.jsx)("div",{className:"bounce1"}),Object(o.jsx)("div",{className:"bounce2"}),Object(o.jsx)("div",{className:"bounce3"})]})]})},h=function(e){var t=e.lon,a=e.lat,n=e.data;e.onClickHandler;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:n.timezone}),t&&a?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{children:["Latitude: ",Math.round(1e3*a)/1e3]}),Object(o.jsxs)("div",{children:["Longitude: ",Math.round(1e3*t)/1e3]})]}):Object(o.jsx)(b,{})]})})})},O=a.p+"static/media/panda.d59f7d49.png";var m=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),s=Object(l.a)(r,2),j=s[0],b=s[1],m=Object(n.useState)([]),x=Object(l.a)(m,2),p=x[0],g=x[1],f=Object(n.useState)(!0),v=Object(l.a)(f,2),w=v[0],N=v[1],y=Object(n.useState)(!0),S=Object(l.a)(y,2),k=S[0],C=S[1];Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){c(e.coords.latitude),b(e.coords.longitude)})),N(!1)}),[]),Object(n.useEffect)((function(){!1===w&&L(a,j)}),[j]);var F=function(e){return(new Date).getTime()-parseInt(e,10)<36e5},L=function(){var e=Object(d.a)(Object(i.a)().mark((function e(t,a){var n,c,r,s,d,l,o;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("weatherData"))){e.next=7;break}if(c=JSON.parse(n),r=c.timestamp,s=c.data,!F(r)){e.next=7;break}return g(s),C(!1),e.abrupt("return");case 7:return e.prev=7,e.next=10,fetch("".concat("https://api.openweathermap.org/data/2.5","/onecall?lat=").concat(t,"&lon=").concat(a,"&units=metric&exclude=minutely,hourly&appid=").concat("cd23d653ce8d3a3cfbbdcacad590ce4d"));case 10:return d=e.sent,e.next=13,d.json();case 13:l=e.sent,g(l),o={timestamp:(new Date).getTime(),data:l},localStorage.setItem("weatherData",JSON.stringify(o)),C(!1),e.next=24;break;case 20:e.prev=20,e.t0=e.catch(7),console.error("Error fetching weather data:",e.t0),C(!1);case 24:case"end":return e.stop()}}),e,null,[[7,20]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"App bg-secondary",children:[Object(o.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(o.jsx)("img",{src:O,width:"30",height:"30",alt:"",className:"pandaLogo"}),Object(o.jsx)("span",{className:"m-3 text-light",children:"WeatherPanda"})]}),Object(o.jsxs)("div",{className:"cardContainer",children:[Object(o.jsx)(h,{lat:a,lon:j,data:p,isLoadingGPS:w,onClickHandler:function(){return L(a,j)}}),Object(o.jsx)(u,{data:p.current,isLoadingWeatherdata:k,isCurrent:!0}),p&&p.daily&&p.daily.length>0&&p.daily.map((function(e,t){return Object(o.jsx)(u,{data:e,isLoadingWeatherdata:k,isCurrent:!1},t)}))]})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(15);s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),x()},4:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.2cc18997.chunk.js.map