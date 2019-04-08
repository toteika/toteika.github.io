function imgsrc(img) {
  if ($(img).attr("src") == "img/1.jpg")
    $(img).attr("src", "img/2.jpg");
  else
    $(img).attr("src", "img/1.jpg");
}
