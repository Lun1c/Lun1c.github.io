var s=document.querySelectorAll('section'), 
o=new IntersectionObserver(function(e){ 
e.forEach(function(e){ 
if(e.isIntersecting){ 
var t=e.target.getAttribute('data-section-name'); 
if(e.target.id==='home'){ 
document.querySelector('.logo').textContent="Home"; 
var n=document.querySelector('.ml2'); 
n.innerHTML=n.textContent.replace(/\S/g,"<span class='letter'>$&</span>"), 
anime.timeline({loop:!1}).add({ 
targets:'.ml2 .letter', 
scale:[4,1], 
opacity:[0,1], 
translateZ:0, 
easing:"easeOutExpo", 
duration:950, 
delay:function(e,t){ 
return 70*t 
}}).add({ 
targets:'.ml2', 
opacity:1, 
duration:1e3, 
easing:"easeOutExpo" 
}); 
}else if(e.target.id==='new-zealand'){ 
document.querySelector('.logo').textContent=t||"New Zealand", 
anime({ 
targets:'.staggering-direction-demo .el', 
translateX:[-270,0], 
opacity:[0,1], 
delay:anime.stagger(100,{start:500}), 
easing:'easeOutQuad' 
}); 
}else 
document.querySelector('.logo').textContent=t||"Logo"; 
}})}, 
{threshold:.5}); 

s.forEach(function(e){ 
o.observe(e); 
}), 

window.location.pathname.includes("contact.html")? 
document.querySelector('.logo').textContent="Contact": 
window.location.pathname.includes("japan.html")&& 
(document.querySelector('.logo').textContent="Japan"); 

var t=document.querySelector('.ml6 .letters'); 
t.innerHTML=t.textContent.replace(/\S/g,"<span class='letter'>$&</span>"), 
anime.timeline({loop:!1}).add({ 
targets:'.ml6 .letter', 
translateY:["1.1em",0], 
translateZ:0, 
duration:1250, 
delay:function(e,t){ 
return 100*t 
}}).add({ 
targets:'.ml6', 
opacity:1, 
duration:1250, 
easing:"easeOutExpo" 
}); 

document.addEventListener('DOMContentLoaded',function(){ 
var e=document.querySelector('.ml3'); 
e.innerHTML=e.textContent.replace(/\S/g,"<span class='letter'>$&</span>"), 
anime.timeline({loop:!0}).add({ 
targets:'.ml3 .letter', 
opacity:[0,1], 
easing:"easeInOutQuad", 
duration:2250, 
delay:function(e,t){ 
return 150*(t+1) 
}}).add({ 
targets:'.ml3', 
opacity:0, 
duration:1e3, 
easing:"easeOutExpo", 
delay:1e3 
}); 
}); 

var b=document.querySelectorAll('section'); 
b.length>0&&(s=new IntersectionObserver(function(e){ 
e.forEach(function(e){ 
if(e.isIntersecting){ 
var t=e.target.getAttribute('data-section-name'); 
}})}, 
{threshold:.5}), 

b.forEach(function(e){ 
s.observe(e); 
}), 

anime({ 
targets:'.boxes-container .box', 
translateY:[50,0], 
opacity:[0,1], 
delay:anime.stagger(150,{start:500}), 
easing:'easeOutQuad' 
}));
