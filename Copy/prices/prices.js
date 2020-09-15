document.addEventListener("DOMContentLoaded", function(){
	//Переход на главную страницу с фокусом на калькулятор
	$("#div3H").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"#calc";
	});
	//Простой переход на главнуя страницу
	$("#div1N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname;
	});
	//Переход на страницу проекты
	$("#div2N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/progects/";
	});
	//Переход на страницу контакты
	$("#div4N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/contacts/";
	});
	//Переход на страницу умный дом
	$("#div5N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/smart-home/";
	});
	//Открываем модальное окно обратной связи
	$("#div5H, .orderCalc").click(function(){
		$("#orderBack").css({
			"z-index":"10",
			"opacity":"1"
		});
	});
	//Закрываем модальное окно обратной связи
	$("#orderBack").click(function(){
		$(this).css({
			"z-index":"-1",
			"opacity":"0"
		});
	});
	//Запрет всплытия
	$("#orderDiv").click(function(event){
		event.stopPropagation();
	});
	//Обрабатываем событие открытия меню навигауии в мобильной версии
	var navOpen = false;
	$("#div01N").click(function(){
		if(navOpen){
			$("#div1N, #div2N, #div3N, #div4N, #div5N").css("display","none");
			$(this).attr("id","div01N");
			navOpen = false;
		}else{
			$("#div1N, #div2N, #div3N, #div4N, #div5N").css("display","block");
			$(this).attr("id","div02N");
			navOpen = true;
		}
	});
	$(window).resize(function(){//Ресайзы
		//Отменяем стили для блока навигации при повороте экрана на планшетную версию
		if(document.documentElement.clientWidth>=640){
			$("#div1N, #div2N, #div3N, #div4N, #div5N").css("display","");
		}
	});
});