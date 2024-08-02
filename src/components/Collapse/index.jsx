import { useState } from 'react';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='collapse__item'>
      <div className="collapse__item-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img src={isOpen ? process.env.PUBLIC_URL + "/images/arrowUp.png" : process.env.PUBLIC_URL + "/images/arrowDown.png"} alt="Flèche bass/haut" />
      </div>
      {isOpen && ( 
        <div className="collapse__item-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapse;