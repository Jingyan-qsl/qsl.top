import{k as b,u as g,c as w,a as t,b as s,w as l,F as C,d as k,r as _,o as B}from"./index-C7EXSUlz.js";const q="/assets/singindex-CwooBqCt.png",E="/assets/music-CfvxJOC5.png",R="/assets/singbutton-Dt_PLD-Y.png",x="/assets/%E9%BD%90%E5%8F%B8%E7%A4%BC-%20%E8%B7%A8%E8%B6%8A%E6%97%B6%E9%97%B4%E7%9A%84%E7%89%B5%E7%BB%8A-DQRGVUXc.mp3",U={class:"allBox"},A={id:"allNav"},M={id:"navUl"},N=t("li",{class:"slide1"},null,-1),V=t("li",{class:"slide2"},null,-1),D=t("a",{href:"#"},"介绍",-1),F=t("a",{href:"#"},"详细",-1),P=t("a",{href:"#"},"文字",-1),I=t("a",{href:"#"},"萌物",-1),z=t("a",{href:"#"},"卡面",-1),L=t("a",{href:"#"},"视频",-1),S=t("a",{href:"#"},"同人",-1),G=k('<div class="mainBox"><h1 data-spotlight="跨越时间的牵绊">跨越时间的牵绊</h1><div><div class="play"><img src="'+q+'" width="150px" height="150px" alt=""><img src="'+E+'" class="play-pic" alt=""></div></div><div class="play-b"><img src="'+R+'" width="100%" alt=""></div><video id="myMusic" src="'+x+'" loop></video></div>',1),J={class:"view"},W={__name:"all",setup(O){b(()=>{$("#navUl a").on("click",function(){var a=$(this).parent().position(),e=$(this).parent().width();$("#allNav .slide1").css({opacity:1,left:+a.left,width:e})}),$("#navUl a").on("mouseover",function(){var a=$(this).parent().position(),e=$(this).parent().width();$("#navUl .slide2").css({opacity:1,left:+a.left,width:e}).addClass("squeeze")}),$("#navUl a").on("mouseout",function(){$("#navUl .slide2").css({opacity:0}).removeClass("squeeze")});var c=$("li:nth-of-type(3) a").parent("li").width(),r=$("#navUl li:nth-of-type(3) a").position();r&&$("#navUl .slide1").css({left:+r.left,width:c}),$(document).ready(function(){var a=!0,e=0,o=!1,i=document.getElementById("myMusic");$(".play-b").eq(0).click(function(){$(".play").addClass("rotate"),a?(o&&($(".play-b").eq(0).removeClass("buttonRot_back"),o=!1),$(".play-b").eq(0).addClass("buttonRot"),$(".play").css({"animation-play-state":"running"," -webkit-animation-play-state":"running"}),i.play(),a=!1):($(".play-b").eq(0).removeClass("buttonRot"),$(".play-b").eq(0).addClass("buttonRot_back"),o=!0,e=u()+"deg",console.log(e),i.pause(),$(".play").css({"animation-play-state":"paused"," -webkit-animation-play-state":"paused"}),a=!0)}),$(".play").eq(0).click(function(){$(this).addClass("rotate"),a?(o&&($(".play-b").eq(0).removeClass("buttonRot_back"),o=!1),$(".play-b").eq(0).addClass("buttonRot"),$(this).css({"animation-play-state":"running"," -webkit-animation-play-state":"running"}),i.play(),a=!1):($(".play-b").eq(0).removeClass("buttonRot"),$(".play-b").eq(0).addClass("buttonRot_back"),o=!0,e=u()+"deg",console.log(e),i.pause(),$(this).css({"animation-play-state":"paused"," -webkit-animation-play-state":"paused"}),a=!0)});function u(){var v=document.getElementsByClassName("play")[0],p=window.getComputedStyle(v,null),h=p.getPropertyValue("-webkit-transform")||p.getPropertyValue("transform")||"FAIL",n=h.split("(")[1].split(")")[0].split(","),f=n[0],m=n[1];n[2],n[3];var y=Math.round(Math.atan2(m,f)*(180/Math.PI));return y}})});const d=g();return d.currentRoute.value.path=="/all"&&d.push("/all"),(c,r)=>{const a=_("router-link"),e=_("router-view");return B(),w(C,null,[t("div",U,[t("div",A,[t("ul",M,[N,V,t("li",null,[s(a,{to:"/all/introduce"},{default:l(()=>[D]),_:1})]),t("li",null,[s(a,{to:"/all/detail"},{default:l(()=>[F]),_:1})]),t("li",null,[s(a,{to:"/all/write"},{default:l(()=>[P]),_:1})]),t("li",null,[s(a,{to:"/all/index"},{default:l(()=>[I]),_:1})]),t("li",null,[s(a,{to:"/all/card"},{default:l(()=>[z]),_:1})]),t("li",null,[s(a,{to:"/all/video"},{default:l(()=>[L]),_:1})]),t("li",null,[s(a,{to:"/all/creation"},{default:l(()=>[S]),_:1})])])])]),G,t("div",J,[s(e)])],64)}}};export{W as default};