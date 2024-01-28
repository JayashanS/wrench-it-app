// Import React and useState
import React, { useState } from 'react';

// Import the CSS file
import '../styles/MessageBox.css';

// Define the Chatbox component
const Chatbox = () => {
  // State for messages and new message input
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  // Handle sending a message
  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');

      // Simulate a reply only if the user's message contains a specific keyword
      if (newMessage.toLowerCase().includes('hello')) {
        setTimeout(() => {
          setMessages([...messages, { text: 'This is a reply!', sender: 'bot' }]);
        }, 1000);
      }
    }
  };

  // Render the Chatbox component
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

// Define the MessageBox component
function MessageBox() {
  // Render the MessageBox component
  return (
    <div className="message-box-container">
      <Chatbox />
    </div>
  );
}

// Export the MessageBox component
export default MessageBox;
