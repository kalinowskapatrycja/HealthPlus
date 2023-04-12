var caloriesConsumed = sessionStorage.getItem("caloriesConsumed");
var caloriesBurned = sessionStorage.getItem("caloriesBurned");
var netCalories = sessionStorage.getItem("netCalories");

var currentMood = sessionStorage.getItem("currentMood");
var stressLevel = sessionStorage.getItem("stressLevel");
var sleepQuality = sessionStorage.getItem("sleepQuality");

    
if (currentMood === null && stressLevel === null && sleepQuality === null) {
    currentMood = "Tracker Incomplete";
    stressLevel = "Tracker Incomplete";
    sleepQuality = "Tracker Incomplete<br>";
  }

  if (caloriesConsumed === null && caloriesBurned === null && netCalories === null) {
    caloriesConsumed = "Tracker Incomplete";
    caloriesBurned = "Tracker Incomplete";
    netCalories = "Tracker Incomplete";
}


var printInfo = "<h3>Track Summary</h3><br>";
printInfo += "<b>Current Mood:</b> "+currentMood+"<br>";
printInfo += "<b>Stress Level:</b> "+stressLevel+"<br>";
printInfo += "<b>Sleep Quality:</b> "+sleepQuality+"<br>";
printInfo += "<b>Calories Consumed:</b> "+caloriesConsumed+"<br>";
printInfo += "<b>Calories Burned:</b> "+caloriesBurned+"<br>";
printInfo += "<b>Net Calories:</b> "+netCalories+"<br>";

document.getElementById("trackinfo").innerHTML = printInfo;
