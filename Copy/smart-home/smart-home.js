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
	//Простой переход на готовые проекты
	$("#div2N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/progects/";
	});
	//Переход на страницу стоимости
	$("#div3N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/prices/";
	});
	//Переход на страницу контакты
	$("#div4N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/contacts/";
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
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	    // код для мобильных устройств
		if(document.documentElement.clientWidth<=1150){
			$("#bgvideo").remove();
		}
		if(document.documentElement.clientWidth<=350){
			$("#section1").height(document.documentElement.clientHeight*2);
		}
		$(".video").height(document.documentElement.clientHeight*0.5);
		$(window).resize(function(){//Ресайзы
			if(document.documentElement.clientWidth<=1150){
				$("#bgvideo").remove();
			}
			$(".video").height(document.documentElement.clientHeight*0.5);
			if(document.documentElement.clientWidth<=370){
				$("#section1").height(document.documentElement.clientHeight*2.1);
			}
		});
	  } else {
	    // код для обычных устройств
	}
	$(window).resize(function(){//Ресайзы
		//Отменяем стили для блока навигации при повороте экрана на планшетную версию
		if(document.documentElement.clientWidth>=640){
			$("#div1N, #div2N, #div3N, #div4N, #div5N").css("display","");
		}
	});
});