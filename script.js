const messages = [
    "HUHHHHH?",
    "ARE YOU SUREEEE??",
    "ARE YOU VERY SUREEE?",
    "ARE YOU VERY VERY SUREEE",
    "ARE YOU HIGH OR SMTH",
    "YOU DONT MEAN IT RIGHT?",
    "IF YOU SAY NO I WILL CRY FOR WEEKS",
    "I WILL BE VERY VERY SAD AND BE DEPRESSED FOREVER",
    "ok ill stop asking",
    "ILIED I AM NOT STOPPING PLEASE SAY YES BABYYY"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}