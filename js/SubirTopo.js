
jQuery(document).ready(function () {



   jQuery("#subirTopo").hide();

   jQuery('#subirTopo').click(function () {
      jQuery('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });

   jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 200) {
         jQuery('#subirTopo').fadeIn();
      } else {
         jQuery('#subirTopo').fadeOut();
      }
   });
});

