(this.webpackJsonpburger_app=this.webpackJsonpburger_app||[]).push([[0],[,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__hhq5l",BreadTop:"BurgerIngredient_BreadTop__1cMb6",Seeds1:"BurgerIngredient_Seeds1__1_5k8",Seeds2:"BurgerIngredient_Seeds2__3y94R",Meat:"BurgerIngredient_Meat__1408l",Cheese:"BurgerIngredient_Cheese__2JN2N",Salad:"BurgerIngredient_Salad__3FXBM",Bacon:"BurgerIngredient_Bacon__3t7Lb"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__16c36",Open:"SideDrawer_Open__30jY0",Close:"SideDrawer_Close__lMqpz",Logo:"SideDrawer_Logo__nqJAk"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__ouRCr",Label:"BuildControl_Label__3fAsI",Less:"BuildControl_Less__3R86k",More:"BuildControl_More__37Hz8"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1vGil",Logo:"Toolbar_Logo__1ZRNR",DesktopOnly:"Toolbar_DesktopOnly__2xc6D"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__1N7ES",active:"NavigationItem_active__395yY"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3FFsA",OrderButton:"BuildControls_OrderButton__guWqv",enable:"BuildControls_enable__1AQ6K"}},function(e,t,n){e.exports={Button:"Button_Button__-2k6k",Success:"Button_Success__1gnjS",Danger:"Button_Danger__3VSqi"}},,function(e,t,n){e.exports={Content:"Layout_Content__11Gsu"}},function(e,t,n){e.exports={Logo:"Logo_Logo__22ZXh"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1frUa"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__28Cr6"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2VKTI"}},function(e,t,n){e.exports={Burger:"Burger_Burger__zFpNb"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3OUBJ"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(15),i=n.n(c),o=(n(29),n(3)),d=n(4),l=n(6),u=n(5),j=n(16),b=n.n(j),h=n(9),g=n.n(h),p=n.p+"static/media/burger-logo.ec69c7f6.png",O=n(17),_=n.n(O),x=function(e){return Object(r.jsx)("div",{className:_.a.Logo,style:{height:e.height},children:Object(r.jsx)("img",{src:p,alt:"MyBurger"})})},v=n(18),m=n.n(v),f=n(12),B=n.n(f),C=function(e){return Object(r.jsx)("li",{className:B.a.NavigationItem,children:Object(r.jsx)("a",{href:e.link,className:e.active?B.a.active:null,children:e.children})})},N=function(e){return Object(r.jsxs)("ul",{className:m.a.NavigationItems,children:[Object(r.jsx)(C,{link:"/",active:!0,children:"Burger Builder"}),Object(r.jsx)(C,{link:"/",children:"Checkout"})]})},k=n(19),w=n.n(k),S=function(e){return Object(r.jsxs)("div",{className:w.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},y=function(e){return Object(r.jsxs)("header",{className:g.a.Toolbar,children:[Object(r.jsx)(S,{clicked:e.drawerToggleClicked}),Object(r.jsx)("div",{className:g.a.Logo,children:Object(r.jsx)(x,{})}),Object(r.jsx)("nav",{className:g.a.DesktopOnly,children:Object(r.jsx)(N,{})})]})},D=n(7),I=n.n(D),T=n(20),L=n.n(T),M=function(e){return e.show?Object(r.jsx)("div",{className:L.a.Backdrop,onClick:e.clicked}):null},H=function(e){var t=[I.a.SideDrawer,I.a.Close];return e.open&&(t=[I.a.SideDrawer,I.a.Open]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(M,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),children:[Object(r.jsx)("div",{className:I.a.Logo,children:Object(r.jsx)(x,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(N,{})})]})]})},P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(y,{drawerToggleClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(H,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(r.jsx)("main",{className:b.a.Content,children:this.props.children})]})}}]),n}(a.Component),A=n(10),F=n(23),R=n(2),q=n.n(R),E=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(r.jsx)("div",{className:q.a.BreadBottom});break;case"bread-top":t=Object(r.jsxs)("div",{className:q.a.BreadTop,children:[Object(r.jsx)("div",{className:q.a.Seeds1}),Object(r.jsx)("div",{className:q.a.Seeds2})]});break;case"meat":t=Object(r.jsx)("div",{className:q.a.Meat});break;case"cheese":t=Object(r.jsx)("div",{className:q.a.Cheese});break;case"salad":t=Object(r.jsx)("div",{className:q.a.Salad});break;case"bacon":t=Object(r.jsx)("div",{className:q.a.Bacon});break;default:t=null}return t},J=n(21),Y=n.n(J),z=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(F.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(E,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Please start adding ingredients"})),Object(r.jsxs)("div",{className:Y.a.Burger,children:[Object(r.jsx)(E,{type:"bread-top"}),t,Object(r.jsx)(E,{type:"bread-bottom"})]})},U=n(8),G=n.n(U),K=function(e){return Object(r.jsxs)("div",{className:G.a.BuildControl,children:[Object(r.jsx)("div",{className:G.a.Label,children:e.label}),Object(r.jsx)("button",{className:G.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(r.jsx)("button",{className:G.a.More,onClick:e.added,children:"More"})]})},V=n(13),W=n.n(V),X=[{label:"Salad",type:"salad"},{label:"Cheese",type:"cheese"},{label:"Bacon",type:"bacon"},{label:"Meat",type:"meat"}],Z=function(e){return Object(r.jsxs)("div",{className:W.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current Price: ",Object(r.jsx)("strong",{children:e.price.toFixed(2)})]}),X.map((function(t){return Object(r.jsx)(K,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:W.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},Q=n(22),$=n.n(Q),ee=function(e){return e.show?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(M,{show:e.show,clicked:e.modalClosed}),Object(r.jsx)("div",{className:$.a.Modal,style:{transform:e.show?"translateY(0)":"traslateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]}):null},te=n(14),ne=n.n(te),re=function(e){return Object(r.jsx)("button",{className:[ne.a.Button,ne.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},ae=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":"," ",e.ingredients[t]]},t)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious burger with following ingredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price: ",e.price.toFixed(2)]})}),Object(r.jsx)("p",{children:"Continue to checkout?"}),Object(r.jsx)(re,{btnType:"Danger",clicked:e.purchaseCanceled,children:"CANCEL"}),Object(r.jsx)(re,{btnType:"Success",clicked:e.purchaseContinued,children:"CONTINUE"})]})},se={salad:.5,cheese:1,bacon:1.5,meat:2},ce=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:0,cheese:0,bacon:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.updatePurchaseState=function(t){var n=Object.values(t).reduce((function(e,t){return e+t}),0);e.setState({purchasable:n>0})},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var a=se[t],s=e.state.totalPrice+a;e.setState({ingredients:r,totalPrice:s}),e.updatePurchaseState(r)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t]-1;if(n>=0){var r=Object(A.a)({},e.state.ingredients);r[t]=n;var a=se[t],s=e.state.totalPrice-a;e.setState({ingredients:r,totalPrice:s}),e.updatePurchaseState(r)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){alert("Order Received"),e.setState({purchasing:!1})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ee,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:Object(r.jsx)(ae,{ingredients:this.state.ingredients,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})}),Object(r.jsx)(z,{ingredients:this.state.ingredients}),Object(r.jsx)(Z,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice})]})}}]),n}(a.Component),ie=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(P,{children:Object(r.jsx)(ce,{})})})}}]),n}(a.Component);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(ie,{})}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.81e0f3d7.chunk.js.map