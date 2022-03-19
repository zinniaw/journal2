function storeMood() { //don't need the button 'submit mood' immediatly after the radio buttons, we can instead call all the functions to collect their data at the click of one button at the end of the page
    var result = document.getElementsByName('mood'); //all radio btns w name 'mood'

    for (i = 0; i < result.length; i++) {
        if (result[i].checked)
        var moodResult = result[i].value; // stores their response in moodResult
        console.log(moodResult); // to test
        
    }
}

function displayMood() {
    var result = document.getElementsByName('mood');

    for (i = 0; i < result.length; i++) {
        if (result[i].checked)
        var moodResult = result[i].value; // stores their response in moodResult
        console.log(moodResult);
    document.getElementById("moodResult").innerHTML = moodResult; // prints out moodResult by replacing <div id="moodResult"></div>
}
}
