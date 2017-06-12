$(document).ready(function () {
    var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];

    planets = planets.reverse();

    for (i = 0; i < planets.length; i++) {
        $('#planetSelect').append('<option value=' + planets[i][1] + '>' + planets[i][0] + '</option>');
    }




    //     // 1. Assign the value property of the userWeight input element to a variable called userWeight.
    //     // Hint: research and use the `.val` function.
    $('button').on('click', function () {
        var userWeight = $('input[name=yourWeight]').val();

        //     // 2. Assign the selected option text of the planets select element to a variable called planetName.
        //     // Hint: use Google to search "how to grab the text of a selected option using jQuery" 

        var planetName = $('#planetSelect :selected').text();

        //     // 3. Assign the selected option value of the planets select element to a variable called planetMultiplier.
        //     // Hint: use Google to search "how to grab the value of a selected option using jQuery"
        var planetMultiplier = $('#planetSelect :selected').val();

        //     // 4. Calculate the users weight and store in a variable called userWeight.
        //     // Hint: use the * operator
        var newWeight = userWeight * planetMultiplier;

        //     // 5. Set the text of your output element to be the value of the planetWeight variable.
        //     // Hint: use the `.text` function.
        $('.answer').text("If you were on " + planetName + "," + " you would weight " + newWeight.toFixed(2) + "lbs!");
    });
$('.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g,'');
})

});