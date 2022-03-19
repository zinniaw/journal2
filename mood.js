function storeMood() { //don't need the button 'submit mood' immediatly after the radio buttons, we can instead call all the functions to collect their data at the click of one button at the end of the page
    var moodList = document.getElementsByName('mood'); //selects all radio btns w name 'mood'

    for (i = 0; i < moodList.length; i++) {
        if (moodList[i].checked)
            var moodResult = moodList[i].value; // stores their response in moodResult
            console.log(moodResult); // to test
        
    }
}

function displayMood() { // don't need this, only once we want to display (the last line)
    var moodList = document.getElementsByName('mood');

    for (i = 0; i < moodList.length; i++) {
        if (moodList[i].checked)
        var moodResult = moodList[i].value; // stores their response in moodResult
        console.log(moodResult);
    document.getElementById("moodResult").innerHTML = moodResult; // prints out moodResult by replacing <div id="moodResult"></div>
}
}
function testGrateful() { // don't need this anymore
    const gratefulArr = [];
    var answers = document.getElementsByName("grateful").value;
    gratefulArr.push(answers);
    console.log(gratefulArr);
    document.getElementById("gratefulResult").innerHTML = gratefulArr.toString(); 
}


function storeGrateful() { 
    const gratefulArray = [];
    var gratefulInput = document.getElementsByName("grateful");
    for (i = 0; i < gratefulInput.length; i++) {
        gratefulArray.push(gratefulInput[i].value); // stores result in gratefulArray: [grateful1,grateful2,grateful3]
    };

    console.log(gratefulArray); // can access gratefulArray later, 3 inputs will be stored starting from gratefulArray[0]
    // document.getElementById("gratefulResult").innerHTML = gratefulArray.toString(); // replaces gratefulResult in HTML file
}

function storeEntryInfo() { // stores all info from entry form, calls each function
    storeMood();
    storeGrateful();
    
}
    
const allEntriesArray = [];

function addEntry() {

}
    

