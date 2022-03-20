var dateInput = "";
function storeDate() {
    dateInput = document.getElementById('entryDate').value; // stored in date (prints 2022-03-23)
    console.log(dateInput);
}

var userName = ""; // stores the user's name (for results page)
function storeName() {
    userName = document.getElementById('nameInput').value;
    console.log(userName);
}

var moodResult = "";
function storeMood() {
    let moodList = document.getElementsByName('mood'); //selects all radio btns w name 'mood'
    for (i = 0; i < moodList.length; i++) {
        if (moodList[i].checked)
            moodResult = moodList[i].value; // stores their response in moodResult
            console.log(moodResult); // to test
            document.getElementById("moodResult").innerHTML = moodResult;

            
    }
}

var oneSentInput = "";
function storeOneSentence() {
    oneSentInput = document.getElementById('oneSent').value;
    console.log(oneSentInput);
}

function displayMood() {
    var MoodList = document.getElementsByName('mood'); //selects all radio btns w name 'mood'
    for (i = 0; i < MoodList.length; i++) {
        if (moodList[i].checked)
            var MoodResult = MoodList[i].value; // stores their response in moodResult
            console.log(MoodResult); // to test
    document.getElementById('moodResult').innerHTML = MoodResult;
}

//var moodResult = "";
//function DisplayMood() {
   // let moodList = document.getElementsByName('mood'); //selects all radio btns w name 'mood'
    //for (i = 0; i < moodList.length; i++) {
       // if (moodList[i].checked)
           // moodResult = moodList[i].value; // stores their response in moodResult
           // console.log(moodResult); // to test
           // document.getElementById("moodResult").innerHTML = moodResult;
            
   // }
//}


//function displayMood() { // don't need this, only once we want to display (the last line)
    var moodList = document.getElementsByName('mood');

   // for (i = 0; i < moodList.length; i++) {
       // if (moodList[i].checked)
        //var moodResult = moodList[i].value; // stores their response in moodResult
        //console.log(moodResult);
    //document.getElementById("moodResult").innerHTML = moodResult; // prints out moodResult by replacing <div id="moodResult"></div>
//}
//}

function testGrateful() { // don't need this anymore
    const gratefulArr = [];
    var answers = document.getElementsByName("grateful").value;
    gratefulArr.push(answers);
    console.log(gratefulArr);
    document.getElementById("gratefulResult").innerHTML = gratefulArr.toString(); 
}

var gratefulArray = [];
function storeGrateful() { 
    var gratefulInput = document.getElementsByName("grateful");
    for (i = 0; i < gratefulInput.length; i++) {
        gratefulArray.push(gratefulInput[i].value); // stores result in gratefulArray: [grateful1,grateful2,grateful3]
    };

    console.log(gratefulArray); // can access gratefulArray later, 3 inputs will be stored starting from gratefulArray[0]
    // document.getElementById("gratefulResult").innerHTML = gratefulArray.toString(); // replaces gratefulResult in HTML file
}

var smileInput = "";
function storeSmile() {
    smileInput = document.getElementById('smile').value;
    console.log(smileInput);
}

var accomplishInput = "";
function storeAccomplish() {
    accomplishInput = document.getElementById('accomplish').value;
    console.log(accomplishInput);
}

function storeEntryInfo() { // stores all info from entry form, calls each function
    storeDate();
    storeName();
    storeMood();
    storeOneSentence();
    storeGrateful();
    storeSmile();
    storeAccomplish();
}


function printGreeting() {
    let greeting = userName.concat("'s Reflection of the Day");
    document.getElementById('resultsGreeting').innerHTML = greeting;


}

function insertName() {
    document.getElementById('insName').innerHTML = userName;
}

    
    
}
