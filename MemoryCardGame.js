console.log("MEMORY CARD GAME - JS Connected. Welcome to the console...");
if (jQuery) {
    console.log("jQuery Loaded");
}

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,49, 50, 51];
var images = [
"A.png","B.png","C.png","D.png","E.png","F.png","G.png","H.png","I.png","J.png","K.png","L.png","M.png","N.png","O.png","P.png","Q.png","R.png","S.png","T.png","U.png","V.png","W.png","X.png","Y.png", "Z.png",
"A.png","B.png","C.png","D.png","E.png","F.png","G.png","H.png","I.png","J.png","K.png","L.png","M.png","N.png","O.png","P.png","Q.png","R.png","S.png","T.png","U.png","V.png","W.png","X.png","Y.png", "Z.png"];


var firstFlip = "";
var secondFlip = "";
var firstBG = "";
var secondBG = "";

$("div.back").each(function (i) {

    var num = Math.floor(Math.random() * array.length);
    var roll = array.splice(num, 1);
    $(this).css("background-image", "url(" + images[roll] + ")");

});

$("div.flipper").on("click", function () {

    $(this).children(".front").toggleClass("hide");
    $(this).children(".back").toggleClass("hide");

    console.log("FLIPPED");

    if(firstFlip === ""){

        firstFlip = $(this);
        firstFlip.addClass("flipdisable");
        console.log("firstFlip " + firstFlip.children(".back").css("background-image"));
        firstBG = firstFlip.children(".back").css("background-image");

    } else if (firstFlip != "" && secondFlip ===""){

        secondFlip = $(this);
        secondFlip.addClass("flipdisable");
        console.log("secondFlip " + secondFlip.children(".back").css("background-image"));
        secondBG = secondFlip.children(".back").css("background-image");
        setTimeout(checkImages,3000);      
    }
});


function checkImages(){

    console.log("CHECKIMAGE");

        if(firstBG === secondBG){
            firstFlip.addClass("disable");
            secondFlip.addClass("disable");
            firstFlip.children(".front").addClass("hide");
            firstFlip.children(".back").removeClass("hide");
            secondFlip.children(".front").addClass("hide");
            secondFlip.children(".back").removeClass("hide");
        
        } else{

            firstFlip.removeClass("flipdisable");
            secondFlip.removeClass("flipdisable");
            firstFlip.children(".front").removeClass("hide");
            firstFlip.children(".back").addClass("hide");
            secondFlip.children(".front").removeClass("hide");
            secondFlip.children(".back").addClass("hide");
        }
            firstFlip = "";
            secondFlip = "";
            firstBG = "";
            secondBG = "";
       
}