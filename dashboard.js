// ----- Greeting -----
function setGreeting() {
    let hour = new Date().getHours();
    let greet = "Hello";

    if (hour < 12) greet = "Good Morning ☀️";
    else if (hour < 18) greet = "Good Afternoon 🌤️";
    else greet = "Good Evening 🌙";

    document.getElementById("greetText").innerText = greet;
}
setGreeting();

// ----- Quote of the Day -----
const quotes = [
    "Success is a series of small wins.",
    "Stay focused and never give up.",
    "Your future is created by what you do today.",
    "Believe you can and you’re halfway there.",
    "Discipline is choosing what you want most."
];

document.getElementById("quoteText").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];

// ----- Tasks Section -----
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

document.getElementById("addTaskBtn").onclick = () => {
    if (taskInput.value.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button class="removeBtn">X</button>`;

    taskList.appendChild(li);

    taskInput.value = "";

    li.querySelector(".removeBtn").onclick = () => li.remove();
};

// ----- Mood Section -----
const moodSpans = document.querySelectorAll(".mood");
const currentMood = document.getElementById("currentMood");

moodSpans.forEach(m => {
    m.onclick = () => {
        currentMood.innerText = m.dataset.mood;
    };
});
