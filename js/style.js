// jquery hover effect for navbar
    // ==============================
        $(document).ready(function(){
          $("nav").hover(
              function(){
                $(this).css("background-color", "white");},
              function(){
                $(this).css("background-color", "grey");
           
                  });
              });

      // jquery hover effect for nav-item & dropdown-menu
      // ================================================
        $(document).ready(function(){
          $(".bar-item1").hover(
                              function(){
          $(".bar-menu1").show(1000);},
                              function(){
          $(".bar-menu1").hide(1000);                      
            });

          $(".bar-menu1").hover(function(){
            $(this).stop(true);
          });


          $(".bar-item2").hover(
                                function(){
          $(".bar-menu2").show(1000);},
                                function(){
          $(".bar-menu2").hide(1000);
            });

          $(".bar-menu2").hover(function(){
            $(this).stop(true);
            });

          });