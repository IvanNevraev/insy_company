document.addEventListener("DOMContentLoaded", function(){
	//Перехваты событий
	//Переходы по ссылкам в меню навигации
	$("#div2N, #otherProgects").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/progects/";
	});
	$("#div3N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/prices/";
	});
	$("#div4N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/contacts/";
	});
	//Переход на страницу умный дом
	$("#div5N").click(function(){
		var hostname = location.hostname;
		document.location.href = "http://"+hostname+"/smart-home/";
	});
	//Большой селектор с приимуществами внизу стстрааницы
	$("#icon1").css({
		"background-color":"var(--blue)",
	    "color":"white"
	});
	$("#icon1 i").css("color","var(--blue)");
	$("#bigSliderImage1").css("opacity","1");
	$(".icon").click(function(){
		$(".icon, .icon i, .bigSliderImage").attr("style","");
		var id = $(this).attr("id");
		$("#"+id).css({
			"background-color":"var(--blue)",
		    "color":"white"
		});
		$("#"+id+" i").css("color","var(--blue)");
		$("#bigSliderImage"+(id.match(/\d+/))).css("opacity","1");
	});
	//Слайдер в разделе готовые проекты
	$(".sliderCubIcon").click(function(){
		var idIcon=$(this).attr("id");
		var numSlider = idIcon.match(/\d+/);
		var urlIcon = $("#"+idIcon).css("background-image");
		var urlImage = $("#slider"+numSlider+"Image1").css("background-image");
		$("#"+idIcon).css("background-image",urlImage);
		$("#slider"+numSlider+"Image1").css("background-image",urlIcon);
	});
	//Прокрутка к калькулятору при нажатии на калькулятор в шапке
	$("#div3H").click(function(){
		window.scrollBy(0,(($("#start").offset()).top-50));
	});
	//То же самой но при переходе с другой странице
	if(document.location.hash=="#calc"){
		window.scrollBy(0,(($("#start").offset()).top-50));
	}
	//Убираем окошко с итоговой ценой при прокрутке калькулятора в не зоны видимости
	window.onscroll = function() {
		  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		  var offsetTopCalc = $("#start").offset().top;
		  var heightCalc = $("#start").height();
		  var clientHeight = document.documentElement.clientHeight;
		  if((scrolled+clientHeight*0.5)>offsetTopCalc&&scrolled<(offsetTopCalc+heightCalc-clientHeight*0.5)){
			  $("#totalDiv").css("display","block");
		  }else{
			  $("#totalDiv").css("display","none");
		  }
		}
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
	//--------------------------------------------------------------------
	$(window).resize(function(){//Ресайзы
		//Отменяем стили для блока навигации при повороте экрана на планшетную версию
		if(document.documentElement.clientWidth>=640){
			$("#div1N, #div2N, #div3N, #div4N, #div5N").css("display","");
		}
	});	
	//Создаем объект класса Rewrite для перепечатывания
	var optionsRewrite1 = {
			elem:document.getElementById('rewrite'),  //Дескриптор элемента
			words:{
				1:"КОМФОРТА",
				2:"УЮТА",
				3:"БЕЗОПАСНОСТИ",
			}
	}
	var rewrite1 = new Rewrite(optionsRewrite1);
	//Обработчик на выпадания меню где телефон
	$(".context").click(function(){
		var id = $(this).attr("ID");
		var display = $("#"+id+" span").css("display");
		console.log("ID->"+id+" display->"+display);
		if(display=="none"){
			$(this).attr("class","contextShow");
		}else{
			$(this).attr("class","context");
		}
	});
	//------------------------------------------
	//Слайдер-куб
	var sliderCub1 = new SliderCub({elem:document.getElementById('slider1')});
	var sliderCub2 = new SliderCub({elem:document.getElementById('slider2')});
	var sliderCub3 = new SliderCub({elem:document.getElementById('slider3')});
	animateBackgroundStars();
});//--------------конец DOMContentLoadet-----------------------------
//Функция перепечатывания слова
function Rewrite(options){
	var elem = options.elem;              //Получаем дескриптор из вне
	var content = $(elem).html();         //Получаем текущее состояние перепичатываемого контента
	var sumWords = 0;                     //Сколько вариантов слов перепичатывем
	var position = 1;                     //Переменная для хранения позиции последнего напечатоного слова
	for (var key in options.words) {
	  sumWords++;                         //Считаем количество слов
	}
	function backspace(){                 //Стираем контент
		if(content.length!=0){
			setTimeout(function(){
				content=content.substring(0,content.length-1);
				$(elem).html(content);
				backspace();
			},100);
		}else{
			write();
		}
	}
	function write(){                     //Печатаем контент
		if(content.length!=options.words[position].length){       //Если дли напечатаного слова не достигла длинны нужного слова печатаем
			setTimeout(function(){
				content=options.words[position].substring(0,content.length+1);
				$(elem).html(content);
				write();
			},300);
		}else{
			setTimeout(function(){
				backspace();
				position++;
				if(position>sumWords){
					position=1;
				}
			},3000);
		}
	}
	backspace();
}
//----------------------------------------------------------------------
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
//Анимированый фон на калькуляторе
function animateBackgroundStars(options){
	let resizeReset = function() {
	    w = canvasBody.width = window.innerWidth;
	    h = canvasBody.height = window.innerHeight;
	}

	const opts = { 
	    particleColor: "rgb(200,200,200)",
	    lineColor: "rgb(200,200,200)",
	    particleAmount: 50,
	    defaultSpeed: 1,
	    variantSpeed: 1,
	    defaultRadius: 2,
	    variantRadius: 2,
	    linkRadius: 200,
	};

	window.addEventListener("resize", function(){
	    deBouncer();
	});

	let deBouncer = function() {
	    clearTimeout(tid);
	    tid = setTimeout(function() {
	        resizeReset();
	    }, delay);
	};

	let checkDistance = function(x1, y1, x2, y2){ 
	    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	};

	let linkPoints = function(point1, hubs){ 
	    for (let i = 0; i < hubs.length; i++) {
	        let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
	        let opacity = 1 - distance / opts.linkRadius;
	        if (opacity > 0) { 
	            drawArea.lineWidth = 0.5;
	            drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
	            drawArea.beginPath();
	            drawArea.moveTo(point1.x, point1.y);
	            drawArea.lineTo(hubs[i].x, hubs[i].y);
	            drawArea.closePath();
	            drawArea.stroke();
	        }
	    }
	}

	Particle = function(xPos, yPos){ 
	    this.x = Math.random() * w; 
	    this.y = Math.random() * h;
	    this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed; 
	    this.directionAngle = Math.floor(Math.random() * 360); 
	    this.color = opts.particleColor;
	    this.radius = opts.defaultRadius + Math.random() * opts. variantRadius; 
	    this.vector = {
	        x: Math.cos(this.directionAngle) * this.speed,
	        y: Math.sin(this.directionAngle) * this.speed
	    };
	    this.update = function(){ 
	        this.border(); 
	        this.x += this.vector.x; 
	        this.y += this.vector.y; 
	    };
	    this.border = function(){ 
	        if (this.x >= w || this.x <= 0) { 
	            this.vector.x *= -1;
	        }
	        if (this.y >= h || this.y <= 0) {
	            this.vector.y *= -1;
	        }
	        if (this.x > w) this.x = w;
	        if (this.y > h) this.y = h;
	        if (this.x < 0) this.x = 0;
	        if (this.y < 0) this.y = 0; 
	    };
	    this.draw = function(){ 
	        drawArea.beginPath();
	        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
	        drawArea.closePath();
	        drawArea.fillStyle = this.color;
	        drawArea.fill();
	    };
	};

	function setup(){ 
	    particles = [];
	    resizeReset();
	    for (let i = 0; i < opts.particleAmount; i++){
	        particles.push( new Particle() );
	    }
	    window.requestAnimationFrame(loop);
	}

	function loop(){ 
	    window.requestAnimationFrame(loop);
	    drawArea.clearRect(0,0,w,h);
	    for (let i = 0; i < particles.length; i++){
	        particles[i].update();
	        particles[i].draw();
	    }
	    for (let i = 0; i < particles.length; i++){
	        linkPoints(particles[i], particles);
	    }
	}

	const canvasBody = document.getElementById("stars"),
	drawArea = canvasBody.getContext("2d");
	let delay = 200, tid,
	rgb = opts.lineColor.match(/\d+/g);
	resizeReset();
	setup();
}








