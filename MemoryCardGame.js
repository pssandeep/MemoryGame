console.log("MEMORY CARD GAME - JS Connected. Welcome to the console...");
if (jQuery) {
    console.log("jQuery Loaded");
}
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
var images = [
    "ray-hennessy-118049.jpg"
    , "teddy-kelley-65942.jpg"
    , "giovanni-calia-796.jpg"
    , "jarrod-reed-312595.jpg"
    , "massimo-mancini-113100.jpg"
    , "scott-walsh-315682.jpg"
    , "shwetha-shankar-137724.jpg"
    , "ray-hennessy-229596.jpg"
    , "jordan-whitt-6261.jpg"
    , "austin-neill-184257.jpg"
    , "shane-rounce-205187.jpg"
    , "matthew-kane-205235.jpg"
    , "ray-hennessy-118049.jpg"
    , "teddy-kelley-65942.jpg"
    , "giovanni-calia-796.jpg"
    , "jarrod-reed-312595.jpg"
    , "massimo-mancini-113100.jpg"
    , "scott-walsh-315682.jpg"
    , "shwetha-shankar-137724.jpg"
    , "ray-hennessy-229596.jpg"
    , "jordan-whitt-6261.jpg"
    , "austin-neill-184257.jpg"
    , "shane-rounce-205187.jpg"
    , "matthew-kane-205235.jpg"
];
$("div.back").each(function (i) {
    var num = Math.floor(Math.random() * array.length);
    var roll = array.splice(num, 1);
    console.log(images[roll]);
    $(this).css("background-image", "url(" + images[roll] + ")");
});
$("div.flipper").on("click", function () {
    $(this).children(".front").toggleClass("hide");
    $(this).children(".back").toggleClass("hide");
});