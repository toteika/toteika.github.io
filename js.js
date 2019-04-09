// Загрузка скрипта после полной загрузки страницы
$(document).ready(function() {
	// Привязываем событие "click" - нажатие, к кнопке с id="mybutton"
	$(document).on("click", "#mybutton", function() {
		// Привязываем функцию "toggle" к элементу с тэгом <img>
		// содержащимся в элементе с id="img_box"
		$("#img_box>img").toggle();
	});
});
