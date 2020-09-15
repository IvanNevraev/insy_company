<?php
//-------------------Скрипт добавления данных в талицы в базе данных MySQL-------------------
//-------------------Данные приходят по HTTP методом GET------------------------------------
date_default_timezone_set("Asia/Yekaterinburg"); //Установка часового пояса для функции даты
//-----------Получаем данные конфигурации------------------------------------------
$confXML = simplexml_load_file("conf.xml")or exit("Неудалось открыть файл conf.xml");
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
    exit ("Сервер не доступен");
}
//------------------Получаем данные по GET----------------------
//Определям Id пользователя и записи
if(isset($_GET["idUser"])){
    $idUser=$_GET["idUser"];
    if($idUser=="NONE"){//Если пользователь не разу не проходил опрос
        $sql="SELECT MAX(idUser) FROM questdata;";//Получаем последний известный userID
        if($result=mysqli_query($link,$sql)){
            $arr=mysqli_fetch_assoc($result);
            $newIdUser=($arr["MAX(idUser)"])+1;//Последний известный userId + 1
        }
        $sql="SELECT MAX(id) FROM questdata;";//Получаем последний известный ID
        if($result=mysqli_query($link,$sql)){
            $arr=mysqli_fetch_assoc($result);
            $newId=($arr["MAX(id)"])+1;//Последний известный Id + 1
        }
        echo "newIdUser=".$newIdUser.";newId=".$newId.";";
        $sql="INSERT INTO questdata (idUser, date) VALUES (".$newIdUser.",'".date("Y-m-d")."');";//Записываем в базу новый idUser
        $result=mysqli_query($link,$sql);
    }else{//Если пользователь проходил опрос ранее
        $sql="SELECT MAX(id) FROM questdata";//Получаем id последней записи
        if($result=mysqli_query($link,$sql)){
            $arr=mysqli_fetch_assoc($result);
            $newId=($arr["MAX(id)"])+1;//Последний известный id + 1
            echo "newIdUser=".$idUser.";newId=".$newId.";";
        }
        $sql="INSERT INTO questdata (idUser, date) VALUES (".$idUser.",'".date("Y-m-d")."');";//Записываем в базу новую запись
        $result=mysqli_query($link,$sql);
    }
}
//Получаем тип дома
if(isset($_GET["typeHome"])){
    $typeHome=$_GET["typeHome"];
    $idTest=$_GET["idTest"];
    $sql="UPDATE questdata SET typeHome = '".$typeHome."' WHERE id = ".$idTest.";";//Записываем в базу новую запись
    if($result=mysqli_query($link,$sql)){
        echo "UPDATE OK!";
    }else{
        echo "UPDATE IS ERROR!";
    }
}
//Получаем количество санузлов
if(isset($_GET["sumSU"])){
    $sumSU=$_GET["sumSU"];
    $idTest=$_GET["idTest"];
    $sql="UPDATE questdata SET sumSU = '".$sumSU."' WHERE id = ".$idTest.";";//Записываем в базу новую запись
    if($result=mysqli_query($link,$sql)){
        echo "UPDATE OK!";
    }else{
        echo "UPDATE IS ERROR!";
    }
}
//Получаем количество комнат
if(isset($_GET["sumRoom"])){
    $sumRoom=$_GET["sumRoom"];
    $idTest=$_GET["idTest"];
    $sql="UPDATE questdata SET sumRoom = '".$sumRoom."' WHERE id = ".$idTest.";";//Записываем в базу новую запись
    if($result=mysqli_query($link,$sql)){
        echo "UPDATE OK!";
    }else{
        echo "UPDATE IS ERROR!";
    }
}
//Получаем площадь квартиры
if(isset($_GET["areaHome"])){
    $areaHome=$_GET["areaHome"];
    $idTest=$_GET["idTest"];
    $sql="UPDATE questdata SET areaHome = '".$areaHome."' WHERE id = ".$idTest.";";//Записываем в базу новую запись
    if($result=mysqli_query($link,$sql)){
        echo "UPDATE OK!";
    }else{
        echo "UPDATE IS ERROR!";
    }
}
//Получаем данные о скрытой проводке
if(isset($_GET["hiddenWire"])){
    $hiddenWire=$_GET["hiddenWire"];
    $idTest=$_GET["idTest"];
    $sql="UPDATE questdata SET hiddenWire = '".$hiddenWire."' WHERE id = ".$idTest.";";//Записываем в базу новую запись
    if($result=mysqli_query($link,$sql)){
        echo "UPDATE OK!";
    }else{
        echo "UPDATE IS ERROR!";
    }
}
//Получаем количество этажей
if(isset($_GET["sumFloor"])){
    $sumFloor=$_GET["sumFloor"];
    $idTest=$_GET["idTest"];
    $sql="UPDATE questdata SET sumFloor = '".$sumFloor."' WHERE id = ".$idTest.";";//Записываем в базу новую запись
    if($result=mysqli_query($link,$sql)){
        echo "UPDATE OK!";
    }else{
        echo "UPDATE IS ERROR!";
    }
}
//Получаем площадь придомовой территории
if(isset($_GET["areaJard"])){
    $areaJard=$_GET["areaJard"];
    $idTest=$_GET["idTest"];
    $sql="UPDATE questdata SET areaJard = '".$areaJard."' WHERE id = ".$idTest.";";//Записываем в базу новую запись
    if($result=mysqli_query($link,$sql)){
        echo "UPDATE OK!";
    }else{
        echo "UPDATE IS ERROR!";
    }
}
unset($_GET["idUser"]);
unset($_GET["typeHome"]);
unset($_GET["sumSU"]);
unset($_GET["sumRoom"]);
unset($_GET["areaHome"]);
unset($_GET["hiddenWire"]);
unset($_GET["sumFloor"]);
unset($_GET["areaJard"]);






?>