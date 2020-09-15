<?php
//-------------------Скрипт добавления данных в талицы в базе данных MySQL-------------------
//-------------------Данные приходят по HTTP методом GET------------------------------------
date_default_timezone_set("Asia/Yekaterinburg"); //Установка часового пояса для функции даты
//-----------Получаем данные конфигурации------------------------------------------
$confXML = simplexml_load_file("conf.xml")or exit("Failed to open conf.xml");
$userName = $confXML->userName;//Логин для подключения к MySQL
$password = $confXML->password;//Пароль для подключения к MySQL
$adres = $confXML->adres;//Адрес для подключения к MySQL
$dbName = $confXML->dbName;//Имя азы данных
//Подклчаемся к серверу к базе данных my_bd и получаем его дискриптор в переменную link
$link=mysqli_connect($adres,$userName,$password,$dbName);
//Если подключение установлено,то... если нет, закрываем его.
if($link){
    mysqli_query($link,"SET NAMES utf8");
    //echo "Соединение с сервером установлено";
}else{
    mysqli_close($link);
    exit ("MySQL server is not available");
}
//----------------------Обрабатывем POST ------------------------
//Получаем заявку на звонок
if(isset($_POST["name"])){
    $name=$_POST["name"];
    $phone=$_POST["phone"];
    $date=date("Y")."-".date("m")."-".date("d")." ".date("H").":".date("i").":".date("s");
    $sql="INSERT INTO requests( date, phone, name) VALUES ('".$date."','".$phone."','".$name."');";//Записываем в базу новую запись
    $bool1 = $result=mysqli_query($link,$sql);
    $bool2 = mail("nevraev@mail.ru","Заявка с сайта","Имя: ".$name." Телефон: ".$phone);
    if($bool1&&$bool2){
        echo "INSERT IS OK!";
    }else{
        echo "INSERT IS ERROR!";
    }
    //Отпровляем sms
    @file_get_contents("http://sms.ru/sms/send?api_id=9D6156B1-A2CD-8DD9-E4EB-A38EDA2E6DCD&to=79048110421&msg=There_is_REQUEST_at_insycompany.ru&json=1");
}

?>