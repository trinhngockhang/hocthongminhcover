$(document).ready(function() {
    $('.navbar-toggle').click(function() {
        var n = $(".collapse").css("display");
        if(n == "none"){
            $(".collapse").css({"display":"block"});
            $(".collapse").css({"overflow-y" : "none"})
        }else{
            $(".collapse").css({"display":"none"});
            $(".collapse").css({"overflow-y" : "none"})
            $(".navbar-toggle").css({ "background-color": "transparent"})
        }
        
    });
    $('.button-login-main').click(function() {
        var n = $(".modal-panel").css("display");
        if(n == "none"){
            $(".modal-panel").css({"display":"block"});   
            $(".modal-backdrop").css({"display":"block"});
        }else{
            $(".modal-panel").css({"display":"none"});
        }
    });
    $('.modal-panel').on('click', ':not(.modal-content)',function() {
        var n = $(".modal-panel").css("display");
        if(n == "block"){
            $(".modal-panel").css({"display":"none"});   
            $(".modal-backdrop").css({"display":"none"});
        }
    });


});