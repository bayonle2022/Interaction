
$(document).ready(function(){

    $(".one").click(function(){
        $(".one").css("background-color", "hsl(25, 96%, 60%)");
        $(".one").css("color", "white")
        $(".para").text(function(i, text){
            return text.replace("4","1")
        });


    });
    $(".sub").click(function(){
        $(".main-box").hide()
    });

    $(".two").click(function(){
        $(".two").css("background-color", "hsl(25, 96%, 60%)");
        $(".two").css("color", "white")
        $(".para").text(function(i, text){
            return text.replace("4","2")
        });

    });
    $(".three").click(function(){
        $(".three").css("background-color", "hsl(25, 96%, 60%)");
        $(".three").css("color", "white")
        $(".para").text(function(i, text){
            return text.replace("4","3")
        });


    });

    $(".four").click(function(){
        $(".four").css("background-color", "hsl(25, 96%, 60%)");
        $(".four").css("color", "white")
        $(".para").text(function(i, text){
            return text.replace("4","4")
        });

    });
    
    $(".five").click(function(){
        $(".five").css("background-color", "hsl(25, 96%, 60%)");
        $(".five").css("color", "white")
        $(".para").text(function(i, text){
            return text.replace("4","5")
        });
       


    });

});