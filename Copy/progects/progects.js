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
	//Слайдер-куб
	var sliderCub1 = new SliderCub({elem:document.getElementById('slider1')});
	var sliderCub2 = new SliderCub({elem:document.getElementById('slider2')});
	var sliderCub3 = new SliderCub({elem:document.getElementById('slider3')});
	var sliderCub4 = new SliderCub({elem:document.getElementById('slider4')});
	var sliderCub5 = new SliderCub({elem:document.getElementById('slider5')});
});
//Функция для слайдер-куб
function SliderCub (options){
	var elem = options.elem;              //Получаем дескриптор из вне
	var id = $(elem).attr("id");          //Получаем ID слайдера
	var widthContainer = $("#"+id+" .sliderCubImageContainer").width();  //Ширина контейнера
	var heightContainer = $("#"+id+" .sliderCubImageContainer").height(); //Высота контейнера
	var angle = 0;                        //Угол поворота
	var numSideBack = 3;                      //Номер задней грани
	var numSideFront = 1;                     //Номер передней грани
	var speed = 2;                         //Скорость анимации
	var visibleSide = {                  //Названия стороны обращенной к юзеру
			1:"front",
			2:"right",
			3:"back",
			4:"left"
	}             
	//front->1 right->2 back->3 left->4
	//Подготовка всех размеров которые нельзя зделать в css
	$("#"+id+" .back").css("transform","translateZ("+(widthContainer*-0.5)+"px) rotateY(180deg)");
	$("#"+id+" .front").css("transform","translateZ("+(widthContainer*0.5)+"px)");
	$("#"+id+" .bottom").css({
		"transform":"translateX("+(widthContainer*0.5)+"px) translateY("+(heightContainer)+"px) rotateX(-90deg)",
		"box-shadow":"0 0 "+(widthContainer*0.15)+"px "+(widthContainer*0.3)+"px"
	});
	$("#"+id+" .sliderCubImageContainer").css("transform","translateZ("+(widthContainer*-0.5)+"px)");
	//Resizes for this
	$(window).resize(function(){
		var widthContainer = $("#"+id+" .sliderCubImageContainer").width();  //Ширина контейнера
		var heightContainer = $("#"+id+" .sliderCubImageContainer").height(); //Высота контейнера
		$("#"+id+" .back").css("transform","translateZ("+(widthContainer*-0.5)+"px) rotateY(180deg)");
		$("#"+id+" .front").css("transform","translateZ("+(widthContainer*0.5)+"px)");
		$("#"+id+" .bottom").css({
			"transform":"translateX("+(widthContainer*0.5)+"px) translateY("+(heightContainer)+"px) rotateX(-90deg)",
			"box-shadow":"0 0 "+(widthContainer*0.15)+"px "+(widthContainer*0.3)+"px"
		});
		$("#"+id+" .sliderCubImageContainer").css({
			"transform":"translateZ("+($(".sliderCubImageContainer").width()*-0.5)+"px) rotateY("+(angle)+"deg)",
			"transition":"transform 0s",
		});
	});
	var timerId = setInterval(function(){//Вращаем пока полтзователь не нажал чего нибуть
		actionCub(speed);
	},5000);
	//Обрабатывем клики и преключения
	$("#"+id+" .leftBottom").on({
		"click":function(){
			clearInterval(timerId);
			actionCub(speed);
		}
	});
	$("#"+id+" .rightBottom").on({
		"click":function(){
			reversActionCub(speed);
		}
	});
	$("#"+id+" .sliderCubIcon").on({
		"click":clickOnIcon
	});
	//Вызываем actionCub один раз чтобы коректно работал поворот вправо
	actionCub(speed);
	function returnIcon(){//Переставляем иконки назад незаметно для пользователя и подготавливаем их к последующему прогону	
		$("#"+id+" .sliderCubIcon").css({
			"left":"0",
			"transition":"left 0s"
		});
		var imgIcon1 = $("#"+id+"Icon1").css("background-image");
		$("#"+id+"Icon1").css("background-image",$("#"+id+"Icon2").css("background-image"));
		$("#"+id+"Icon2").css("background-image",$("#"+id+"Icon3").css("background-image"));
		$("#"+id+"Icon3").css("background-image",$("#"+id+"Icon4").css("background-image"));
		$("#"+id+"Icon4").css("background-image",$("#"+id+"Icon5").css("background-image"));
		$("#"+id+"Icon5").css("background-image",$("#"+id+"Icon6").css("background-image"));
		$("#"+id+"Icon6").css("background-image",imgIcon1);
		//Вешаем обработчики обратно когда движение закончено
		$("#"+id+" .leftBottom").on({
			"click":function(){
				var id = this.parentNode.parentNode.id;
				clearInterval(timerId);
				actionCub(speed);
			}
		});
		$("#"+id+" .rightBottom").on({
			"click":function(){
				reversActionCub(speed);
			}
		});
		$("#"+id+" .sliderCubIcon").on({
			"click":clickOnIcon
		});
	}
	function actionCub(speed){
		var speed;          //Скорость анимации
		var speedMillis = speed*1000;
		$("#"+id+" .leftBottom").off("click");
		$("#"+id+" .rightBottom").off("click");
		$("#"+id+" .sliderCubIcon").off("click");
		//Меняем заднюю картинку куба
		$("#"+id+" ."+visibleSide[numSideBack]).css("background-image",$("#"+id+"Icon2").css("background-image"));
		$("#"+id+" .sliderCubImageContainer").css({//Пворачиваем куб на 90 градусов
			"transform":"translateZ("+($(".sliderCubImageContainer").width()*-0.5)+"px) rotateY("+(angle=angle-90)+"deg)",
		    "transition":"transform "+speed+"s",
		});
		$("#"+id+" .sliderCubIcon").css({//Сдвигаем иконки на одну позицию
			"left":"-"+($("#"+id+" .sliderCubIcon").width()+($("#"+id+" .sliderCubIconContainer").width()*0.05/4))+"px",
			"transition":"left "+speed+"s"
		});
		//Пересчитываем визуальную и заднюю сторону 
		numSideFront++;
		if(numSideFront>4){
			numSideFront=1;
		}
		numSideBack++;
		if(numSideBack>4){
			numSideBack=1;
		}
		setTimeout(returnIcon,speedMillis);
	}
	function reversActionCub (speed){
		var speed;
		var speedMillis = speed*1000;
		$("#"+id+" .leftBottom").off("click");
		$("#"+id+" .rightBottom").off("click");
		$("#"+id+" .sliderCubIcon").off("click");
		clearInterval(timerId);
		//Меняем заднюю картинку куба
		$("#"+id+" ."+visibleSide[numSideBack]).css("background-image",$("#"+id+"Icon4").css("background-image"));
		$("#"+id+" .sliderCubIcon").css({//Сдвигаем иконки на одну позицию
			"left":"-"+($("#"+id+" .sliderCubIcon").width()+($("#"+id+" .sliderCubIconContainer").width()*0.05/4))+"px",
			"transition":"left 0s",
		});
		setTimeout(function(){
			$("#"+id+" .sliderCubIcon").css({//Сдвигаем иконки на одну позицию
				"transition":"left "+speed+"s",
				"left":"0px"
			});
		},100);
		$("#"+id+"Icon6").css("background-image",$("#"+id+"Icon5").css("background-image"));
		$("#"+id+"Icon5").css("background-image",$("#"+id+"Icon4").css("background-image"));
		$("#"+id+"Icon4").css("background-image",$("#"+id+"Icon3").css("background-image"));
		$("#"+id+"Icon3").css("background-image",$("#"+id+"Icon2").css("background-image"));
		$("#"+id+"Icon2").css("background-image",$("#"+id+"Icon1").css("background-image"));
		$("#"+id+"Icon1").css("background-image",$("#"+id+" ."+visibleSide[numSideFront]).css("background-image"));
		//Поворачиваем сам куб
		$("#"+id+" .sliderCubImageContainer").css({//Пворачиваем куб на 90 градусов
			"transform":"translateZ("+($(".sliderCubImageContainer").width()*-0.5)+"px) rotateY("+(angle=angle+90)+"deg)",
		    "transition":"transform "+speed+"s",
		});
		setTimeout(function(){
			//Вешаем обработчики обратно когда движение закончено
			$("#"+id+" .leftBottom").on({
				"click":function(){
					var id = this.parentNode.parentNode.id;
					clearInterval(timerId);
					actionCub(speed);
					$("#"+id+" .leftBottom").off("click");
				}
			});
			$("#"+id+" .rightBottom").on({
				"click":function(){
					reversActionCub(speed);
				}
			});
			$("#"+id+" .sliderCubIcon").on({
				"click":clickOnIcon
			});
		},speedMillis);
		numSideFront--;
		if(numSideFront<1){
			numSideFront=4;
		}
		numSideBack--;
		if(numSideBack<1){
			numSideBack=4;
		}
	}
	function clickOnIcon(){//Функция обрабатывающая действие при клике по иконке
		clearInterval(timerId);
		var idSlider = this.parentNode.parentNode.parentNode.id;            //id слайдера
		var idIcon = $(this).attr("id");                                //id иконки
		var numIcon = idIcon.slice(-1);
		//console.log(idSlider+"->"+idIcon+"->"+numIcon);
		if(numIcon=="1"){
			actionCub(2);
		}else if(numIcon=="2"){
			actionCub(1);
			setTimeout(function(){
				actionCub(1);
			},1009);
		}else if(numIcon=="3"){
			actionCub(0.5);
			setTimeout(function(){
				actionCub(0.5);
			},600);
			setTimeout(function(){
				actionCub(0.5);
			},1200);
		}else if(numIcon=="4"){
			reversActionCub(1);
			setTimeout(function(){
				reversActionCub(1)
			},1009);
		}else if(numIcon=="5"){
			reversActionCub(2);
		}
		
	}
}






