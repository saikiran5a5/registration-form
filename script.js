const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventSelect = document.getElementById("event");
    const eventName = eventSelect.options[eventSelect.selectedIndex].text;
    const participants = document.getElementById("participants").value;

    if (name === "" || email === "" || phone === "") {
        message.style.color = "red";
        message.textContent = "Please fill in all the required fields.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        `Thank you, ${name}! You registered for ${eventName} with ${participants} participant(s).`;

    form.reset();
});