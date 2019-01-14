<?php
if ((isset($_POST['name']) && $_POST['name'] != "")) { //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'example@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = ''.$_POST['subject'].'';
    $message = '
    <html>
        <head>
            <title>' . $subject . '</title>
        </head>
        <body>
            <p>Имя: ' . $_POST['name'] . '</p>
            <p>Телефон: ' . $_POST['phone'] . '</p>                        
            <p>Почта: ' . $_POST['email'] . '</p>                        
        </body>
    </html>'; 
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <".$to.">\r\n"; //Наименование и почта отправителя
    if (mail($to, $subject, $message, $headers)) {
        header('location: success.html');
    } else {
        echo 'Ошибка отправки. Пожалуйста повторите еще раз!';
    }
}?>
