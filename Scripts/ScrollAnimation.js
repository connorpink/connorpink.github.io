
document.addEventListener("DOMContentLoaded", function(event) {
    window.sr = ScrollReveal({reset: true});

    ScrollReveal().reveal('.nameTagLetter', {origin: 'bottom',distance: '2em', interval:100, duration: 900 , easing: 'cubic-bezier(.17,1.43,.99,1.27)'});
    ScrollReveal().reveal('.nameTagLetterSmall', {origin: 'bottom',distance: '2em', duration: 1000 , easing: 'cubic-bezier(.17,1.43,.99,1.27)', delay: 1800});

    ScrollReveal().reveal('.LeftPane', { distance: '25%', interval: 200, mobile: false });
    ScrollReveal().reveal('.LeftPane', { origin: 'left'} );
    ScrollReveal().reveal('.RightPane',{ distance: '25%', interval: 200, mobile: false });
    ScrollReveal().reveal('.RightPane', { origin: 'left'} );

    ScrollReveal().reveal('.projectPane', {distance: '100%', interval: 200, mobile: false });
    ScrollReveal().reveal('.projectPane', { origin: 'left'} );

});
