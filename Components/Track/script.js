function addMeal() {
  var foodName = document.getElementById("foodName").value;
  var calories = parseInt(document.getElementById("calories").value);
  if (isNaN(calories) || calories < 0) {
    alert("Please enter a valid number of calories.");
    return;
  }
  document.getElementById("caloriesConsumed").innerHTML = parseInt(document.getElementById("caloriesConsumed").innerHTML) + calories;
  document.getElementById("netCalories").innerHTML = parseInt(document.getElementById("caloriesConsumed").innerHTML) - parseInt(document.getElementById("caloriesBurned").innerHTML);
}

function trackExercise() {
  var exerciseType = document.getElementById("exerciseType").value;
  var duration = parseInt(document.getElementById("duration").value);
  var intensity = document.getElementById("intensity").value;
  var caloriesPerMinute;

  switch (intensity) {
    case "low":
      caloriesPerMinute = 5;
      break;
    case "moderate":
      caloriesPerMinute = 7;
      break;
    case "high":
      caloriesPerMinute = 9;
      break;
    default:
      caloriesPerMinute = 0;
  }

  var caloriesBurned = duration * caloriesPerMinute;
  if (isNaN(caloriesBurned) || caloriesBurned < 0) {
    alert("Please enter a valid duration and intensity.");
    return;
  }
  document.getElementById("caloriesBurned").innerHTML = parseInt(document.getElementById("caloriesBurned").innerHTML) + caloriesBurned;
  document.getElementById("netCalories").innerHTML = parseInt(document.getElementById("caloriesConsumed").innerHTML) - parseInt(document.getElementById("caloriesBurned").innerHTML);
}

document.getElementById("calculateBtn").addEventListener("click", calculateCalories);

function calculateCalories() {
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);

  if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
    alert("Please enter a valid age, height, and weight.");
    return;
  }

  let calories;
  if (gender === "male") {
    calories = (88.4 + 13.4 * weight) + (4.8 * height) - (5.68 * age);
  } else {
    calories = (447.6 + 9.25 * weight) + (3.10 * height) - (4.33 * age);
  }

  calories *= 1.375; 
  // assuming moderate activity saf which is multiplied with bmr will be 1.375

  const goal = document.getElementById("goal").value;
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
}

function updateTracker() {
  var caloriesConsumed = document.getElementById("caloriesConsumed").textContent;
  var caloriesBurned = document.getElementById("caloriesBurned").textContent;
  var netCalories = document.getElementById("netCalories").textContent;

  var url = "../homepage/home.html" + "?caloriesConsumed=" + caloriesConsumed + "&caloriesBurned=" + caloriesBurned + "&netCalories=" + netCalories;
  window.location.href = url;
}
