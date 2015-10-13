/**
 * Created by egor on 13.10.15.
 */
var user_ids = [];
getBirthdays();
function getBirthdays() {
    //var code =  'return API.users.get({"user_ids":API.friends.getAppUsers({"v": "5.37"}), "fields": "photo_50", "v": "5.37"});'; // вернуть массив members

    var code = 'return API.users.search({"group_id":37239804,"birth_day":3,birth_month:10},"v": "5.37"})';

    VK.api("execute", {code: code}, function (r) {
        if (r.response) {
            if (r.response.length > 0) {
                $('#result').html('');
                for (var i = 0; i < r.response.length; i++) {
                    $('#result').append(''
                        + '<li class="c-list">'
                        + '<div class="contact-pic">'
                        + '<p>data.response[i].id</p>'
                        + '</div>'
                        + '<div class="contact-details">'
                        + '<div class="pull-left">'
                        + '<strong>' + r.response[i].first_name + ' ' + r.response[i].last_name + '</strong>'
                        + '<small></small>'
                        + '</div>'
                        + '</div>'
                        + '<div class="clearfix"></div>'
                        + '</div>'
                        + '</li>');
                }
                alert(r.response.length);
            }
        } else {
            alert(r.response.$items); // в случае ошибки выведем её
        }
    });
}