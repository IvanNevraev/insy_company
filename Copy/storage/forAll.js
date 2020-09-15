document.addEventListener("DOMContentLoaded", function(){	
//Обрабатываем события связаные с обратной формой
	var customerName = null;
	var customerPhone = null;
	var customerCheck = false;
	$(".customerName").change(function(){//Записываем имя в переменную если поле изменялось
		customerName = $(this).val();
		console.log("customerName->"+customerName);
		if(customerName.length==0){
			customerName=null;
			alert("Пожалуста, введите имя!")
		}
	});
	$(".customerPhone").change(function(){
		customerPhone = $(this).val();
		if(!(/\D/.test(customerPhone))&&(customerPhone.length>=7)){//Проверяем введеный номер на наличие букв и длинну
			console.log("customerPhone is OK ->"+customerPhone);
		}else{
			console.log("customerPhone is WRONG ->"+customerPhone);
			alert("Введен не коректный номер телефона!");
			customerPhone = null;
		}
	});
	$(".customerCheck").change(function(){//Проверяем флажок на согласие обработки персональных данных
		if($(this).prop("checked")){
			console.log("customerCheck is ON");
			customerCheck = true;
		}else{
			console.log("customerCheck is OFF");
			customerCheck = false;
		}
	});
	$(".customerSubmit").click(function(){//События при нажатие кнопки отправить
		if(customerName!=null&&customerPhone!=null&&customerCheck!=false){
			console.log("All ok for send data customer.");
			var customer ={
					name:customerName,
					phone:customerPhone,
			}
			console.log(customer);
			var data = customer;
			var hostname = location.hostname;
			$.ajax({
				url:"http://"+hostname+'/feedBackServer.php',
				type:'POST',
				dataType:"text",
				data,
				success:function(data){
					console.log("Data was send");
					console.log("Echo = "+data);
					if(data=="INSERT IS OK!"){
						alert("Спасибо, мы вскоре свяжимся с вами!");
					}else{
						alert("Извените, мы не смогли получить ваши данные. Что-то пошло не так. Пожалуйста позвоните нам или попробуйте еще раз.");
					}
				},
				error:function(){
					alert("Извените, мы не смогли получить ваши данные. Что-то пошло не так. Пожалуйста позвоните нам или попробуйте еще раз.")
				}
				});
		}else{//Проверяем что не так и подсказываем пользователю
			if(customerName==null){
				var i1=0;
				var timerId1 = setInterval(function(){
					if(i1==0){
						$(".customerName").css("box-shadow","0 0 20px 2px red");
						i1=1;
					}else{
						$(".customerName").attr("style","");
						i1=0;
					}
				},150);
				setTimeout(function(){
					clearInterval(timerId1);
					$(".customerName").attr("style","");
				},1500);
			}
			if(customerPhone==null){
				var i2=0;
				var timerId2 = setInterval(function(){
					if(i2==0){
						$(".customerPhone").css("box-shadow","0 0 20px 2px red");
						i2=1;
					}else{
						$(".customerPhone").attr("style","");
						i2=0;
					}
				},150);
				setTimeout(function(){
					clearInterval(timerId2);
					$(".customerPhone").attr("style","");
				},1500);
			}
			if(customerCheck==false){
				var i3=0;
				var timerId3 = setInterval(function(){
					if(i3==0){
						$(".customerCheck").css("box-shadow","0 0 20px 2px red");
						i3=1;
					}else{
						$(".customerCheck").attr("style","");
						i3=0;
					}
				},150);
				setTimeout(function(){
					clearInterval(timerId3);
					$(".customerCheck").attr("style","");
				},1500);
			}
		}
	});
});