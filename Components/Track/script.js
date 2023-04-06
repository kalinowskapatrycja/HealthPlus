function addMeal() {
  var foodName = document.getElementById("foodName").value;
  var calories = parseInt(document.getElementById("calories").value);
  document.getElementById("caloriesConsumed").innerHTML = parseInt(document.getElementById("caloriesConsumed").innerHTML) + calories;
  document.getElementById("netCalories").innerHTML = parseInt(document.getElementById("caloriesConsumed").innerHTML) - parseInt(document.getElementById("caloriesBurned").innerHTML);
}

function trackExercise() {
  var exerciseType = document.getElementById("exerciseType").value;
  var duration = parseInt(document.getElementById("duration").value);
  var caloriesBurned = duration * 7; // Assuming 7 calories burned per minute at moderate intensity
  document.getElementById("caloriesBurned").innerHTML = parseInt(document.getElementById("caloriesBurned").innerHTML) + caloriesBurned;
  document.getElementById("netCalories").innerHTML = parseInt(document.getElementById("caloriesConsumed").innerHTML) - parseInt(document.getElementById("caloriesBurned").innerHTML);
}

document.getElementById("calculateBtn").addEventListener("click", calculateCalories);

function calculateCalories() {
  const gender = document.getElementById("gender").value;
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  let calories;
  if (gender === "male") {
    calories = (88.4 + 13.4 * weight) + (4.8 * height) - (5.68 * age);
  } else {
    calories = (447.6 + 9.25 * weight) + (3.10 * height) - (4.33 * age);
  }

  const goal = prompt("What is your goal? (lose/maintain/gain)");
    let message;
    if (goal === "lose") {
      message = "You should eat 200 calories less than your maintenance value.";
    } else if (goal === "maintain") {
      message = "You should eat your maintenance value.";
    } else if (goal === "gain") {
      message = "You should eat 200 calories above your maintenance value.";
    } else {
      message = "Invalid goal.";
    }

    document.getElementById("result").innerHTML = "Your maintenance daily calorie intake is: " + calories.toFixed(2) + " calories. " + message;

  document.getElementById("calculateBtn").addEventListener("click", calculateCalories);


}
