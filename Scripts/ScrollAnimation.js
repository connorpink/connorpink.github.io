
document.addEventListener("DOMContentLoaded", function(event) {
    window.sr = ScrollReveal({reset: true});
    ScrollReveal().reveal('.nameTagLetter', {origin: 'bottom',distance: '2em', interval:125, duration: 1000 , easing: 'cubic-bezier(.17,1.46,.99,1.29)'});

    ScrollReveal().reveal('.FullPane', { interval: 2000 }, { duration: 3000 });
    ScrollReveal().reveal('.LeftPane', { distance: '25%'},{ interval: 200 }, { duration: 3000 });
    ScrollReveal().reveal('.LeftPane', { origin: 'left'} );
    ScrollReveal().reveal('.RightPane',{ distance: '25%'}, { duration: 3000 });
    ScrollReveal().reveal('.RightPane', { origin: 'left'} );

    ScrollReveal().reveal('.projectPane', {distance: '100%'}, { interval: 200 }, { duration: 4000 });
    ScrollReveal().reveal('.projectPane', { origin: 'left'} );

});
