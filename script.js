const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.querySelector(".subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Email regex pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Phone regex (basic international format)
    const phonePattern = /^[0-9]{10,15}$/;

    // Validation
    if (name === "" || email === "" || phone === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!phone.match(phonePattern)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return;
    }

    // Save to localStorage
    const contactData = {
        name,
        email,
        phone,
        subject,
        message,
        date: new Date().toLocaleString()
    };

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(contactData);
    localStorage.setItem("messages", JSON.stringify(messages));

    alert("Message sent successfully!");

    form.reset();
});