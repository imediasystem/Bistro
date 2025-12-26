$(document).ready(function(){
	
	/* Przejscia przy wczytywaniu strony */
	$("p, h1, h2, h3, h4, a, i, form, button").hide().fadeIn(3000);
});


// Scrolling Section //

// (function(){
//     'use strict';
    
//     var navSelector = '.list';
//     var linksSelector = '.list a';
//     var scrollSpeed = 40;
    
//     var timer, targetPosition;
  
//     function scroll() {
//       var delta = targetPosition - document.documentElement.scrollTop;
//       if (delta > 0) {
//         document.documentElement.scrollTop += Math.min(delta, scrollSpeed);
//       }
//       else if (delta < 0) {
//         document.documentElement.scrollTop += Math.max(delta, -scrollSpeed);
//       }
//       else {
//         clearInterval(timer);
//       }
      
//       if(window.innerHeight >= document.documentElement.scrollHeight - document.documentElement.scrollTop) {
//         clearInterval(timer);
//       }
//     };
    
//     var onLinkClick = function(event){
//       event.preventDefault();
//       clearInterval(timer)
      
//       var navHeight = document.querySelector(navSelector).offsetHeight;
//       var target = document.querySelector(this.getAttribute('href'));
//       if(target){
//         targetPosition = Math.max(0, target.offsetTop);
//         scroll();
//         timer = setInterval(scroll, 1000/30);
//       }
//     };
    
//     var links = document.querySelectorAll(linksSelector);
    
//     for(var i=0; i<links.length; i++){
//       links[i].addEventListener('click', onLinkClick);
//     }
    
// })();