<?php 
$url = explode('/',strtolower(substr($_SERVER['REQUEST_URI'], 1)));
switch($url[0]) {
    case 'prices': {
        include 'prices.html';
        break;
    }
}
?>