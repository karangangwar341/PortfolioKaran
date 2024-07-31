import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null); // State for error message

  const handleQuerySubmit = async () => {
    setError(null); // Clear previous errors
    try {
      const res = await axios.post('https://api.gemini.com/v1/query', {
        query: query,
        // Add any additional parameters required by the API here
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer AIzaSyC8LNiKqKBlcekwmmQSTMFWQKdNCcChcBU`,
        }
      });
      setResponse(res.data.answer);
    } catch (err) {
      console.error('Error querying Gemini API:', err);
      setError('An error occurred. Please try again later.'); // Set error message
    }
  };
  return (
    <>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(true)}
      >
        Chat
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto relative">
            <button
              className="absolute top-4 right-4 text-gray-600"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <h2 className="text-2xl mb-4">AI Chatbot</h2>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask something..."
              className="w-full p-2 mb-4 border rounded"
            />
            <button
              onClick={handleQuerySubmit}
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Ask
            </button>
            <div className="mt-4">
              <h3 className="text-xl">Response:</h3>
              <p>{response}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
