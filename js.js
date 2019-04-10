/*// Загрузка скрипта после полной загрузки страницы
$(document).ready(function() {
	// Привязываем событие "click" - нажатие, к кнопке с id="mybutton"
	$(document).on("click", "#mybutton", function() {
		// Привязываем функцию "toggle" к элементу с тэгом <img>
		// содержащимся в элементе с id="img_box"
		$("#img_box>img").toggle();
	});
});
/*
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
