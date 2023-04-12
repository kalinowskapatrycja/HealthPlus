const moodForm = document.getElementById("mood-tracking");

moodForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const mentalHealth = document.getElementById("mental-health").value;
    const stressLevel = document.getElementById("stress-level").value;
    const sleepQuality = document.getElementById("sleep-quality").value;

    sessionStorage.setItem("currentMood", mentalHealth);
    sessionStorage.setItem("stressLevel", stressLevel);
    sessionStorage.setItem("sleepQuality", sleepQuality);

    moodForm.submit();
});
