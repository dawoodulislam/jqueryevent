$(document).ready(function(){

    $(".btn1").click(function(){
        $('.text1').hide('slow');
    });

    $(".btn2").click(function(){
        $('.text2').show('slow');
    });

    $(".btn3").click(function(){
        $('.text3').toggle("slow");
    });

    $(".text4").dblclick(function(){
        $(this).hide("slow");

    });


    $(".para").mouseenter(function(){
        alert("You entered to paragraph!");
    });


    $(".para1").mouseleave(function(){
        alert("You now leave paragraph!");
    });

    $(".para2").hover(function(){
        $(this).css("font-size", 25 +"px");
    },
                      function(){
        $(this).css("font-size", 16 +"px");
    });


    $(".btn4").focus(function(){
        $(this).css("background-color", "#2d2d2d");
    });


    function showHeight( element, height ) {
        $( ".win-div" ).text( "The height for the " + element + " is " + height + "px." );
    }

    $( "#getw" ).click(function() {
        showHeight( "window", $( window ).height() );
    });



    $( ".firstName" ).keyup(function() {
        var value = $(this).val();
        $( ".fullName" ).add().val(value);

        var value1 = $('.fullName').val();
        $( ".lastName" ).keyup(function() {
            var value2 = $(this).val();

            $( ".fullName" ).add().val(value1);
            $( ".fullName" ).add().val(value1 + ' ' + value2);
        });
    });





});