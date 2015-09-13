 /* -------- Header -------- */
$(".headroom").headroom({

});


function on_resize(c,t){
  onresize=function(){
    clearTimeout(t);
    t=setTimeout(c,100);
  };
  return c ;
}

var $container = $('#isotope-gallery-container');
var $filter = $('.filter');
$(window).load(function () {
    // Initialize Isotope
    $container.isotope({
        itemSelector: '.gallery-item-wrapper'
    });
    $('.filter a').click(function () {
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector });
        return false;
    });
    $filter.find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $filter.find('a').parent().removeClass('active');
        $(this).parent().addClass('active');
    });
});

on_resize(function() {
   $container.isotope('layout');
}); // these parenthesis does the trick