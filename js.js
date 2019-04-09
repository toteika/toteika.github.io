<img id="d1" src="1.jpg"/>
  $("#d1").attr("src","2.jpg");
$("#d1").bind("click", function() {
      $("#d1").attr("src","2.jpg");
});
$("img").bind("click", function() {
      var src = ($(this).attr("src") === "1.jpg")
                    ? "2.jpg" 
                    : "1.jpg";
      $(this).attr("src", src);
});
