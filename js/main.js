 "use strict";function countDown(e,t){function a(){var e=Math.floor(g/1e3%60),t=Math.floor(g/6e4%60),n=Math.floor(g/36e5%24),r=Math.floor(g/864e5);i.val(e).trigger("change"),f.val(t).trigger("change"),p.val(n).trigger("change"),s.val(r).trigger("change"),h.text(e),l.text(t),c.text(n),u.text(r),g-=1e3,setTimeout(a,1e3)}var n=e||"Jul 4, 2013",r=t||"Aug 15, 2013",o=Date.parse(r)-Date.parse(n),g=Date.parse(r)-new Date,i=$(".second"),f=$(".minute"),p=$(".hour"),s=$(".day").attr("data-max",Math.floor(o/864e5)),h=i.parent().find("span"),l=f.parent().find("span"),c=p.parent().find("span"),u=s.parent().find("span");a()}


   



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

    function count(elem){   
        if($(elem).length==0){
            return 0;
        };
    
        //CountDown
        var dateOfBeginning = "Sep 21, 2015", //type your date of the Beginnig
            dateOfEnd = "Apr 10, 2015"; //type your date of the end
    
        countDown(dateOfBeginning, dateOfEnd); 
    
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

         count(".coming-soon");    

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




