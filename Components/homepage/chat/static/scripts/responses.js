function getBotResponse(input) {
    if (input.includes("happy")) {
        return "That's great!";
    } else if (input.includes("sad")) {
        return "What made you upset?";
    } else if (input.includes("excited")) {
        return "Yay! Tell me more!";
    } else if (input.includes("hello")) {
        return "Hello there! How are you doing?";
    } else if (input.includes("goodbye")) {
        return "Talk to you later!";
    } else if (input.includes("bye")) {
        return "Talk to you later!";
    } else if (input.includes("Heart")) {
        return "Thanks!";
    } else {
        return "Can you re-word that?";
    }
}