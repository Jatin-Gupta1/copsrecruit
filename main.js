//For using gsap with locomotive this code inside function init is necessary which I have taken from Github
//This code inside function has to copied otherwise gsap and scroll trigger won't work together
function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();

//Javascript for Cursor styling

var crsr=document.querySelector(".cursor");
var main=document.querySelector('#main');
main.addEventListener('mousemove',function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
})


//Gsap in page1 for  moving texts and image coming from down

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

//Changing background color of page 2

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:'#main',
        start:'top -115%',
        end:'top -120%',
        scrub:3
    }
})
tl2.to("#main",{
    backgroundColor:"#fff"
})

//Scroll Trigger of Certificates in page 3


gsap.utils.toArray('.cert').forEach(section => {

    ScrollTrigger.create({
        trigger:section,
        start:'top top',
        // end:'top 10%',
        pin:true,
        pinSpacing:false,
        scroller:"#main"      
})  
});