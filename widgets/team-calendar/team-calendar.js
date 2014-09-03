widget = {
    //runs when we receive data from the job
    onData: function (el, data) {
        $(".widget-container").css("height", "100%");

        if (!$.data(el, "team-calendar-initialized")) {
            var updateTime = function () {
                var template = _.template($('.template-header', el).html());

                var headerData = {
                    time: moment().format('HH:mm'),
                    week: moment().format('WW')
                };

                for (i = 1; i < 6; i++) {
                    var day = moment().day(i);
//                    console.log(day.lang(data.lang).format('L'));
                }

                $('.header', el).html(template(headerData));
            };
            setInterval(updateTime, (10 * 1000));
            updateTime();
            $.data(el, "team-calendar-initialized", true);
        }

        var template = _.template($('.template-calendar', el).html());
        $('.calendar', el).html(template(data));
    },
    onError: function (el, data) {
        var $error = $('<div class="container"><img src="images/warning.png"></div>');
        $error.append($('<div class="error_message content"></span>').text(data.error));
        $('.error', el).empty().append($error);
    }
};
