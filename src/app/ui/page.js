// app/send-messages/page.js

'use client';

import { useState } from 'react';

export default function SendMessagesPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const sendMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/sendMessages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error(error);
      alert('Error sending messages');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Send Telegram Messages</h1>

      <textarea className=' bg-transparent w-full' type="text" name="message" id="message" onChange={(e)=>setMessage(e.target.value)} />
        <br />
      <button onClick={sendMessages} disabled={loading}>
        {loading ? 'Sending...' : 'Send Messages'}
      </button>
    </div>
  );
}
