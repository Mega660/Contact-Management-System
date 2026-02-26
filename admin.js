const container = document.getElementById("messageContainer");
const clearBtn = document.getElementById("clearAll");

// Load messages from localStorage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    container.innerHTML = "";

    if (messages.length === 0) {
        container.innerHTML = "<p>No messages found.</p>";
        return;
    }

    messages.forEach((msg, index) => {
        const card = document.createElement("div");
        card.classList.add("message-card");

        card.innerHTML = `
            <h3>${msg.name}</h3>
            <p><strong>Email:</strong> ${msg.email}</p>
            <p><strong>Phone:</strong> ${msg.phone}</p>
            <p><strong>Subject:</strong> ${msg.subject}</p>
            <p><strong>Message:</strong> ${msg.message}</p>
            <small>${msg.date}</small><br>
            <button onclick="deleteMessage(${index})">Delete</button>
        `;

        container.appendChild(card);
    });
}

// Delete single message
function deleteMessage(index) {
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.splice(index, 1);
    localStorage.setItem("messages", JSON.stringify(messages));
    loadMessages();
}

// Clear all messages
clearBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all messages?")) {
        localStorage.removeItem("messages");
        loadMessages();
    }
});

console.log("Admin loaded");

const testMessages = JSON.parse(localStorage.getItem("messages"));
console.log(testMessages);

loadMessages();