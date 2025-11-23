let chatBox = document.getElementById("chatBox");
let userInput = document.getElementById("userInput");
let sendBtn = document.getElementById("sendBtn");

// Predefined bot replies
const replies = {
    greetings: ["Hello! 😊", "Hi there!", "Nice to meet you!", "Hey! How can I help?"],
    motivation: [
        "Keep pushing, you're doing great! 💪",
        "Small steps every day lead to big results.",
        "Believe in yourself!",
        "Consistency beats talent."
    ],
    jokes: [
        "Why don’t programmers like nature? It has too many bugs 🐛",
        "I told my code a joke… but it didn’t get the reference 😂",
        "Why was the computer cold? It forgot to close Windows!"
    ],
    advice: [
        "Stay focused on your goals.",
        "Take breaks — your mind needs rest too.",
        "Work smarter, not harder.",
        "Avoid overthinking — start doing."
    ]
};

// Send user message
function sendMessage() {
    if (userInput.value.trim() === "") return;

    addMessage(userInput.value, "user");
    botReply(userInput.value.toLowerCase());

    userInput.value = "";
}

// Add message bubbles
function addMessage(text, type) {
    let msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Simulated bot reply with typing delay
function botReply(input) {
    setTimeout(() => {
        if (input.includes("hello") || input.includes("hi")) {
            addMessage(random(replies.greetings), "bot");
        } else if (input.includes("motivate")) {
            addMessage(random(replies.motivation), "bot");
        } else if (input.includes("joke")) {
            addMessage(random(replies.jokes), "bot");
        } else if (input.includes("advice")) {
            addMessage(random(replies.advice), "bot");
        } else {
            addMessage("I’m not sure about that, but I'm learning! 🤖", "bot");
        }
    }, 500);
}

// Helper: random array item
function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});
