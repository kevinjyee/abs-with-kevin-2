(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/antlogo.b29324c4.svg"},115:function(e,t,a){e.exports=a.p+"static/media/abswithkevin.7748d484.svg"},171:function(e,t,a){e.exports=a.p+"static/media/fitness-svgrepo-com.9c6d56d2.svg"},192:function(e,t,a){e.exports=a(387)},387:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a(52),i=a(53),l=a(21),s=a(162),u=a(18),d=a(24),E=a(81),m=a.n(E),p="attendance/GET_ATTENDANCE_REQUESTED",h="attendance/GET_ATTENDANCE_RECEIEVED",g=function(e){return function(e){e(k),m.a.get("https://v2-api.sheety.co/d15b0998a5ba722b2df7464f83e6a997/absWithKevinApi/attendance",{}).then(function(t){var a;e((a=t.data,{type:h,attendance:a}))}).catch(function(e){})}};function k(){return{type:p}}var v={count:0,isIncrementing:!1,isDecrementing:!1},b="Workout/GET_WORKOUT_REQUESTED",f="Workout/GET_WORKOUT_RECEIEVED",w=function(e){return function(e){e(y),m.a.get("https://v2-api.sheety.co/d15b0998a5ba722b2df7464f83e6a997/absWithKevinApi/workout",{}).then(function(t){var a;e((a=t.data,{type:f,Workout:a}))}).catch(function(e){})}};function y(){return{type:b}}var T=Object(l.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;switch((arguments.length>1?arguments[1]:void 0).type){case"counter/INCREMENT_REQUESTED":return Object(d.a)({},e,{isIncrementing:!0});case"counter/INCREMENT":return Object(d.a)({},e,{count:e.count+1,isIncrementing:!e.isIncrementing});case"counter/DECREMENT_REQUESTED":return Object(d.a)({},e,{isDecrementing:!0});case"counter/DECREMENT":return Object(d.a)({},e,{count:e.count-1,isDecrementing:!e.isDecrementing});default:return e}},attendance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return console.log("GET ATTENDANCE REQUESTED"),Object(d.a)({},e,{loading:!0,data:t.attendance.attendance});case h:return console.log("GET ATTENDANCE RECEIVED"),console.log(e),console.log(t),Object(d.a)({},e,{loading:!1,data:t.attendance.attendance});default:return e}},workout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return console.log("GET WORKOUT REQUESTED"),Object(d.a)({},e,{loading:!0,data:t.Workout.workout});case f:return console.log("GET WORKOUT RECEIVED"),console.log(e),console.log(t),Object(d.a)({},e,{loading:!1,data:t.Workout.workout});default:return e}}}),O=u.a(),N=[s.a,Object(i.routerMiddleware)(O)],j=l.d.apply(void 0,[l.a.apply(void 0,N)].concat([])),C=Object(l.e)(Object(i.connectRouter)(O)(T),{},j),D=a(28),R=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"About Page"),o.a.createElement("p",null,"Did you get here via Redux?"))},_=a(82),x=a(83),S=a(91),I=a(84),W=a(92),A=a(391),U=a(390),L=(a(133),a(97),a(45)),G=a(168),P=a(114),K=a.n(P),M=a(115),Q=a.n(M),z=a(63),V=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(S.a)(this,Object(I.a)(t).call(this,e))).handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a.state={current:a.props.currentPage},a}return Object(W.a)(t,e),Object(x.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.currentPage!==this.props.currentPage&&this.setState({current:this.props.currentPage})}},{key:"render",value:function(){return this.state.current?o.a.createElement("div",null,o.a.createElement("div",{id:"header"},o.a.createElement("div",{className:"ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-5 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-3"},o.a.createElement("a",{id:"logo"},o.a.createElement("img",{className:"brandLogo",src:K.a}),o.a.createElement("img",{className:"brandName",src:Q.a}))),o.a.createElement(L.a,{mode:"horizontal",onClick:this.handleClick,selectedKeys:[this.state.current],style:{lineHeight:"64px"}},o.a.createElement(L.a.Item,{key:"1"},o.a.createElement(z.a,{to:"/abs-with-kevin"},o.a.createElement(A.a,null),"Today's Workout")),o.a.createElement(L.a.Item,{key:"2"},o.a.createElement(z.a,{to:"/abs-with-kevin/past-workouts"},o.a.createElement(U.a,null),"Past Workouts"))))):o.a.createElement(G.a,null)}}]),t}(o.a.Component),J=a(388),q=a(188),H=a(171),B=a.n(H),F=a(392),X=a(393),Y=a(389),Z=Object(q.a)({"ant-table-thead":{backgroundColor:"blue"}}),$=[{title:"Rank",key:"rank",dataIndex:"rank",width:30},{title:"Name",key:"name",dataIndex:"name",width:50},{title:"Attendance",key:"total",dataIndex:"total",width:50},{title:" ",width:10,key:"smiley",dataIndex:"rank",render:function(e){return 1==e||2==e?o.a.createElement(F.a,{twoToneColor:"#faad14"}):2==e||3==e?o.a.createElement(F.a,{twoToneColor:"#1890ff"}):4==e||5==e?o.a.createElement(F.a,{twoToneColor:"#f759ab"}):void 0}}],ee=[{title:"Workout",key:"workout",dataIndex:"workout",width:40},{title:" ",width:40,key:"image",dataIndex:"image",render:function(e){return o.a.createElement("img",{className:"hundred_x_hundred",src:e})}}],te=function(e){function t(e){var a;return Object(_.a)(this,t),(a=Object(S.a)(this,Object(I.a)(t).call(this,e))).state={attendanceList:a.props.attendance||[],workoutList:a.props.workout||[]},a}return Object(W.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.getAttendance(),this.setState({attendanceList:this.props.attendance}),this.props.getWorkout(),this.setState({workoutList:this.props.workout})}},{key:"componentDidUpdate",value:function(e,t){e.attendance!==this.props.attendance&&this.setState({attendanceList:this.props.attendance}),e.workout!==this.props.workout&&this.setState({workoutList:this.props.workout})}},{key:"render",value:function(){var e=this.state.attendanceList,t=this.state.workoutList;return e&&e.length>0&&t&&t.length?o.a.createElement("div",{className:"homebody"},o.a.createElement("div",{className:"top-info"},o.a.createElement("div",{className:"center_title"},o.a.createElement("div",null,o.a.createElement("img",{className:"brandLogo",src:B.a}),"abs with kevin #12"))),o.a.createElement("div",{className:"page_grid"},o.a.createElement("div",{className:"half_page_ish"},o.a.createElement("span",null,o.a.createElement("div",{className:"center_title"}," ",o.a.createElement(X.a,{twoToneColor:"#faad14"})," ",o.a.createElement("h3",null," ",o.a.createElement("u",null," Leaderboard  ")," ")),o.a.createElement(J.a,{columns:$,dataSource:e,className:Z,pagination:{pageSize:50},scroll:{y:700}}))),o.a.createElement("div",{className:"half_page_ish"},o.a.createElement("span",null,o.a.createElement("div",{className:"center_title"}," ",o.a.createElement(Y.a,{twoToneColor:"#eb2f96"})," ",o.a.createElement("h3",null," ",o.a.createElement("u",null," Workout  ")," ")),o.a.createElement(J.a,{columns:ee,dataSource:t,className:Z,pagination:{pageSize:50},scroll:{y:700}}))))):o.a.createElement("div",{className:"half_page_ish"},o.a.createElement(J.a,{columns:$,dataSource:[],pagination:{pageSize:50},scroll:{y:700}}))}}]),t}(o.a.Component),ae=a(121);var ne=Object(r.connect)(function(e){return{attendance:e.attendance.data,loading:e.attendance.loading,workout:e.workout.data}},function(e){return Object(l.b)({getAttendance:g,getWorkout:w},e)})(te);ae.a.initialize("UA-163437850-1"),ae.a.set({page:"Loaded"});var oe=function(){return o.a.createElement("div",null,o.a.createElement(V,{currentPage:"1"}),o.a.createElement("main",null,o.a.createElement(D.Route,{exact:!0,path:"/abs-with-kevin/",component:ne}),o.a.createElement(D.Route,{exact:!0,path:"/abs-with-kevin/pass-workouts",component:R})))},ce=(a(386),document.querySelector("#root"));Object(c.render)(o.a.createElement(r.Provider,{store:C},o.a.createElement(i.ConnectedRouter,{history:O},o.a.createElement("div",null,o.a.createElement(oe,null)))),ce)},97:function(e,t,a){}},[[192,1,2]]]);
//# sourceMappingURL=main.1863c227.chunk.js.map