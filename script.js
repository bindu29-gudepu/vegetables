function sendMessage() {
    const input = document.getElementById("userInput");
    const chatArea = document.getElementById("chatArea");
    const message = input.value.toLowerCase();

    if (message === "") return;

    // User message
    chatArea.innerHTML += `<p class="user">👤 You: ${input.value}</p>`;

    // Bot response
    let reply = "";

    if (message.includes("vegetables")) {
        reply = `
🥕 Carrot - ₹40/kg<br>
🥔 Potato - ₹30/kg<br>
🍅 Tomato - ₹25/kg<br>
🥬 Spinach - ₹20/bunch<br>
🥦 Cabbage - ₹35/kg<br>
🧅 Onion - ₹28/kg<br>
🧄 Garlic - ₹120/kg
        `;
    } else {
        reply = "❌ Please type <b>vegetables</b> to see prices";
    }

    chatArea.innerHTML += `<p class="bot">🤖 Bot: ${reply}</p>`;
    chatArea.scrollTop = chatArea.scrollHeight;
    input.value = "";
}
