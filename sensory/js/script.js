// // A $( document ).ready() block.
// // $( function (){
// //     $(".img").addclass('show');
// // });


// $('document').ready(function(){
//     $('.img').addClass('show');  
    
//     $(".image1").click(function(){
//     	$(".image1").toggleClass("image1move");
// 	});    
   
//     $(".image2").click(function(){
//     	$(".image2").toggleClass("image2move");
// 	});
    
//     $(".image3").click(function(){
//     	$(".image3").toggleClass("image3move");
// 	});
// });

$('document').ready(function(){
    
    $('.img').addClass('show');  
    $('.text').addClass('appear')
    $('.action').addClass('disappear')
    $('.noun').addClass('fadeout')
    $('.define').addClass('fadingout')
    // create a counter to see how many times we've clicked
    var count = 0;

    $('body').click(function(){

        // add 1 to the counter each click
        count++;

        // if you've clicked once, do the following:
        if(count == 1){
            $(".image1").toggleClass("image1move");
        }

        // if you've clicked twice, do the following:
        if(count == 2){
            $(".image2").toggleClass("image2move");
        }

        if(count == 3){
            $(".image3").toggleClass("image3move");
        }
       if(count == 4){
            $(".image4").toggleClass("image4move");
        }
        // if you've clicked three times, do the following, and reset count:
        if(count == 5){
            $(".image5").toggleClass("image5move");
            count = 0;
        }

        // this allows you to see counts value in the web inspector
        console.log(count);

    });
});