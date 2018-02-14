$(document).ready(function(){
    $("h1").dblclick(function(){
        $(this).css("color","blue");
    });

    $("h1").hover(function(){
        $(this).css("font-size","18px");
    });

    $("div").hover(function(){
        $(this).toggleClass("green");
    });

    $("#killHThree").click(function(){
        $("h3").hide();
    });
    
    $("#resurrectHThree").click(function(){
        $("h3").show();
        $("p").show();
    });

    $("#hulkinize").dblclick(function(){
        $(this).addClass("ggrow");
    });

    $("#hulkinize").keyup(function(){
        $(this).removeClass();
    });

    $("#catch").hover(function(){
        $(this).hide();
        $(this).css("font-family","Arial");
    });
});