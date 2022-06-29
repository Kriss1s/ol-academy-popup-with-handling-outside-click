import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='app'>
      <button className='btn' onClick={() => setIsOpen(true)}>
        PopUp
      </button>
      {isOpen ? <Modal setIsOpen={setIsOpen} /> : <></>}
    </div>
  );
}

export default App;
