$(document).ready(function() {

    // ----------- app state

    var state = {
        target: null,
        crystalValue: [],
        current: 0,
        wins: 0,
        losses: 0,
    }

    // ----------- display



    // ----------- the game

    $(".crystal").click(function(e) {

        console.log($(this).attr("value"));
        state.current += parseInt($(this).attr("value"));
        console.log("state.current: " + state.current)
        $("#score").text(state.current);

        if (state.current === state.target) {
            alert("You win!");
            state.wins++;
            init();
        } else if (state.current > state.target) {
            alert("You lose.");
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
            console.log(state.crystalValue)
        }

        console.log("wins: " + state.wins);
        console.log("losses: " + state.losses);
    };

    // --------- initialize application

    init();

});