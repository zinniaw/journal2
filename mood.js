function displayRadioValue() {
    var result = document.getElementsByName('mood');

    for (i = 0; i < result.length; i++) {
        if (result[i].checked)
        var moodResult = result[i].value;
        console.log(moodResult);
        document.getElementById("moodResult").innerHTML = moodResult;
    }
}