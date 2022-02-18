document.addEventListener("DOMContentLoaded", function(event) {
    window.sr = ScrollReveal({reset: true});
    ScrollReveal().reveal('#nameTag', { distance: '2em' },{ origin: 'top'}, { interval: 200 }, { duration: 2000 },{easing: 'cubic-bezier(0.5, 0, 0, 1)'});
    ScrollReveal().reveal('#nameTag', { origin: 'top'});
    ScrollReveal().reveal('.FullPane', { interval: 200 }, { duration: 3000 });
    ScrollReveal().reveal('.LeftPane', { distance: '25%'},{ interval: 200 }, { duration: 3000 });
    ScrollReveal().reveal('.LeftPane', { origin: 'left'} );
    ScrollReveal().reveal('.RightPane',{ distance: '25%'}, { delay: 200 }, { duration: 3000 });
    ScrollReveal().reveal('.RightPane', { origin: 'right'} );

    ScrollReveal().reveal('.projectPane', {distance: '100%'}, { interval: 200 }, { duration: 4000 });
    ScrollReveal().reveal('.projectPane', { origin: 'left'} );

});
