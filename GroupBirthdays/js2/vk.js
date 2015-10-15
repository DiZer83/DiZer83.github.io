/**
 * Created by egor on 13.10.15.
 */
VK.init(
    function () {
    }
);

function autosize(width) {
    //Проверяем элемент body на наличие.
    if (!document.getElementById('body')) {
        alert('error');
        return;
    }
    // Успешно ли подключен ВК скрипт
    if (typeof VK.callMethod != 'undefined') {
        /*
         Вызываем функцию vk js api для управления окном.
         VK.callMethod('функция', параметры)
         В данном случае у нас - VK.callMethod('изменение_размеров_окна', ширина, высота);
         Так же добавляем еще 60 пикселей что бы было небольшое расстояние.
         */
        VK.callMethod('resizeWindow', width, document.getElementById('body').clientHeight + 60);
    } else {
        alert('error #2');
    }
}

$(document).ready(function () {
        //Вызываем функцию регулировки высоты каждые пол секунды.
        setInterval('autosize(607)', 500);
    }
);

function getBirthdays() {
    var date = $("#datepicker").datepicker('getDate');
    var d = date.getDate();         // Day of the month
    var m = date.getMonth() + 1;        // Month with a zero index

    var code = 'return API.users.search({"group_id":"37239804","birth_day":' + d + ',"birth_month":' + m +'});';

    VK.api("execute", {code: code}, function (data) {
        if (data.response) {
            if (data.response.length > 0) {
                var text = "";
                $('#res').html('');
                $('#res').append(d + '.' + m + ' ' + 'Именинников всего: ' + (data.response.length - 1));
                for (var i = 1; i < data.response.length; i++) {
                    text = text + '[id' + data.response[i].uid + '|' + data.response[i].first_name + ' ' + data.response[i].last_name + '] ';
                }
                $('#result').val(text);
            }
        } else {
            alert("error"); // в случае ошибки выведем её
        }
    });
}