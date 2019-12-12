let nicks = [];
$('.addNick__button').click(function () {
    nicks.push($('.addNick__input').val());
    if ($('.addNick__input').val() != "") {
        $('.nicks__list').append("<li class='nicks__nick " + "'>" + nicks[nicks.length - 1] + "</li>");
        $('.addNick__input').val("");
    }
});

let teams = [];
$('.addTeam__button').click(function () {
    teams.push("Team " + (teams.length + 1));
    $('.randomTeam').append("<ul class='randomTeam__team team" + teams.length + "'><input class='randomTeam__title' value='" + teams[teams.length - 1] + "'></ul>");

});
let currentTeam = 1;
$('.addNick__button-random').click(function () {
    $.each($("input[name='friend__box-checkbox']:checked"), function () {
        nicks.push($(this).val());
    });
    $("input[name='friend__box-checkbox']:checked").prop("checked", false);
    let nicksLength = nicks.length;
    for (let i = 0; i < nicksLength; i++) {
        let randomNick = Math.floor(Math.random() * nicks.length);

        if (currentTeam > teams.length) {
            currentTeam = 1;
        }
        console.log(currentTeam);
        let classul = ".team" + currentTeam;
        $(classul).append("<li>" + nicks[randomNick] + "</li>");
        nicks.splice(randomNick, 1);
        currentTeam++;
    }
    $('.nicks__list').html('');
});
