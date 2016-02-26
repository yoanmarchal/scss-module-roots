 "use strict";

function count(beginning, end) {
   var b = beginning || 'Jul 4, 2013',
       e = end || 'Aug 15, 2016',
       
       remaining = Date.parse(e) - new Date,
       
       seconds = document.querySelector('.second'),
       minutes = document.querySelector('.minute'),
       hours = document.querySelector('.hour'),
       days = document.querySelector('.day');
  
  function update() {
    var s = Math.floor(remaining / 1e3 % 60),
        m = Math.floor(remaining / 6e4 % 60),
        h = Math.floor(remaining / 36e5 % 24),
        d = Math.floor(remaining / 864e5);
    
      seconds.innerHTML = s;
      minutes.innerHTML = m;
      hours.innerHTML = h;
      days.innerHTML = d;
      remaining -= 1e3;
      setTimeout(update, 1e3);
  }

  update();
}

function countDown(options) {
  var el = document.querySelector(options.selector);
  
  if (el.length === 0) {
    return;
  }

  count(options.beginning, options.end); 
}

countDown({
  selector: '.coming-soon',
  beginning: 'feb 1, 2015',
  end: 'apr 1, 2016'
});
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
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: 'Tomato'
        },
        map: map,
        position: map.getCenter() 
    });
};



 /* -------- Header -------- */
 $(".headroom").headroom({

 });

 $(function() {

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
