function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        // 顯示用戶的輸入訊息
        displayMessage(userInput, 'user');

        // 顯示回復訊息
        setTimeout(() => {
            displayMessage('這是測試用網頁', 'bot');
        }, 500);

        // 清空輸入框
        document.getElementById('user-input').value = '';
    }
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // 滾動到最新的消息
    chatBox.scrollTop = chatBox.scrollHeight;
}
