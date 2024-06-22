import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(15);
  const [message, setMessage] = useState('');

  const addValue = () => {
    if (counter >= 0 && counter <= 16) {
      // Increment counter by 4
      setCounter(prevCounter => prevCounter + 4);
      const addMessage = `Value added: ${counter + 4}`;
      setMessage(addMessage);
      console.log(addMessage);
    } else {
      const addMessage = "Counter is out of the allowed range (0-20).";
      setMessage(addMessage);
      console.log(addMessage);
    }
  };

  const removeValue = () => {
    if (counter > 0 && counter <= 20) {
      setCounter(prevCounter => prevCounter - 1);
      const removeMessage = `Value removed: ${counter - 1}`;
      setMessage(removeMessage);
      console.log(removeMessage);
    } else {
      const removeMessage = "Counter is out of the allowed range (0-20).";
      setMessage(removeMessage);
      console.log(removeMessage);
    }
  };

  return (
    <>
      <div className='bg-green-400 text-green-900 h-screen w-full flex justify-center items-center'>
        <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
          <h1 className='text-2xl font-bold mb-4'>Counter Value Project</h1>
          <h2 className='text-xl mb-4'>Counter value: {counter}</h2>
          <button 
            className='bg-blue-500 text-white px-4 py-2 rounded mb-2 mr-2'
            onClick={addValue}
          >
            Add Value
          </button>
          <button 
            className='bg-red-500 text-white px-4 py-2 rounded mb-2'
            onClick={removeValue}
          >
            Remove Value
          </button>
          <p className='mt-4'>{message}</p>
        </div>
      </div>
    </>
  );
}

export default App;
