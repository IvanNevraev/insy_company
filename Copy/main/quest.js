document.addEventListener("DOMContentLoaded", ready);
function ready(){
	$("#button1").click(runQuest);
	function runQuest(){
		var total1=0; var total2=0; var total3=0; var total4=0; var total5=0; var total6=0; var total7=0; var total8=0;
		var total9=0; var total10=0; var total11=0; var total12=0; var total13=0; var total14=0; var total15=0; var total16=0;
		var total17=0; var total18=0; var total19=0; var total20=0; var total21=0; var total22=0; var total23=0;
		//------------Cookie--------------------
		var idTest; //Номер записи в базе Мускула
		var idUser = $.cookie('idUser');    //Узнаем куку 
		if(idUser==null){                   //Куки нет -> отпправляем на сервер "Куки нет" <- Получаем номер Юзера и номер записи
			console.log("idUser is NONE");
			var getPak = {"idUser":"NONE"};
			dataSendId(getPak);
		}else{                             //Кука есть -> Отпровляем кука есть и получаем номер записи
			console.log("idUser = "+idUser);
			var getPak = {"idUser":idUser};
			dataSendId(getPak);
		}
		//------------------------------
		$("#wirenBoard, #wirenBoardM").css({
			"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
		});
		var typeHard="wirenBoard";
		$("#start").css({
			"opacity":0,
			"z-index":-1,
			"pointer-events":"none"
		});
		$("#quest1").css({
			"opacity":1,
			"z-index":10,
			"pointer-events":"auto"
		});
		var typeHome;
		$("#checkbox11").click(function(){
			typeHome = "house";
			$(this).css({
				"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
			});
			$("#checkbox12").css({
				"box-shadow": ""
			});
		});
		$("#checkbox12").click(function(){
			typeHome = "appart";
			$(this).css({
				"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
			});
			$("#checkbox11").css({
				"box-shadow": ""
			});
		});
		$("#confirm1").click(function(){
			idUser = $.cookie("idUser");
			idTest = $.cookie("idTest");
			console.log("IdUser = "+idUser+" Id test = "+idTest);
			if(typeHome!=undefined){
				$("#quest1").css({
					"opacity":0,
					"z-index":1,
					"pointer-events":"none"
				});
				$("#quest2").css({
					"opacity":1,
					"z-index":10,
					"pointer-events":"auto"
				});
				if(typeHome=="appart"){
					$("#16, #16M").remove();
					$("#17, #17M").remove();
					$("#18, #18M").remove();
					$("#19, #19M").remove();
					$("#20, #20M").remove();
					$("#21, #21M").remove();
					$("#22, #22M").remove();
					$("#23, #23M").remove();
				}
				var data = {
						"typeHome":typeHome,
						"idTest":idTest
						};
				dataSend(data);
			}
		});
		var sumSU;//Количество санузлов
		$("#confirm2").click(function(){
			idUser = $.cookie("idUser");
			idTest = $.cookie("idTest");
			console.log("IdUser = "+idUser+" Id test = "+idTest);
			sumSU = $("#input1").val();
			if(sumSU!=""){
				$("#quest2").css({
					"opacity":0,
					"z-index":1,
					"pointer-events":"none"
				});
				$("#quest3").css({
					"opacity":1,
					"z-index":10,
					"pointer-events":"auto"
				});
				var data = {
						"sumSU":sumSU,
						"idTest":idTest
						};
				dataSend(data);
			}
		});
		var sumRoom;//Количество комнат
		$("#confirm3").click(function(){
			idUser = $.cookie("idUser");
			idTest = $.cookie("idTest");
			console.log("IdUser = "+idUser+" Id test = "+idTest);
			sumRoom = $("#input2").val();
			if(sumRoom!=""){
				$("#quest3").css({
					"opacity":0,
					"z-index":1,
					"pointer-events":"none"
				});
				$("#quest4").css({
					"opacity":1,
					"z-index":10,
					"pointer-events":"auto"
				});
				var data = {
						"sumRoom":sumRoom,
						"idTest":idTest
						};
				dataSend(data);
			}
		});
		var areaHome;//Площадь дома
		$("#confirm4").click(function(){
			idUser = $.cookie("idUser");
			idTest = $.cookie("idTest");
			console.log("IdUser = "+idUser+" Id test = "+idTest);
			areaHome = $("#input3").val();
			if(areaHome!=""){
				$("#quest4").css({
					"opacity":0,
					"z-index":1,
					"pointer-events":"none"
				});
				$("#quest5").css({
					"opacity":1,
					"z-index":10,
					"pointer-events":"auto"
				});
				var data = {
						"areaHome":areaHome,
						"idTest":idTest
						};
				dataSend(data);
			}
		});
		var hiddenWire;//Возможность скрытой проводки
		$("#checkbox51").click(function(){
			hiddenWire = "yes";
			$(this).css({
				"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
			});
			$("#checkbox52").css({
				"box-shadow": ""
			});
		});
		$("#checkbox52").click(function(){
			hiddenWire = "no";
			$(this).css({
				"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
			});
			$("#checkbox51").css({
				"box-shadow": ""
			});
		});
		$("#confirm5").click(function(){
			idUser = $.cookie("idUser");
			idTest = $.cookie("idTest");
			console.log("IdUser = "+idUser+" Id test = "+idTest);
			if(hiddenWire!=undefined){
				$("#quest5").css({
					"opacity":0,
					"z-index":1,
					"pointer-events":"none"
				});
				if(hiddenWire=="no"){
					$("#3, #3M").remove();
					$("#4, #4M").remove();
					$("#typeHard").remove();
					$(".typeHardM").remove();
				}else{
					for(var i=0;i<18;i++){
						//$("#price"+i).append("<td></td>");
						//$("#price"+i).attr("colspan",2);
					}
				}
				if(typeHome=="house"){
					$("#quest6").css({
						"opacity":1,
						"z-index":10,
						"pointer-events":"auto"
					});
				}else{
					$("#quest8, #totalDiv").css({
						"opacity":1,
						"z-index":10,
						"pointer-events":"auto"
					});
					funcBasa();
					//Увеличиваем высоту фона таблицы
					if(document.documentElement.clientWidth<=780){
						$("#section2").height($("#totalTableMobile").height()+40);
					}else{
						$("#section2").height($("#totalTable").height()+40);
					}
				}
				var data = {
						"hiddenWire":hiddenWire,
						"idTest":idTest
						};
				dataSend(data);
			}
		});
		var sumFloor;
		$("#confirm6").click(function(){
			idUser = $.cookie("idUser");
			idTest = $.cookie("idTest");
			console.log("IdUser = "+idUser+" Id test = "+idTest);
			sumFloor = $("#input6").val();
			if(sumFloor!=""){
				$("#quest6").css({
					"opacity":0,
					"z-index":1,
					"pointer-events":"none"
				});
				$("#quest7").css({
					"opacity":1,
					"z-index":10,
					"pointer-events":"auto"
				});
				var data = {
						"sumFloor":sumFloor,
						"idTest":idTest
						};
				dataSend(data);
			}
		});
		var areaJard;
		$("#confirm7").click(function(){
			idUser = $.cookie("idUser");
			idTest = $.cookie("idTest");
			console.log("IdUser = "+idUser+" Id test = "+idTest);
			areaJard = $("#input7").val();
			if(areaJard!=""){
				$("#quest7").css({
					"opacity":0,
					"z-index":1,
					"pointer-events":"none"
				});
				$("#quest8, #totalDiv").css({
					"opacity":1,
					"z-index":10,
					"pointer-events":"auto"
				});
				//Увеличиваем высоту фона таблицы
				if(document.documentElement.clientWidth<=780){
					$("#section2").height($("#totalTableMobile").height()+40);
				}else{
					$("#section2").height($("#totalTable").height()+40);
				}
				var data = {
						"areaJard":areaJard,
						"idTest":idTest
						};
				dataSend(data);
			}
			funcBasa();
		});
		//----------------------------------------------------------
		var price={
				checkPrice1:false,
				checkPrice2:false,
				checkPrice3:false,
				checkPrice4:false,
				checkPrice5:false,
				checkPrice6:false,
				checkPrice7:false,
				checkPrice8:false,
				checkPrice9:false,
				checkPrice10:false,
				checkPrice11:false,
				checkPrice12:false,
				checkPrice13:false,
				checkPrice14:false,
				checkPrice15:false,
				checkPrice16:false,
				checkPrice17:false,
				checkPrice18:false,
				checkPrice19:false,
				checkPrice20:false,
				checkPrice21:false,
				checkPrice22:false,
				checkPrice23:false,
		}
		var priceM={
				checkPrice1M:false,
				checkPrice2M:false,
				checkPrice3M:false,
				checkPrice4M:false,
				checkPrice5M:false,
				checkPrice6M:false,
				checkPrice7M:false,
				checkPrice8M:false,
				checkPrice9M:false,
				checkPrice10M:false,
				checkPrice11M:false,
				checkPrice12M:false,
				checkPrice13M:false,
				checkPrice14M:false,
				checkPrice15M:false,
				checkPrice16M:false,
				checkPrice17M:false,
				checkPrice18M:false,
				checkPrice19M:false,
				checkPrice20M:false,
				checkPrice21M:false,
				checkPrice22M:false,
				checkPrice23M:false,
		}
		$(".tableCheck, #wirenBoard, #loxone").click(function(){//Все клики по таблицам
			//Активация и деактивация флажков
			var id = $(this).attr("id");
			if(price[id]==false){
				price[id]=true;
				$("#"+id).css({
					"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
				});
			}else{
				price[id]=false;
				$("#"+id).css({
					"box-shadow": ""
				});
			}
			//Переключение типа оборудования
			if(id=="wirenBoard"){
				typeHard = "wirenBoard";
				$(this).css({
					"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
				});
				$("#loxone").css({
					"box-shadow": ""
				});
			}else if(id=="loxone"){
				typeHard = "loxone";
				$(this).css({
					"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
				});
				$("#wirenBoard").css({
					"box-shadow": ""
				});
			}
			//Расчеты------------------------
			//Общие
			if(typeHome=="house"){
				if(sumFloor<=1){
					var GL = sumRoom*2+sumSU*1+2*1;
				}else{
					var GL = sumRoom*2+sumSU*1+6*1;
				}
			}else{
				var GL = sumRoom*2+sumSU*1+2*1;
			}
			console.log("For all GL="+GL);
			if(hiddenWire=="yes"){
				total1=0;
				if(typeHard=="wirenBoard"){
					var basa = 15000
					$("#priceBasa").text(basa*1.2+" руб.");
					//1
					if(price.checkPrice1==true){
						var total1 = Math.ceil(GL/8)*2500+Math.ceil(GL/14)*2500;
						$("#price1").text(total1*1.2+" руб.");
					}else{
						total1=0;
						$("#price1").text("");
					}
					//2
					if(price.checkPrice2==true){
						price.checkPrice1=true;
						var total1 = Math.ceil(GL/8)*2500+Math.ceil(GL/14)*2500;
						$("#checkPrice1").css({
							"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
						});
						$("#price1").text(total1*1.2+" руб.");
						if(typeHome=="house"){
							if(sumFloor<=1){
								total2=(sumRoom*1+sumSU*1+3)*200;
								$("#price2").text(total2*1.2+" руб.");
							}else{
								total2=(sumRoom*1+sumSU*1+5)*200;
								$("#price2").text(total2*1.2+" руб.");
							}
						}else{
							total2=(sumRoom*1+sumSU*1+2)*200;
							$("#price2").text(total2*1.2+" руб.");
						}
					}else{
						total2=0;
						$("#price2").text("");
					}
					//3
					if(price.checkPrice3==true){
						total3=Math.ceil((sumRoom*1+sumSU*1+2)/4)*2400;
						$("#price3").text(total3*1.2+" руб.");
					}else{
						total3=0;
						$("#price3").text("");
					}
					//4
					if(price.checkPrice4==true){
						total4=Math.ceil((sumRoom*1+sumSU*1+2)*3/4)*2400;
						total3=0;
						$("#price3").text(total3*1.2+" руб.");
						$("#price4").text(total4*1.2+" руб.");
					}else{
						total4=0;
						$("#price4").text("");
					}
					//5
					if(price.checkPrice5==true){
						total5=2000;
						$("#price5").text(total5*1.2+" руб.");
					}else{
						total5=0;
						$("#price5").text("");
					}
					//6
					if(price.checkPrice6==true){
						if(price.checkPrice2==true){
							if(typeHome=="house"){
								total6=1000;
							}else{
								total6=400;	
							}
						}else{
							if(typeHome=="house"){
								total6=1000+sumRoom*200;
							}else{
								total6=400+sumRoom*200;	
							}
						}
						$("#price6").text(total6*1.2+" руб.");
					}else{
						total6=0;
						$("#price6").text("");
					}
					//7
					if(price.checkPrice7==true){
						if(typeHome=="house"){
							total7=1000*2;
						}else{
							total7=1000;
						}
						$("#price7").text(total7*1.2+" руб.");
					}else{
						total7=0;
						$("#price7").text("");
					}
					//8
					if(price.checkPrice8==true){
						total8=(sumSU*1+1)*700+10000+2500;
						$("#price8").text(total8*1.2+" руб.");
					}else{
						total8=0;
						$("#price8").text("");
					}
					//9
					if(price.checkPrice9==true){
						if(typeHome=="house"){
							total9=sumFloor*3000;
						}else{
							total9=3000;
						}
						$("#price9").text(total9*1.2+" руб.");
					}else{
						total9=0;
						$("#price9").text("");
					}
					//10
					if(price.checkPrice10==true){
						total10=sumRoom*1000;
						$("#price10").text(total10*1.2+" руб.");
					}else{
						total10=0;
						$("#price10").text("");
					}
					//11
					if(price.checkPrice11==true){
						total11=Math.ceil(sumRoom/8)*2500+Math.ceil(sumRoom/14)*2500+sumRoom*1200;
						$("#price11").text(total11*1.2+" руб.");
					}else{
						total11=0;
						$("#price11").text("");
					}
					//12
					if(price.checkPrice12==true){
						total12=sumRoom*8000;
						$("#price12").text(total12*1.2+" руб.");
					}else{
						total12=0;
						$("#price12").text("");
					}
					//13
					if(price.checkPrice13==true){
						total13=0;
						$("#price13").text(total13*1.2+" руб.");
					}else{
						total13=0;
						$("#price13").text("");
					}
					//14
					if(price.checkPrice14==true){
						total14=4500;
						$("#price14").text(total14*1.2+" руб.");
					}else{
						total14=0;
						$("#price14").text("");
					}
					//15
					if(price.checkPrice15==true){
						if(price.checkPrice10==true){
							total15=0;
						}else{
							total15=1000;
						}
						$("#price15").text(total15*1.2+" руб.");
					}else{
						total15=0;
						$("#price15").text("");
					}
					//16
					if(price.checkPrice16==true){
						total16=2500;
						$("#price16").text(total16*1.2+" руб.");
					}else{
						total16=0;
						$("#price16").text("");
					}
					//17
					if(price.checkPrice17==true){
						total17=3000;
						$("#price17").text(total17*1.2+" руб.");
					}else{
						total17=0;
						$("#price17").text("");
					}
					//18
					if(price.checkPrice18==true){
						total18=6000;
						$("#A").text(total18*1.2+" руб.");
					}else{
						total18=0;
						$("#A").text("");
					}
					//19
					if(price.checkPrice19==true){
						total19=2500;
						$("#PRICE19").text(total19*1.2+" руб.");
					}else{
						total19=0;
						$("#PRICE19").text("");
					}
					//20
					if(price.checkPrice20==true){
						total20=8000;
						$("#PRICE20").text(total20*1.2+" руб.");
					}else{
						total20=0;
						$("#PRICE20").text("");
					}
					//21
					if(price.checkPrice21==true){
						total21=Math.floor((Math.sqrt(areaJard*1))*4/50*4500);
						$("#PRICE21").text(Math.floor(total21*1.2)+" руб.");
					}else{
						total21=0;
						$("#PRICE21").text("");
					}
					//22
					if(price.checkPrice22==true){
						total22=4500;
						$("#PRICE22").text(total22*1.2+" руб.");
					}else{
						total22=0;
						$("#PRICE22").text("");
					}
					//23
					if(price.checkPrice23==true){
						total23=5500;
						$("#PRICE23").text(total23*1.2+" руб.");
					}else{
						total23=0;
						$("#PRICE23").text("");
					}
					
				}
				if(typeHard=="loxone"){
					var basa = 47000
					$("#priceBasa").text(basa*1.2+" руб.");
					//1
					if(price.checkPrice1==true){
						var total1 = Math.ceil((GL-8)/8)*36400;
						$("#price1").text(total1*1.2+" руб.");
					}else{
						total1=0;
						$("#price1").text("");
					}
					//2
					if(price.checkPrice2==true){
						price.checkPrice1=true;
						var total1 = Math.ceil((GL-8)/8)*36400;
						$("#checkPrice1").css({
							"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
						});
						$("#price1").text(total1*1.2+" руб.");
						if(typeHome=="house"){
							if(sumFloor<=1){
								total2=(sumRoom*1+sumSU*1+3)*200;
								$("#price2").text(total2*1.2+" руб.");
							}else{
								total2=(sumRoom*1+sumSU*1+5)*200;
								$("#price2").text(total2*1.2+" руб.");
							}
						}else{
							total2=(sumRoom*1+sumSU*1+2)*200;
							$("#price2").text(total2*1.2+" руб.");
						}
					}else{
						total2=0;
						$("#price2").text("");
					}
					//3
					if(price.checkPrice3==true){
						total3=Math.ceil((sumRoom*1+sumSU*1+2)/4)*35000;
						$("#price3").text(total3*1.2+" руб.");
					}else{
						total3=0;
						$("#price3").text("");
					}
					//4
					if(price.checkPrice4==true){
						total4=Math.ceil((sumRoom*1+sumSU*1+2)*3/4)*35000;
						total3=0;
						$("#price3").text(total3*1.2+" руб.");
						$("#price4").text(total4*1.2+" руб.");
					}else{
						total4=0;
						$("#price4").text("");
					}
					//5
					if(price.checkPrice5==true){
						total5=2000;
						$("#price5").text(total5*1.2+" руб.");
					}else{
						total5=0;
						$("#price5").text("");
					}
					//6
					if(price.checkPrice6==true){
						if(price.checkPrice2==true){
							if(typeHome=="house"){
								total6=1000;
							}else{
								total6=400;	
							}
						}else{
							if(typeHome=="house"){
								total6=1000+sumRoom*200;
							}else{
								total6=400+sumRoom*200;	
							}
						}
						$("#price6").text(total6*1.2+" руб.");
					}else{
						total6=0;
						$("#price6").text("");
					}
					//7
					if(price.checkPrice7==true){
						if(typeHome=="house"){
							total7=1000*2;
						}else{
							total7=1000;
						}
						$("#price7").text(total7*1.2+" руб.");
					}else{
						total7=0;
						$("#price7").text("");
					}
					//8
					if(price.checkPrice8==true){
						total8=(sumSU*1+1)*700+10000+34000;
						$("#price8").text(total8*1.2+" руб.");
					}else{
						total8=0;
						$("#price8").text("");
					}
					//9
					if(price.checkPrice9==true){
						if(typeHome=="house"){
							total9=sumFloor*13000;
						}else{
							total9=13000;
						}
						$("#price9").text(total9*1.2+" руб.");
					}else{
						total9=0;
						$("#price9").text("");
					}
					//10
					if(price.checkPrice10==true){
						total10=sumRoom*3000;
						$("#price10").text(total10*1.2+" руб.");
					}else{
						total10=0;
						$("#price10").text("");
					}
					//11
					if(price.checkPrice11==true){
						total11=Math.ceil(sumRoom/8)*34000+sumRoom*1200;
						$("#price11").text(total11*1.2+" руб.");
					}else{
						total11=0;
						$("#price11").text("");
					}
					//12
					if(price.checkPrice12==true){
						total12=sumRoom*40000;
						$("#price12").text(total12*1.2+" руб.");
					}else{
						total12=0;
						$("#price12").text("");
					}
					//13
					if(price.checkPrice13==true){
						total13=0;
						$("#price13").text(total13*1.2+" руб.");
					}else{
						total13=0;
						$("#price13").text("");
					}
					//14
					if(price.checkPrice14==true){
						total14=1000;
						$("#price14").text(total14*1.2+" руб.");
					}else{
						total14=0;
						$("#price14").text("");
					}
					//15
					if(price.checkPrice15==true){
						total15=21000;
						$("#price15").text(total15*1.2+" руб.");
					}else{
						total15=0;
						$("#price15").text("");
					}
					//16
					if(price.checkPrice16==true){
						total16=12000;
						$("#price16").text(total16*1.2+" руб.");
					}else{
						total16=0;
						$("#price16").text("");
					}
					//17
					if(price.checkPrice17==true){
						total17=12000;
						$("#price17").text(total17*1.2+" руб.");
					}else{
						total17=0;
						$("#price17").text("");
					}
					//18
					if(price.checkPrice18==true){
						total18=30000;
						$("#A").text(total18*1.2+" руб.");
					}else{
						total18=0;
						$("#A").text("");
					}
					//19
					if(price.checkPrice19==true){
						total19=34000;
						$("#PRICE19").text(total19*1.2+" руб.");
					}else{
						total19=0;
						$("#PRICE19").text("");
					}
					//20
					if(price.checkPrice20==true){
						total20=34000;
						$("#PRICE20").text(total20*1.2+" руб.");
					}else{
						total20=0;
						$("#PRICE20").text("");
					}
					//21
					if(price.checkPrice21==true){
						total21=Math.floor((Math.sqrt(areaJard*1))*4/50*4500);
						$("#PRICE21").text(Math.floor(total21*1.2)+" руб.");
					}else{
						total21=0;
						$("#PRICE21").text("");
					}
					//22
					if(price.checkPrice22==true){
						total22=10000;
						$("#PRICE22").text(total22*1.2+" руб.");
					}else{
						total22=0;
						$("#PRICE22").text("");
					}
					//23
					if(price.checkPrice23==true){
						total23=17000;
						$("#PRICE23").text(total23*1.2+" руб.");
					}else{
						total23=0;
						$("#PRICE23").text("");
					}
				}
			}
			if(hiddenWire=="no"){//Если возможности скрытой провдки нет
				if(sumFloor!=undefined && sumFloor>1){
					var basa = 8000*sumFloor;
					$("#priceBasa").text(basa*1.2+" руб.");
				}else{
					var basa = 8000;
					$("#priceBasa").text(basa*1.2+" руб.");
				}
				if(price.checkPrice1==true){
					var total1 = GL*1500;
					$("#price1").text(total1*1.2+" руб.");
				}else{
					total1=0;
					$("#price1").text("");
				}
				//2
				if(price.checkPrice2==true){
					price.checkPrice1=true;
					var total1 = GL*1500;
					$("#checkPrice1").css({
						"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
					});
					$("#price1").text(total1*1.2+" руб.");
					if(typeHome=="house"){
						if(sumFloor<=1){
							total2=(sumRoom*1+sumSU*1+3)*1700;
							$("#price2").text(total2*1.2+" руб.");
						}else{
							total2=(sumRoom*1+sumSU*1+5)*1700;
							$("#price2").text(total2*1.2+" руб.");
						}
					}else{
						total2=(sumRoom*1+sumSU*1+2)*1700;
						$("#price2").text(total2*1.2+" руб.");
					}
				}else{
					total2=0;
					$("#price2").text("");
				}
				//5
				if(price.checkPrice5==true){
					total5=3500+3500*sumRoom/10;
					$("#price5").text(total5*1.2+" руб.");
				}else{
					total5=0;
					$("#price5").text("");
				}
				//6
				if(price.checkPrice6==true){
					if(price.checkPrice2==true){
						if(typeHome=="house"){
							total6=1300*2+(sumRoom*1+4)*1300;
						}else{
							total6=1300+(sumRoom*1+1)*1300;	
						}
					}else{
						if(typeHome=="house"){
							total6=1300*2+(sumRoom*1+4)*1300+(sumRoom*1+4)*1700;
						}else{
							total6=1300+(sumRoom*1+1)*1300+(sumRoom*1+1)*1700;	
						}
					}
					$("#price6").text(total6*1.2+" руб.");
				}else{
					total6=0;
					$("#price6").text("");
				}
				//7
				if(price.checkPrice7==true){
					if(typeHome=="house"){
						total7=1700*2;
					}else{
						total7=1700;
					}
					$("#price7").text(total7*1.2+" руб.");
				}else{
					total7=0;
					$("#price7").text("");
				}
				//8
				if(price.checkPrice8==true){
					total8=(sumSU*1+1)*1300+10000+3000;
					$("#price8").text(total8*1.2+" руб.");
				}else{
					total8=0;
					$("#price8").text("");
				}
				//9
				if(price.checkPrice9==true){
					if(typeHome=="house"){
						total9=sumFloor*3000;
					}else{
						total9=3000;
					}
					$("#price9").text(total9*1.2+" руб.");
				}else{
					total9=0;
					$("#price9").text("");
				}
				//10
				if(price.checkPrice10==true){
					total10=sumRoom*1000;
					$("#price10").text(total10*1.2+" руб.");
				}else{
					total10=0;
					$("#price10").text("");
				}
				//11
				if(price.checkPrice11==true){
					total11=sumRoom*3800;
					$("#price11").text(total11*1.2+" руб.");
				}else{
					total11=0;
					$("#price11").text("");
				}//12
				if(price.checkPrice12==true){
					total12=sumRoom*8000;
					$("#price12").text(total12*1.2+" руб.");
				}else{
					total12=0;
					$("#price12").text("");
				}
				//13
				if(price.checkPrice13==true){
					total13=2000;
					$("#price13").text(total13*1.2+" руб.");
				}else{
					total13=0;
					$("#price13").text("");
				}
				//14
				if(price.checkPrice14==true){
					total14=4500;
					$("#price14").text(total14*1.2+" руб.");
				}else{
					total14=0;
					$("#price14").text("");
				}
				//15
				if(price.checkPrice15==true){
					if(price.checkPrice10==true){
						total15=0;
					}else{
						total15=1000;
					}
					$("#price15").text(total15*1.2+" руб.");
				}else{
					total15=0;
					$("#price15").text("");
				}
				//16
				if(price.checkPrice16==true){
					total16=1500;
					$("#price16").text(total16*1.2+" руб.");
				}else{
					total16=0;
					$("#price16").text("");
				}
				//17
				if(price.checkPrice17==true){
					total17=3000;
					$("#price17").text(total17*1.2+" руб.");
				}else{
					total17=0;
					$("#price17").text("");
				}
				//18
				if(price.checkPrice18==true){
					total18=6000;
					$("#A").text(total18*1.2+" руб.");
				}else{
					total18=0;
					$("#A").text("");
				}
				//19
				if(price.checkPrice19==true){
					total19=5000;
					$("#PRICE19").text(total19*1.2+" руб.");
				}else{
					total19=0;
					$("#PRICE19").text("");
				}
				//20
				if(price.checkPrice20==true){
					total20=8000;
					$("#PRICE20").text(total20*1.2+" руб.");
				}else{
					total20=0;
					$("#PRICE20").text("");
				}
				//21
				if(price.checkPrice21==true){
					total21=Math.floor((Math.sqrt(areaJard*1))*4/50*4500);
					$("#PRICE21").text(Math.floor(total21*1.2)+" руб.");
				}else{
					total21=0;
					$("#PRICE21").text("");
				}
				//22
				if(price.checkPrice22==true){
					total22=4500;
					$("#PRICE22").text(total22*1.2+" руб.");
				}else{
					total22=0;
					$("#PRICE22").text("");
				}
				//23
				if(price.checkPrice23==true){
					total23=5500;
					$("#PRICE23").text(total23*1.2+" руб.");
				}else{
					total23=0;
					$("#PRICE23").text("");
				}
			}
			//----------Изменяем значение цен и тотал---------
			var total = Math.floor((basa+total1+total2+total3+total4+total5+total6+total7+total8+total9+total10+total11+total12+total13+total14+total15+
					total16+total17+total18+total19+total20+total21+total22+total23)*1.2);
			console.log("Total = "+basa+"+"+total1+"="+total);
			$("#totalSpan").text(total+" рублей");
			//-----------------------------------
			//console.log(id+" = "+price[id]);
		});
			//Все клики по мобильной версии таблицы
			$(".tableCheckM, #wirenBoardM, #loxoneM").click(function(){//Все клики по таблицам
				//Активация и деактивация флажков
				var id = $(this).attr("id");
				if(priceM[id]==false){
					priceM[id]=true;
					$("#"+id).css({
						"box-shadow": "inset 0 0 100px 40px rgb(18, 21, 222)"
					});
				}else{
					priceM[id]=false;
					$("#"+id).css({
						"box-shadow": ""
					});
				}
				//Переключение типа оборудования
				if(id=="wirenBoardM"){
					typeHard = "wirenBoard";
					$(this).css({
						"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
					});
					$("#loxoneM").css({
						"box-shadow": ""
					});
				}else if(id=="loxoneM"){
					typeHard = "loxone";
					$(this).css({
						"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
					});
					$("#wirenBoardM").css({
						"box-shadow": ""
					});
				}
				//Расчеты------------------------
				//Общие
				if(typeHome=="house"){
					if(sumFloor<=1){
						var GL = sumRoom*2+sumSU*1+2*1;
					}else{
						var GL = sumRoom*2+sumSU*1+6*1;
					}
				}else{
					var GL = sumRoom*2+sumSU*1+2*1;
				}
				console.log("For all GL="+GL);
				if(hiddenWire=="yes"){
					total1=0;
					if(typeHard=="wirenBoard"){
						var basa = 15000
						$("#priceBasaM").text(basa*1.2+" руб.");
						//1
						if(priceM.checkPrice1M==true){
							var total1 = Math.ceil(GL/8)*2500+Math.ceil(GL/14)*2500;
							$("#price1M").text(total1*1.2+" руб.");
						}else{
							total1=0;
							$("#price1M").text("");
						}
						//2
						if(priceM.checkPrice2M==true){
							priceM.checkPrice1M=true;
							var total1 = Math.ceil(GL/8)*2500+Math.ceil(GL/14)*2500;
							$("#checkPrice1M").css({
								"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
							});
							$("#price1M").text(total1*1.2+" руб.");
							if(typeHome=="house"){
								if(sumFloor<=1){
									total2=(sumRoom*1+sumSU*1+3)*200;
									$("#price2M").text(total2*1.2+" руб.");
								}else{
									total2=(sumRoom*1+sumSU*1+5)*200;
									$("#price2M").text(total2*1.2+" руб.");
								}
							}else{
								total2=(sumRoom*1+sumSU*1+2)*200;
								$("#price2M").text(total2*1.2+" руб.");
							}
						}else{
							total2=0;
							$("#price2M").text("");
						}
						//3
						if(priceM.checkPrice3M==true){
							total3=Math.ceil((sumRoom*1+sumSU*1+2)/4)*2400;
							$("#price3M").text(total3*1.2+" руб.");
						}else{
							total3=0;
							$("#price3M").text("");
						}
						//4
						if(priceM.checkPrice4M==true){
							total4=Math.ceil((sumRoom*1+sumSU*1+2)*3/4)*2400;
							total3=0;
							$("#price3M").text(total3*1.2+" руб.");
							$("#price4M").text(total4*1.2+" руб.");
						}else{
							total4=0;
							$("#price4M").text("");
						}
						//5
						if(priceM.checkPrice5M==true){
							total5=2000;
							$("#price5M").text(total5*1.2+" руб.");
						}else{
							total5=0;
							$("#price5M").text("");
						}
						//6
						if(priceM.checkPrice6M==true){
							if(priceM.checkPrice2M==true){
								if(typeHome=="house"){
									total6=1000;
								}else{
									total6=400;	
								}
							}else{
								if(typeHome=="house"){
									total6=1000+sumRoom*200;
								}else{
									total6=400+sumRoom*200;	
								}
							}
							$("#price6M").text(total6*1.2+" руб.");
						}else{
							total6=0;
							$("#price6M").text("");
						}
						//7
						if(priceM.checkPrice7M==true){
							if(typeHome=="house"){
								total7=1000*2;
							}else{
								total7=1000;
							}
							$("#price7M").text(total7*1.2+" руб.");
						}else{
							total7=0;
							$("#price7M").text("");
						}
						//8
						if(priceM.checkPrice8M==true){
							total8=(sumSU*1+1)*700+10000+2500;
							$("#price8M").text(total8*1.2+" руб.");
						}else{
							total8=0;
							$("#price8M").text("");
						}
						//9
						if(priceM.checkPrice9M==true){
							if(typeHome=="house"){
								total9=sumFloor*3000;
							}else{
								total9=3000;
							}
							$("#price9M").text(total9*1.2+" руб.");
						}else{
							total9=0;
							$("#price9M").text("");
						}
						//10
						if(priceM.checkPrice10M==true){
							total10=sumRoom*1000;
							$("#price10M").text(total10*1.2+" руб.");
						}else{
							total10=0;
							$("#price10M").text("");
						}
						//11
						if(priceM.checkPrice11M==true){
							total11=Math.ceil(sumRoom/8)*2500+Math.ceil(sumRoom/14)*2500+sumRoom*1200;
							$("#price11M").text(total11*1.2+" руб.");
						}else{
							total11=0;
							$("#price11M").text("");
						}
						//12
						if(priceM.checkPrice12M==true){
							total12=sumRoom*8000;
							$("#price12M").text(total12*1.2+" руб.");
						}else{
							total12=0;
							$("#price12M").text("");
						}
						//13
						if(priceM.checkPrice13M==true){
							total13=0;
							$("#price13M").text(total13*1.2+" руб.");
						}else{
							total13=0;
							$("#price13M").text("");
						}
						//14
						if(priceM.checkPrice14M==true){
							total14=4500;
							$("#price14M").text(total14*1.2+" руб.");
						}else{
							total14=0;
							$("#price14M").text("");
						}
						//15
						if(priceM.checkPrice15M==true){
							if(priceM.checkPrice10M==true){
								total15=0;
							}else{
								total15=1000;
							}
							$("#price15M").text(total15*1.2+" руб.");
						}else{
							total15=0;
							$("#price15M").text("");
						}
						//16
						if(priceM.checkPrice16M==true){
							total16=2500;
							$("#price16M").text(total16*1.2+" руб.");
						}else{
							total16=0;
							$("#price16M").text("");
						}
						//17
						if(priceM.checkPrice17M==true){
							total17=3000;
							$("#price17M").text(total17*1.2+" руб.");
						}else{
							total17=0;
							$("#price17M").text("");
						}
						//18
						if(priceM.checkPrice18M==true){
							total18=6000;
							$("#AM").text(total18*1.2+" руб.");
						}else{
							total18=0;
							$("#AM").text("");
						}
						//19
						if(priceM.checkPrice19M==true){
							total19=2500;
							$("#PRICE19M").text(total19*1.2+" руб.");
						}else{
							total19=0;
							$("#PRICE19M").text("");
						}
						//20
						if(priceM.checkPrice20M==true){
							total20=8000;
							$("#PRICE20M").text(total20*1.2+" руб.");
						}else{
							total20=0;
							$("#PRICE20M").text("");
						}
						//21
						if(priceM.checkPrice21M==true){
							total21=Math.floor((Math.sqrt(areaJard*1))*4/50*4500);
							$("#PRICE21M").text(Math.floor(total21*1.2)+" руб.");
						}else{
							total21=0;
							$("#PRICE21M").text("");
						}
						//22
						if(priceM.checkPrice22M==true){
							total22=4500;
							$("#PRICE22M").text(total22*1.2+" руб.");
						}else{
							total22=0;
							$("#PRICE22M").text("");
						}
						//23
						if(priceM.checkPrice23M==true){
							total23=5500;
							$("#PRICE23M").text(total23*1.2+" руб.");
						}else{
							total23=0;
							$("#PRICE23M").text("");
						}
						
					}
					if(typeHard=="loxone"){
						var basa = 47000
						$("#priceBasaM").text(basa*1.2+" руб.");
						//1
						if(priceM.checkPrice1M==true){
							var total1 = Math.ceil((GL-8)/8)*36400;
							$("#price1M").text(total1*1.2+" руб.");
						}else{
							total1=0;
							$("#price1M").text("");
						}
						//2
						if(priceM.checkPrice2M==true){
							priceM.checkPrice1M=true;
							var total1 = Math.ceil((GL-8)/8)*36400;
							$("#checkPrice1M").css({
								"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
							});
							$("#price1M").text(total1*1.2+" руб.");
							if(typeHome=="house"){
								if(sumFloor<=1){
									total2=(sumRoom*1+sumSU*1+3)*200;
									$("#price2M").text(total2*1.2+" руб.");
								}else{
									total2=(sumRoom*1+sumSU*1+5)*200;
									$("#price2M").text(total2*1.2+" руб.");
								}
							}else{
								total2=(sumRoom*1+sumSU*1+2)*200;
								$("#price2M").text(total2*1.2+" руб.");
							}
						}else{
							total2=0;
							$("#price2M").text("");
						}
						//3
						if(priceM.checkPrice3M==true){
							total3=Math.ceil((sumRoom*1+sumSU*1+2)/4)*35000;
							$("#price3M").text(total3*1.2+" руб.");
						}else{
							total3=0;
							$("#price3M").text("");
						}
						//4
						if(priceM.checkPrice4M==true){
							total4=Math.ceil((sumRoom*1+sumSU*1+2)*3/4)*35000;
							total3=0;
							$("#price3M").text(total3*1.2+" руб.");
							$("#price4M").text(total4*1.2+" руб.");
						}else{
							total4=0;
							$("#price4M").text("");
						}
						//5
						if(priceM.checkPrice5M==true){
							total5=2000;
							$("#price5M").text(total5*1.2+" руб.");
						}else{
							total5=0;
							$("#price5M").text("");
						}
						//6
						if(priceM.checkPrice6M==true){
							if(priceM.checkPrice2M==true){
								if(typeHome=="house"){
									total6=1000;
								}else{
									total6=400;	
								}
							}else{
								if(typeHome=="house"){
									total6=1000+sumRoom*200;
								}else{
									total6=400+sumRoom*200;	
								}
							}
							$("#price6M").text(total6*1.2+" руб.");
						}else{
							total6=0;
							$("#price6M").text("");
						}
						//7
						if(priceM.checkPrice7M==true){
							if(typeHome=="house"){
								total7=1000*2;
							}else{
								total7=1000;
							}
							$("#price7M").text(total7*1.2+" руб.");
						}else{
							total7=0;
							$("#price7M").text("");
						}
						//8
						if(priceM.checkPrice8M==true){
							total8=(sumSU*1+1)*700+10000+34000;
							$("#price8M").text(total8*1.2+" руб.");
						}else{
							total8=0;
							$("#price8M").text("");
						}
						//9
						if(priceM.checkPrice9M==true){
							if(typeHome=="house"){
								total9=sumFloor*13000;
							}else{
								total9=13000;
							}
							$("#price9M").text(total9*1.2+" руб.");
						}else{
							total9=0;
							$("#price9M").text("");
						}
						//10
						if(priceM.checkPrice10M==true){
							total10=sumRoom*3000;
							$("#price10M").text(total10*1.2+" руб.");
						}else{
							total10=0;
							$("#price10M").text("");
						}
						//11
						if(priceM.checkPrice11M==true){
							total11=Math.ceil(sumRoom/8)*34000+sumRoom*1200;
							$("#price11M").text(total11*1.2+" руб.");
						}else{
							total11=0;
							$("#price11M").text("");
						}
						//12
						if(priceM.checkPrice12M==true){
							total12=sumRoom*40000;
							$("#price12M").text(total12*1.2+" руб.");
						}else{
							total12=0;
							$("#price12M").text("");
						}
						//13
						if(priceM.checkPrice13M==true){
							total13=0;
							$("#price13M").text(total13*1.2+" руб.");
						}else{
							total13=0;
							$("#price13M").text("");
						}
						//14
						if(priceM.checkPrice14M==true){
							total14=1000;
							$("#price14M").text(total14*1.2+" руб.");
						}else{
							total14=0;
							$("#price14M").text("");
						}
						//15
						if(priceM.checkPrice15M==true){
							total15=21000;
							$("#price15M").text(total15*1.2+" руб.");
						}else{
							total15=0;
							$("#price15M").text("");
						}
						//16
						if(priceM.checkPrice16M==true){
							total16=12000;
							$("#price16M").text(total16*1.2+" руб.");
						}else{
							total16=0;
							$("#price16M").text("");
						}
						//17
						if(priceM.checkPrice17M==true){
							total17=12000;
							$("#price17M").text(total17*1.2+" руб.");
						}else{
							total17=0;
							$("#price17M").text("");
						}
						//18
						if(priceM.checkPrice18M==true){
							total18=30000;
							$("#AM").text(total18*1.2+" руб.");
						}else{
							total18=0;
							$("#AM").text("");
						}
						//19
						if(priceM.checkPrice19M==true){
							total19=34000;
							$("#PRICE19M").text(total19*1.2+" руб.");
						}else{
							total19=0;
							$("#PRICE19M").text("");
						}
						//20
						if(priceM.checkPrice20M==true){
							total20=34000;
							$("#PRICE20M").text(total20*1.2+" руб.");
						}else{
							total20=0;
							$("#PRICE20M").text("");
						}
						//21
						if(priceM.checkPrice21M==true){
							total21=Math.floor((Math.sqrt(areaJard*1))*4/50*4500);
							$("#PRICE21M").text(Math.floor(total21*1.2)+" руб.");
						}else{
							total21=0;
							$("#PRICE21M").text("");
						}
						//22
						if(priceM.checkPrice22M==true){
							total22=10000;
							$("#PRICE22M").text(total22*1.2+" руб.");
						}else{
							total22=0;
							$("#PRICE22M").text("");
						}
						//23
						if(priceM.checkPrice23M==true){
							total23=17000;
							$("#PRICE23M").text(total23*1.2+" руб.");
						}else{
							total23=0;
							$("#PRICE23M").text("");
						}
					}
				}
				if(hiddenWire=="no"){//Если возможности скрытой провдки нет
					if(sumFloor!=undefined && sumFloor>1){
						var basa = 8000*sumFloor;
						$("#priceBasaM").text(basa*1.2+" руб.");
					}else{
						var basa = 8000;
						$("#priceBasaM").text(basa*1.2+" руб.");
					}
					if(priceM.checkPrice1M==true){
						var total1 = GL*1500;
						$("#price1M").text(total1*1.2+" руб.");
					}else{
						total1=0;
						$("#price1M").text("");
					}
					//2
					if(priceM.checkPrice2M==true){
						priceM.checkPrice1M=true;
						var total1 = GL*1500;
						$("#checkPrice1M").css({
							"box-shadow": "inset 0 0 10px 40px rgb(18, 21, 222)"
						});
						$("#price1M").text(total1*1.2+" руб.");
						if(typeHome=="house"){
							if(sumFloor<=1){
								total2=(sumRoom*1+sumSU*1+3)*1700;
								$("#price2M").text(total2*1.2+" руб.");
							}else{
								total2=(sumRoom*1+sumSU*1+5)*1700;
								$("#price2M").text(total2*1.2+" руб.");
							}
						}else{
							total2=(sumRoom*1+sumSU*1+2)*1700;
							$("#price2M").text(total2*1.2+" руб.");
						}
					}else{
						total2=0;
						$("#price2M").text("");
					}
					//5
					if(priceM.checkPrice5M==true){
						total5=3500+3500*sumRoom/10;
						$("#price5M").text(total5*1.2+" руб.");
					}else{
						total5=0;
						$("#price5M").text("");
					}
					//6
					if(priceM.checkPrice6M==true){
						if(priceM.checkPrice2M==true){
							if(typeHome=="house"){
								total6=1300*2+(sumRoom*1+4)*1300;
							}else{
								total6=1300+(sumRoom*1+1)*1300;	
							}
						}else{
							if(typeHome=="house"){
								total6=1300*2+(sumRoom*1+4)*1300+(sumRoom*1+4)*1700;
							}else{
								total6=1300+(sumRoom*1+1)*1300+(sumRoom*1+1)*1700;	
							}
						}
						$("#price6M").text(total6*1.2+" руб.");
					}else{
						total6=0;
						$("#price6M").text("");
					}
					//7
					if(priceM.checkPrice7M==true){
						if(typeHome=="house"){
							total7=1700*2;
						}else{
							total7=1700;
						}
						$("#price7M").text(total7*1.2+" руб.");
					}else{
						total7=0;
						$("#price7M").text("");
					}
					//8
					if(priceM.checkPrice8M==true){
						total8=(sumSU*1+1)*1300+10000+3000;
						$("#price8M").text(total8*1.2+" руб.");
					}else{
						total8=0;
						$("#price8M").text("");
					}
					//9
					if(priceM.checkPrice9M==true){
						if(typeHome=="house"){
							total9=sumFloor*3000;
						}else{
							total9=3000;
						}
						$("#price9M").text(total9*1.2+" руб.");
					}else{
						total9=0;
						$("#price9M").text("");
					}
					//10
					if(priceM.checkPrice10M==true){
						total10=sumRoom*1000;
						$("#price10M").text(total10*1.2+" руб.");
					}else{
						total10=0;
						$("#price10M").text("");
					}
					//11
					if(priceM.checkPrice11M==true){
						total11=sumRoom*3800;
						$("#price11M").text(total11*1.2+" руб.");
					}else{
						total11=0;
						$("#price11M").text("");
					}//12
					if(priceM.checkPrice12M==true){
						total12=sumRoom*8000;
						$("#price12M").text(total12*1.2+" руб.");
					}else{
						total12=0;
						$("#price12M").text("");
					}
					//13
					if(priceM.checkPrice13M==true){
						total13=2000;
						$("#price13M").text(total13*1.2+" руб.");
					}else{
						total13=0;
						$("#price13M").text("");
					}
					//14
					if(priceM.checkPrice14M==true){
						total14=4500;
						$("#price14M").text(total14*1.2+" руб.");
					}else{
						total14=0;
						$("#price14M").text("");
					}
					//15
					if(priceM.checkPrice15M==true){
						if(priceM.checkPrice10M==true){
							total15=0;
						}else{
							total15=1000;
						}
						$("#price15M").text(total15*1.2+" руб.");
					}else{
						total15=0;
						$("#price15M").text("");
					}
					//16
					if(priceM.checkPrice16M==true){
						total16=1500;
						$("#price16M").text(total16*1.2+" руб.");
					}else{
						total16=0;
						$("#price16M").text("");
					}
					//17
					if(priceM.checkPrice17M==true){
						total17=3000;
						$("#price17M").text(total17*1.2+" руб.");
					}else{
						total17=0;
						$("#price17M").text("");
					}
					//18
					if(priceM.checkPrice18M==true){
						total18=6000;
						$("#AM").text(total18*1.2+" руб.");
					}else{
						total18=0;
						$("#AM").text("");
					}
					//19
					if(priceM.checkPrice19M==true){
						total19=5000;
						$("#PRICE19M").text(total19*1.2+" руб.");
					}else{
						total19=0;
						$("#PRICE19M").text("");
					}
					//20
					if(priceM.checkPrice20M==true){
						total20=8000;
						$("#PRICE20M").text(total20*1.2+" руб.");
					}else{
						total20=0;
						$("#PRICE20M").text("");
					}
					//21
					if(priceM.checkPrice21M==true){
						total21=Math.floor((Math.sqrt(areaJard*1))*4/50*4500);
						$("#PRICE21M").text(Math.floor(total21*1.2)+" руб.");
					}else{
						total21=0;
						$("#PRICE21M").text("");
					}
					//22
					if(priceM.checkPrice22M==true){
						total22=4500;
						$("#PRICE22M").text(total22*1.2+" руб.");
					}else{
						total22=0;
						$("#PRICE22M").text("");
					}
					//23
					if(priceM.checkPrice23M==true){
						total23=5500;
						$("#PRICE23M").text(total23*1.2+" руб.");
					}else{
						total23=0;
						$("#PRICE23M").text("");
					}
				}
			//----------Изменяем значение цен и тотал---------
			var total = Math.floor((basa+total1+total2+total3+total4+total5+total6+total7+total8+total9+total10+total11+total12+total13+total14+total15+
					total16+total17+total18+total19+total20+total21+total22+total23)*1.2);
			console.log("Total = "+basa+"+"+total1+"="+total);
			$("#totalSpan").text(total+" рублей");
			//-----------------------------------
			//console.log(id+" = "+price[id]);
		});
		function funcBasa(){
			//Расчет базового пакета
			if(hiddenWire=="no"){//Если возможности скрытой провдки нет
				if(sumFloor!=undefined && sumFloor>1){
					var basa = 8000*sumFloor;
					var total = basa*1.2
					$("#priceBasa").text(total+" руб.");
					$("#priceBasaM").text(total+" руб.");
					$("#totalSpan").text(total+" руб.");
				}else{
					var basa = 8000;
					var total = basa*1.2
					$("#priceBasa").text(total+" руб.");
					$("#priceBasaM").text(total+" руб.");
					$("#totalSpan").text(total+" руб.");
				}
			}else{
				var basa = 15000
				var total = basa*1.2
				$("#priceBasa").text(total+" руб.");
				$("#priceBasaM").text(total+" руб.");
				$("#totalSpan").text(total+" руб.");
			}
		}
		//----------------------------------------------------------------
		$("html").click(function(){
			console.log("typeHome = "+typeHome+" sumSU = "+sumSU+" sumRoom = "+sumRoom+" areaHome = "+areaHome+" hiddenWire = "+hiddenWire+" sumFloor = "+sumFloor
					+" areaJard = "+areaJard);
		})
	}
}
function dataSendId(data){
	var data;
	console.log("Function dataSendId starting->->->");
	console.log(data);
	$.ajax({
		url:'questServer.php',
		type:'GET',
		data,
		dataType:"text",
		success:function(data){
			console.log("Data was send");
			console.log("Echo = "+data);
			newIdUser = parser("newIdUser=",data);
			newId = parser("newId=",data);
			console.log("New id User = "+newIdUser+" New Id test = "+newId);
			$.cookie('idUser',newIdUser,{ expires: 60 });
			$.cookie('idTest',newId);
		}
		});

}
function dataSend(data){
	var data;
	console.log("Function dataSend starting->->->");
	console.log(data);
	$.ajax({
		url:'questServer.php',
		type:'GET',
		data,
		dataType:"text",
		success:function(data){
			console.log("Data was send");
			console.log("Echo = "+data);
		}
		});

}
function parser(str,text){//Аргументы 1. Как называется переменная+знак равно 2.Строка в которой будет эта переменная а за ней ;
	var str; var value=""; var text;
	if(text.indexOf(str)!=(-1)){
		var pos = (text.indexOf(str))+str.length;
		//console.log(text.indexOf(str)+"+"+str.length);
		while(true){
			var char = text.substring(pos,pos+1);
			//console.log("str="+str+" text="+text+" char="+char+" pos="+pos);
			if(char==";"){
				break;
			}
			value = value+char;
			//console.log("Parser value = "+value);
			pos=pos+1;
		}
		return value;
	}else{
		return "Parser error";
	}
}






