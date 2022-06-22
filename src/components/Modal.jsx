import { useRef, useEffect } from 'react';
export default function Modal({ setIsOpen }) {
  const ref = useRef();

  useEffect(() => {
    const handleCheck = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleCheck, true);
    return () => {
      document.removeEventListener('click', handleCheck, true);
    };
  });

  return (
    <div className='popup-wrapper'>
      <div className='popup-container' ref={ref}>
        <h3 className='popup-message'>Hey, there!</h3>
        <button className='btn popup-btn' onClick={() => setIsOpen(false)}>
          close
        </button>
      </div>
    </div>
  );
}
