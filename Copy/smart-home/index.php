<?php 
$url = explode('/',strtolower(substr($_SERVER['REQUEST_URI'], 1)));
switch($url[0]) {
    case 'smart-home': {
        include 'smart-home.html';
        break;
    }
}
?>