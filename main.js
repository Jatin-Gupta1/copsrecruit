var crsr=document.querySelector(".cursor");
var main=document.querySelector('#main');
main.addEventListener('mousemove',function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:'#main',
        start:'top 27%',
        end:'top 0%',
        
        scrub:3
    }
})
tl.to('.page1 h1',{
    x:-100,  
},"anim")
tl.to(".page1 h2",{
    x:100
},"anim")

gsap.to(".image",{
    y:"-105%",
    width:"100%",
    scrollTrigger:{
        trigger:".page1",
        scroller:'#main',
        pin:true,
        start:"top 0%",
        scrub:true
    }
},"anim")