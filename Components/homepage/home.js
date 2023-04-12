var caloriesConsumed = sessionStorage.getItem("caloriesConsumed");
var caloriesBurned = sessionStorage.getItem("caloriesBurned");
var netCalories = sessionStorage.getItem("netCalories");

var currentMood = sessionStorage.getItem("currentMood");
var stressLevel = sessionStorage.getItem("stressLevel");
var sleepQuality = sessionStorage.getItem("sleepQuality");

    
if (currentMood === null && stressLevel === null && sleepQuality === null) {
    currentMood = "Tracker Incomplete";
    stressLevel = "Tracker Incomplete";
    sleepQuality = "Tracker Incomplete";
  }

  if (caloriesConsumed === null && caloriesBurned === null && netCalories === null) {
    caloriesConsumed = "Tracker Incomplete";
    caloriesBurned = "Tracker Incomplete";
    netCalories = "Tracker Incomplete";
}


var printInfo = "Track Summary"+"<br>";
printInfo += "Current Mood: "+currentMood+"<br>";
printInfo += "Stress Level: "+stressLevel+"<br>";
printInfo += "Sleep Quality: "+sleepQuality+"<br>";
printInfo += "Calories Consumed: "+caloriesConsumed+"<br>";
printInfo += "Calories Burned: "+caloriesBurned+"<br>";
printInfo += "Net Calories: "+netCalories+"<br>";

document.getElementById("trackinfo").innerHTML = printInfo;