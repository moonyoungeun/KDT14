// sebmanu > search // 
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click",function(){
    searchInputEl.focus();
})

searchInputEl.addEventListener("focus",function(){
    searchInputEl.setAttribute("placeholder","통합검색");
})

searchInputEl.addEventListener("blur",function(){
    searchInputEl.setAttribute("placeholder","");
})




//swiper
const swiperNotice = new Swiper(".notice-line .swiper", { 
     direction: "vertical",
     loop: true,
     autoplay: true,
    });





//PROMOTION >> SWIPER
const swiperPromotion = new Swiper(".promotion .swiper",{
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay:{
        delay:1000,
        disableOnInteraction: false,
    },
    pagination:{
        el: ".promotion .swiper-pagination",
        clickable: true,
    },
    navigation:{
        prevEl: ".promotion .swiper-button-prev",
        nextEl: ".promotion .swiper-button-next",
    }
})





//swiper promotion autoplay control
function controlAutoplay(){
    if(swiperPromotion.autoplay.running){
        swiperPromotion.autoplay.stop();
    }else{
        swiperPromotion.autoplay.start();
    }
}
    



//toggle promotion
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

promotionToggleBtn .addEventListener("click",function(){
    if(promotionEl.classList.contains("hide")){
        promotionEl.classList.remove("hide");
    }else{
        promotionEl.classList.add("hide");
    }

    if(promotionToggleBtn.style.transform === "rotate(180deg)"){
        promotionToggleBtn.style.transform = "rotate(0deg)"
    } else{
    promotionToggleBtn.style.transform = "rotate(180deg)"}
})



// scroll animation


// $(function(){
//     var $device = $('.inner');
//     var $offset = 300;
//     var $deviceOst = $device.dffset().top - $offset;


//     $(window). scroll(function(){
//         if($(this).scrollTop()>$deviceOst){
//             $device.find("").addClass("animate");
//         }
//     });
// });


let scrollYpos;
window.addEventListener("scroll", function () {
  scrollYpos = window.scrollY;
  console.log(scrollYpos);
  if(scrollYpos > 0) {
    const visualAnimate = document.querySelector(".visual");
    visualAnimate.classList.add("animate");
    console.log(visualAnimate);
    console.log("비주얼 성공");
  } if ( 300 < scrollYpos ) {
    const peruAnimate = document.querySelector(".peru");
    peruAnimate.classList.add("animate");
    console.log(peruAnimate);
    console.log("페루성공");}

    if ( 1300 < scrollYpos) {
    const indonesiaAnimate = document.querySelector(".indonesia");
    indonesiaAnimate.classList.add("animate");
    console.log(indonesiaAnimate);
    console.log("인도네시아 성공");}

    if( 1800 < scrollYpos ) {
    const favoriteAnimate = document.querySelector(".favorite");
    favoriteAnimate.classList.add("animate");
    console.log(favoriteAnimate);
    console.log("favorite 성공");}

    if(scrollYpos > 2500) {
    const magazineAnimate = document.querySelector(".magazine");
    magazineAnimate.classList.add("animate");
    console.log(magazineAnimate);
    console.log("magazine 성공");}

    if(scrollYpos > 2700) {
        const storeAnimate = document.querySelector(".store");
        storeAnimate.classList.add("animate");
        console.log(storeAnimate);
        console.log("store 성공");}})


   


window.onload = () => {
     const visualInner = document.querySelector(".visual .inner");
     visualInner.classList.add("animate");
    };


// let position, setPosition = useState(0);

// function onScroll(){
//     setPosition(window,scrollY);
// }

// useEffect(()=>{
//     window.addEventListener("scroll", onscroll);
//     return()=>{
//         window.removeEventListener("scroll",onScroll);
//     }
// });
        
    