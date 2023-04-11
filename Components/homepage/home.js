var data = window.location.search;
var params = new URLSearchParams(data);
console.log(params);

var currentMood = params.get("mental-health");
var stressLevel = params.get("stress-level");
var sleepQuality = params.get("sleep-quality");
var caloriesConsumed = params.get('caloriesConsumed');
var caloriesBurned = params.get('caloriesBurned');
var netCalories = params.get('netCalories');
    
if (currentMood === null && stressLevel === null && sleepQuality === null) {
    currentMood = 'Tracker Incomplete';
    stressLevel = 'Tracker Incomplete';
    sleepQuality = 'Tracker Incomplete';
  }

  if (caloriesConsumed === null && caloriesBurned === null && netCalories === null) {
    caloriesConsumed = 'Tracker Incomplete';
    caloriesBurned = 'Tracker Incomplete';
    netCalories = 'Tracker Incomplete';
}


var printInfo = "Track Summary"+"<br>";
printInfo += "Current Mood: "+currentMood+"<br>";
printInfo += "Stress Level: "+stressLevel+"<br>";
printInfo += "Sleep Quality: "+sleepQuality+"<br>";
printInfo += "Calories Consumed: "+caloriesConsumed+"<br>";
printInfo += "Calories Burned: "+caloriesBurned+"<br>";
printInfo += "Net Calories: "+netCalories+"<br>";
document.getElementById("trackinfo").innerHTML = printInfo;
