const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const eventName = document.getElementById("event").value;

    message.textContent =
        `Thank you, ${name}! You have successfully registered for the event.`;

    form.reset();
});