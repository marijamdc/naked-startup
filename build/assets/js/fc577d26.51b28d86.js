"use strict";(self.webpackChunknaked_startup=self.webpackChunknaked_startup||[]).push([[8274,7192,8529,4100],{694:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(7294);class s extends n.Component{constructor(e){super(e),this.count=this.count.bind(this),this.state={days:0,minutes:0,hours:0,secounds:0,time_up:""},this.x=null,this.deadline=null}count(){var e=(new Date).getTime(),t=this.deadline-e,a=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),s=Math.floor(t%36e5/6e4),l=Math.floor(t%6e4/1e3),c=a<10?"0"+a:a,r=n<10?"0"+n:n,o=s<10?"0"+s:s,m=l<10?"0"+l:l;this.setState({days:c,minutes:o,hours:r,seconds:m}),t<0&&(clearInterval(this.x),this.setState({days:0,minutes:0,hours:0,seconds:0,time_up:"TIME IS UP"}))}componentDidMount(){this.deadline=new Date("Jan 31, 2023 21:00:00").getTime(),this.x=setInterval(this.count,1e3)}render(){const{days:e,seconds:t,hours:a,minutes:s}=this.state;return n.createElement("div",{id:"countdown"},n.createElement("div",{className:"col-4"},n.createElement("div",{className:"box"},n.createElement("p",{id:"day"},e),n.createElement("span",{className:"text"},"Days"))),n.createElement("div",{className:"col-4"},n.createElement("div",{className:"box"},n.createElement("p",{id:"hour"},a),n.createElement("span",{className:"text"},"Hours"))),n.createElement("div",{className:"col-4"},n.createElement("div",{className:"box"},n.createElement("p",{id:"minute"},s),n.createElement("span",{className:"text"},"Minutes"))),n.createElement("div",{className:"col-4"},n.createElement("div",{className:"box"},n.createElement("p",{id:"second"},t),n.createElement("span",{className:"text"},"Seconds"))))}}const l=s},7193:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(7294);class s extends n.Component{modal(){document.getElementById("modal").classList.toggle("is_open")}render(){return n.createElement("div",{className:"optin"},n.createElement("p",null,"Want to be the first to know when we launch?"),n.createElement("button",{onClick:()=>this.modal()},"Click Me"),n.createElement("div",{id:"modal"},n.createElement("div",{className:"wrapper"},n.createElement("h3",null,"Enter Your Email"),n.createElement("div",{className:"clearfix"},n.createElement("div",{className:"col-8"}),n.createElement("div",{className:"col-3"})))))}}const l=s},7978:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var n=a(7294);class s extends n.Component{preloader(){let e=document.querySelector(".preloader");setTimeout((()=>{e.style.opacity="0",setTimeout((()=>{e.style.display="none"}),1e3)}),3e3)}componentDidMount(){this.preloader()}render(){return n.createElement("div",{className:"preloader"},n.createElement("div",{class:"spinner_wrap"},n.createElement("div",{class:"spinner"})))}}const l=s},1912:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var n=a(7294),s=(a(3935),a(7978)),l=a(694),c=a(7193);function r(){return n.createElement("div",{className:"App"},n.createElement("div",{className:"container"},n.createElement("h1",null,"Naked Startup",n.createElement("br",null),"Coming Soon"),n.createElement(l.default,null),n.createElement(c.default,null),n.createElement(s.default,null)))}}}]);