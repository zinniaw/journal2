function storeMood() { //don't need the button 'submit mood' immediatly after the radio buttons, we can instead call all the functions to collect their data at the click of one button at the end of the page
    var moodList = document.getElementsByName('mood'); //all radio btns w name 'mood'

    for (i = 0; i < moodList.length; i++) {
        if (moodList[i].checked)
        var moodResult = moodList[i].value; // stores their response in moodResult
        console.log(moodResult); // to test
        
    }
}

function displayMood() {
    var moodList = document.getElementsByName('mood');

    for (i = 0; i < moodList.length; i++) {
        if (moodList[i].checked)
        var moodResult = moodList[i].value; // stores their response in moodResult
        console.log(moodResult);
    document.getElementById("moodResult").innerHTML = moodResult; // prints out moodResult by replacing <div id="moodResult"></div>
}
}



function storeGrateful() {
    const gratefulArray = [];
    var gratefulAnswers = document.getElementsByName("grateful").value;
    gratefulArray.push(gratefulAnswers);
    for (i = 0; i < gratefulArray.length; i++) {
        console.log(gratefulArray[i]);
    };

    console.log(gratefulArray);
}
    

document.getElementsById("gratefulResult").innerHTML = gratefulArray.toString(); // replaces grateFul result in HTML file

    //for (i = 0; i < gratefulList.length; i++) {
        
    

