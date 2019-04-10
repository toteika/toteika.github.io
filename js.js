function changepic() {
  if (document.getElementById('myImg').src == "1.jpg") {
    var src = "2.jpg";
  //  $("#text").text("Cобачка2");
  }
  else
  {
    var src = "1.jpg";
   // $("#text").text("Cобачка1");
  }
  document.getElementById('myImg').src=src
  // $("#my_image").attr("src", src);
}
