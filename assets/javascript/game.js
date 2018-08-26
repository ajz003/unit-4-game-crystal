$(document).ready(function() {

    // ----------- app state

    var state = {
        target: null,
        crystalValue: [],
        current: 0,
        wins: 0,
        losses: 0,
    }

    // ----------- the game

    $(".crystal").click(function(e) {

        state.current += parseInt($(this).attr("value"));
        $("#score").text(state.current);

        if (state.current === state.target) {
            $("#loser").text("");
            $("#winner").text("You win!!!");
            state.wins++;
            init();
        } else if (state.current > state.target) {
            $("#winner").text("");
            $("#loser").text("You lose.");
            state.losses++;
            init();
        }

    });

    // ----------- functions

    function init() {

        $("#wins").text(state.wins);
        $("#losses").text(state.losses);

        state.current = 0;
        state.crystalValue = [];

        $("#score").text(state.current);

        state.target = (Math.floor(Math.random() * 102)) + 19;

        $("#target").text(state.target);

        for (var i = 0; i < 4; i++) {
            state.crystalValue.push((Math.floor(Math.random() * 12)) +
                1);
            $("#crystal-" + (i + 1)).attr("value", state.crystalValue[i])

        }
    };

    // --------- initialize application

    init();

});