$(document).on("mobileinit", function() {
    $(function() {

        $(document).on('swipeleft', '.ui-page', function(event){    
 
                let nextpage = $.mobile.activePage.next('[data-role="page"]');
                if (nextpage.length > 0) {
                    $.mobile.changePage(nextpage, {transition: "slide", reverse: false}, true, true);
                }
   
            
      
        });
        
        $(document).on('swiperight', '.ui-page', function(event){     
          
                let prevpage = $(this).prev('[data-role="page"]');
                if (prevpage.length > 0) {
                    $.mobile.changePage(prevpage, {transition: "slide", reverse: true}, true, true);
                }
                 
        });
    });
  });
  