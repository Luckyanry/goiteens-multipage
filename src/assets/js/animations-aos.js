import AOS from 'aos';
// import 'aos/dist/aos.css';
 console.log("hello");
AOS.init({
    disable: 'mobile',
    offset: 100, 
    duration: 400, 
    easing: 'ease-in-out', 
    once: false, 
    mirror: true, 
    anchorPlacemen:'top-center'
});