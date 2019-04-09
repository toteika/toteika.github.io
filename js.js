<script type="text/javascript">
  var array = new Array(
  "1.jpg",
  "2.jpg"
  
  );//массив с путями к картинкам
  var i = 0;
  function left() {
  var image = document.getElementById("rotatorbutton");
  i--;
  if (i < 0) i = array.length - 1;
  image.src = array[i]; 
}
  function right() {
  var image = document.getElementById("rotatorbutton");
  i++;
  if (i == array.length) i = 0;
  image.src = array[i];
  }
</script>
