import React, { useState } from 'react';
import '../styles/MessageBox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
      // Simulate a reply from another participant (e.g., bot)
      setTimeout(() => {
        setMessages([...messages, { text: 'This is a reply!', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Send quick response..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button className="m-button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

function MessageBox() {
  return (
    <div className="App">
      <Chatbox />
    </div>
  );
}

export default MessageBox;
