 /* -------- Header -------- */
 $(".headroom").headroom({

 });

 $(function() {

     function on_resize(c, t) {
         onresize = function() {
             clearTimeout(t);
             t = setTimeout(c, 100);
         };
         return c;
     }

     var $container = $('#isotope-gallery-container');
     var $filter = $('.filter');
     $(window).load(function() {
         // Initialize Isotope
         $container.isotope({
             itemSelector: '.gallery-item-wrapper'
         });
         $('.filter a').click(function() {
             var selector = $(this).attr('data-filter');
             $container.isotope({
                 filter: selector
             });
             return false;
         });
         $filter.find('a').click(function() {
             var selector = $(this).attr('data-filter');
             $filter.find('a').parent().removeClass('active');
             $(this).parent().addClass('active');
         });
     });

     on_resize(function() {
         $container.isotope('layout');
     }); // these parenthesis does the trick

     /* -------- Gallery Popup -------- */
     $(document).ready(function() {
         $('.gallery-zoom').magnificPopup({
             type: 'image',
             mainClass: 'mfp-with-zoom', // this class is for CSS animation below
             zoom: {
                 enabled: true, // By default it's false, so don't forget to enable it

                 duration: 300, // duration of the effect, in milliseconds
                 easing: 'ease-in-out', // CSS transition easing function 

                 // The "opener" function should return the element from which popup will be zoomed in
                 // and to which popup will be scaled down
                 // By defailt it looks for an image tag:
                 opener: function(openerElement) {
                     // openerElement is the element on which popup was initialized, in this case its <a> tag
                     // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                     return openerElement.is('img') ? openerElement : openerElement.find('img');
                 }
             }

         });
     });
     // End Gallery Popup

    //header plus hero

    $('.nav-slide-btn').click(function() {
        $('.pull').slideToggle();
    });

    document.querySelector("#nav-toggle").addEventListener("click", function() {
        this.classList.toggle("active");
    });
    //end! header plus hero

 });




