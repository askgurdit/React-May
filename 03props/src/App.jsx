import React, { useState } from 'react';
import Card from './components/Card.jsx';

function App() {
  const [Count , setCount] = useState(0)

 /* let myObj = {
  username : "hitesh",
  age : 21
}*/

  return (
    <>
      <div className='bg-green-400 text-green-900 h-screen w-full flex justify-center items-center'>
        <Card username = "Chaiaurcode"  btnText = "Click me"/>
        <Card username = "hitesh" btnText = "Visit me"/>
      </div>
    </>
  );
}

export default App;
