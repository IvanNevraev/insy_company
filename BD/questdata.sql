-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июл 07 2019 г., 15:20
-- Версия сервера: 5.7.24
-- Версия PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `smarthome74`
--

-- --------------------------------------------------------

--
-- Структура таблицы `questdata`
--

CREATE TABLE `questdata` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `date` date NOT NULL,
  `typeHome` text,
  `sumSU` text,
  `sumRoom` text,
  `areaHome` text,
  `hiddenWire` text,
  `sumFloor` text,
  `areaJard` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `questdata`
--

INSERT INTO `questdata` (`id`, `idUser`, `date`, `typeHome`, `sumSU`, `sumRoom`, `areaHome`, `hiddenWire`, `sumFloor`, `areaJard`) VALUES
(15, 5, '2019-05-07', 'house', '2', '8', '234', 'no', '4', '567'),
(16, 6, '2019-07-07', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(17, 7, '2019-07-07', 'house', '3', '43', '456', 'yes', '456', '34'),
(18, 7, '2019-07-07', 'appart', '223', '332', NULL, NULL, NULL, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `questdata`
--
ALTER TABLE `questdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `questdata`
--
ALTER TABLE `questdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
