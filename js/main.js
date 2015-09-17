 "use strict";function countDown(e,t){function a(){var e=Math.floor(g/1e3%60),t=Math.floor(g/6e4%60),n=Math.floor(g/36e5%24),r=Math.floor(g/864e5);i.val(e).trigger("change"),f.val(t).trigger("change"),p.val(n).trigger("change"),s.val(r).trigger("change"),h.text(e),l.text(t),c.text(n),u.text(r),g-=1e3,setTimeout(a,1e3)}var n=e||"Jul 4, 2013",r=t||"Aug 15, 2013",o=Date.parse(r)-Date.parse(n),g=Date.parse(r)-new Date,i=$(".second"),f=$(".minute"),p=$(".hour"),s=$(".day").attr("data-max",Math.floor(o/864e5)),h=i.parent().find("span"),l=f.parent().find("span"),c=p.parent().find("span"),u=s.parent().find("span");a()}

function initMap(elem) {

    if($(elem).length==0){
        return 0;
    };

    //Map start init
    var mapOptions = {
        center: new google.maps.LatLng(51.5111507, -0.1239844),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{stylers:[{saturation:-100},{gamma:1}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:50},{gamma:0},{hue:"#50a5d1"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#333333"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{weight:0.5},{color:"#333333"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{gamma:1},{saturation:50}]}]
        }
                    
    var map = new google.maps.Map(document.getElementById('map'),mapOptions);
    var marker = new google.maps.Marker({
        icon: 'images/map-pin.png',
        map: map,
        position: map.getCenter() 
    });
};



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
            dateOfEnd = "Jan 10, 2016"; //type your date of the end
    
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
        //google map
        initMap(".map");

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

        // contact form
        $('#contactform').submit(function(){

                var action = $(this).attr('action');

                $("#message").slideUp(500,function() {
                $('#message').hide();

                $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    comments: $('#comments').val(),
                },
                    function(data){
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#submit').removeAttr('disabled');
                        if(data.match('success') != null) $('#contactform').slideUp('slow');

                    }
                );

                });

                return false;

            });

     });
     // End Gallery Popup

    //header plus hero

    $('.nav-slide-btn').click(function() {
        $('.pull').slideToggle();
    });


     function dotoggle(){
        var toggleComp = document.querySelector("#nav-toggle");
        if($(toggleComp).length==0){
                return 0;
        };
        toggleComp.addEventListener("click", function() {
            this.classList.toggle("active");
        });
     }

     dotoggle();
    
    //end! header plus hero

 });
