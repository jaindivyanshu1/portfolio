(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},3:function(e){e.exports={skills:[{id:"1",src:"./img/app-dev.png",title:"App Development",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"},{id:"2",src:"./img/web-development.png",title:"Web Development",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"},{id:"3",src:"./img/github.png",title:"Git & Github",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"},{id:"4",src:"./img/database.png",title:"Database & Management",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique"}],portfolio:[{id:"1",src:"./img/placeholder-image.png",title:"Ahuse",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",link:"View In Github"},{id:"2",src:"./img/placeholder-image-1.png",title:"App Dashboard",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",link:"View In Github"},{id:"3",src:"./img/placeholder-image-2.png",title:"Easy Rentn",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",link:"View In Github"}],testimonial:[{id:"1",count:"5",src:"./img/avatar-image.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",author_name:"Dianne Russel",author_designation:"Starbucks"},{id:"2",count:"5",src:"./img/avatar-image-1.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",author_name:"Kristin Watson",author_designation:"Louis Vuitton"},{id:"3",count:"5",src:"./img/avatar-image-2.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",author_name:"Kathryn Murphy",author_designation:"McDonald's"}]}},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(17),s=a.n(i),c=(a(27),a(18)),o=a(2),r=a(4);var m=function(){const[e,t]=Object(n.useState)(!1),a=()=>{t(!1)};return Object(n.useEffect)(()=>{const e=()=>{window.innerWidth<=500&&a()};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),Object(n.useEffect)(()=>{window.innerWidth<=1200&&a()},[]),l.a.createElement("nav",{className:"navbar ".concat(e?"active":"")},l.a.createElement("div",null,l.a.createElement("img",{src:"./img/my_logo.png",alt:"Logoipsum"})),l.a.createElement("a",{className:"nav__hamburger ".concat(e?"active":""),onClick:()=>{t(!e)}},l.a.createElement("span",{className:"nav__hamburger__line"}),l.a.createElement("span",{className:"nav__hamburger__line"}),l.a.createElement("span",{className:"nav__hamburger__line"})),l.a.createElement("div",{className:"navbar--items ".concat(e?"active":"")},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.Link,{onClick:a,activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"heroSection",className:"navbar--content"},"Home")),l.a.createElement("li",null,l.a.createElement(r.Link,{onClick:a,activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"mySkills",className:"navbar--content"},"My Skills")),l.a.createElement("li",null,l.a.createElement(r.Link,{onClick:a,activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"MyPortfolio",className:"navbar--content"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(r.Link,{onClick:a,activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"AboutMe",className:"navbar--content"},"About Me")))),l.a.createElement(r.Link,{onClick:a,activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"Contact",className:"btn btn-outline-primary"},"Contact Me"))};function u(){return l.a.createElement("section",{id:"AboutMe",className:"about--section"},l.a.createElement("div",{className:"about--section--img"},l.a.createElement("img",{src:"./img/My_first_design.png",alt:"About Me"})),l.a.createElement("div",{className:"hero--section--content--box about--section--box"},l.a.createElement("div",{className:"hero--section--content"},l.a.createElement("p",{className:"section--title"},"About"),l.a.createElement("h1",{className:"skills-section--heading"},"About Me"),l.a.createElement("p",{className:"hero--section-description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis sit debitis omnis harum sed veniam quasi dicta accusamus recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam tempora numquam sint odit optio."),l.a.createElement("p",{className:"hero--section-description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem officiis sit debitis omnis harum sed veniam quasi dicta accusamus recusandae?"))))}function d(){const[e,t]=Object(n.useState)({firstName:"",lastName:"",email:"",phoneNumber:"",topic:"",message:""}),a=e=>{const{name:a,value:n}=e.target;t(e=>({...e,[a]:n}))};return l.a.createElement("section",{id:"Contact",className:"contact--section"},l.a.createElement("div",null,l.a.createElement("p",{className:"sub--title"},"Get In Touch"),l.a.createElement("h2",null,"Contact Me"),l.a.createElement("p",{className:"text-lg"},"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.")),l.a.createElement("form",{className:"contact--form--container",onSubmit:t=>{t.preventDefault(),console.log("Form Data:",e),fetch("http://localhost:3001/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{console.log("Success:",e),alert("Email sent successfully!")}).catch(e=>{console.error("Error:",e)})}},l.a.createElement("div",{className:"container"},l.a.createElement("label",{htmlFor:"firstName",className:"contact--label"},l.a.createElement("span",{className:"text-md"},"First Name"),l.a.createElement("input",{type:"text",className:"contact--input text-md",name:"firstName",id:"firstName",value:e.firstName,onChange:a,required:!0})),l.a.createElement("label",{htmlFor:"lastName",className:"contact--label"},l.a.createElement("span",{className:"text-md"},"Last Name"),l.a.createElement("input",{type:"text",className:"contact--input text-md",name:"lastName",id:"lastName",value:e.lastName,onChange:a,required:!0})),l.a.createElement("label",{htmlFor:"email",className:"contact--label"},l.a.createElement("span",{className:"text-md"},"Email"),l.a.createElement("input",{type:"email",className:"contact--input text-md",name:"email",id:"email",value:e.email,onChange:a,required:!0})),l.a.createElement("label",{htmlFor:"phoneNumber",className:"contact--label"},l.a.createElement("span",{className:"text-md"},"Phone Number"),l.a.createElement("input",{type:"text",className:"contact--input text-md",name:"phoneNumber",id:"phoneNumber",value:e.phoneNumber,onChange:a,required:!0}))),l.a.createElement("label",{htmlFor:"topic",className:"contact--label"},l.a.createElement("span",{className:"text-md"},"Choose a topic"),l.a.createElement("select",{id:"topic",className:"contact--input text-md",name:"topic",value:e.topic,onChange:a},l.a.createElement("option",{value:""},"Select One..."),l.a.createElement("option",{value:"Item 1"},"Item 1"),l.a.createElement("option",{value:"Item 2"},"Item 2"),l.a.createElement("option",{value:"Item 3"},"Item 3"))),l.a.createElement("label",{htmlFor:"message",className:"contact--label"},l.a.createElement("span",{className:"text-md"},"Message"),l.a.createElement("textarea",{className:"contact--input text-md",id:"message",name:"message",rows:"8",placeholder:"Type your message...",value:e.message,onChange:a,required:!0})),l.a.createElement("label",{htmlFor:"checkbox",className:"checkbox--label"},l.a.createElement("input",{type:"checkbox",required:!0,name:"checkbox",id:"checkbox"}),l.a.createElement("span",{className:"text-sm"},"I accept the terms")),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary contact--form--btn",type:"submit"},"Submit"))))}var p=function(){return l.a.createElement("footer",{className:"footer--container"},l.a.createElement("div",{className:"footer--link--container"},l.a.createElement("div",{className:"footer--items"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.Link,{activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"heroSection",className:"text-md"},"Home")),l.a.createElement("li",null,l.a.createElement(r.Link,{activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"MyPortfolio",className:"text-md"},"Portfolio")),l.a.createElement("li",null,l.a.createElement(r.Link,{activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"AboutMe",className:"text-md"},"About Me")),l.a.createElement("li",null,l.a.createElement(r.Link,{activeClass:"navbar--active-content",spy:!0,smooth:!0,offset:-70,duration:500,to:"Contact",className:"text-md"},"Contact")))),l.a.createElement("div",{className:"footer--social--icon"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/",className:"navbar--content",target:"_blank",rel:"noreferrer"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 33 33",fill:"none"},l.a.createElement("path",{d:"M22.6667 8.65479H18.6667C17.9303 8.65479 17.3333 9.25175 17.3333 9.98812V13.9881H22.6667C22.8183 13.9848 22.9621 14.0553 23.0523 14.1773C23.1424 14.2993 23.1677 14.4575 23.12 14.6015L22.1333 17.5348C22.0424 17.804 21.7908 17.986 21.5067 17.9881H17.3333V27.9881C17.3333 28.3563 17.0348 28.6548 16.6667 28.6548H13.3333C12.9651 28.6548 12.6667 28.3563 12.6667 27.9881V17.9881H10.6667C10.2985 17.9881 10 17.6896 10 17.3215V14.6548C10 14.2867 10.2985 13.9881 10.6667 13.9881H12.6667V9.98812C12.6667 7.0426 15.0545 4.65479 18 4.65479H22.6667C23.0348 4.65479 23.3333 4.95327 23.3333 5.32145V7.98812C23.3333 8.35631 23.0348 8.65479 22.6667 8.65479Z",fill:"black"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/",className:"navbar--content",target:"_blank",rel:"noreferrer"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 33 33",fill:"none"},l.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z",fill:"black"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.twitter.com/",className:"navbar--content",target:"_blank",rel:"noreferrer"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 33 33",fill:"none"},l.a.createElement("path",{d:"M28.6304 9.61132C28.0112 10.4373 27.2627 11.1579 26.4137 11.7451C26.4137 11.9609 26.4137 12.1767 26.4137 12.4045C26.4205 16.3229 24.8553 20.0803 22.0691 22.8341C19.2827 25.588 15.5083 27.108 11.5921 27.0533C9.32799 27.0609 7.0929 26.544 5.0619 25.5429C4.95238 25.4951 4.88175 25.3868 4.88216 25.2672V25.1353C4.88216 24.9632 5.02164 24.8237 5.1937 24.8237C7.41923 24.7503 9.56536 23.9787 11.3285 22.618C9.31404 22.5773 7.50159 21.384 6.66747 19.5491C6.62535 19.4489 6.63846 19.3339 6.7021 19.2457C6.76572 19.1576 6.87067 19.1091 6.979 19.1176C7.59123 19.1791 8.20958 19.1221 8.80027 18.9497C6.57652 18.4881 4.90562 16.642 4.66648 14.3824C4.65799 14.274 4.70656 14.1691 4.79467 14.1053C4.88276 14.0417 4.99766 14.0285 5.09784 14.0708C5.69459 14.3341 6.33879 14.4728 6.99099 14.4783C5.04246 13.1994 4.20082 10.7669 4.94207 8.55641C5.01859 8.34163 5.20242 8.18295 5.426 8.13871C5.64958 8.09445 5.87995 8.17116 6.03243 8.34064C8.66186 11.1391 12.2747 12.8067 16.1092 12.9918C16.0111 12.5999 15.9628 12.1971 15.9655 11.7931C16.0013 9.67441 17.3123 7.78707 19.2845 7.01461C21.2567 6.24217 23.4999 6.73749 24.964 8.26871C25.9619 8.07859 26.9267 7.74339 27.8276 7.27373C27.8936 7.23253 27.9773 7.23253 28.0433 7.27373C28.0845 7.33976 28.0845 7.42348 28.0433 7.48951C27.6069 8.48881 26.8697 9.32695 25.9345 9.88704C26.7535 9.79207 27.558 9.59888 28.3309 9.31164C28.396 9.26735 28.4815 9.26735 28.5465 9.31164C28.6011 9.33657 28.6419 9.38427 28.658 9.44201C28.6741 9.49976 28.664 9.56169 28.6304 9.61132Z",fill:"black"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/",className:"navbar--content",target:"_blank",rel:"noreferrer"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 33 33",fill:"none"},l.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z",fill:"black"}))))))))};function E(){return l.a.createElement("section",{id:"heroSection",className:"hero--section"},l.a.createElement("div",{className:"hero--section--content--box"},l.a.createElement("div",{className:"hero--section--content"},l.a.createElement("p",{className:"section--title"},"Hey, I'm Divyanshu Jain"),l.a.createElement("h1",{className:"hero--section--title"},l.a.createElement("span",{className:"hero--section-title--color"},"B. Tech")," ",l.a.createElement("br",null),"Student"),l.a.createElement("p",{className:"hero--section-description"},"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",l.a.createElement("br",null)," Dolorum, quas. Amet soluta assumenda cum?")),l.a.createElement("a",{href:"/Divyanshu_Jain_Resume.pdf",download:!0,className:"btn btn-primary"},"My Resume")),l.a.createElement("div",{className:"hero--section--img"},l.a.createElement("img",{src:"./img/My_hero_3.png",alt:"Hero Section"})))}var v=a(3);function h(){var e;return l.a.createElement("section",{className:"portfolio--section",id:"MyPortfolio"},l.a.createElement("div",{className:"portfolio--container-box"},l.a.createElement("div",{className:"portfolio--container"},l.a.createElement("p",{className:"sub--title"},"Recent Projects"),l.a.createElement("h2",{className:"section--heading"},"My Portfolio")),l.a.createElement("div",null,l.a.createElement("a",{href:"https://github.com/jaindivyanshu1"},l.a.createElement("button",{className:"btn btn-github"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 33 33",fill:"none"},l.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.3333 0.166748C7.50028 0.166748 0.333252 7.33378 0.333252 16.1667C0.333252 24.9997 7.50028 32.1667 16.3333 32.1667C25.1489 32.1667 32.3333 24.9997 32.3333 16.1667C32.3333 7.33378 25.1489 0.166748 16.3333 0.166748ZM26.9016 7.54202C28.8105 9.8674 29.9559 12.8348 29.9906 16.0452C29.5394 15.9585 25.0274 15.0387 20.4808 15.6114C20.3767 15.3858 20.2899 15.1428 20.1858 14.8999C19.9081 14.2405 19.5958 13.5637 19.2834 12.9216C24.3159 10.8739 26.6066 7.9238 26.9016 7.54202ZM16.3333 2.52684C19.804 2.52684 22.9797 3.82836 25.3919 5.96285C25.1489 6.30992 23.0838 9.06914 18.2248 10.8912C15.9862 6.77846 13.5047 3.41187 13.1229 2.89126C14.1467 2.64831 15.2227 2.52684 16.3333 2.52684ZM10.5199 3.811C10.8843 4.2969 13.3138 7.68085 15.5871 11.7068C9.20093 13.4075 3.56102 13.3728 2.95364 13.3728C3.83867 9.13855 6.70201 5.61577 10.5199 3.811ZM2.65863 16.1841C2.65863 16.0452 2.65863 15.9064 2.65863 15.7676C3.24865 15.7849 9.87772 15.8717 16.6977 13.824C17.0969 14.5875 17.4613 15.3684 17.8084 16.1493C17.6348 16.2014 17.4439 16.2535 17.2704 16.3055C10.2248 18.5788 6.47642 24.7914 6.16405 25.312C3.99485 22.8999 2.65863 19.6895 2.65863 16.1841ZM16.3333 29.8413C13.1749 29.8413 10.2595 28.7654 7.95147 26.9606C8.19442 26.4574 10.971 21.1125 18.676 18.4227C18.7107 18.4053 18.7281 18.4053 18.7628 18.388C20.689 23.3684 21.47 27.5506 21.6782 28.748C20.0296 29.4595 18.2248 29.8413 16.3333 29.8413ZM23.9515 27.4986C23.8127 26.6656 23.0838 22.6743 21.2964 17.7632C25.5828 17.0864 29.3311 18.1971 29.7997 18.3533C29.2097 22.1537 27.0231 25.4335 23.9515 27.4986Z",fill:"currentColor"})),"Visit My GitHub")))),l.a.createElement("div",{className:"portfolio--section--container"},null===v||void 0===v?void 0:null===(e=v.portfolio)||void 0===e?void 0:e.map((e,t)=>l.a.createElement("div",{key:t,className:"portfolio--section--card"},l.a.createElement("div",{className:"portfolio--section--img"},l.a.createElement("img",{src:e.src,alt:"Placeholder"})),l.a.createElement("div",{className:"portfolio--section--card--content"},l.a.createElement("div",null,l.a.createElement("h3",{className:"portfolio--section--title"},e.title),l.a.createElement("p",{className:"text-md"},e.description)),l.a.createElement("p",{className:"text-sm portfolio--link"},e.link,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 20 19",fill:"none"},l.a.createElement("path",{d:"M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z",stroke:"currentColor","stroke-width":"2.66667","stroke-linecap":"round","stroke-linejoin":"round"}))))))))}function C(){var e;return l.a.createElement("section",{id:"mySkills",className:"skills--section"},l.a.createElement("div",{className:"portfolio--container"},l.a.createElement("p",{className:"section--title"},"My Skills"),l.a.createElement("h2",{className:"skills--section--heading"},"My Expertise")),l.a.createElement("div",{className:"skills--section--container"},null===v||void 0===v?void 0:null===(e=v.skills)||void 0===e?void 0:e.map((e,t)=>l.a.createElement("div",{key:t,className:"skills--section--card"},l.a.createElement("div",{className:"skills--section--img"},l.a.createElement("img",{src:e.src,alt:"Product Chain"})),l.a.createElement("div",{className:"skills--section--card--content"},l.a.createElement("h3",{className:"skills--section--title"},e.title),l.a.createElement("p",{className:"skills--section--description"},e.description))))))}function g(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(C,null),l.a.createElement(h,null),l.a.createElement(u,null),l.a.createElement(d,null),l.a.createElement(p,null))}var b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(g,null)}),l.a.createElement(o.a,{path:"*",element:l.a.createElement("div",null,"404 Not Found")})))))};s.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)))}},[[19,1,2]]]);
//# sourceMappingURL=main.87bd46d5.chunk.js.map