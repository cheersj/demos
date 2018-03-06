 $(document).ready(function(){
    var parent, ink, d, x, y;
    $("ul li a").click(function(e){
        parent = $(this).parent();
        //create .ink if it doesn't exits
        if(parent.find(".ink").length == 0) {
            parent.prepend("<span class='ink'></span>");
        }
        ink = parent.find(".ink");
        //incase of quick double clicks stop the previous animation
        ink.removeClass("animate");
        
        //set size of ink
        if(!ink.height() && !ink.width()) {
            var d = Math.max(parent.outerWidth(), parent.outerHeight());
            ink.css({width: d, height: d});
        }
        //get click coordinates
        //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - parent.offset().left - ink.width()/2;
        y = e.pageY - parent.offset().top - ink.height()/2;
        
        //set the position and add class .animate
        ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");
    });
    
});