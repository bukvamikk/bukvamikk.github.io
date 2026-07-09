$(document).ready(function () {
    let increaseButton = $('.increase');
    let decreaseButton = $('.decrease');


    increaseButton.click((e) => {
        let diceType = $(e.currentTarget).parents().data('dice');
        let dicePieces = Number($(`[data-counter="${diceType}"]`).html());

        $(`[data-counter="${diceType}"]`).html(dicePieces + 1)
    });

    decreaseButton.click((e) => {
        let diceType = $(e.currentTarget).parents().data('dice');
        let dicePieces = Number($(`[data-counter="${diceType}"]`).html());

        $(`[data-counter="${diceType}"]`).html((dicePieces - 1))

        if (dicePieces - 1 === 0) {
            $(`.rolls.${diceType}`).html('');
            $(`.dice-sum.${diceType}`).html('');

        }
        if (dicePieces - 1 === -1) {
            $(`[data-counter="${diceType}"]`).html('0');
            dicePieces = 0;
        }

    });

    $('.rollMe').click(() => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        $('.rolls').html();
        let date = new Date().toLocaleTimeString();

        let d4Pieces = ($(`[data-counter="d4"]`).html());
        let allTheRollsD4 = [];
        for (let i = 1; i <= d4Pieces; i++) {
            let roll = Math.floor(Math.random() * 4) + 1;
            allTheRollsD4.push(roll);
            $('.rolls.d4').html(allTheRollsD4.join(", "));
            $('.dice-sum.d4').html(allTheRollsD4.reduce(reducer));

        }

        let d6Pieces = ($(`[data-counter="d6"]`).html());
        let allTheRollsD6 = [];
        for (let i = 1; i <= d6Pieces; i++) {
            let roll = Math.floor(Math.random() * 6) + 1;
            allTheRollsD6.push(roll);
            $('.rolls.d6').html(allTheRollsD6.join(", "));
            $('.dice-sum.d6').html(allTheRollsD6.reduce(reducer));
        }


        let d8Pieces = ($(`[data-counter="d8"]`).html());
        let allTheRollsD8 = [];
        for (let i = 1; i <= d8Pieces; i++) {
            let roll = Math.floor(Math.random() * 8) + 1;
            allTheRollsD8.push(roll);
            $('.rolls.d8').html(allTheRollsD8.join(", "));
            $('.dice-sum.d8').html(allTheRollsD8.reduce(reducer));
        }

        let d10Pieces = ($(`[data-counter="d10"]`).html());
        let allTheRollsD10 = [];
        for (let i = 1; i <= d10Pieces; i++) {
            let roll = Math.floor(Math.random() * 10) + 1;
            allTheRollsD10.push(roll);
            $('.rolls.d10').html(allTheRollsD10.join(", "));
            $('.dice-sum.d10').html(allTheRollsD10.reduce(reducer));
        }

        let d12Pieces = ($(`[data-counter="d12"]`).html());
        let allTheRollsD12 = [];
        for (let i = 1; i <= d12Pieces; i++) {
            let roll = Math.floor(Math.random() * 12) + 1;
            allTheRollsD12.push(roll);
            $('.rolls.d12').html(allTheRollsD12.join(", "));
            $('.dice-sum.d12').html(allTheRollsD12.reduce(reducer));
        }


        let d20Pieces = ($(`[data-counter="d20"]`).html());
        let allTheRollsD20 = [];
        for (let i = 1; i <= d20Pieces; i++) {
            let roll = Math.floor(Math.random() * 20) + 1;
            allTheRollsD20.push(roll);
            $('.rolls.d20').html(allTheRollsD20.join(", "));
            $('.dice-sum.d20').html(allTheRollsD20.reduce(reducer));
        }

        if (allTheRollsD4.length > 0) $('.history').prepend(' | D4: ', allTheRollsD4.join(", "));
        if (allTheRollsD6.length > 0) $('.history').prepend(' | D6: ', allTheRollsD6.join(", "));
        if (allTheRollsD8.length > 0) $('.history').prepend(' | D8: ', allTheRollsD8.join(", "));
        if (allTheRollsD10.length > 0) $('.history').prepend(' | D10: ', allTheRollsD10.join(", "));
        if (allTheRollsD12.length > 0) $('.history').prepend(' | D12: ', allTheRollsD12.join(", "));
        if (allTheRollsD20.length > 0) $('.history').prepend(' | D20: ', allTheRollsD20.join(", "));
        $('.history').prepend('<br> Throwing at: ', date, ' ');
    })
});