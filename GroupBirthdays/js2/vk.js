/**
 * Created by egor on 13.10.15.
 */
var user_ids = [];

VK.init(
    function () {
    }
);

function getBirthdays() {

    var code = 'return API.users.search({"group_id":"37239804","birth_day":"3","birth_month":"10","v": "5.37"});';

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
            alert("error"); // в случае ошибки выведем её
        }
    });
}