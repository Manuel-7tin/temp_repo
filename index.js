// Selecting html elements with jQuery
$("h1").css("color", "blue")
$("button").css("background-color", "green")

// Getting the style of an element with jQuery
h1Color = $("h1").css("color")
console.log(h1Color)

// Manipulating styles with jQuery
$("h1").addClass("weird-heading")
classChecker = $("h1").hasClass("weird-heading")
$("h1").removeClass("weird-head")

// Manipulating texts with jQuery
$("h1").text("<p>Hi there</p>")
$("button").html("<em>click??</em>")

// Selecting and Manipulating attributes with jQuery
imageAttributes = $("img").attr("src")
console.log(imageAttributes)
$("img").attr("src", "https://c4.wallpaperflare.com/wallpaper/399/675/647/anime-landscape-artwork-illustration-wallpaper-preview.jpg")

// Adding event listeners with jQuery
$("button.img1").click(function () {
  $("img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsyXyn6elrL0J81L49kjdtHqm8TWMxTBlwg&usqp=CAU")
})
$(document).on("keydown", function(){
  $("h1").html(event.key)
})

// Adding and Removing html elements with jQuery
$("a").before("<button>click me BEFORE</button>")
$("a").prepend("<button>click me PREPEND</button>")
$("a").append("<button>click me APPEND</button>")
$("a").after("<button>click me AFTER</button>")

// Adding animations to a website with jQuery
$("button.img4").click(function() {
  $("img").toggle(); // or hide or show
})
$("button.img5").click(function() {
  $("img").fadeToggle(); // or fadeIn or fadeOut
})
$("button.img3").click(function() {
  $("img").slideToggle(); // or slideUp or slideDown
})
$("button.img2").click(function() {
  $("img").animate({opacity: 0.5});
});

// Adding chain animations to a website with jQuery
$("h1").click(function() {
  $("h1").animate({opacity: "50%"}).slideUp().fadeIn().css("color", "black")
})
