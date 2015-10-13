/**
 * Created by egor on 13.10.15.
 */
var user_ids = [];

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
        VK.callMethod('resizeWindow', 840, document.getElementById('body').clientHeight + 60);
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

    var code = 'return API.users.search({"group_id":"37239804","birth_day":"3","birth_month":"10"});';

    VK.api("execute", {code: code}, function (r) {
        if (r.response) {
            if (r.response.length > 0) {
                $('#result').html('');
                $('#result').append('Именинников всего: ' + r.response.length);
                for (var i = 1; i <= r.response.length; i++) {
                    $('#result').append(''
                        + '<li class="c-list">'
                        + '<strong>@'+ r.response[i].id +' (' + r.response[i].first_name + ' ' + r.response[i].last_name +')'+ '</strong>'
                        + '<br>'
                        + '</li>');
                }

            }
        } else {
            alert("error"); // в случае ошибки выведем её
        }
    });
}