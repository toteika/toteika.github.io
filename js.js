 <script>
  function changepic() {
    var x = document.getElementById("myDIV");
  if (document.getElementById('myImg').src == "https://toteika.github.io/1.jpg") {
    var src = "2.jpg";
      x.innerHTML = "One";
  }
  else
  {
    var src = "1.jpg";
    x.innerHTML = "Next";
   }
  document.getElementById('myImg').src=src
}
    </script>
