/**
 * Created by egor on 13.10.15.
 */
var user_ids = [];

function getBirthdays() {
    //var code =  'return API.users.get({"user_ids":API.friends.getAppUsers({"v": "5.37"}), "fields": "photo_50", "v": "5.37"});'; // вернуть массив members

    var code = 'return API.users.search({"group_id":37239804,"birth_day":3,birth_month:10})';
    VK.api("execute", {code: code}, function (data) {
        if (data.response) {
            if (data.response.length > 0) {
                for (var i = 0; i < data.response.length; i++) {
                    $('#errorK').append(''
                        + '<li class="c-list">'
                        + '<div class="contact-pic">'
                        + '<p>data.response[i].id</p>'
                        + '</div>'
                        + '<div class="contact-details">'
                        + '<div class="pull-left">'
                        + '<strong>' + data.response[i].first_name + ' ' + data.response[i].last_name + '</strong>'
                        + '<small></small>'
                        + '</div>'
                        + '</div>'
                        + '<div class="clearfix"></div>'
                        + '</div>'
                        + '</li>');
                }
                alert(data.response.length);
            }
        } else {
            alert(data); // в случае ошибки выведем её
        }
    });
}

function dd() {
}